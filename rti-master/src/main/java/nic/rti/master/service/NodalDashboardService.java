package nic.rti.master.service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import nic.rti.master.dto.NodalDashboardSummaryDTO;

@Service
public class NodalDashboardService {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional(readOnly = true)
    public NodalDashboardSummaryDTO getDashboardSummary(Integer orgCode) {
        // 1. New RTI Requests
        String newRequestsSql = "SELECT COUNT(*) FROM RTIMIS.\"Request\" r WHERE (r.pio_id IS NULL OR r.pio_id = '0') AND r.requeststatus = 'N' AND (r.currentactionstatus IN ('4M', '00') OR r.currentactionstatus IS NULL) AND r.closing_date IS NULL AND SUBSTRING(r.registration_no, 14, 1) <> '7' AND r.org_code = :orgCode";
        Number newRequests = (Number) entityManager.createNativeQuery(newRequestsSql)
                .setParameter("orgCode", orgCode)
                .getSingleResult();

        // 2. New Appeals
        String newAppealsSql = "SELECT COUNT(*) FROM RTIMIS.appeal a WHERE a.org_code = :orgCode AND (a.applid IS NULL OR a.applid IN ('0', '')) AND a.complaint_channel = 'W' AND a.closing_date IS NULL AND a.registration_no LIKE '%/6%'";
        Number newAppeals = (Number) entityManager.createNativeQuery(newAppealsSql)
                .setParameter("orgCode", orgCode)
                .getSingleResult();

        // 3. Document(s) Called
        String docReq1 = "SELECT COUNT(*) FROM RTIMIS.\"Request\" r WHERE r.currentactionstatus = '4L' AND r.closing_date IS NULL AND r.org_code = :orgCode";
        Number docReqCount1 = (Number) entityManager.createNativeQuery(docReq1)
                .setParameter("orgCode", orgCode)
                .getSingleResult();
        String docReq2 = "SELECT COUNT(*) FROM RTIMIS.appeal a JOIN (SELECT registration_no, MAX(action_srno) AS max_srno FROM RTIMIS.action_history GROUP BY registration_no) max_actions ON a.registration_no = max_actions.registration_no JOIN RTIMIS.action_history ah ON ah.registration_no = max_actions.registration_no AND ah.action_srno = max_actions.max_srno WHERE ah.action_status = '4L' AND a.closing_date IS NULL AND a.org_code = :orgCode";
        Number docReqCount2 = (Number) entityManager.createNativeQuery(docReq2)
                .setParameter("orgCode", orgCode)
                .getSingleResult();
        int documentRequests = docReqCount1.intValue() + docReqCount2.intValue();

        return NodalDashboardSummaryDTO.success(newRequests.intValue(), newAppeals.intValue(), documentRequests);
    }
} 