package nic.rti.master.repository;

import nic.rti.master.entity.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends JpaRepository<Request, String> {

    @Query("""
        SELECT COUNT(r) 
        FROM Request r
        WHERE r.currentActionStatus = '4L' 
          AND r.pioId = :pioId 
          AND r.closingDate IS NULL 
          AND (:orgCode IS NULL OR r.orgCode = :orgCode)
        """)
    Long countDocumentsCalled(@Param("pioId") Integer pioId, @Param("orgCode") String orgCode);

    @Query("""
        SELECT COUNT(r) 
        FROM Request r
        WHERE r.currentActionStatus = '4M' 
          AND r.pioId = :pioId 
          AND r.closingDate IS NULL 
          AND (:orgCode IS NULL OR r.orgCode = :orgCode)
        """)
    Long countDocumentsReceived(@Param("pioId") Integer pioId, @Param("orgCode") String orgCode);

    @Query("""
        SELECT COUNT(r) 
        FROM Request r
        WHERE r.currentActionStatus = '4K' 
          AND r.pioId = :pioId 
          AND r.closingDate IS NULL
        """)
    Long countThirdPartyInfoRequired(@Param("pioId") Integer pioId);
}


