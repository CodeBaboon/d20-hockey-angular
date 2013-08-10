'use strict';

diceHockeyApp.controller('LeagueController',
    function LeagueController($scope, $location, leagueData) {
        $scope.add = function () {
            leagueData.leagues.push({ name: $scope.inputData.name});
            $location.url('/home');
        };
    }
);
