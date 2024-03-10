package com.example.birthdayback.service;

import java.util.List;

import com.example.birthdayback.dto.PhotographyDto;

public interface PhotographyService {

    PhotographyDto createPhotography(PhotographyDto photographyDto);
    PhotographyDto getPhotographyById(Long photographyId);

    List<PhotographyDto> getAllPhotographyServices();

    PhotographyDto updatePhotography(Long photographyId,PhotographyDto photographyDto);

     void deletePhtography(Long photographyId);

}
