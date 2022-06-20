package com.example.videoworks.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Booking findByUser(User user);
    Booking findByJob(Job job);
    Booking findByDateTime(LocalDateTime dateTime);
}
