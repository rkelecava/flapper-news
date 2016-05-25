var homeModule = angular.module('home',[]);

homeModule.controller('MainCtrl', ['$scope', 'posts', 'auth', function ($scope, posts, auth) {
	$scope.posts = posts.posts;
	$scope.isLoggedIn = auth.isLoggedIn;

	$scope.addPost = function () {
		if (!$scope.title || $scope.title === '') { return; }
		
		/* Before wiring to Node 
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
  			comments: [
    			{author: 'Joe', body: 'Cool post!', upvotes: 0},
    			{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  			]
		});
		*/
		/* After wiring to Node */
		posts.create({
			title: $scope.title,
			link: $scope.link
		});
		
		$scope.title = '';
		$scope.link = '';
	};

	/* Before wiring to Node 
	$scope.incrementUpvotes = function (post) {
		post.upvotes +=1;
	};
	*/
	/*After wiring to Node*/
	$scope.incrementUpvotes = function (post) {
		posts.upvote(post);
	};
}]);