package com.projekt;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@RequestMapping()
@ResponseBody
@Controller
public class TestTest {
    private final Service service;

    public TestTest(Service service) {
        this.service = service;
    }
    @GetMapping("/test")
     public void hello(){
         this.service.test();
        System.out.println("test");
    }

}
