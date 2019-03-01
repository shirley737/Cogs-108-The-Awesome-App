
// load JSON fake "database" file into the data variable
var data = require('../data.json');


exports.view = function(req, res){
  res.render('index', data);
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

exports.buyers = function(req, res){
  res.render('buyers',{
    "users": [
    { "imageURL": "http://lorempixel.com/100/100/people/9",
      "name": "Emi Oda",
      "amount": "$200"
    },
    { "imageURL": "http://lorempixel.com/100/100/people/10",
      "name": "Shirley Guo",
      "amount": "$500"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/8",
      "name": "Valerie Lopez",
      "amount": "$350"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/4",
      "name": "Tom Smith",
      "amount": "$80"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/5",
      "name": "Lily Mopley",
      "amount": "$640"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/6",
      "name": "Steven Lee",
      "amount": "$30"
    }
    ]
  });
};

exports.sellers = function(req, res){
  res.render('sellers',{
     "users": [
    { "imageURL": "http://lorempixel.com/100/100/people/9",
      "name": "Emi Oda",
      "amount": "$200"
    },
    { "imageURL": "http://lorempixel.com/100/100/people/10",
      "name": "Shirley Guo",
      "amount": "$500"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/8",
      "name": "Valerie Lopez",
      "amount": "$350"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/4",
      "name": "Tom Smith",
      "amount": "$80"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/5",
      "name": "Lily Mopley",
      "amount": "$640"
    },
    {
      "imageURL": "http://lorempixel.com/100/100/people/6",
      "name": "Steven Lee",
      "amount": "$30"
    }
    ]
  });
};

exports.buySell3 = function(req, res){
  res.render('buySell3');
};

exports.profile = function(req, res){
  res.render('profile');
};

exports.login = function(req, res){
  res.render('login');
};

exports.requestReceived2 = function(req, res){
  res.render('requestReceived2');
};

exports.RequestAccepted = function(req, res){
  res.render('RequestAccepted');
};

exports.inbox = function(req, res){
  res.render('inbox');
};

exports.contactSeller = function(req, res){
  res.render('contactSeller');
};

exports.print = function(req, res){
  res.render('print');
};

exports.message1 = function(req, res){
  res.render('message1');
};

exports.message2 = function(req, res){
  res.render('message2');
};

exports.message3 = function(req, res){
  res.render('message3');
};

exports.message4 = function(req, res){
  res.render('message4');
};

exports.buySellPageB = function(req, res){
  res.render('buySellpageB');
};
