"use strict";

angular.module('myApp.homepage', ['ngRoute', 'myApp.config'])

.config(['$routeProvider', 'config', function($routeProvider, config) {
  $routeProvider.when('/home', {
    templateUrl: config.HTML_PATH + 'homepage/homepage.html',
    controller: 'HomepageCtrl'
  });
}])

.controller('HomepageCtrl', ['$scope', 'config', function($scope, cfg) {
    $scope.imgSrc = cfg.IMG_PATH;
}]);