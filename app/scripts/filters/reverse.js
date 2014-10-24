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