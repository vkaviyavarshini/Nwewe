package com.example.birthdayback.service;

import java.util.List;

import com.example.birthdayback.dto.CartDto;

public interface CartService {
CartDto createCart(CartDto cartDto);

    CartDto getCartById(Long cartId);

    List<CartDto> getAllCarts();

    CartDto updateCart(Long cartId, CartDto cartDto);

    void deleteCart(Long cartId);
}
