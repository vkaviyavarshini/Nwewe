package com.example.birthdayback.service.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.*;
import com.example.birthdayback.entity.*;
import com.example.birthdayback.exception.*;
import com.example.birthdayback.mapper.*;
import com.example.birthdayback.repository.*;
import com.example.birthdayback.service.AdminService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminServiceImpl  implements AdminService{
    
    private AdminRepository adminRepository;

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        Admin admin = AdminMapper.mapToAdmin(adminDto);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }

    @Override
    public AdminDto getAdminById(Long adminId) {
        Admin admin = adminRepository.findById(adminId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + adminId));
        return AdminMapper.mapToAdminDto(admin);
    }

    @Override
    public List<AdminDto> getAllAdmins() {
        List<Admin> admins = adminRepository.findAll();
        return admins.stream().map(AdminMapper::mapToAdminDto).collect(Collectors.toList());
    }

    @Override
    public AdminDto updateAdmin(Long adminId, AdminDto adminDto) {
        Admin existingAdmin = adminRepository.findById(adminId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + adminId));
        Admin updatedAdmin = AdminMapper.mapToAdmin(adminDto);
        updatedAdmin.setId(existingAdmin.getId());
        Admin savedAdmin = adminRepository.save(updatedAdmin);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }

    @Override
    public void deleteAdmin(Long adminId) {
        adminRepository.deleteById(adminId);
    }
}
