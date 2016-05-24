var sharedServices = angular.module('services', []);

sharedServices.factory('posts', ['$http', function ($http) {
	var o = {
		posts: []
	};

	o.getAll = function () {
		return $http.get('/posts')
			.success(function (data) {
				angular.copy(data, o.posts);
			});
	};

	o.create = function (post) {
		return $http.post('/posts', post)
			.success(function (data) {
				o.posts.push(data);
			});
	};

	return o;
}]);