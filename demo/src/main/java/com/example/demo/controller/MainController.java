package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    
    ArrayList<String> confirmados = new ArrayList<>();
    Map<String, String> convidados = new HashMap<>(){{

        put("0bf33b824502fd061e388d1a66566d98", "João Silva Xavier Pereira");
        put("018cce2808f152e871147666ceda13f1", "Maria Santos Rosa Machado");
        put("C1684a804be7534b9e4363359ccf229f", "Pedro Oliveira da Silva Mentes");
        put("6123ff798247b5ce99236ade746bb9ed", "Ana Pereira de Oliveira Mello");
        put("05e3e0e55e64b131ef4e2cc1169a8c50", "Luis Costa de Souza Santos");
    }};

    @GetMapping(value = "adicionar/{token}")
    public void adicionarConvidado(@PathVariable String token){
        this.confirmados.add(convidados.get(token));
    }

    @RequestMapping(value = "/deletar")
    public void removerConvidados(){
        this.confirmados.clear();
    }

    @RequestMapping(value = "/list")
    public String Listar(){
        if(confirmados.isEmpty()){
            return "Lista vazia";
        }

        String listaConfirmados = String.join(", ", confirmados);
        return "Confirmados para a festa: " + listaConfirmados;
    }

}
