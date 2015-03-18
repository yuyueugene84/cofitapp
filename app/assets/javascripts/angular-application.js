//load the current file before it loads the other files in angular folder
//= require_self

//load all files in /angular folder
//= require_tree ./angular

var CofitApp = angular.module("CofitApp", [
  // 'ui.router',
  // 'ngRoute',
  //controllers
  //'CofitCtrl'
]);

CofitApp.config([
  '$stateProvider',
  '$httpProvider',
  '$routeProvider',

function($stateProvider, $routeProvider, $httpProvider)

{
  var headers = $httpProvider.defaults.headers.common;

  headers['X-CSRF-TOKEN'] = document.querySelector("meta[name=csrf-token]").content;
  headers.defaults.headers.common.Accept = "application/json";
  headers['X-Requested-With'] = 'XMLHttpRequest';

  $routeProvider.
      when('/users', {
        templateUrl: '/views/users/index.html',
        controller: 'CofitCtrl'
      }).
      when('/users/:id', {
        templateUrl: '/views/users/show.html',
        controller: 'CofitUserCtrl'
      }).
      otherwise({
        redirectTo: '/users'
      });

}]);
