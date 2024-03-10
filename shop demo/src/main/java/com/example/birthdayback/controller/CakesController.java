package com.example.birthdayback.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.birthdayback.dto.CakesDto;
import com.example.birthdayback.service.CakesService;

import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@RequestMapping("/api/cakes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CakesController {

    private CakesService cakesService;

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<CakesDto> createCake(@RequestBody CakesDto cakeDto) {
        CakesDto savedCakes = cakesService.createCake(cakeDto);
        return new ResponseEntity<>(savedCakes, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CakesDto> getCakesById(@PathVariable("id") Long cakeId) {
        CakesDto cakesDto = cakesService.getCakeById(cakeId);
        return ResponseEntity.ok(cakesDto);
    }

    @GetMapping
    public ResponseEntity<List<CakesDto>> getAllCakesServices() {
        List<CakesDto> cakeServices = cakesService.getAllCakeServices();
        return ResponseEntity.ok(cakeServices);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<CakesDto> updateCakes(@PathVariable("id") Long cakeId, @RequestBody CakesDto cakeDto) {
        CakesDto updatedCakes = cakesService.updateCake(cakeId, cakeDto);
        return ResponseEntity.ok(updatedCakes);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCakes(@PathVariable("id") Long cakeId) {
        cakesService.deleteCake(cakeId);
        return ResponseEntity.noContent().build();
    }
}
