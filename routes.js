angular.
  module('shoppingCart').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<item-list></item-list>'
        }).
        otherwise('/home');
    }
  ]);
