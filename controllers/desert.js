var desert = require('../models/desert');
// List of all deserts
exports.desert_list = function(req, res) {
res.send('NOT IMPLEMENTED: desert list');
};
// for a specific desert.
exports.desert_detail = function(req, res) {
res.send('NOT IMPLEMENTED: desert detail: ' + req.params.id);
};
// Handle desert create on POST.
exports.desert_create_post = async function(req, res) {
    console.log(req.body)
    let document = new desert();
    document.desert_type = req.body.desert_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
// Handle desert delete form on DELETE.
exports.desert_delete = function(req, res) {
res.send('NOT IMPLEMENTED: desert delete DELETE ' + req.params.id);
};
// Handle desert update form on PUT.
exports.desert_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: desert update PUT' + req.params.id);
};
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
    // VIEWS
// Handle a show all view
exports.desert_view_all_Page = async function(req, res) {
    try{
    thedeserts = await desert.find();
    res.render('desert', { title: 'desert Search Results', results: thedeserts });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    };

    // Handle Costume create on POST.
    
    
}