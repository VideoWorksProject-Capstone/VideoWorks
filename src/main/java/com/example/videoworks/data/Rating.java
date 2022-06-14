package com.example.videoworks.data;

public class Rating {

    private Long id;
    private int rating;

    public Rating (Long id, int rating) {
        this.id = id;
        this.rating = rating;
    }

    public Rating() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
