const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTeams);
router.get('/:id', controller.getTeamsById);
//router.get('/:teamname', controller.getTeamsByName);
//router.get('/:teamcity', controller.getTeamsByCity);
router.post('/', controller.insertTeams);
router.post('/', controller.insertTeamName);
router.post('/', controller.insertCity);
router.put('/',controller.updateCity);
router.put('/',controller.updateName);



module.exports = router;