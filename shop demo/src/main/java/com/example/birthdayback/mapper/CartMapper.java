package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.CartDto;
import com.example.birthdayback.entity.Cart;

public class CartMapper {
    
    public static  CartDto mapToCartDto(Cart cart)
    {
        return new CartDto(
            cart.getId()
        );
    }

    public static Cart mapToCart(CartDto cartDto)
    {
        return new Cart(
            cartDto.getId()
        );
    }
}
