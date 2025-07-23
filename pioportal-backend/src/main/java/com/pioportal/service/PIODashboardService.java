package com.example.service;

import com.example.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PioDashboardService {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private AppealRepository appealRepository;

    @Autowired
    private AdditionalPaymentRepository additionalPaymentRepository;

    @Autowired
    private CommentsCPIORepository commentsCPIORepository;

    @Autowired
    private PIODetailsRepository pioDetailsRepository;

    @Autowired
    private ReminderDPIORepository reminderDPIORepository;

    public Map<String, Object> getDashboardSummary(Integer pioId, String orgCode) {
        Map<String, Object> response = new HashMap<>();

        // You should write custom @Query methods in RequestRepository for the below
        response.put("pendingFor20Days", requestRepository.countPendingMoreThan20Days(pioId));
        response.put("disposeWithin5Days", requestRepository.countDisposeWithin5Days(pioId));
        response.put("newRequests", requestRepository.countNewRequests(pioId));
        response.put("underProcess", requestRepository.countUnderProcess(pioId));

        Map<String, Object> additionalPayment = new HashMap<>();
        additionalPayment.put("demanded", requestRepository.countAdditionalPaymentDemanded(pioId));
        additionalPayment.put("received", requestRepository.countAdditionalPaymentReceived(pioId));
        response.put("additionalPayment", additionalPayment);

        Map<String, Object> actions = new HashMap<>();
        actions.put("thirdPartyInfo", requestRepository.countThirdPartyInfo(pioId));
        actions.put("documentsCalled", requestRepository.countDocumentsCalled(pioId, orgCode));
        response.put("actions", actions);

        Map<String, Object> commentsByAA = new HashMap<>();
        commentsByAA.put("sought", appealRepository.countCommentsSought(pioId, orgCode));
        commentsByAA.put("pioComments", appealRepository.countCommentsGiven(pioId));
        response.put("commentsByAA", commentsByAA);

        Map<String, Object> appeals = new HashMap<>();
        appeals.put("raised", appealRepository.countAppealsRaised(pioId));
        appeals.put("disposed", appealRepository.countAppealsDisposed(pioId));
        response.put("appeals", appeals);

        Map<String, Object> rtiRequests = new HashMap<>();
        rtiRequests.put("total", requestRepository.countByPioId(pioId));
        rtiRequests.put("disposed", requestRepository.countDisposed(pioId));
        rtiRequests.put("pending", requestRepository.countByPioIdAndClosingDateIsNull(pioId));
        response.put("rtiRequests", rtiRequests);

        return response;
    }
}
