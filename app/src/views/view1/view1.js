"use strict";

angular.module('myApp.view1', ['ngRoute', 'myApp.config'])

.config(['$routeProvider', 'config', function($routeProvider, config) {
    $routeProvider.when('/view1', {
        templateUrl: config.HTML_PATH + 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        },
        {
            name: 'MOTOROLA',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
}]);