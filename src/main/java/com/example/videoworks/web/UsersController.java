package com.example.videoworks.web;

import com.example.videoworks.data.User;
import com.example.videoworks.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UserService userService;
    private PasswordEncoder passwordEncoder;

    public UsersController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @GetMapping("{id}")
    public User getById(@PathVariable long id){
        return userService.getUserById(id);
    }

    @GetMapping("name")
    public User getByName(@RequestParam String name) {
        return userService.getUserByName(name);
    }

    @GetMapping("email")
    public User getByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    @GetMapping("username")
    public User getByUsername(@RequestParam String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("me")
    public User getCurrentUser(OAuth2Authentication auth) {
        System.out.println(auth.getName());
        return userService.getUserByEmail(auth.getName());
    }

    @PostMapping("create")
    public void create(@RequestBody User newUser){
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        userService.createUser(newUser);
    }

    @PutMapping("{userId}")
    public void updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
        userService.updateUser(userId, updatedUser);
    }
}
