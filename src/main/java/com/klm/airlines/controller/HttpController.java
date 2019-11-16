package com.klm.airlines.controller;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.klm.airlines.service.AirlinesServiceImpl;

@Controller
public class HttpController implements ErrorController {

	public static Map<String, Integer> resultsHtpp = new HashMap<String, Integer>();

	private Integer httpCounter500 = 0;
	private Integer httpCounter400 = 0;
	private Integer totalRequest = 0;
	private Integer averageResponseTime = 0;
	private Integer minResponseTime = 0;
	private Integer maxResponseTime = 0;
	private Integer httpCounter200 = 0;

	@RequestMapping(value = "/error", method = RequestMethod.GET, produces = "application/json")
	public String handleError(HttpServletRequest request) {
		Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
		if (status.toString().startsWith("5"))
			httpCounter500++;
		else if (status.toString().startsWith("4"))
			httpCounter400++;
		return "index";
	}

	@ResponseBody
	@RequestMapping(value = "/airlines/httpstatus", method = RequestMethod.GET, produces = "application/json")
	public Map<String, Integer> handleErrorStatus(HttpServletRequest request) {

		httpCounter200 = resultsHtpp.get("OK");
		Integer responseTime = 0;

		for (Map.Entry<String, Integer> entry : AirlinesServiceImpl.resultsHtppResponse.entrySet()) {
			responseTime += entry.getValue();
		}

		if ((responseTime != null && httpCounter200 != null)) {
			if (httpCounter200 != 0) {
				averageResponseTime = (int) responseTime / (int) httpCounter200;
			}
		}
		if (httpCounter200 != null)
			totalRequest = httpCounter500 + httpCounter400 + httpCounter200;

		if (httpCounter200 != null) {
			minResponseTime = AirlinesServiceImpl.resultsHtppResponse.entrySet().stream()
					.min(Comparator.comparingDouble(Map.Entry::getValue)).map(Map.Entry::getValue).get();

			maxResponseTime = AirlinesServiceImpl.resultsHtppResponse.entrySet().stream()
					.max(Comparator.comparingDouble(Map.Entry::getValue)).map(Map.Entry::getValue).get();
		}

		if (httpCounter200 == null)
			httpCounter200 = 0;

		resultsHtpp.put("totalNumberOfRequest", totalRequest);
		resultsHtpp.put("okResponse", httpCounter200);
		resultsHtpp.put("fiveResponse", httpCounter500);
		resultsHtpp.put("fourResponse", httpCounter400);
		resultsHtpp.put("avgResponse", averageResponseTime);
		resultsHtpp.put("minResponse", minResponseTime);
		resultsHtpp.put("maxResponse", maxResponseTime);
		return resultsHtpp;
	}

	@Override
	public String getErrorPath() {
		return "/error";
	}
}