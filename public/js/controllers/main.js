angular.module('images')

	.controller('mainController', ['$scope', '$http', 'Image', 'ImagesService', 'List', function($scope, $http, Image, ImagesService, List) {
		$scope.formData = {};
		$scope.loading = true;

		ImagesService.get()
			.then( function(data) {
				$scope.loading = false;
				$scope.images = ImagesService.getPreloadedImages();
				$scope.imageList = new List($scope.images, 'images');
			});

		$scope.removeSeletedItems = function(list) {
			list.removeSelectedItems().then( function(data) {
				list.items = list.items.filter( function(e) {
          if (list.selectedItems.indexOf(e.id) === -1) { return e; }
        });
        list.selectedItems = [];
			});
		}

	}]);
