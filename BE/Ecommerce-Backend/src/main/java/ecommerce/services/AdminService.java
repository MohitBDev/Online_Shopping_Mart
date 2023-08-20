package ecommerce.services;

import ecommerce.entities.Admin;

public interface AdminService {
	Admin validate(String email,String pwd);
	void updateAdmin(Admin admin);
	long countAdmin();
}
