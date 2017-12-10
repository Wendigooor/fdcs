
angular.module('images')

.factory('Image', ['$http', function($http) {  
  function Image(imageData) {
    if (imageData) {
      this.setData(imageData);
    }
  };

  Image.prototype = {
    setData: function (imageData) {
      angular.extend(this.data, imageData);
    },
  };

  return Image;
}]);
