const { Pool } = require('pg'); //using pool is preferred over { Client }

//configuration object
const pool = new Pool({ 
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


//pool.query is a function that accepts an SQL query as a JavaScript string
//returns a promise that contains our result when the query is successful
const cohort = process.argv[2];
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers 
JOIN assistance_requests on teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
ORDER BY teachers.name
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));

//run: node teachers.js JUL02


