package com.example.birthdayback.service;

import java.util.List;

import com.example.birthdayback.dto.GiftsDto;

public interface GiftsService {

    GiftsDto createCake(GiftsDto GiftsDto);

    GiftsDto getCakeById(Long cakeId);

    List<GiftsDto> getAllCakes();

    GiftsDto updateCake(Long cakeId,GiftsDto GiftsDto);

    void deleteCake(Long cakeId);

}
