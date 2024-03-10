package com.example.birthdayback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GiftsDto {
    private Long id;
    private String name;
    private double amount;
    private String  imageUrl;
}
