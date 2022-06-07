package com.example.videoworks.web;

import com.example.videoworks.data.User;
import com.example.videoworks.data.UsersRepository;
import com.example.videoworks.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UserService userService;

    public UsersController (UserService userService) {
        this.userService = userService;
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

    @PostMapping("create")
    public void create(@RequestBody User newUser){
        userService.createUser(newUser);
    }
}
