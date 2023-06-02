-- Get all meals
SELECT
	title
FROM
	meal;
-- Add a new meal
INSERT
	INTO
	meal(title,
	description,
	location,
	`when`,
	max_reservations,
	price)
VALUES ('Pasta',
'awful pasta',
'Copenhagen',
'2023-10-10 20:00:00',
10,
90.99);
-- Get a meal with any id, fx 1
SELECT
	title
FROM
	meal
WHERE
	id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
	meal
SET
	description = 'delicious pasta'
WHERE
	id = 1;
-- Delete a meal with any id, fx 1
DELETE
FROM
	meal
WHERE
	id = 1;
-- Get all reservations
SELECT
	*
FROM
	reservation;
-- Add a new reservation
INSERT
	INTO
	reservation(number_of_guests,
	meal_id,
	contact_phonenumber,
	contact_name,
	contact_email)
VALUES (5,
1,
'10203040',
'John Smith',
'smith@email.com');
-- Get a reservation with any id, fx 1
SELECT
	*
FROM
	reservation
WHERE
	id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
	reservation
SET
	number_of_guests = 3
WHERE
	id = 1;
-- Delete a reservation with any id, fx 1
DELETE
FROM
	reservation
WHERE
	id = 1;
-- Get all reviews
SELECT
	*
FROM
	review;
-- Add a new review
INSERT
	INTO
	review(title,
	description,
	meal_id,
	stars)
VALUES('amazing',
'an amazing meal',
1,
5);
-- Get a review with any id, fx 1
SELECT
	*
FROM
	review
WHERE
	id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
	review
SET
	title = 'excellent'
WHERE
	id = 1;
-- Delete a review with any id, fx 1
DELETE
FROM
	review
WHERE
	id = 1;
-- Add a couple of different meals, reservations and reviews with different attributes
INSERT
	INTO
	meal(title,
	description,
	location,
	`when`,
	max_reservations,
	price)
VALUES ('Rød grød med fløde',
'sweet dessert',
'Roskilde',
'2023-06-18 18:00:00',
2,
30.99),
('Salad',
'salad with seasonal vegetables',
'Ringsted',
'2023-12-12 19:30:00',
20,
60.00)
;

INSERT
	INTO
	reservation(number_of_guests,
	meal_id,
	contact_phonenumber,
	contact_name,
	contact_email)
VALUES (1,
2,
'10203040',
'John Smith',
'smith@email.com'),
(7,
3,
'12345678',
'Jane Doe',
'jane@email.com')
;

INSERT
	INTO
	review(title,
	description,
	meal_id,
	stars)
VALUES('fine',
'the meal was mediocre',
2,
2),
('bad',
'an awful meal',
3,
1);
-- Get meals that has a price smaller than a specific price fx 90
SELECT
	title
FROM
	meal
WHERE
	price <= 90;
-- Get meals that still has available reservations
SELECT
	m.title,
	m.max_reservations,
	SUM(r.number_of_guests) AS total_reserved_yet,
	m.max_reservations - SUM(r.number_of_guests) AS available_reservations
FROM
	meal m
JOIN reservation r ON
	m.id = r.meal_id
GROUP BY
	r.meal_id
HAVING
	available_reservations > 0;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
	title
FROM
	meal
WHERE
	title LIKE "%Rød grød med%";
-- Get meals that has been created between two dates
SELECT
	title
FROM
	meal
WHERE
	created_date BETWEEN '2023-05-20' AND '2023-06-20';
-- Get only specific number of meals fx return only 5 meals
SELECT
	title
FROM
	meal
LIMIT 2;
-- Get the meals that have good reviews
SELECT
	m.title
FROM
	meal m
INNER JOIN review r ON
	r.meal_id = m.id
WHERE
	r.stars >= 4;
-- Get reservations for a specific meal sorted by created_date
SELECT
	m.title, r.created_date
FROM
	meal m
INNER JOIN reservation r ON
	r.meal_id = m.id
WHERE
	m.id = 3
ORDER BY
	r.created_date;
-- Sort all meals by average number of stars in the reviews
SELECT
	r.meal_id,
	m.title,
	m.description,
	ROUND(AVG(r.stars), 2) AS average_stars
FROM
	meal m
INNER JOIN review r ON
	m.id = r.meal_id
GROUP BY
	m.id
ORDER BY
	average_stars ASC;