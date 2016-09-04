'use strict';

angular.module('categoryList')
.controller('categoryListCtrl', ['$scope','Category','Product',function ($scope,Category,Product) {
	$scope.selectedRow = 0;
	$scope.categories = Category.get_categories();
	$scope.products = Product.get_products({category_id: 'phones'});
	$scope.favourite_list = [] ;
  $scope.total_item = 0
  $scope.total_cost = 0
  $scope.payable_cost = 0
	$scope.carts = [];
    $scope.setClickedRow = function(index){ 
	    $scope.selectedRow = index;
  	}
  	$scope.setdata = function(category_id) {
  		$scope.products = Product.get_products({category_id: category_id});
  	}
  	$scope.mark_favourite = function(product) {
  		if ($scope.favourite_list.indexOf(product)==-1){
  			$scope.favourite_list.push(product);
  		}
  		else{
  			var index = $scope.favourite_list.indexOf(product);
  			$scope.favourite_list.splice(index, 1);
  		}
  	}
  	$scope.show_favourite = function() {
  		$scope.products = $scope.favourite_list;
  		$scope.selectedRow = null;
  	}
  	$scope.add_item = function(product) {
  		if ($scope.carts.indexOf(product)==-1){
  			product["cart_count"] = 1;
  			$scope.carts.push(product);  			
  		}
  		else{
  			product["cart_count"] += 1;
  		}
      calculate_data();
  	}
  	$scope.remove_item = function(product) {
  		if (product["cart_count"]==1){
  			var index = $scope.carts.indexOf(product);
  			$scope.carts.splice(index, 1);
  			product["cart_count"] = 0;
  		}
  		else if ($scope.carts.indexOf(product)==-1){
  			product["cart_count"] = 0;
  		}
      else{
        product["cart_count"] -= 1;
      }
      calculate_data();
  	}
  	$scope.change_product_count = function(product) {
  		if ($scope.carts.indexOf(product)==-1){
  			product["cart_count"] = product.cart_count;
  			$scope.carts.push(product);
  		}
  		else {
  			if(product["cart_count"]==0)
  			{
  				var index = $scope.carts.indexOf(product);
  				$scope.carts.splice(index, 1);
  			}
  		}
      calculate_data();
  	}
  	$scope.total_item_cost = function(product) {
  		return product.cart_count*product.price;
  	}

    var calculate_data = function() {
      console.log($scope.carts);
      var total_cost = 0;
      var total_item = 0;
      for (var i = 0; i < $scope.carts.length; i++) {
        total_cost += $scope.carts[i].cart_count*$scope.carts[i].price;
        total_item += $scope.carts[i].cart_count;
      }
      $scope.total_item = total_item;
      $scope.total_cost = total_cost;
      $scope.payable_cost = $scope.total_cost;
    }
    $scope.apply_coupon = function() {
      if ($scope.coupon_code=="10") {
        $scope.payable_cost = $scope.total_cost*0.9;
      }
    }
}]);

