package com.projekt.repo;

import com.projekt.tables.AuthorTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthorRepository extends JpaRepository<AuthorTable, Long> {

    List<AuthorTable> findByName(String name);
}
