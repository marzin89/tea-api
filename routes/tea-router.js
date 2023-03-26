const express       = require('express');
const router        = express.Router();
const teaController = require('../controllers/tea-controller');

router.get('/', teaController.getTeas);
router.get('/name/:name', teaController.getTeasByName);
router.get('/type/:type', teaController.getTeasByType);
router.get('/origin/:origin', teaController.getTeasByOrigin);
router.get('/id/:id', teaController.getTea);
router.get('/name/:name?/type/:type?/origin/:origin?', teaController.getTeasFilterParams);
router.post('/', teaController.addTea);
router.put('/id/:id', teaController.updateTea);
router.delete('/id/:id', teaController.deleteTea);

module.exports = router;
