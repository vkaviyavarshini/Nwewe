package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.GiftsDto;
import com.example.birthdayback.entity.Gifts;

public class GiftsMapper {
    
    public static GiftsDto mapToGiftDto(Gifts gift)
    {
        return new  GiftsDto(
            gift.getId(),
            gift.getName(),
            gift.getAmount(),
            gift.getImageUrl()
        );
    }

    public static Gifts mapToGift(GiftsDto giftDto)
    {
        return new Gifts(
            giftDto.getId(),
            giftDto.getName(),
            giftDto.getAmount(),
            giftDto.getImageUrl()
        );
    }
}
