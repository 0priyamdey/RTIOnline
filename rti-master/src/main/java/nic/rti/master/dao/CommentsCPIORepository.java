package nic.rti.master.dao;

import nic.rti.master.entity.CommentsCPIO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsCPIORepository extends JpaRepository<CommentsCPIO, String> {

    @Query(value = "SELECT COUNT(A.registration_no) FROM \"RTIMIS\".\"appeal\" A NATURAL JOIN \"RTIMIS\".\"commentscpio\" C WHERE A.cpio_app = :pioId AND A.org_code = :orgCode AND A.closing_date IS NULL AND C.flag = 'S'", nativeQuery = true)
    Long countCommentsSoughtByAA(@Param("pioId") Integer pioId, @Param("orgCode") String orgCode);

    @Query(value = "SELECT COUNT(DISTINCT A.registration_no) FROM \"RTIMIS\".\"commentscpio\" C JOIN \"RTIMIS\".\"appeal\" A ON C.registration_no = A.registration_no WHERE C.flag = 'R' AND A.closing_date IS NULL AND A.cpio_app = :pioId", nativeQuery = true)
    Long countCommentsGivenByPIO(@Param("pioId") Integer pioId);
}
