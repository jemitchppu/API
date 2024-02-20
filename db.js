const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jemitch",
    //user: "postgres",
    //host: "localhost",
    host:"dpg-cn5uefq1hbls73akre80-a",
    password: "rlR3HqZbeNqlmPyLRU8GrSwpCucgnCk0",
    database: "teams_ul9e",
    //database: "teams",
    port: 5432,
});

module.exports = pool;