package com.ShoeStore.ShoeStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ShoeStore.ShoeStore.models.ShippingInfo;

public interface ShippingInfoRepository extends JpaRepository<ShippingInfo, Integer> {

}
