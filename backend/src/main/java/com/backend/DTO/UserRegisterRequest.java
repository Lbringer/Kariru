package com.backend.DTO;
import com.backend.enums.UserRole;
import com.backend.model.User;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class UserRegisterRequest {

    @NotEmpty(message = "Name is required")
    private String name;

    @Valid
    @NotEmpty(message = "Email is required")
    private String email;

    @NotEmpty(message = "Password is required")
    private String password;

    @NotEmpty(message = "Role is required")
    private String role;

    @Valid
    @NotEmpty(message = "Address is required")
    private String address;

    public User toUser(){
        User user = new User();
        user.setName(this.name);
        user.setEmail(this.email);
        user.setPassword(this.password);
        user.setRole(UserRole.valueOf(this.role.toUpperCase()));
        user.setAddress(this.address);
        return user;
    }
}
