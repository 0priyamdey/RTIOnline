package nic.rti.master.dao;

import nic.rti.master.entity.Appeal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppealRepository extends JpaRepository<Appeal, String> {

    @Query(value = "SELECT COUNT(*) FROM ( " +
            "SELECT A.registration_no FROM \"RTIMIS\".\"appeal\" A LEFT JOIN \"RTIMIS\".\"Request\" R ON TRIM(A.request_no) = TRIM(R.registration_no) " +
            "WHERE R.pio_id = (SELECT pio_id FROM \"RTIMIS\".\"PIODetails\" WHERE pio_id = :pioId AND \"ActiveIdle\" = 'Y') AND CPIO_app = 0 " +
            "UNION " +
            "SELECT registration_no FROM \"RTIMIS\".\"appeal\" WHERE cpio_app = (SELECT \"PIOCode\" FROM \"RTIMIS\".\"PIODetails\" WHERE pio_id = :pioId AND \"ActiveIdle\" = 'Y') " +
            ") AS appeal_data", nativeQuery = true)
    Long countAppealsRaised(@Param("pioId") Integer pioId);

    @Query(value = "SELECT COUNT(*) FROM ( " +
            "SELECT A.registration_no FROM \"RTIMIS\".\"appeal\" A LEFT JOIN \"RTIMIS\".\"Request\" R ON TRIM(A.request_no) = TRIM(R.registration_no) " +
            "WHERE R.pio_id = (SELECT pio_id FROM \"RTIMIS\".\"PIODetails\" WHERE pio_id = :pioId AND \"ActiveIdle\" = 'Y') AND CPIO_app = 0 AND A.closing_date IS NOT NULL " +
            "UNION " +
            "SELECT registration_no FROM \"RTIMIS\".\"appeal\" WHERE cpio_app = (SELECT \"PIOCode\" FROM \"RTIMIS\".\"PIODetails\" WHERE pio_id = :pioId AND \"ActiveIdle\" = 'Y') AND closing_date IS NOT NULL " +
            ") AS disposed_data", nativeQuery = true)
    Long countAppealsDisposed(@Param("pioId") Integer pioId);
}
