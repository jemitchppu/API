const getTeams = "SELECT * FROM teams";
const getTeamsById = "SELECT * FROM teams WHERE id =$1";
//const getTeamsByName = "SELECT * FROM teams WHERE teamname = $2";
//const getTeamsByCity = "SELECT * FROM teams WHERE teamcity =$3";
const insertTeams = "INSERT INTO teams (id, teamname, teamcity) VALUES($1, $2, $3)";

const updateCity = "UPDATE teams set teamcity = $2, teamname = $3 WHERE id =$1";
//const updateName= "UPDATE teams set teamname = $2 WHERE id = $1"

module.exports = {
    getTeams,
    getTeamsById,
    //getTeamsByName,
    //getTeamsByCity,
    insertTeams,
    updateCity,
};