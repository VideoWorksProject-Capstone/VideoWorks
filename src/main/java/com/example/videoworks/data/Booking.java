package com.example.videoworks.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@DynamicUpdate
@JsonIgnoreProperties({"bookings", "jobs", "password"})
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dateTime = String.valueOf(LocalDate.now());
    private String email;

    @ManyToOne
    @JsonIgnoreProperties({"bookings", "jobs", "password"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties({"bookings", "user"})
    private Job job;

    public Booking(Long id, String dateTime, String email, User user, Job job) {
        this.id = id;
        this.dateTime = dateTime;
        this.email = email;
        this.user = user;
        this.job = job;
    }

    public Booking() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }
}