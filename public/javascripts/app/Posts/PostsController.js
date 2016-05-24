var postModule = angular.module('postsModule',[]);

postModule.controller('PostsCtrl',[
	'$scope',
	'posts',
	'post',
	function ($scope, posts, post) {
		$scope.post = post;
		
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