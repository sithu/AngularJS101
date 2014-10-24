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

        this.foo = '';

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
            transclude  : true,
            scope       : {
                title : '@',
                movieYear  : '@year'
            },
            templateUrl : 'app/views/partials/movie.html',
            link        : function (scope, element, attrs) {
            }
        };
    }
]);
/**
 * @ngdoc ng101.filter.reverse
 * Reverses a string
 */
angular.module('ng101').filter('reverse', [
    function () {

        return function (text, pre, post) {
            return pre + ' ' + text.split('').reverse().join('') + ' ' + post;
        };
    }
]);