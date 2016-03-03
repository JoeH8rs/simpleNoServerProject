angular.module('noServerPro', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'routs/homeTempt.html'
            })
            .state('prod', {
                url: '/prod',
                templateUrl: 'routs/prodTempt.html'
            })
            .state('team', {
                url: '/team',
                templateUrl: 'routs/teamTempt.html'
            })
            .state('cont', {
                url: '/cont',
                templateUrl: 'routs/contTempt.html'
            });
    });
            
