package nic.rti.master.dao;


import nic.rti.master.entity.UserNodal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserNodal, Integer> {
    Optional<UserNodal> findByUsername(String username);
}
