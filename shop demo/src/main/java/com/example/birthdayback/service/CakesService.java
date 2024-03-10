package com.example.birthdayback.service;

import com.example.birthdayback.dto.CakesDto;

import java.util.List;

public interface CakesService {

    CakesDto createCake(CakesDto cakeDto);
    CakesDto getCakeById(Long cakeId);

    List<CakesDto> getAllCakeServices();

    CakesDto updateCake(Long cakeId,CakesDto cakeDto);

     void deleteCake(Long cakeId);

}
