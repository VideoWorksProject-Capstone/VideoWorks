package com.example.videoworks.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/home", "/categories", "/profile", "/login", "/register"})
    public String showView() {
        return "forward:/index.html";
    }
}
