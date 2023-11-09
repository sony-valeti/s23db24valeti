var express = require('express');
const desert_controllers= require('../controllers/desert');
var router = express.Router();
/* GET costumes */
router.get('/', desert_controllers.desert_view_all_Page);
module.exports = router;