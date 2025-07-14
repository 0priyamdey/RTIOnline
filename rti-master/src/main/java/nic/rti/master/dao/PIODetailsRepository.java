package nic.rti.master.repository;

import nic.rti.master.entity.PIODetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PIODetailsRepository extends JpaRepository<PIODetails, Integer> {
}
