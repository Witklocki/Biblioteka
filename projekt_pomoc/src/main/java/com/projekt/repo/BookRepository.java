package com.projekt.repo;

import com.projekt.tables.BookTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<BookTable, Long> {

    List<BookTable> findBybookName(String bookName);
}
