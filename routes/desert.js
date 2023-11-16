var express = require('express');
const desert_controllers= require('../controllers/desert');
var router = express.Router();
/* GET deserts */
router.get('/', desert_controllers.desert_view_all_Page);
/* GET detail costume page */
router.get('/detail', desert_controllers.desert_view_one_Page);
/* GET create costume page */
router.get('/create', desert_controllers.desert_create_Page);
/* GET create update page */
router.get('/update', desert_controllers.desert_update_Page);
module.exports = router;
