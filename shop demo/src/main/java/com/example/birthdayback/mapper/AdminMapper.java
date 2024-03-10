package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.AdminDto;
import com.example.birthdayback.entity.Admin;

public class AdminMapper {
    
    public static AdminDto mapToAdminDto(Admin admin)
    {
        return new AdminDto(
            admin.getId(),
            admin.getName(),
            admin.getPassword()
        );
    }

    public static Admin mapToAdmin(AdminDto adminDto)
    {
        return new Admin(
            adminDto.getId(),
            adminDto.getName(),
            adminDto.getPassword()
        );
    }
}
