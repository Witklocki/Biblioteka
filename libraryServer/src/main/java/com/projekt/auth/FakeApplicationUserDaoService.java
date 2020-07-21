package com.projekt.auth;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static com.projekt.secuity.ApplicationUserRole.*;
@Repository("fake")

public class FakeApplicationUserDaoService implements ApplicationUseDao{

    private final PasswordEncoder passwordEncoder;
    @Autowired
    public FakeApplicationUserDaoService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
        return getApplicationUsers()
                .stream()
                .filter(applicationUser -> username.equals(applicationUser.getUsername()))
                .findFirst();
    }
    private List<ApplicationUser> getApplicationUsers(){
        List<ApplicationUser> applicationUsers = Lists.newArrayList(
                new ApplicationUser(
                        STUDENT.getGrantedAuthority(),
                        passwordEncoder.encode("user"),
                        "user",
                        true,
                        true,
                        true,
                        true
                ),
                new ApplicationUser(
                        ADMIN.getGrantedAuthority(),
                        passwordEncoder.encode("admin"),
                        "admin",
                        true,
                        true,
                        true,
                        true
                )
                
        );
        return applicationUsers;
    }

}
