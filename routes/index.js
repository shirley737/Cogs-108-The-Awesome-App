
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


