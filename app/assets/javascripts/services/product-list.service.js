'use strict';

angular.module('productList')
.factory('Product', ['$resource',function($resource) {
      return $resource('/assets/data/:category_id.json', {}, {
        get_products: {
          method: 'GET',
          params: {category_id: '@category_id'},
          isArray: true
        }
      });
    }
  ]);
