package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Personal;
import com.example.demo.model.Room;
import com.example.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin("*")
@RestController
    @RequestMapping("/api/room")
public class RoomController {
    @Autowired
    private RoomRepository roomRepository;

    @GetMapping
    public List<Room> getAll() {
        return roomRepository.findAll();
    }

    @GetMapping("getfull")
    public List<Room> getFull() {
        List<Room> roomList = roomRepository.findAll();

        List<Room> sendList = new ArrayList<Room>();
        for (var room:roomList) {
            if(!room.getDoluBos().equals("0")) {
                sendList.add(room);
            }
        }
        return sendList;
    }


    @GetMapping("{id}")
    public ResponseEntity<Room> getById(@PathVariable long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));
        return ResponseEntity.ok(room);
    }

    @PutMapping("{id}/{gun}")
    public ResponseEntity<Room> update(@PathVariable long id, @PathVariable long gun) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));

        room.setDoluBos(Long.toString(id));
        room.setGun(gun);
        room.setOdenecekTutar(room.getFiyat() * gun);
        roomRepository.save(room);
        return ResponseEntity.ok(room);
    }

    @PutMapping("duzenle/{id}/{gun}")
    public ResponseEntity<Room> updat01e(@PathVariable long gun, @PathVariable long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));

        room.setGun(gun);
        room.setOdenecekTutar(gun * room.getFiyat());
        roomRepository.save(room);
        return ResponseEntity.ok(room);
    }

    @PutMapping("empty/{id}")
    public ResponseEntity<Room> updateForEmpty(@PathVariable long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));

        room.setDoluBos("0");
        room.setGun(0);
        room.setOdenecekTutar(room.getFiyat() * 0);
        roomRepository.save(room);
        return ResponseEntity.ok(room);
    }
}
