var postModule = angular.module('postsModule',[]);

postModule.controller('PostsCtrl',[
	'$scope',
	'posts',
	'post',
	'auth',
	function ($scope, posts, post, auth) {
		$scope.post = post;
		$scope.isLoggedIn = auth.isLoggedIn;
		
		$scope.addComment = function () {
			if ($scope.body === '') { return; }
			/* Before wiring to Node
			$scope.post.comments.push({
				body: $scope.body,
				author: 'user',
				upvotes: 0
			});
			*/
			/* After wiring to Node */
			posts.addComment(post._id, {
				body: $scope.body,
				author: 'user',
			}).success(function (comment) {
				$scope.post.comments.push(comment);
			});

			$scope.body = '';
		};

		$scope.incrementUpvotes = function (comment) {
			posts.upvoteComment(post, comment);
		};
	}
]);