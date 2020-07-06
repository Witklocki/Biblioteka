package com.projekt;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AutorRepo extends JpaRepository<AuthorTable,Long>{
    List<AuthorTable> findByName(String Name);
}
