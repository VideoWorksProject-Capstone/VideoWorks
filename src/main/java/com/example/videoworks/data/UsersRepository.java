package com.example.videoworks.data;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Long> {

    User findByName(String name);
    Optional<User> findByEmail(String email);
    User findByUsername(String username);
    User findByRating(Double rating);
    User findByBio(String bio);
    User findByPhoto(String photo);
}
