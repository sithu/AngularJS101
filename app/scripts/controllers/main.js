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