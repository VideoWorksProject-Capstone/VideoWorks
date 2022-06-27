package com.example.videoworks.dto;

public class CreateJobDto {

    private String title;
    private String description;
    private Double price;
    private String category;

    public CreateJobDto(String title, String description, Double price, String category) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
