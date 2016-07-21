/**
 * Created by itc_user on 7/20/2016.
 */
(function(){
    'use strict';
    angular.module('myApp',['ngRoute'])
        .config(function($routeProvider){
        $routeProvider.when('/dashboard',
            {
                templateUrl: 'partials/products.html',
                controller:   'shopController'
            })
            .when('/cart',{
                templateUrl: 'partials/cart.html',
                controller:   'shopController'
            })
            .otherwise({redirectTo: '/dashboard'});
    });
    
})();