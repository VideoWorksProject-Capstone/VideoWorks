package com.example.videoworks.service;

import com.example.videoworks.data.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository, RoleRepository roleRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public User getUserById(Long id) {
        return usersRepository.findById(id).orElseThrow();
    }

    public User getUserByName(String name) {
        return usersRepository.findByName(name);
    }

    public User getUserByEmail(String email) {
        return usersRepository.findByEmail(email).orElseThrow();
    }

    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public User getUserByBio(String bio) {
        return usersRepository.findByBio(bio);
    }

    public User getUserByRating(Double rating) {
        return usersRepository.findByRating(rating);
    }

    public User getUserByPhoto(String photo) {
        return usersRepository.findByPhoto(photo);
    }

    public void createUser(User user){
        usersRepository.save(user);
    }

    public void updateUser(Long userId, User updatedUser) {
        User userToUpdate = getUserById(userId);
        userToUpdate.setBio(updatedUser.getBio());
        userToUpdate.setPhoto(updatedUser.getPhoto());
        userToUpdate.setRating(updatedUser.getRating());
        usersRepository.save(userToUpdate);
    }
}