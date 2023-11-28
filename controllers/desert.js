var desert = require('../models/desert');
// List of all deserts
// List of all deserts
exports.desert_list = async function(req, res) {
    try{
        thedeserts = await desert.find();
        res.send(thedeserts);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
   };
// for a specific desert.
exports.desert_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await desert.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle desert create on POST.
exports.desert_create_post = async function(req, res) {
    console.log(req.body)
    let document = new desert();
    document.desert_type = req.body.desert_type;
    document.price = req.body.price;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle desert delete form on DELETE.
// Handle desert delete on DELETE.
exports.desert_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await desert.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)    
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle desert update form on PUT.
// Handle desert update form on PUT.
exports.desert_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await desert.findById( req.params.id)
 // Do updates of properties
 if(req.body.desert_type)toUpdate.desert_type = req.body.desert_type;
 if(req.body.price) toUpdate.price = req.body.price;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

exports.desert_view_all_Page = async function(req, res) {
    try{
    thedesert = await desert.find();
    res.render('desert', { title: 'desert Search Results', results: thedesert });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle a show one view with id specified by query
exports.desert_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await desert.findById( req.query.id)
    res.render('desertdetail',
   { title: 'desert Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a desert.
// No body, no in path parameter, no query.
// Does not need to be async
exports.desert_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('desertcreate', { title: 'desert Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    // Handle building the view for updating a desert.
// query provides the id
exports.desert_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await desert.findById(req.query.id)
        res.render('desertupdate', { title: 'desert Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
    };
   // Handle a delete one view with id from query
exports.desert_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await desert.findById(req.query.id)
    res.render('desertdelete', { title: 'desert Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   
    