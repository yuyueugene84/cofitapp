//load the current file before it loads the other files in angular folder
//= require_self

//load all files in /angular folder
//= require_tree ./angular

CofitApp = angular.module("CofitApp", ["ui.router"]);
