package com.projekt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//Sama adnotacja springBoot
/*
* Controller -> Service -> ServiceImpl (implementacja serwisu) -> Repository -> Database
* I generalna uwaga, wszystko po angielsku piszemy!
*/
@SpringBootApplication
@EnableJpaRepositories
public class ProjektApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjektApplication.class, args);
	}

}
