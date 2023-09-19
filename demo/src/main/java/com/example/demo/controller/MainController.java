package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    private String nome = "";

    @GetMapping(value="/add/{nome}")
    public void setNome(@PathVariable String nome){
        this.nome = nome;
    }

    @RequestMapping(value="/list")
    public String showNome(){
        return "O nome digitado foi " + this.nome;
    }

    public String getNome(){
        return this.nome;
    }
}
