SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests 
JOIN students ON students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1;


--Why doesn't this work with cohort.name?
-- select MAX(average_assistance_time)
-- FROM (SELECT avg(completed_at-started_at) AS average_assistance_time
-- FROM assistance_requests
-- JOIN students ON students.id = student_id
-- JOIN cohorts ON students.cohort_id = cohorts.id
-- GROUP BY cohorts.name
-- ORDER BY average_assistance_time
-- ) AS max_time ;