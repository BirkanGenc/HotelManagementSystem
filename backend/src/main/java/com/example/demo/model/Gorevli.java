package com.example.demo.model;


import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Gorevli {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long gorevliId;

    private long tckn;

    private String email;

    private String password;

    private String adSoyad;
}
