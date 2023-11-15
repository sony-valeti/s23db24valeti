var express = require('express');
const desert_controllers= require('../controllers/desert');
var router = express.Router();
/* GET deserts */
router.get('/', desert_controllers.desert_view_all_Page);
/* GET detail costume page */
router.get('/detail', desert_controllers.desert_view_one_Page);
module.exports = router;
