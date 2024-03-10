package com.example.birthdayback.service.Implementation;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.CakesDto;
import com.example.birthdayback.entity.Cakes;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.CakesMapper;
import com.example.birthdayback.repository.CakesRepository;
import com.example.birthdayback.service.CakesService;

import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CakesServiceImpl implements CakesService {

    private final CakesRepository photographyRepository;

    @Override
    public CakesDto createCake(CakesDto photographyDto) {
        Cakes photography = CakesMapper.mapToCakes(photographyDto);
        Cakes savedCakes = photographyRepository.save(photography);
        return CakesMapper.mapToCakesDto(savedCakes);
    }

    @Override
    public CakesDto getCakeById(Long photographyId) {
        Cakes photography = photographyRepository.findById(photographyId)
                .orElseThrow(() -> new ResourceNotFoundException("Cakes not found with id: " + photographyId));
        return CakesMapper.mapToCakesDto(photography);
    }

    @Override
    public List<CakesDto> getAllCakeServices() {
        List<Cakes> photographys = photographyRepository.findAll();
        return photographys.stream().map(CakesMapper::mapToCakesDto).collect(Collectors.toList());
    }

    @Override
    public CakesDto updateCake(Long photographyId, CakesDto photographyDto) {
         Cakes existingCakes = photographyRepository.findById(photographyId)
                .orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + photographyId));
        Cakes updatedCakes = CakesMapper.mapToCakes(photographyDto);
        updatedCakes.setId(existingCakes.getId());
        Cakes savedCakes = photographyRepository.save(updatedCakes);
        return CakesMapper.mapToCakesDto(savedCakes);
    }

    @Override
    public void deleteCake(Long photographyId) {
        photographyRepository.deleteById(photographyId);
    }

    
}
