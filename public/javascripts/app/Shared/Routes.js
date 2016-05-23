var routes = angular.module('routes',['ui.router']);

routes.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/javascripts/app/Home/_home.html',
				controller: 'MainCtrl'
			})
			.state('posts', {
				url: '/posts/{id}',
				templateUrl: '/javascripts/app/Posts/_posts.html',
				controller: 'PostsCtrl'
			});
	}]);