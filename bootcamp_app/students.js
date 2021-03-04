const { Pool } = require('pg'); //using pool is preferred over { Client }

//configuration object
const pool = new Pool({ 
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


// pool.query is a function that accepts an SQL query as a JavaScript string
// returns a promise that contains our result when the query is successful
const cohort = process.argv[2];
const limit = process.argv[3];
pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, [`%${cohort}%`, limit])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));

