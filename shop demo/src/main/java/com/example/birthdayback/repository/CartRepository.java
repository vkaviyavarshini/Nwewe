package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.birthdayback.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{

}
