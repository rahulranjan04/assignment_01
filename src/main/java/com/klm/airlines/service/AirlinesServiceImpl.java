package com.klm.airlines.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.stereotype.Service;
import org.springframework.util.StopWatch;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.klm.airlines.controller.HttpController;

@Service
public class AirlinesServiceImpl implements AirlinesService {

	public static Map<String, Integer> resultsHtppResponse = new HashMap<String, Integer>();

	private Integer counter = 1;

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

	public String getService(String urlGet) throws IOException {

		StopWatch stopWatch = new StopWatch();
		stopWatch.start();

		ResponseEntity<String> responseEntity = restOperations.getForEntity(urlGet, String.class);
		HttpController.resultsHtpp.put(responseEntity.getStatusCode().name(), counter++);
		stopWatch.stop();
		resultsHtppResponse.put("Time_Taken_" + counter, (int) stopWatch.getTotalTimeMillis());
		return Converter(responseEntity.getBody());
	}

	public String getfare(String urlGet) {

		StopWatch stopWatch = new StopWatch();
		stopWatch.start();

		ResponseEntity<String> responseEntity = restOperations.getForEntity(urlGet, String.class);
		stopWatch.stop();
		resultsHtppResponse.put("Time_Taken_" + counter, (int) stopWatch.getTotalTimeMillis());
		HttpController.resultsHtpp.put(responseEntity.getStatusCode().name(), counter++);
		return (responseEntity.getBody());
	}

}
