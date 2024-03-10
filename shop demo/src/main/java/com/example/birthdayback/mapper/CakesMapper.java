package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.CakesDto;
import com.example.birthdayback.entity.Cakes;

public class CakesMapper {
    public static CakesDto mapToCakesDto(Cakes cakes)
    {
        return new CakesDto(
                cakes.getId(),
                cakes.getName(),
                cakes.getAmount(),
                cakes.getImage_Url()
        );
    }

    public static Cakes mapToCakes(CakesDto cakeDto)
    {
        return new Cakes(
                cakeDto.getId(),
                cakeDto.getName(),
                cakeDto.getAmount(),
                cakeDto.getImageUrl()
        );
    }
}
