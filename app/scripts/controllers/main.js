/**
 * @ngdoc ng101.controller.MainCtrl
 * Our main controller
 */
angular.module('ng101').controller('MainCtrl', ['MovieSvc',
    function (MovieSvc) {

        this.favoriteMovie = MovieSvc.favoriteMovie;

        this.movies = [
            { title : 'Bloodsport', year : 1988 },
            { title : 'Cyborg',     year : 1989 },
            { title : 'Kickboxer',  year : 1989 }
        ];

    }
]);