package com.example.birthdayback.service.Implementation;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.PhotographyDto;
import com.example.birthdayback.entity.Photography;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.PhotographyMapper;
import com.example.birthdayback.repository.PhotographyRepository;
import com.example.birthdayback.service.PhotographyService;

import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PhotographyServiceImpl implements PhotographyService {

    private final PhotographyRepository photographyRepository;

    @Override
    public PhotographyDto createPhotography(PhotographyDto photographyDto) {
        Photography photography = PhotographyMapper.mapToPhotography(photographyDto);
        Photography savedPhotography = photographyRepository.save(photography);
        return PhotographyMapper.mapToPhotographyDto(savedPhotography);
    }

    @Override
    public PhotographyDto getPhotographyById(Long photographyId) {
        Photography photography = photographyRepository.findById(photographyId)
                .orElseThrow(() -> new ResourceNotFoundException("Photography not found with id: " + photographyId));
        return PhotographyMapper.mapToPhotographyDto(photography);
    }

    @Override
    public List<PhotographyDto> getAllPhotographyServices() {
        List<Photography> photographys = photographyRepository.findAll();
        return photographys.stream().map(PhotographyMapper::mapToPhotographyDto).collect(Collectors.toList());
    }

    @Override
    public PhotographyDto updatePhotography(Long photographyId, PhotographyDto photographyDto) {
         Photography existingPhotography = photographyRepository.findById(photographyId)
                .orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + photographyId));
        Photography updatedPhotography = PhotographyMapper.mapToPhotography(photographyDto);
        updatedPhotography.setId(existingPhotography.getId());
        Photography savedPhotography = photographyRepository.save(updatedPhotography);
        return PhotographyMapper.mapToPhotographyDto(savedPhotography);
    }

    @Override
    public void deletePhtography(Long photographyId) {
        photographyRepository.deleteById(photographyId);
    }

    
}
