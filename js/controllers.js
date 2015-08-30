var toolApp = angular.module('toolApp', []);

toolApp.service('missingService', ['$http', '$q', function ($http, $q) {
        var deferred = $q.defer();
        $http.get('missing.json').then(function(data){
            deferred.resolve(data);
        });
        this.getMissing = function () {
            return deferred.promise;
        };

    }]);

toolApp.controller('MainCtrl', ['$scope', 'missingService', function ($scope, missingService) {
        $scope.missing_tools = {};
        var promise = missingService.getMissing();
        promise.then(function (data) {
            $scope.missing_tools = data.data;
//            console.log('controller scope missing=' + JSON.stringify($scope.missing_tools));
        });
    }]);