'use strict';

angular.module('productList', ['ngResource'])
angular.module('categoryList', ['ngResource'])
angular.module('cartList', [])

angular.module('shoppingCart', ['categoryList','productList','cartList'])