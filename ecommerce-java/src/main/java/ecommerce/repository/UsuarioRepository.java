package ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.ecommercejava.model.UsuarioEntity;

public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long>{
}
