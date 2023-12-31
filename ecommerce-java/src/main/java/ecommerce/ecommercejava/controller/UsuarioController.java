package ecommerce.ecommercejava.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.ecommercejava.model.UsuarioEntity;
import ecommerce.repository.UsuarioRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepositorio;

    @GetMapping(value="/")
    public void get(){

    }

    @PostMapping(value = "/usuario")
    public ResponseEntity<UsuarioEntity> salvar (@RequestBody UsuarioEntity usuario){
        UsuarioEntity _user = usuarioRepositorio.save(usuario);
        return new ResponseEntity<UsuarioEntity>(_user, HttpStatus.CREATED);
    }
    
}
