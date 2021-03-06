'use strict';

angular.module('podconApp')
    .controller('TagDetailController', function ($scope, $rootScope, $stateParams, entity, Tag, Answer_question) {
        $scope.tag = entity;
        $scope.load = function (id) {
            Tag.get({id: id}, function(result) {
                $scope.tag = result;
            });
        };
        $rootScope.$on('podconApp:tagUpdate', function(event, result) {
            $scope.tag = result;
        });
    });
