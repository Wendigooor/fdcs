
angular.module('images')

.factory('List', ['$http', function($http) {  
  function List(items, modelName) {
    if (items && modelName) {
      this.setData(items, modelName);
    }
  };

  List.prototype = {
    setData: function (items, modelName) {
      this.items = items;
      this.modelName = modelName;
      this.selectedItems = [];
    },
    removeItems: function (itemIds) {
      return $http.delete('api/' + this.modelName + '?ids=' + itemIds);
    },
    removeSelectedItems: function () {
      itemIds = this.selectedItems.join(',');
      return $http.delete('api/' + this.modelName + '?ids=' + itemIds);
    },
    selectItem: function (item) {
      index = this.selectedItems.indexOf(item)
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      } else {
        this.selectedItems.push(item);
      }
    }
  };

  return List;
}]);
