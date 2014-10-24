/**
 * @ngdoc ng101.directive.movie
 * Our movie directive
 */
angular.module('ng101').directive('movie', ['MovieSvc',
    function (MovieSvc) {

        return {
            restrict    : 'E',
            transclude  : true,
            scope       : {
                title     : '@',
                movieYear : '@year'
            },
            templateUrl : 'app/views/partials/movie.html',
            link        : function (scope, element, attrs) {

            }
        };
    }
]);