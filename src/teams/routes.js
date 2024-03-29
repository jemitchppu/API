const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTeams);
router.get('/:id', controller.getTeamsById);
//router.get('/:teamname', controller.getTeamsByName);
//router.get('/:teamcity', controller.getTeamsByCity);
router.post('/', controller.insertTeams);

router.put('/',controller.updateCity);




module.exports = router;