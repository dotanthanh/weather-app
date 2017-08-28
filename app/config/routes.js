var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var HashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var StartPageContainer = require('../containers/StartPageContainer');
var Main = require('../components/Main');
var ForecastContainer = require('../containers/ForecastContainer');
var ForecastDetail = require('../components/ForecastDetail');

var Routes = (
  <Router history={HashHistory} >
    <Route path='/' component={Main}>
      <IndexRoute component={StartPageContainer} />
      <Route path='/forecast/:city' component={ForecastContainer} />
      <Route path='/detail/:city' component={ForecastDetail} />
    </Route>
  </Router>
);

module.exports = Routes;
