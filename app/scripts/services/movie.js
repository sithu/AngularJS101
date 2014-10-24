/**
 * @ngdoc ng101.service.MovieSvc
 * Movie service persists film stuff
 */
angular.module('ng101').service('MovieSvc', [
    function () {
        var svc = this;

        svc.favoriteMovie = {};

        return svc;
    }
]);