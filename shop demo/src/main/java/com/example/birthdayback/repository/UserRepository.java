package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.birthdayback.entity.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Long> {

}
