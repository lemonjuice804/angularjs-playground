"use strict";

angular.module('myApp.view2', ['ngRoute', 'myApp.config'])

.config(['$routeProvider', 'config', function($routeProvider, config) {
  $routeProvider.when('/view2', {
    templateUrl: config.HTML_PATH + 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);