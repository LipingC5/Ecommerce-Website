package com.ShoeStore.ShoeStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ShoeStore.ShoeStore.models.PaymentForm;

public interface PaymentFormRepository extends JpaRepository<PaymentForm, Integer> {

}
