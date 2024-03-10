package com.example.birthdayback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PhotographyDto {
    private Long id;
    private String name;
    private String amount;
    private String imageUrl;
}
