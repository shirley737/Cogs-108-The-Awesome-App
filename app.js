
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Example route
// app.get('/users', user.list);
app.get('/', index.login)
app.get('/homePage', index.homePage)
app.get('/budgetPlan', index.budgetPlan)
app.get('/history', index.history)
app.get('/budgetTracker', index.budgetTracker)
app.get('/buySell', index.buySell)
app.get('/buySell2', index.buySell2)
app.get('/buyers', index.buyers)
app.get('/sellers', index.sellers)
app.get('/buySell3', index.buySell3)
app.get('/profile', index.profile)
app.get('/requestReceived2', index.requestReceived2)
app.get('/RequestAccepted', index.RequestAccepted)
app.get('/inbox', index.inbox)
app.get('/contactSeller', index.contactSeller)
app.get('/print', index.print)
app.get('/message1', index.message1)
app.get('/message2', index.message2)
app.get('/message3', index.message3)
app.get('/message4', index.message4)
app.get('/buySellPageB', index.buySellPageB)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
