package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Personal;
import com.example.demo.repository.PersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/personal")
public class PersonalController {
    @Autowired
    private PersonalRepository personalRepository;

    @GetMapping
    public List<Personal> getAll() {
        return personalRepository.findAll();
    }

    @PostMapping
    public Personal create(@RequestBody Personal personal) {
        return personalRepository.save(personal);
    }

    @GetMapping("{id}")
    public ResponseEntity<Personal> getById(@PathVariable long id) {
        Personal personal = personalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));
        return ResponseEntity.ok(personal);
    }

    @PutMapping("{id}")
    public ResponseEntity<Personal> update(@PathVariable long id, @RequestBody Personal personal) {
        Personal personalById = personalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));

        personalById.setEmail(personal.getEmail());
        personalById.setAdSoyad(personal.getAdSoyad());
        personalById.setTckn(personal.getTckn());
        personalById.setMaas(personal.getMaas());
        personalById.setRol(personal.getRol());
        personalRepository.save(personalById);

        return ResponseEntity.ok(personalById);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

        Personal personal = personalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));

        personalRepository.delete(personal);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
