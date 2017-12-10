angular.module('images')

	.controller('mainController', ['$scope', '$http', 'Image', 'ImagesService', 'List', 'Upload',
		function ($scope, $http, Image, ImagesService, List, Upload) {
			$scope.formData = {};
			$scope.loading = true;

			$scope.tempImages = [];

			ImagesService.get()
				.then( function (data) {
					$scope.loading = false;
					$scope.images = ImagesService.getPreloadedImages();
					$scope.imageList = new List($scope.images, 'images');
				});

			$scope.removeSeletedItems = function (list) {
				list.removeSelectedItems().then( function(data) {
					list.items = list.items.filter( function(e) {
	          if (list.selectedItems.indexOf(e.id) === -1) { return e; }
	        });
	        list.selectedItems = [];
				});
			}

			$scope.uploadFiles = function (files) {
				console.log(files)
	      if (files && files.length) {
          Upload.upload({
	          url: 'api/images/upload',
	          file: files
	        }).progress( function (evt) {
	          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	          console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
	        }).success( function (data, status, headers, config) {
	          console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
	          $scope.tempUploadedImages = files;
	        }).error( function (data, status, headers, config) {
	          console.log('error status: ' + status);
	        })
	      }
	    }

	    $scope.formSubmit = function () {
	    	$scope.tempUploadedImages = [];
	    	console.log('another logic');
	    }

	}]);
