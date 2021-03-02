-- SELECT sum(completed_at-created_at) / (SELECT count(completed_at-created_at)
-- FROM assistance_requests) as average_assistance_request_duration 
-- FROM assistance_requests;

SELECT avg(completed_at - started_at) as average_assistance_request_duration
FROM assistance_requests;
