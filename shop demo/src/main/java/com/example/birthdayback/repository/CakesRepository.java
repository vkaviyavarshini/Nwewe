package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.birthdayback.entity.Cakes;

public interface CakesRepository extends JpaRepository<Cakes,Long> {

}
