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
"use strict";

angular.module('myApp.author', [
    'myApp.author.author-directive'
])
.value('authorName', 'Jiayin Cheng')
.value('authorEmail', 'kcheng@riverbed.com');

angular.module('myApp.author.author-directive', [])

.directive('appAuthor', ['authorName', 'authorEmail', function(name, email) {
    return function(scope, ele, attrs) {
        ele.text(name + '    Email: ' + email);
    };
}]);
"use strict";

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

"use strict";

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

"use strict";

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');

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
"use strict";

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);
"use strict";

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);