CREATE VIEW users_tasks AS 
SELECT
	t.*,
	ut.*,
	u.name,
	u.email,
	s.name AS status_name
FROM
	task t
INNER JOIN user_task ut ON
	t.id = ut.task_id
INNER JOIN user u ON
	ut.user_id = u.id
INNER JOIN status s ON
	s.id = t.status_id;
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT 
	title
FROM
	users_tasks
	WHERE
		email LIKE '%@spotify.com';
-- Get all the tasks for 'Donald Duck' with status 'Not started'
	SELECT
	title
FROM
	users_tasks
WHERE
	name = 'Donald Duck'
	AND status_name = 'Not started';
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
	title
FROM
	users_tasks
WHERE name = 'Maryrose Meadows'
AND month(created) = 09;
-- Find how many tasks where created in each month
SELECT
	COUNT(t.title) AS total,
	month(created) AS month
FROM
	task t
GROUP BY
	month(created);