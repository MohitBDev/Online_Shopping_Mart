package ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.entities.Order;
import ecommerce.entities.OrderDetails;
import ecommerce.entities.Product;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {
	List<OrderDetails> findByOrder(Order order);

	OrderDetails getByOrder(Order order);

	void deleteByProduct(Product p);
}
