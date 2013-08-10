'use strict';

var diceHockeyApp = angular.module('diceHockeyApp', [])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/createLeague',
            {
                templateUrl: 'templates/createLeague.html',
                controller: 'LeagueController'
            })
            .otherwise({redirectTo:'/home'})
    });
