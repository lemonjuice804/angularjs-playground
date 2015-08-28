"use strict";

angular.module('myApp.view2', ['ngRoute', 'myApp.config'])

.config(['$routeProvider', 'config', function($routeProvider, config) {
  $routeProvider.when('/view2', {
    templateUrl: config.HTML_PATH + 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.factory('View2Factory', function($http, $q) {
    var service = {};
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = 'tvxq';
    var _finalUrl = '';

    var makeUrl = function() {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
    };

    service.setArtist = function(artist) {
        _artist = artist;
    };

    service.getArtist = function() {
        return _artist;
    };

    service.callItunes = function() {
        makeUrl();
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url: _finalUrl
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(err) {
            console.error(err);
            deferred.reject('There was an error.');
        });
        return deferred.promise;
    };

    return service;
})

.controller('View2Ctrl', ['$scope', 'View2Factory', function($scope, myFactory) {
    $scope.data = {};
    $scope.data.currentData = [];
    $scope.resultShowed = false;

    $scope.keywords = ['first', 'prev', 'next', 'end'];
    $scope.currentIndex = 0;
    $scope.limit = 10;

    $scope.updateArtist = function() {
        myFactory.setArtist($scope.data.artist);
    };

    $scope.submitArtist = function() {
        if ($scope.data.artist === undefined ||
            $scope.data.artist === null ||
            $scope.data.artist.trim() === "") {
            // text is empty.
            return;
        }

        this.updateArtist();

        myFactory.callItunes()
            .then(function(data){
                $scope.data.artistData = data.results;
                $scope.data.currentData = $scope.data.artistData.slice($scope.currentIndex, $scope.limit);
                $scope.resultShowed = true;
            });
    };

    $scope.showMoreResults = function(key) {

        var len = $scope.data.artistData.length;

        switch(key) {
            case $scope.keywords[0]:
                // first
                $scope.currentIndex = 0;
                break;
            case $scope.keywords[1]:
                // previous
                $scope.currentIndex -= $scope.limit;
                break;
            case $scope.keywords[2]:
                // next
                $scope.currentIndex += $scope.limit;
                break;
            case $scope.keywords[3]:
                // end
                if (len % $scope.limit === 0) {
                    $scope.currentIndex = len - $scope.limit;
                } else {
                    $scope.currentIndex = len - (len % $scope.limit);
                }
                break;
            default:
                break;
        }

        $scope.data.currentData = $scope.data.artistData.slice($scope.currentIndex, $scope.currentIndex + $scope.limit);
    };
}]);