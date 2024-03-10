package com.example.birthdayback.service;

import java.util.List;

import com.example.birthdayback.dto.GiftsDto;

public interface GiftsService {

    GiftsDto createGift(GiftsDto GiftsDto);

    GiftsDto getGiftById(Long giftId);

    List<GiftsDto> getAllGifts();

    GiftsDto updateGift(Long giftId,GiftsDto GiftsDto);

    void deleteGift(Long giftId);

}
