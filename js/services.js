toolApp.service('missingService', ['$http', function ($http) {
        var missingService = {};
        missingService.data = {};

        missingService.getMissing = function () {
            $http.get('missing.json')
                    .success(function (data) {
                        missingService.data = data;
                    });
            return missingService.data;
        };
        return missingService;
    }]);