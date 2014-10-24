/**
 * @ngdoc ng101.directive.movie-container
 * Container for movies
 */
angular.module('ng101').directive('movieContainer', [
    function () {

        return {
            restrict : 'E',
            scope    : {
                movies : '='
            },
            templateUrl : 'app/views/partials/movie-container.html',
            link : function (scope, element, attrs) {

            }
        }
    }
]);