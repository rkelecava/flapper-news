var sharedServices = angular.module('services', []);

sharedServices.factory('posts', [function () {
	var o = {
		posts: []
	};

	return o;
}]);