package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.UserDto;
import com.example.birthdayback.entity.User;

public class UserMapper {
    
    public static UserDto mapToUserDto(User user)
    {
        return new  UserDto(
            user.getId(),
            user.getName(),
            user.getPassword()
        );
    }

    public  static User mapToUser(UserDto userDto)
    {
        return new User(
            userDto.getId(),
            userDto.getName(),
            userDto.getPassword()
        );
    }
}
