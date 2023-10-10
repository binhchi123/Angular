
CREATE DATABASE `deestore` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;


CREATE TABLE IF NOT EXISTS `category` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100),
  `status` TINYINT DEFAULT 0
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `product` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100),
  `img` VARCHAR(100),
  `price` FLOAT(10,3),
  `sale` FLOAT(10,3),
  `status` TINYINT DEFAULT 0,
  `description` VARCHAR(255),
  `category_id` INT,
   FOREIGN KEY (category_id) REFERENCES product(id)
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `account` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `email` VARCHAR(255),
  `password` varchar(255) NOT NULL,
  `role` varchar(255),
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `order` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(255),
  `phone` varchar(255),
  `address` varchar(255),
  `order_note` varchar(255),
  `shipping_method` varchar(255),
  `payment_method` varchar(255),
  `account_id` INT,
  `status` TINYINT DEFAULT 0,
  FOREIGN KEY (account_id) REFERENCES account(id)
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `order_detail` (
  `product_id` INT PRIMARY KEY,
  `order_id` INT PRIMARY KEY,
  `quantity` INT,
  `price` FLOAT(10,3),
  FOREIGN KEY (order_id) REFERENCES order(id),
  FOREIGN KEY (product_id) REFERENCES product(id)
) ENGINE = InnoDB;




