package com.example.birthdayback.service;

import java.util.List;

import com.example.birthdayback.dto.UserDto;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto userDto);

    void deleteUser(Long userId);
}
