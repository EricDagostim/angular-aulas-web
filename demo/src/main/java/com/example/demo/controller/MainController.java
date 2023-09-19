package com.example.demo.controller;

import java.sql.Array;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    private String nome = "";
    

    ArrayList<String> convidados = new ArrayList<String>();


  
    // João Silva Xavier Pereira 0bf33b824502fd061e388d1a66566d98
    // Maria Santos Rosa Machado 018cce2808f152e871147666ceda13f1
    // Pedro Oliveira da Silva Mentes C1684a804be7534b9e4363359ccf229f
    // Ana Pereira de Oliveira Mello 6123ff798247b5ce99236ade746bb9ed
    // Luís Costa de Souza Santos 05e3e0e55e64b131ef4e2cc1169a8c50

    @GetMapping(value = "presenca/{token}")
    public void confirmToken(@PathVariable ArrayList<String> convidados) {
        this.convidados = convidados;
    }

    @GetMapping(value = "/add/{nome}")
    public void setNome(@PathVariable String nome) {
        this.nome = nome;
    }

    @RequestMapping(value = "/list")
    public String showNome() {
        return "O nome digitado foi " + this.nome;
    }

    public String getNome() {
        return this.nome;
    }

}
