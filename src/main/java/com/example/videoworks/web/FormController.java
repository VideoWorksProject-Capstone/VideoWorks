//package com.example.videoworks.web;
//
//import com.example.videoworks.data.User;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//
//public class FormController {
//    @GetMapping("/")
//    public String index() {
//        return "redirect:/form";
//    }
//
//    @GetMapping("/form")
//    public String formGet() {
//        return "form";
//    }
//
//    @PostMapping("/form")
//    public String formPost(User user, Model model) {
//        model.addAttribute("user", user);
//        return "form";
//    }
//}