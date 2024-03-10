package com.example.birthdayback.service.Implementation;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.GiftsDto;
import com.example.birthdayback.entity.Gifts;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.GiftsMapper;
import com.example.birthdayback.repository.GiftsRepository;
import com.example.birthdayback.service.GiftsService;

import lombok.AllArgsConstructor;
import  java.util.List;

@Service
@AllArgsConstructor
public class GiftsServiceImpl implements GiftsService {
    
    private final  GiftsRepository cakeRepository;

    @Override
     public GiftsDto createCake(GiftsDto cakeDto) {
        Gifts cake = GiftsMapper.mapToCake(cakeDto);
        Gifts savedCake = cakeRepository.save(cake);
        return GiftsMapper.mapToCakeDto(savedCake);
    }

    @Override
    public GiftsDto getCakeById(Long cakeId) {
        Gifts cake = cakeRepository.findById(cakeId)
                .orElseThrow(() -> new ResourceNotFoundException("Cake not found with id: " + cakeId));
        return GiftsMapper.mapToCakeDto(cake);
    }

    @Override
    public List<GiftsDto> getAllCakes() {
        List<Gifts> cakes = cakeRepository.findAll();
        return cakes.stream().map(GiftsMapper::mapToCakeDto).collect(Collectors.toList());
    }

    @Override
    public GiftsDto updateCake(Long cakeId, GiftsDto cakeDto) {
        Gifts existingCake = cakeRepository.findById(cakeId)
                .orElseThrow(() -> new ResourceNotFoundException("Cake not found with id: " + cakeId));
        Gifts updatedCake = GiftsMapper.mapToCake(cakeDto);
        updatedCake.setId(existingCake.getId());
        Gifts savedCake = cakeRepository.save(updatedCake);
        return GiftsMapper.mapToCakeDto(savedCake);
    }

    @Override
    public void deleteCake(Long cakeId) {
        cakeRepository.deleteById(cakeId);
    }
}
