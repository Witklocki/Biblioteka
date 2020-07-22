package com.projekt.secuity;

import com.google.common.collect.Sets;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.projekt.secuity.ApplicationUserPermission.*;

public enum ApplicationUserRole {
    NONE(Sets.newHashSet()),
    ADMIN(Sets.newHashSet(BOOK_READ,BOOK_WRITE,AUTHOR_READ,AUTHOR_WRITE)),
    STUDENT(Sets.newHashSet(AUTHOR_READ,BOOK_READ));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getGrantedAuthority(){
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_"+this.name() ));
        return permissions;
    }
}
