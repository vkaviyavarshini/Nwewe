package com.example.birthdayback.service.Implementation;

import java.util.stream.Collectors;

import java.util.*;
import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.*;
import com.example.birthdayback.entity.*;
import com.example.birthdayback.exception.*;
import com.example.birthdayback.mapper.*;
import com.example.birthdayback.repository.*;
import com.example.birthdayback.service.CartService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService{

    public CartRepository cartRepository;

    @Override
    public CartDto createCart(CartDto cartDto) {
        Cart cart = CartMapper.mapToCart(cartDto);
       Cart savedCart = cartRepository.save(cart);
        return CartMapper.mapToCartDto(savedCart);
    }

    @Override
    public CartDto getCartById(Long cartId) {
        Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() -> new ResourceNotFoundException("Cart not found with id: " + cartId));
        return CartMapper.mapToCartDto(cart);
    }

    @Override
    public List<CartDto> getAllCarts() {
        List<Cart> carts = cartRepository.findAll();
        return carts.stream().map(CartMapper::mapToCartDto).collect(Collectors.toList());
    }

    @Override
    public CartDto updateCart(Long cartId, CartDto cartDto) {
        Cart existingCart = cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found with id: " + cartId));
        Cart updatedCart = CartMapper.mapToCart(cartDto);
        updatedCart.setId(existingCart.getId());
        Cart savedCart = cartRepository.save(updatedCart);
        return CartMapper.mapToCartDto(savedCart);
    }

    @Override
    public void deleteCart(Long cartId) {
        cartRepository.deleteById(cartId);
    }
    
}
