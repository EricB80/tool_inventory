toolApp.directive('toolBox', ['$compile', '$parse', function ($compile, $parse) {
        function isMissing(arr, obj) {
            var i = 0;
            var m = -1;
            var moo = arr.missing;
            for (var a in arr) {
                if (arr[i] == obj) {
                    m = 1;
                }
                i++;
            }
            return m;
        }

        return{
            restrict: 'A',
            templateUrl: 'toolboard.svg',
            templateNamespace: 'svg',
//            scope: {missing: '@missing'},
            link: function (scope, element, attrs) {
                scope.$watch('missing_tools', function (missing_tools) {
                    if (missing_tools) {
                        return scope.render(missing_tools);
                    }
                }, true);
                scope.render = function (missing_data) {

                    var check_missing = function (obj) {

                        console.log(obj);
//                    var is_missing = 0;
//                    var fill = obj.attr('fill');
//                    //force upper for crappy IE render
//                    if (angular.uppercase(fill) == "#C00000") {
//                        obj.attr('fill', '#000000');
//                        return is_missing;
//                    } else {
//                        obj.attr('fill', '#C00000');
//                        is_missing = 1;
//                        return is_missing;
//                    }
//                    obj.toggleClass('missing');
                    };
                    scope.toolClick = function (obj) {
                        //var status = check_missing(obj);
//                        var d = obj.target.attributes.data.value;
                        console.log(obj);
                    };
                    var tools = element[0].querySelectorAll('g');
                    angular.forEach(tools, function (path, key) {
                        var toolPart = angular.element(path);
                        var toolId = toolPart.attr('id');
                        toolPart.attr("ng-click", "toolClick($event)");
//                        toolPart.attr('data', toolId);
                        var gone = isMissing(missing_data, toolId);
                        if (gone > -1) {
                            toolPart.attr("fill", "#C00000");
                            toolPart.toggleClass('missing');
                        }
                        $compile(toolPart)(scope);
                    });
                };
            }
        };
    }]);