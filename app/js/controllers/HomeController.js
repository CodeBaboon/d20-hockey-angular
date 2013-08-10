'use strict';

diceHockeyApp.controller('HomeController',
    function HomeController($scope, $location, leagueData) {
        $scope.leagues = leagueData.leagues;
        $scope.hasLeagues = leagueData.leagues.length > 0;
        $scope.addLeague = function() {
            $location.url('/createLeague');
        }
    }
);