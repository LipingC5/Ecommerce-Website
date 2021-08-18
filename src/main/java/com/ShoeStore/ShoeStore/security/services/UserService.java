package com.ShoeStore.ShoeStore.security.services;

import com.ShoeStore.ShoeStore.security.models.User;

public interface UserService {
	public User addUser(User user);
	public User getUser(int userId);
	public User getUserByUserName(String username);
	public User updateUser(User user,int id);
}
