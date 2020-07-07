package com.projekt.data;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@RequestMapping()
@ResponseBody
@Controller
public class DataCreator {
    private final com.projekt.data.wpelnianieTablicy wpelnianieTablicy;
//    private final com.projekt.data.authorGenerator authorGenerator;

    public DataCreator(wpelnianieTablicy wpelnianieTablicy, com.projekt.data.authorGenerator authorGenerator) {
        this.wpelnianieTablicy = wpelnianieTablicy;
//        this.authorGenerator = authorGenerator;
    }
    @GetMapping("/test")
     public void hello(){
         this.wpelnianieTablicy.test();
        System.out.print("cos");
    }

}
