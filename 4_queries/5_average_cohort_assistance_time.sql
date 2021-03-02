-- SELECT cohorts.name AS name, avg(completed_at - started_at) AS average_assistance_time
-- FROM assistance_requests
-- JOIN students ON students.id = student_id
-- JOIN cohorts ON students.cohort_id = cohorts.id
-- GROUP BY cohorts.name
-- ORDER BY average_assistance_time;


SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests 
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time;