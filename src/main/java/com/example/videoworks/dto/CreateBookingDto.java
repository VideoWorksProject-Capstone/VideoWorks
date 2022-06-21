package com.example.videoworks.dto;

import java.time.LocalDateTime;

public class CreateBookingDto {

    private LocalDateTime dateTime;

    public CreateBookingDto() {

    }

    public CreateBookingDto(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}