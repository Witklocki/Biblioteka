package com.projekt.students;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

        @RequestMapping("/management/hello")
@RestController

public class HelloManagementController {

    private static final List<Student> STUDENTS = Arrays.asList(
            new Student(1 , "test 1"),
            new Student(2 , "test 2"),
            new Student(3 , "test 3")
    );
    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STUDENT')")
    public List<Student> getAllStudents() {
        return STUDENTS;
    }
    @PostMapping
    @PreAuthorize("hasAuthority('student:write')")
    public void registerNewStudent (@RequestBody Student student){
        System.out.print("registerNewStudent");
    }
    @DeleteMapping(path = "{studentId}")
    @PreAuthorize("hasAuthority('student:write')")
    public void deleteStudent (@PathVariable("studentId") @RequestBody Integer studentId){
        System.out.print("deleteStudent");
    }
}
