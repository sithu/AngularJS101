angular.module('ng101', [
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'ngSanitize'
]).config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl : 'app/views/pages/main.html',
            controller  : 'MainCtrl as mainCtrl'
        }).
        otherwise({
            redirectTo : '/'
        });

}]);
/**
 * @ngdoc ng101.controller.MainCtrl
 * Our main controller
 */
angular.module('ng101').controller('MainCtrl', [
    '$interval',
    '$scope',
    function ($interval, $scope) {

        this.movies = [
            { title : 'Bloodsport', year : 1988 },
            { title : 'Cyborg',     year : 1989 },
            { title : 'Kickboxer',  year : 1989 }
        ];

    }
]);
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