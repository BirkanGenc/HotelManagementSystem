package com.example.demo.controller;


import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @PostMapping
    public Customer create(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @PostMapping("login")
    public Customer login(@RequestBody Customer customer) {
        List<Customer> customerList = customerRepository.findAll();

        for (var gor:customerList) {
            if(gor.getMail().equals(customer.getMail()) && gor.getPassword().equals(customer.getPassword())) {
                return gor;
            }
        }
        return new Customer(-1,0,0,"","","");
    }

    @GetMapping("{id}")
    public ResponseEntity<Customer> getById(@PathVariable long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));
        return ResponseEntity.ok(customer);
    }

    @PutMapping("{id}")
    public ResponseEntity<Customer> update(@PathVariable long id, @RequestBody Customer customer) {
        Customer customerById = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));

        customerById.setMail(customer.getMail());
        customerById.setAd(customer.getAd());
        customerById.setPassword(customer.getPassword());
        customerById.setTckn(customer.getTckn());
        customerById.setTel(customer.getTel());
        customerRepository.save(customerById);

        return ResponseEntity.ok(customerById);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not exist"));

        customerRepository.delete(customer);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
