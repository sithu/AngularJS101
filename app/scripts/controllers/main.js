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