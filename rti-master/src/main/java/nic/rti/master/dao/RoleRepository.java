package nic.rti.master.dao;

import nic.rti.master.entity.MyRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<MyRole, String> {
}
