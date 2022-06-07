package com.example.videoworks.dto;

public class RegisterDto {

    private String name;
    private String username;
    private String email;
    private String password;

    public RegisterDto(String name, String username, String email, String password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public RegisterDto() {

    }
}