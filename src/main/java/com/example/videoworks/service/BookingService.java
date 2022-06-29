package com.example.videoworks.service;

import com.example.videoworks.data.*;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final UsersRepository usersRepository;
    private final JobRepository jobRepository;

    public BookingService(BookingRepository bookingRepository, UsersRepository usersRepository, JobRepository jobRepository) {
        this.bookingRepository = bookingRepository;
        this.usersRepository = usersRepository;
        this.jobRepository = jobRepository;
    }

    public List<Booking> getBookingsByUser(User user) {
        return bookingRepository.findByUser(user);
    }

    public List<Booking> getBookingsByJob(Job job) {
        return bookingRepository.findByJob(job);
    }

    public void addBooking(Long id, String dateTime, OAuth2Authentication auth) {
        String email = auth.getName();
        // newBooking.setEmail(auth.getName());
        User user = usersRepository.findByEmail(email).get();
        Job job = jobRepository.findById(id).get();
        bookingRepository.save(booking);
    }
}
