package nic.rti.master.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PioDashboardSummary {

    private Long pendingFor20Days;
    private Long disposeWithin5Days;
    private Long newRequests;
    private Long underProcess;

    private Actions actions;

    private AdditionalPayment additionalPayment;

    @Data
    @NoArgsConstructor
    public static class Actions {
        private Long thirdPartyInfo;
        private Long documentsCalled;
        private Long documentsReceived;
    }

    @Data
    @NoArgsConstructor
    public static class AdditionalPayment {
        private Long demanded;
        private Long received;
    }
}
