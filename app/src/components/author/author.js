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