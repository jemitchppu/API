const express = require("express");
const teamsRoutes = require("./src/teams/routes");

const app = express();
const port = 8003;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res)=> {
    res.send("Hello World");
});

//API Route
//example route http://localhost:8003/api/v1/teams
app.use("/api/v1/teams", teamsRoutes);

app.listen(port, () => console.log('running on ${port}'));
