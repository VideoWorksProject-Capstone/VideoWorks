package com.example.videoworks.service;

import com.example.videoworks.data.*;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;
    private final UserService userService;
    private final UsersRepository usersRepository;

    public JobService(JobRepository jobRepository, UserService userService, UsersRepository usersRepository) {
        this.jobRepository = jobRepository;
        this.userService = userService;
        this.usersRepository = usersRepository;
    }

    public List<Job> getJobList() {
        return jobRepository.findAll();
    }

    public List<Job> getJobByTitleKeyword(String keyword) {
        return jobRepository.searchByTitleLike(keyword);
    }

    public List<Job> getJobByUser(User user) {
        return jobRepository.findByUser(user);
    }

    public void addJob(Job newJob, OAuth2Authentication auth) {
        String email = auth.getName();
        // User user = userService.getUserByUsername(username);
        User user = usersRepository.findByEmail(email).get();
        newJob.setUser(user);
        // newJob.setTitle(dto.getTitle());
        // newJob.setDescription(dto.getDescription());
        // newJob.setPrice(dto.getPrice());
        // newJob.setPhoto(dto.getPhoto());
        jobRepository.save(newJob);
    }

    public void updateJob(Long jobId, Job job) {
        Job jobToUpdate = jobRepository.findById(jobId).orElseThrow();

        if (job.getDescription() != null && !job.getDescription().isEmpty()) {
            jobToUpdate.setDescription(job.getDescription());
        }
        if (job.getTitle() != null && !job.getTitle().isEmpty()) {
            jobToUpdate.setTitle(job.getTitle());
        }
        if (job.getPrice() != null && !job.getPrice().isNaN()) {
            jobToUpdate.setPrice(job.getPrice());
        }
        if (job.getPhoto() != null && !job.getPhoto().isEmpty()) {
            jobToUpdate.setPhoto(job.getPhoto());
        }
    }

    public void deleteJobById(Long id) {
        jobRepository.deleteById(id);
    }
}

