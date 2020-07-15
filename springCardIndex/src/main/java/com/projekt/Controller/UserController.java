package com.projekt.Controller;

import com.projekt.repo.UserRepository;
import com.projekt.tables.UserTable;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping

public class UserController {

    private UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @PostMapping("/createUser")
    public ResponseEntity postUser(@RequestBody UserTable userTable){
        return new ResponseEntity(this.userRepository.save(userTable), HttpStatus.ACCEPTED);
    }
    @GetMapping("/getUser/{name}")
    public ResponseEntity getUser(@PathVariable(value = "name") @RequestBody String name){
        Optional<UserTable> optionalUserTable = userRepository.findByName(name);

        if (optionalUserTable.isPresent()){
            return new ResponseEntity(this.userRepository.findByName(name),HttpStatus.ACCEPTED);
//            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }
    @GetMapping("/getAllUsers")
    public List<UserTable> getAllUsers(){
        return userRepository.findAll();
    }
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity getUser(@PathVariable(value = "id") @RequestBody Long id) {
        Optional<UserTable> optionalUserTable = userRepository.findById(id);

        if (optionalUserTable.isPresent()) {
            this.userRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
