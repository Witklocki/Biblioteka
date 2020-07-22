package com.projekt.auth;

import java.util.Optional;

public interface ApplicationUseDao {

    Optional<ApplicationUser> selectApplicationUserByUsername(String username);

}
