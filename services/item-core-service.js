angular.
  module('itemCore').
  factory('Item', ['$resource',
    function($resource) {
      return $resource('category/:categoryId.json', {}, {
        query: {
          method: 'GET',
          params: {categoryId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
