-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT DISTINCT 
	t.title
FROM
	task t
INNER JOIN user_task ut ON
	t.id IN (
	SELECT
		ut.task_id
	FROM
		user_task ut
	INNER JOIN user u ON
		ut.user_id = u.id
	WHERE
		u.email LIKE '%@spotify.com');
-- Get all the tasks for 'Donald Duck' with status 'Not started'
	SELECT
	t.title
FROM
	task t
INNER JOIN user_task ut ON
	t.id = ut.task_id
INNER JOIN user u ON
	u.id = ut.user_id
INNER JOIN status s ON
	s.id = t.status_id
WHERE
	u.name = 'Donald Duck'
	AND s.name = 'Not started';
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
	t.title
FROM
	task t
INNER JOIN user_task ut ON
	t.id = ut.task_id
INNER JOIN user u ON
	u.id = ut.user_id
WHERE u.name = 'Maryrose Meadows'
AND month(created) = 09;
-- Find how many tasks where created in each month
SELECT
	COUNT(t.title) AS total,
	month(created) AS month
FROM
	task t
GROUP BY
	month(created);
	