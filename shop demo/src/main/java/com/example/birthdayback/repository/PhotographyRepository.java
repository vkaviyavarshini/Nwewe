package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.birthdayback.entity.Photography;

public interface PhotographyRepository extends JpaRepository<Photography,Long> {

}
