package com.example.videoworks.dto;

public class CreateJobDto {

    private String title;
    private String description;
    private Double price;
    private String photo;

    public CreateJobDto(String title, String description, Double price, String photo) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.photo = photo;
    }

    public CreateJobDto() {

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
