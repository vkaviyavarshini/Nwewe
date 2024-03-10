package com.example.birthdayback.service;

import java.util.List;

import com.example.birthdayback.dto.AdminDto;

public interface AdminService {

    AdminDto createAdmin(AdminDto adminDto);

    AdminDto getAdminById(Long adminId);

    List<AdminDto> getAllAdmins();

    AdminDto updateAdmin(Long adminId, AdminDto adminDto);

    void deleteAdmin(Long adminId);
}
