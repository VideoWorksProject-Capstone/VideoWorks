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

    public void createUser(User user){
        usersRepository.save(user);
    }
}