'use strict';

angular.module('categoryList')
.directive('categoryList', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			
		},
		templateUrl: 'template/category-list.template.html'
	};
}]);


angular.module('productList')
.directive('productList', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			
		},
		templateUrl: 'template/product-list.template.html'
	};
}]);

angular.module('cartList')
.directive('cartList', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			
		},
		templateUrl: 'template/cart-list.template.html'
	};
}])