package nic.rti.master.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NodalDashboardSummaryDTO {
    private String status;
    private DataDTO data;

    @Data
    @AllArgsConstructor
    public static class DataDTO {
        private int new_requests;
        private int new_appeals;
        private int document_requests;
    }

    public static NodalDashboardSummaryDTO success(int newRequests, int newAppeals, int documentRequests) {
        return new NodalDashboardSummaryDTO("success", new DataDTO(newRequests, newAppeals, documentRequests));
    }
} 