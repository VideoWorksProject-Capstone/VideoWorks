package com.example.videoworks.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "services")
@DynamicUpdate
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private Double price;
    private String photo;

    @ManyToOne
    @JsonIgnoreProperties({"services", "password"})
    private User user;

    @OneToMany(mappedBy = "job")
    @JsonIgnoreProperties("job")
    private List<Booking> bookings = new ArrayList<>();

    public Job(Long id, String title, String description, Double price, String photo, User user, List<Booking> bookings) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.photo = photo;
        this.user = user;
        this.bookings = bookings;
    }

    public Job() {

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", title=" + title +
                ", description=" + description +
                ", price=" + price +
                ", photo=" + photo +
                '}';
    }
}
