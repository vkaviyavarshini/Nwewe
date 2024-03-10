package com.example.birthdayback.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.birthdayback.dto.GiftsDto;
import com.example.birthdayback.service.GiftsService;

import lombok.AllArgsConstructor;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/cakes")
public class GiftsController {
    
    private GiftsService cakeService;

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<GiftsDto> createCake(@RequestBody GiftsDto cakeDto) {
        GiftsDto savedCake = cakeService.createCake(cakeDto);
        return new ResponseEntity<>(savedCake, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<GiftsDto> getCakeById(@PathVariable("id") Long cakeId) {
        GiftsDto cakeDto = cakeService.getCakeById(cakeId);
        return ResponseEntity.ok(cakeDto);
    }

    @GetMapping
    public ResponseEntity<List<GiftsDto>> getAllCakes() {
        List<GiftsDto> cakes = cakeService.getAllCakes();
        return ResponseEntity.ok(cakes);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<GiftsDto> updateCake(@PathVariable("id") Long cakeId, @RequestBody GiftsDto cakeDto) {
        GiftsDto updatedCake = cakeService.updateCake(cakeId, cakeDto);
        return ResponseEntity.ok(updatedCake);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCake(@PathVariable("id") Long cakeId) {
        cakeService.deleteCake(cakeId);
        return ResponseEntity.noContent().build();
    }
}
