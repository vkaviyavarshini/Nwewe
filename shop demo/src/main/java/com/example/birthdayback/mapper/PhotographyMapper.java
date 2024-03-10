package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.PhotographyDto;
import com.example.birthdayback.entity.Photography;

public class PhotographyMapper {
    public static PhotographyDto mapToPhotographyDto(Photography photography)
    {
        return new PhotographyDto(
            photography.getId(),
            photography.getName(),
            photography.getAmount(),
            photography.getImage_Url()
        );
    }

    public static Photography mapToPhotography(PhotographyDto photographyDto)
    {
        return new Photography(
        photographyDto.getId(),
        photographyDto.getName(),
        photographyDto.getAmount(),
        photographyDto.getImageUrl()
        );
    }
}
