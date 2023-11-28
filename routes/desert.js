var express = require('express');
const desert_controllers= require('../controllers/desert');
var router = express.Router();
const passport = require('passport');
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET deserts */
router.get('/', desert_controllers.desert_view_all_Page);
/* GET detail costume page */
router.get('/detail', secured,  desert_controllers.desert_view_one_Page);
/* GET create costume page */
router.get('/create', secured,  desert_controllers.desert_create_Page);
/* GET create update page */
router.get('/update', secured, desert_controllers.desert_update_Page);
/* GET delete costume page */
router.get('/delete', secured,  desert_controllers.desert_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });   

module.exports = router;
