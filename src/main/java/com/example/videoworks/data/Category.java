package com.example.videoworks.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {

    private Long id;

    private String name;

    private String photo;

    @OneToMany(mappedBy = "category")
    @JsonIgnoreProperties("category")
    private List<Job> jobs;

    public Category(Long id, String name, String photo, List<Job> jobs) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.jobs = jobs;
    }

    public Category() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public List<Job> getJobs() {
        return jobs;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }
}
