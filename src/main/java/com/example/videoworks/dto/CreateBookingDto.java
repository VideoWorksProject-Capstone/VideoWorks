package com.example.videoworks.dto;

import java.time.LocalDateTime;

public class CreateBookingDto {

    private String dateTime;

    public CreateBookingDto() {

    }

    public CreateBookingDto(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
}