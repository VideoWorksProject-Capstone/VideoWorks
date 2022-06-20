package com.example.videoworks.web;

import com.example.videoworks.data.Booking;
import com.example.videoworks.data.Job;
import com.example.videoworks.data.User;
import com.example.videoworks.dto.CreateBookingDto;
import com.example.videoworks.dto.CreateJobDto;
import com.example.videoworks.service.BookingService;
import com.example.videoworks.service.JobService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/bookings", headers = "Accept=application/json")
public class BookingController {

    private final BookingService bookingService;

    public BookingController (BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("user")
    public Booking getByUser(@RequestParam User user) {
        return bookingService.getBookingsByUser(user);
    }

    @GetMapping("job")
    public Booking getByJob(@RequestParam Job job) {
        return bookingService.getBookingsByJob(job);
    }

    @PostMapping("{username}")
    public void createJob(@PathVariable String username, @RequestBody CreateBookingDto dto) {
        Booking newBooking = new Booking();
        bookingService.addBooking(dto, newBooking, username);
    }
}
