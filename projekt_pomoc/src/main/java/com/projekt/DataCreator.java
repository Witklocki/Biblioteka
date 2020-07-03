package com.projekt;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@RequestMapping()
@ResponseBody
@Controller
public class DataCreator {
    private final wpelnianieTablicy wpelnianieTablicy;

    public DataCreator(wpelnianieTablicy wpelnianieTablicy) {
        this.wpelnianieTablicy = wpelnianieTablicy;
    }
    @GetMapping("/test")
     public void hello(){
         this.wpelnianieTablicy.test();
        System.out.print("cos");
    }

}
