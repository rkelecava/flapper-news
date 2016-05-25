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
			})
			.state('login', {
				url: '/login',
				templateUrl: '/javascripts/app/Authentication/_login.html',
				controller: 'AuthCtrl',
				onEnter: [
					'$state',
					'auth',
					function ($state, auth) {
						if (auth.isLoggedIn()) {
							$state.go('home');
						}
					}]
			})
			.state('register', {
				url: '/register',
				templateUrl: '/javascripts/app/Authentication/_register.html',
				controller: 'AuthCtrl',
				onEnter: [
					'$state',
					'auth',
					function ($state, auth) {
						if (auth.isLoggedIn()) {
							$state.go('home');
						}
					}]
			});
	}]);