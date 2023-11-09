var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var desert_controller = require('../controllers/desert');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// desert ROUTES ///
// POST request for creating a desert.
router.post('/desert', desert_controller.desert_create_post);
// DELETE request to delete desert.
router.delete('/desert/:id', desert_controller.desert_delete);
// PUT request to update desert.
router.put('/desert/:id', desert_controller.desert_update_put);
// GET request for one desert.
router.get('/desert/:id', desert_controller.desert_detail);
// GET request for list of all desert items.
router.get('/desert', desert_controller.desert_list);
module.exports = router;