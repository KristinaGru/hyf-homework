DROP DATABASE IF EXISTS `meal_sharing`;

CREATE DATABASE IF NOT EXISTS `meal_sharing`;

USE `meal_sharing`;

CREATE TABLE `meal` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(50) NOT NULL,
  `description` TEXT,
  `location` VARCHAR(50),
  `when` DATETIME,
  `max_reservations` INT,
  `price` DECIMAL(10,
2),
  `created_date` DATE DEFAULT (CURRENT_DATE)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` INT,
  `meal_id` INT UNSIGNED NOT NULL,
  `created_date` DATE DEFAULT (CURRENT_DATE),
  `contact_phonenumber` VARCHAR(16),
  `contact_name` VARCHAR(32),
  `contact_email` VARCHAR(64),
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON
DELETE
	CASCADE ON
	UPDATE
		CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255),
  `description` TEXT,
  `meal_id` INT UNSIGNED NOT NULL,
  `stars` INT,
  `created_date` DATE DEFAULT (CURRENT_DATE),
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON
DELETE
	CASCADE ON
	UPDATE
		CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
