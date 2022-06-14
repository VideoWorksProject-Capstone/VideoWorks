package com.example.videoworks.data;

import java.util.Collection;

public class Profile {

    private Long id;
    private String bio;
    private String name;
    private Double rating;
    private Collection<Service> services;

    public Profile(Long id, String bio, String name, Double rating, Collection<Service> services) {
        this.id = id;
        this.bio = bio;
        this.name = name;
        this.rating = rating;
        this.services = services;
    }

    public Profile() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Collection<Service> getServices() {
        return services;
    }

    public void setServices(Collection<Service> services) {
        this.services = services;
    }

    @Override
    public String toString() {
        return "Profile{" +
                "id=" + id +
                ", bio='" + bio + '\'' +
                ", name='" + name + '\'' +
                ", rating='" + rating + '\'' +
                ", services='" + services + '\'' +
                '}';
    }
}
