'use strict';

angular.module('myConfig', []).constant('config', {
    'htmlFilePath': 'public/html',
    'imageFilePath': 'public/images'
});
    // .constant('htmlFilePath', 'public/html')
    // .constant('imageFilePath', 'public/images');

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