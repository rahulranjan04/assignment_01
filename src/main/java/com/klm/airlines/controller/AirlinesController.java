package com.klm.airlines.controller;

import java.util.concurrent.Callable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klm.airlines.service.AirlinesService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping(value = "/airlines")
public class AirlinesController {

	@Value("${api.url}")
	private String url = "";

	@Autowired
	private AirlinesService airlinesService;

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = "application/json")
	public Callable<String> geAll(@RequestParam String page) {

		String urlGet = url + "/airports?page=" + page;
		return () -> airlinesService.getService(urlGet);
	}

	@RequestMapping(value = "/fare/{origin}/{destination}", method = RequestMethod.GET, produces = "application/json")
	public Callable<String> getFare(@PathVariable("origin") String origin,
			@PathVariable("destination") String destination) {

		String urlGet = url + "/fares/" + origin + "/" + destination;
		return () -> airlinesService.getfare(urlGet.trim());
	}

	@RequestMapping(value = "/fare/{code}", method = RequestMethod.GET, produces = "application/json")
	public Callable<String> getAirports(@PathVariable("code") String code) {

		String urlGet = url + "/airports/" + code;
		return () -> airlinesService.getfare(urlGet);
	}

	@RequestMapping(value = "/search", method = RequestMethod.GET, produces = "application/json")
	public Callable<String> getSearch(@RequestParam String term) {

		String urlGet = url + "/airports?term=" + term;
		return () -> airlinesService.getService(urlGet);
	}
}