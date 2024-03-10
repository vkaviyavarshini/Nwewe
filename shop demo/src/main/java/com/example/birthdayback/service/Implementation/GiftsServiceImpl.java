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
    
    private final  GiftsRepository giftRepository;

    @Override
     public GiftsDto createGift(GiftsDto giftDto) {
        Gifts gift = GiftsMapper.mapToGift(giftDto);
        Gifts savedGift = giftRepository.save(gift);
        return GiftsMapper.mapToGiftDto(savedGift);
    }

    @Override
    public GiftsDto getGiftById(Long giftId) {
        Gifts gift = giftRepository.findById(giftId)
                .orElseThrow(() -> new ResourceNotFoundException("Gift not found with id: " + giftId));
        return GiftsMapper.mapToGiftDto(gift);
    }

    @Override
    public List<GiftsDto> getAllGifts() {
        List<Gifts> gifts = giftRepository.findAll();
        return gifts.stream().map(GiftsMapper::mapToGiftDto).collect(Collectors.toList());
    }

    @Override
    public GiftsDto updateGift(Long giftId, GiftsDto giftDto) {
        Gifts existingGift = giftRepository.findById(giftId)
                .orElseThrow(() -> new ResourceNotFoundException("Gift not found with id: " + giftId));
        Gifts updatedGift = GiftsMapper.mapToGift(giftDto);
        updatedGift.setId(existingGift.getId());
        Gifts savedGift = giftRepository.save(updatedGift);
        return GiftsMapper.mapToGiftDto(savedGift);
    }

    @Override
    public void deleteGift(Long giftId) {
        giftRepository.deleteById(giftId);
    }
}
