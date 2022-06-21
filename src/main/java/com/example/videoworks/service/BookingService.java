package com.example.videoworks.service;

import com.example.videoworks.data.*;
import com.example.videoworks.dto.CreateBookingDto;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final JobRepository jobRepository;
    private final UserService userService;

    public BookingService(BookingRepository bookingRepository, JobRepository jobRepository, UserService userService) {
        this.bookingRepository = bookingRepository;
        this.jobRepository = jobRepository;
        this.userService = userService;
    }

    public Booking getBookingsByUser(User user) {
        return bookingRepository.findByUser(user);
    }

    public Booking getBookingsByJob(Job job) {
        return bookingRepository.findByJob(job);
    }

    public Booking getBookingsByDateTime(LocalDateTime dateTime) {
        return bookingRepository.findByDateTime(dateTime);
    }

    public void addBooking(CreateBookingDto dto, Booking newBooking, String username) {
        User user = userService.getUserByUsername(username);

        newBooking.setDateTime(dto.getDateTime());



        user.getBookings().add(newBooking);
        newBooking.setUser(user);
        bookingRepository.save(newBooking);
    }
}