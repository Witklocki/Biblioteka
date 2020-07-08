package com.projekt.repo;

import com.projekt.tables.BookTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<BookTable, Long> {

//    findByBookName - camelcase everywhere!
    List<BookTable> findBybookName(String bookName);
}
