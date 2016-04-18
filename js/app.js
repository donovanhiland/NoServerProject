angular.module('portfolioApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/mainTmpl.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'templates/portfolio.html',
      })
      .state('snake', {
        url: '/jQuerySnake',
        templateUrl: 'templates/snakeTmpl.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'templates/resumeTmpl.html'
      })
  });
