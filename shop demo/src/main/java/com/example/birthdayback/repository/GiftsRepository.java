package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.birthdayback.entity.Gifts;

@Repository
public interface GiftsRepository extends JpaRepository<Gifts,Long> {

}
