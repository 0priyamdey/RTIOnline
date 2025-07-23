package nic.rti.master.dao;

import nic.rti.master.entity.ReminderDPIO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReminderDPIORepository extends JpaRepository<ReminderDPIO, String> {

    @Query(value = "SELECT COUNT(R.registration_no) FROM \"RTIMIS\".\"reminderDPIO\" R JOIN \"RTIMIS\".\"DPIODetails\" D ON R.dpio_id = D.\"DPIOCode\" WHERE R.pio_id = :pioId AND R.reply IS NOT NULL", nativeQuery = true)
    Long countNewAcknowledgementsFromDPIO(@Param("pioId") Integer pioId);
}
