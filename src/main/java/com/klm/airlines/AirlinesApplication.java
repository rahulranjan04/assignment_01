package com.klm.airlines;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Configuration
@EnableOAuth2Client
@EnableWebMvc
@ComponentScan("com.klm*")
public class AirlinesApplication extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {

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
		resourceDetails.setClientId("travel-api-client");
		resourceDetails.setClientSecret("psw");
		resourceDetails.setGrantType("client_credentials");
		resourceDetails.setTokenName("access_token");
		resourceDetails.setAccessTokenUri("http://localhost:8080/oauth/token");
		return new OAuth2RestTemplate(resourceDetails);
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedMethods("GET", "POST").allowedOrigins("http://localhost:4200");
	}

}
