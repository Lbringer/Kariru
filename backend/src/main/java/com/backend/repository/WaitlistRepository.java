package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.Waitlist;

@Repository
public interface WaitlistRepository extends JpaRepository<Waitlist,Long> {

}
