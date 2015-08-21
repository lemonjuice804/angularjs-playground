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
            });
    };
}]);