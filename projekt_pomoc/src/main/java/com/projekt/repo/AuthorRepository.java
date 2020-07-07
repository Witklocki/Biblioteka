package com.projekt.repo;

import com.projekt.tables.AuthorTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<AuthorTable, Long> {
}
