package com.example.birthdayback.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.birthdayback.dto.GiftsDto;
import com.example.birthdayback.service.GiftsService;

import lombok.AllArgsConstructor;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/gifts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GiftsController {
    
    private GiftsService giftService;

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<GiftsDto> createGift(@RequestBody GiftsDto giftDto) {
        GiftsDto savedGift = giftService.createGift(giftDto);
        return new ResponseEntity<>(savedGift, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<GiftsDto> getGiftById(@PathVariable("id") Long giftId) {
        GiftsDto giftDto = giftService.getGiftById(giftId);
        return ResponseEntity.ok(giftDto);
    }

    @GetMapping
    public ResponseEntity<List<GiftsDto>> getAllGifts() {
        List<GiftsDto> gifts = giftService.getAllGifts();
        return ResponseEntity.ok(gifts);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<GiftsDto> updateGift(@PathVariable("id") Long giftId, @RequestBody GiftsDto giftDto) {
        GiftsDto updatedGift = giftService.updateGift(giftId, giftDto);
        return ResponseEntity.ok(updatedGift);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteGift(@PathVariable("id") Long giftId) {
        giftService.deleteGift(giftId);
        return ResponseEntity.noContent().build();
    }
}
