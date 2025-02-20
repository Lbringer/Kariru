package com.backend.DTO;

import com.backend.enums.UserRole;
import com.backend.model.User;

import lombok.Data;

@Data
public class UserDetailsResponse {
    private String name;
    private String email;
    private UserRole role;
    private String address;

    public UserDetailsResponse(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.role = UserRole.valueOf(user.getRole().toString().toUpperCase());
        this.address = user.getAddress();
    }
}
