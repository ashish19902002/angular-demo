'use strict';

angular.module('itemList',['itemCore'])
.directive('itemList', [function () {
	return {
		restrict: 'AE',
		link: function (scope, iElement, iAttrs) {
			
		},
		// controller: function(Item) {
		// 	this.items = Item.query;
		// }
		templateUrl: 'template/item-list.template.html',
	};
}]);