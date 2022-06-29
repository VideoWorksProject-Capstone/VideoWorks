package com.example.videoworks.web;

import com.example.videoworks.data.Booking;
import com.example.videoworks.data.Job;
import com.example.videoworks.data.User;
import com.example.videoworks.service.BookingService;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/bookings", headers = "Accept=application/json")
public class BookingController {

    private final BookingService bookingService;


    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("user")
    public List<Booking> getByUser(@RequestParam User user) {
        return bookingService.getBookingsByUser(user);
    }

    @GetMapping("job")
    public List<Booking> getByJob(@RequestParam Job job) {
        return bookingService.getBookingsByJob(job);
    }

    @PostMapping("create")
    public void createBooking(@RequestBody Booking  newBooking, @RequestParam Long jobId, @RequestParam String dateTime, OAuth2Authentication auth) {
        bookingService.addBooking(newBooking, jobId, dateTime, auth);
    }
}
