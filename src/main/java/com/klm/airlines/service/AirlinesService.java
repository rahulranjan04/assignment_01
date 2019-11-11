package com.klm.airlines.service;

import java.io.IOException;

public interface AirlinesService {

	public String getService(String urlGet) throws IOException;
	
	public String getfare(String urlGet);

}
