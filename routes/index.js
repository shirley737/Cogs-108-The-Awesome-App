
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

exports.buySell = function(req, res){
  res.render('buySell');
};

exports.buySell2 = function(req, res){
  res.render('buySell2');
};

exports.buySell3 = function(req, res){
  res.render('buySell3');
};

exports.buySell4 = function(req, res){
  res.render('buySell4');
};

exports.buySell5 = function(req, res){
  res.render('buySell5');
};

exports.profile = function(req, res){
  res.render('profile');
};
