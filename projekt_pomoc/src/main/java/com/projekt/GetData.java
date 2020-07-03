package com.projekt;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@org.springframework.stereotype.Service
@RequestMapping()
@ResponseBody
@Controller

public class GetData {
    private final com.projekt.Repo repo;
    public GetData(com.projekt.Repo repo) {
        this.repo = repo;
    }


    private String data;
    @GetMapping("/home")

    public List<BookTable> findAll() {
        return repo.findAll();

    }
}
