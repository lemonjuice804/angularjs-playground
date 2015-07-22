'use strict';

angular.module('myApp.config', [])
.constant('config', {
    HTML_PATH: 'public/html/',
    IMG_PATH: 'public/images/'
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.homepage',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.author'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]);