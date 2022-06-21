package com.example.videoworks.web;

import com.example.videoworks.data.Job;
import com.example.videoworks.data.User;
import com.example.videoworks.dto.CreateJobDto;
import com.example.videoworks.service.JobService;
import com.example.videoworks.service.UserService;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping(value = "/api/services", headers = "Accept=application/json")
public class JobController {

    private final JobService jobService;

    public JobController (JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public List<Job> getAll() {
        return jobService.getJobList();
    }

    @GetMapping("user")
    public List<Job> getByUser(@RequestParam User user) {
        return jobService.getJobByUser(user);
    }

    @GetMapping("{id}")
    public Job getById(@PathVariable Long id) {
        for (Job job : jobService.getJobList()) {
            if (Objects.equals(job.getId(), id)) {
                return job;
            }
        }
        return null;
    }

    @PostMapping("create")
    public void createJob(@RequestBody Job newJob, OAuth2Authentication auth) {
        jobService.addJob(newJob, auth);
    }

    // @PostMapping("{username}")
    // public void createJob(@PathVariable String username, @RequestBody CreateJobDto dto) {
    //     Job newJob = new Job();
    //     jobService.addJob(dto, newJob, username);
    // }

    @PutMapping("{id}")
    public void updateJob(@PathVariable Long id, @RequestBody Job updatedJob) {
        jobService.updateJob(id, updatedJob);
    }

    @DeleteMapping("{id}")
    public void deleteJob(@PathVariable Long id) {
        jobService.deleteJobById(id);
    }

    @GetMapping("search")
    public List<Job> searchJobs(@RequestParam String keyword) {
        return jobService.getJobByTitleKeyword(keyword);
    }
}
