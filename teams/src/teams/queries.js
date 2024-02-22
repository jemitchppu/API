const getTeams = "SELECT * FROM teams";
const getTeamsById = "SELECT * FROM teams WHERE id =$1";
//const getTeamsByName = "SELECT * FROM teams WHERE teamname = $2";
//const getTeamsByCity = "SELECT * FROM teams WHERE teamcity =$3";
const insertTeams = "INSERT INTO teams (id, teamname, teamcity) VALUES($1, $2, $3)";
const insertCity = "INSERT INTO teams (id, teamcity) VALUES ($1, $3)";
const insertTeamName = "INSERT INTO teams (id, teamname) VALUES ($1, $2)";
const updateCity = "UPDATE teams set teamcity = $3 WHERE id =$1";
const updateName= "UPDATE teams set teamname = $2 WHERE id = $1"

module.exports = {
    getTeams,
    getTeamsById,
    //getTeamsByName,
    //getTeamsByCity,
    insertTeams,
    updateCity,
    updateName,
    insertCity,
    insertTeamName,
};