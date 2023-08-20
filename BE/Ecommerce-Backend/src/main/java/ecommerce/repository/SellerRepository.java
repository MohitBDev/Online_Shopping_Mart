package ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.entities.Product;
import ecommerce.entities.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Integer> {
	
	Seller findByEmail(String email);

	

}
