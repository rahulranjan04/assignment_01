package com.klm.airlines.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.klm.airlines.controller.AirlinesController;

@Service
public class AirlinesServiceImpl implements AirlinesService {

	private Integer counter = 0;

	@Value("${api.url}")
	private String url = "";

	@Autowired
	private OAuth2RestOperations restOperations;

	public String Converter(String data) throws IOException {
		ObjectMapper om = new ObjectMapper();
		om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		JsonNode jsNode = om.readTree(data);
		String results = jsNode.at("/_embedded").toString();
		return results;
	}

	public String getService(String urlGet) {
	
		String results = "";
		ResponseEntity<String> responseEntity = null;
		try {
			responseEntity = restOperations.getForEntity(urlGet, String.class);
			AirlinesController.resultsHtpp.put(responseEntity.getStatusCode().name(), counter++);
			results = Converter(responseEntity.getBody());
		} catch (IOException e) {
			AirlinesController.resultsHtpp.put(responseEntity.getStatusCode().name(), counter++);
			e.printStackTrace();
		}
		return results;
	}

}
