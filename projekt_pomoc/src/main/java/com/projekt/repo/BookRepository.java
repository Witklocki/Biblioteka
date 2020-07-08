package com.projekt.repo;

import com.projekt.tables.BookTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookTable, Long> {
}
