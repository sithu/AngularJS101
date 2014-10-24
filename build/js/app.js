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
    '$interval', '$scope',
    function ($interval, $scope) {

        this.classTitle = 'AngularJS 101';
        this.classDescription = 'Wifi sux';

        this.nowOnThis;

        $interval(function () {
            this.nowOnThis = new Date().toString();
        }.bind(this), 1000);

    }
]);