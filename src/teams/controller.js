const pool = require('../../db');
const queries = require('./queries');


//Get all data
const getTeams = (req,res) => {
    pool.query(queries.getTeams,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getTeams,
};
