package com.alphahat.main.repository;



import org.springframework.data.jpa.repository.JpaRepository;


import com.alphahat.main.model.Role;
import com.alphahat.main.model.RoleName;

import java.util.Optional;


public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}