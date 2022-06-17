package com.example.videoworks.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    @Query("from Job a where a.title like %:term%")
    List<Job> searchByTitleLike(@Param("term") String term);
}
