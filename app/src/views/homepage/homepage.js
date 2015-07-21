"use strict";

angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'public/html/homepage/homepage.html',
    controller: 'HomepageCtrl'
  });
}])

.controller('HomepageCtrl', [function() {

}]);