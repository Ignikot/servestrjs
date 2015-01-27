'use strict';

// Declare app level module which depends on views, and components
angular.module('servestrApp', [
  'ngRoute',
  'servestrApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
