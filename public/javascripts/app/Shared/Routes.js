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
				controller: 'MainCtrl',
				resolve: {
					postPromise: ['posts', function (posts) {
						return posts.getAll();
					}]
				}
			})
			.state('posts', {
				url: '/posts/{id}',
				templateUrl: '/javascripts/app/Posts/_posts.html',
				controller: 'PostsCtrl',
				resolve: {
					post: [
						'$stateParams',
						'posts',
						function ($stateParams, posts) {
							return posts.get($stateParams.id);
						}
					]
				}
			});
	}]);