
// load JSON fake "database" file into the data variable
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	response.render('index', data);
};


/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.homePage = function(req, res){
  res.render('homePage');
};

exports.budgetPlan = function(req, res){
  res.render('budgetPlan');
};

exports.history = function(req, res){
  res.render('history');
};

exports.budgetTracker = function(req, res){
  res.render('budgetTracker');
};

