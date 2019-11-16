package com.klm.airlines;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

@SpringBootApplication
@Configuration
@EnableOAuth2Client
public class AirlinesApplication extends WebSecurityConfigurerAdapter {

	@Value("${oauth.clientId}")
	private String clientId = "";

	@Value("${oauth.clientSecret}")
	private String clientSecret = "";

	@Value("${oauth.accessTokenUri}")
	private String accessTokenUri = "";

	@Value("${oauth.tokenName}")
	private String tokenName = "";

	@Value("${oauth.grant-type}")
	private String grantType = "";

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.authorizeRequests().antMatchers("/").permitAll();

	}

	public static void main(String[] args) {
		SpringApplication.run(AirlinesApplication.class, args);
	}

	@Bean
	public OAuth2RestTemplate oauth2RestTemplate() {

		final ClientCredentialsResourceDetails resourceDetails = new ClientCredentialsResourceDetails();
		resourceDetails.setClientId(clientId);
		resourceDetails.setClientSecret(clientSecret);
		resourceDetails.setGrantType(grantType);
		resourceDetails.setTokenName(tokenName);
		resourceDetails.setAccessTokenUri(accessTokenUri);
		return new OAuth2RestTemplate(resourceDetails);
	}

}
