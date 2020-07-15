package com.projekt.repo;

import com.projekt.tables.UserTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository  extends JpaRepository<UserTable, Long> {
    Optional<UserTable> findByName(String name);
}
