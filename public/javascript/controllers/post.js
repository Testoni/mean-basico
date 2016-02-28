var app = angular.module('app', []);

app.controller('PostCtrl', function($scope) {
	$scope.posts = [
		{
			title: 'Publicação 1',
			content: 'Conteúdo 1',
			tags: [],
			likes: 10
		},
		{
			title: 'Publicação 2',
			content: 'Conteúdo 2',
			tags: [],
			likes: 30
		}
	];

	$scope.addLike = function(post) {
		post.likes += 1;
	};

	$scope.removeLike = function(post) {
		post.likes -= 1;
	};
});