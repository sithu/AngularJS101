/**
 * @ngdoc ng101.directive.movie
 * Our movie directive
 */
angular.module('ng101').directive('movie', [
    function () {

        return {
            restrict    : 'E',
            scope       : {
                title : '@',
                movieYear  : '@year'
            },
            templateUrl : 'app/views/partials/movie.html',
            link        : function (scope, element, attrs) {
                alert(scope.movieYear);
            }
        };
    }
]);