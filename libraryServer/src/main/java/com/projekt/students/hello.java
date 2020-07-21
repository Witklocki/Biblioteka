package com.projekt.students;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RequestMapping("/hello")
@RestController
public class hello {

    private static final List<Student> STUDENTS = Arrays.asList(
            new Student(1 , "test 1"),
            new Student(2 , "test 2"),
            new Student(3 , "test 3")
    );

    @GetMapping(path="{studentId}")
    public Student getStudent(@PathVariable("studentId") Integer studentId){
        return STUDENTS.stream()
                .filter(student -> studentId.equals(student.getStudentId()))
                .findFirst()
                .orElseThrow(()-> new IllegalStateException("Student "+ studentId +"does not exist"));
    }


}
