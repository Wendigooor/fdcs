angular.module('images')

	.factory('ImagesService', ['$http', function($http) {
		return {
			get : function() {
				return $http.get('/api/images');
			},
			create : function(imageData) {
				return $http.post('/api/images', imageData);
			},
			getPreloadedImages: function() {
				images = [
					{
						id: 1,
						title: 'img1',
						filename: 'image007.jpg',
						usageType: 'portrait',
						filesize: 41141
					},
					{
						id: 2,
						title: 'img2',
						filename: 'ywNsjetvNXY.jpg',
						usageType: 'portrait',
						filesize: 68141
					},
					{
						id: 3,
						title: 'img3',
						filename: 'yD-FY3_ElO4.jpg',
						usageType: 'portrait',
						filesize: 122131
					},
					{
						id: 4,
						title: 'img4',
						filename: 'y3XNMANMuhE.jpg',
						usageType: 'portrait',
						filesize: 141331
					}
				];
				return images;
			}
		}

		return ImagesService;
	}]);
