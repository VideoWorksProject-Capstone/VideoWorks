package com.example.videoworks.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@DynamicUpdate
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String localDate;
    private String email;

    @ManyToOne
    @JsonIgnoreProperties({"bookings"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties({"bookings"})
    private Job job;

    public Booking(Long id, String localDate, String email, User user, Job job) {
        this.id = id;
        this.localDate = localDate;
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

    public String getLocalDate() {
        return localDate;
    }

    public void setDateTime(String localDate) {
        this.localDate = localDate;
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
