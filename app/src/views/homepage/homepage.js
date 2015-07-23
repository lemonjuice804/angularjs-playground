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
    $scope.images = [{
        name: 'image1.jpg',
        alt: 'Alaska'
    }, {
        name: 'image2.jpg',
        alt: 'Alaska'
    }, {
        name: 'image3.jpg',
        alt: 'Alaska'
    }, {
        name: 'image4.jpg',
        alt: 'Alaska'
    }];
}]);