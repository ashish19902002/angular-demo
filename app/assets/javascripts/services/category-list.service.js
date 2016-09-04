'use strict';

angular.module('categoryList')
.factory('Category', ['$resource',function($resource) {
        return $resource('/assets/data/categories.json', {}, {
        get_categories: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
