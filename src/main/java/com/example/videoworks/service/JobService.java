package com.example.videoworks.service;

import com.example.videoworks.data.*;
import com.example.videoworks.dto.CreateJobDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;
    private final UserService userService;

    public JobService(JobRepository jobRepository, UserService userService) {
        this.jobRepository = jobRepository;
        this.userService = userService;
    }

    public List<Job> getJobList() {
        return jobRepository.findAll();
    }

    public List<Job> getJobByTitleKeyword(String keyword) {
        return jobRepository.searchByTitleLike(keyword);
    }

    public void addJob(CreateJobDto dto, Job newJob, String username) {

        User user = userService.getUserByUsername(username);

        newJob.setTitle(dto.getTitle());
        newJob.setDescription(dto.getDescription());
        newJob.setPrice(dto.getPrice());
        newJob.setPhoto(dto.getPhoto());
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
