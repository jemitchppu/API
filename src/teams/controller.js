const pool = require('../../db');
const queries = require('./queries');


//Get all data
const getTeams = (req,res) => {
    pool.query(queries.getTeams,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//get team by id
const getTeamsById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTeamsById,[id], (error, results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    })
}

//get team by name
/*const getTeamsByName = (req,res) => {
    const name = parseInt(req.params.teamname);
    pool.query(queries.getTeamsByName,[teamname], (error, results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    })
}

//get team by id
const getTeamsByCity = (req,res) => {
    const city = req.params.teamcity;
    pool.query(queries.getTeamsByCity,[teamcity], (error, results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    })
}*/


//insert teams
const insertTeams = (req,res) => {
    const {id, teamname, teamcity} = req.body;
    pool.query(queries.insertTeams,[id, teamname, teamcity], (error, results)=>{
        if(error)throw error;
        res.status(200).send("Added new team successfully");
    })
}

/*
const insertCity = (req,res) => {
    const {id, teamcity} = req.body;
    pool.query(queries.insertTeams,[id, teamcity], (error, results)=>{
        if(error)throw error;
        res.status(200).send("Added new City successfully");
    })
}


const insertTeamName = (req,res) => {
    const {id, teamnames} = req.body;
    pool.query(queries.insertTeams,[id, teamnames], (error, results)=>{
        if(error)throw error;
        res.status(200).send("Added new teamname successfully");
    })
}

*/
//update city
const updateCity = (req,res) => {
    //const teamcity = parseInt(req.params.teamcity);
    const { id, teamcity, teamname} = req.body;
    pool.query(queries.updateCity, [ id, teamcity, teamname],(error,results)=> {
        if(error)throw error;
        res.status(200).send("Updated team city successfully");
    })
}

/*
//update city
const updateName = (req,res) => {
    //const id = parseInt(req.params.teamname);
    const { teamname, id} = req.body;
    pool.query(queries.updateName, [ teamname, id],(error,results)=> {
        if(error)throw error;
        res.status(200).send("Updated team name successfully");
    })
}
*/

module.exports = {
    getTeams,
    getTeamsById,
    //getTeamsByName,
    //getTeamsByCity,
    insertTeams,
    updateCity,
};
