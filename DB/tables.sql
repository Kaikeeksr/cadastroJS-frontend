CREATE DATABASE EMPLOYEES;

USE EMPLOYEES;

CREATE TABLE tbl_employees(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    employee_cpf VARCHAR(11) UNIQUE NOT NULL,
    employee_email VARCHAR(255) UNIQUE NOT NULL,
    employee_tel VARCHAR(12) NOT NULL,
    employee_departament ENUM('design', 'logistics', 'support', 'marketing'),
    employee_gender VARCHAR(1) NOT NULL,
    employee_wage DECIMAL(10, 2) 
);
