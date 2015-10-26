var myApp = angular.module('myApp', []);

myApp.controller('Ctrl1', ['$scope','$http', function ($scope,$http) {
    console.log('hello');
    $scope.testing = 'hello man';

    $http.get("https://api.github.com/repos/vmg/redcarpet/issues").success(function (data) {
        // success
        console.log('success');


    }).error(function (error) {
        // error
        console.log(JSON.stringify("Failed to get t&c: " + error));
    });

}]);
