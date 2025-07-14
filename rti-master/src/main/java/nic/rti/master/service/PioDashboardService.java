package nic.rti.master.service;

import nic.rti.master.dto.PioDashboardSummary;
import nic.rti.master.dto.PioDashboardSummary.Actions;
import nic.rti.master.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PioDashboardService {

    private final RequestRepository requestRepository;

    @Autowired
    public PioDashboardService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public PioDashboardSummary getPioDashboardSummary(Integer pioId, String orgCode) {
        PioDashboardSummary summary = new PioDashboardSummary();

        Actions actions = new Actions();
        actions.setThirdPartyInfo(requestRepository.countThirdPartyInfoRequired(pioId));
        actions.setDocumentsCalled(requestRepository.countDocumentsCalled(pioId, orgCode));
        actions.setDocumentsReceived(requestRepository.countDocumentsReceived(pioId, orgCode));

        summary.setActions(actions);

        return summary;
    }
}
