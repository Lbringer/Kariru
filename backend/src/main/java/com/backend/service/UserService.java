package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.DTO.UserLoginRequest;
import com.backend.DTO.UserRegisterRequest;
import com.backend.exceptions.ResourceNotFoundException;
import com.backend.model.User;
import com.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public String registerUser(UserRegisterRequest userRegisterRequest) {
        User user = userRegisterRequest.toUser();
        user.setPassword(passwordEncoder.encode(userRegisterRequest.getPassword()));
        userRepository.save(user);
        return "User registered successfully";
    }

    public String loginUser(UserLoginRequest userLoginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginRequest.getEmail(), userLoginRequest.getPassword()));
        User authenticatedUser = userRepository.findByEmail(userLoginRequest.getEmail()).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return jwtService.generateToken(authenticatedUser);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
