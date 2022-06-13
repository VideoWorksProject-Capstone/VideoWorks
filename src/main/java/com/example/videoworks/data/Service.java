package com.example.videoworks.data;

public class Service {

    private Long id;
    private String title;
    private String description;
    private Double rate;
    private Boolean status;

    public Service(Long id, String title, String description, Double rate, Boolean status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.rate = rate;
        this.status = status;
    }

    public Service() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", rate='" + rate + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
