package com.example.videoworks.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@DynamicUpdate
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateTime;

    @ManyToOne
    @JsonIgnoreProperties({"bookings", "password"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties("bookings")
    private Job job;

    public Booking(Long id, LocalDateTime dateTime, User user, Job job) {
        this.id = id;
        this.dateTime = dateTime;
        this.user=user;
        this.job=job;
    }

    public Booking() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
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

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", dateTime='" + dateTime + '\'' +
                ", User='" + user + '\'' +
                ", Job='" + job + '\'' +
                '}';
    }
}
