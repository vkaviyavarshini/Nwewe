package com.example.birthdayback.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.birthdayback.dto.CartDto;
import com.example.birthdayback.service.CartService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/carts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CartController {
    private CartService  cartService;

    @PostMapping
    public ResponseEntity<CartDto> createCart(@RequestBody CartDto cartDto) {
        CartDto savedcart = cartService.createCart(cartDto);
        return new ResponseEntity<>(savedcart, HttpStatus.CREATED);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<CartDto> getCartById(@PathVariable("id") Long cartId) {
        CartDto cartDto = cartService.getCartById(cartId);
        return ResponseEntity.ok(cartDto);
    }


    @GetMapping
    public ResponseEntity<List<CartDto>> getAllCarts() {
        List<CartDto> carts = cartService.getAllCarts();
        return ResponseEntity.ok(carts);
    }


    @PutMapping("{id}")
    public ResponseEntity<CartDto> updateCart(@PathVariable("id") Long cartId, @RequestBody CartDto cartDto) {
        CartDto updatedCart = cartService.updateCart(cartId, cartDto);
        return ResponseEntity.ok(updatedCart);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable("id") Long cartId) {
        cartService.deleteCart(cartId);
        return ResponseEntity.noContent().build();
    }

}
