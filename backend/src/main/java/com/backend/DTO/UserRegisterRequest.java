package com.backend.DTO;
import com.backend.enums.UserRole;
import com.backend.model.User;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UserRegisterRequest {

    @NotNull(message = "Name is required")
    private String name;

    @Valid
    @NotNull(message = "Email is required")
    private String email;

    @NotNull(message = "Password is required")
    private String password;

    @NotNull(message = "Role is required")
    private String role;

    @Valid
    @NotNull(message = "Address is required")
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
