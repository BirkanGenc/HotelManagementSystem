package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long kisi;

    private long fiyat;

    private long gun;

        private long odenecekTutar;

    private String odaTuru;

    private String description;

    private String odaAdi;

    private String doluBos;
}
