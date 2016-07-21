/**
 * Created by itc_user on 7/20/2016.
 */
(function() {
    'use strict';

    function shopController($scope) {
        $scope.products = [
            {
                title: 'Slaughterhouse-Five',
                author: 'Kurt Vonnegut',
                price: 19,
                publication: new Date('1969'),
                cover: 'http://ecx.images-amazon.com/images/I/4120yizU-2L.jpg',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'A Long Way Gone',
                author: 'Ishmael Beah',
                price: 8,
                publication: new Date('2007', '02', '13'),
                cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/A_Long_Way_Gone.jpg',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'White Fang',
                author: 'Jack London',
                price: 10,
                publication: new Date('1907', '05', '01'),
                cover: 'https://upload.wikimedia.org/wikipedia/commons/1/14/JackLondonwhitefang1.jpg',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'Into The Wild',
                author: 'Jon Krakauer',
                price: 12,
                publication: new Date('2007', '09', '11'),
                cover: 'https://jbilderback123.files.wordpress.com/2011/05/into-the-wild.jpg',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'Start With Why',
                author: 'Simon Sinek',
                price: 13,
                publication: new Date('2011', '12', '27'),
                cover: 'https://images-na.ssl-images-amazon.com/images/I/51AJNX1iZsL._SX330_BO1,204,203,200_.jpg',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'The Power of Habit',
                author: 'Charles Duhigg',
                price: 11,
                publication: new Date('2012', '02', '28'),
                cover: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQbMafMM-2jEKf8HepM-LpzA8VQwE2cc8qOhr9N9TNnFPjcCF78',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'The Lean Startup',
                author: 'Eric Ries',
                price: 9,
                publication: new Date('2011'),
                cover: 'https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'Do The Work',
                author: 'Steven Pressfield',
                price: 10,
                publication: new Date('2001', '04', '20'),
                cover: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQp7kgSqvgqs8KXsZr0H_zlEDB_3ZhHCSXUy8qeHAGqBL6nvM-K',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            },
            {
                title: 'Still Life With Woodpecker',
                author: 'Tom Robbins',
                price: 15,
                publication: new Date('1980', '10'),
                cover: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS_pz4jfL2p2Ty-AVPLDc7D_4lHtkPWa38GQ6TdvDTB7nDhXq2h',
                likes: 0,
                dislikes: 0,
                quantity: 0,
                inCart: false
            }

        ];

        if (localStorage.getItem('products')){
            $scope.products = JSON.parse(localStorage.getItem('products'));
        }
        $scope.addToCart = function(p){
            p.inCart = true;
            localStorage.removeItem('products');
            localStorage.setItem('products', JSON.stringify($scope.products));

        };
        $scope.plusOne = function(p){
            p.quantity ++;
            localStorage.removeItem('products');
            localStorage.setItem('products', JSON.stringify($scope.products));
        };
        $scope.minusOne = function(p){
            if(p.quantity>1) {
                p.quantity--;
                localStorage.removeItem('products');
                localStorage.setItem('products', JSON.stringify($scope.products));
            }
        };
        $scope.deleteItem = function(p){
                p.quantity=0;
                localStorage.removeItem('products');
                localStorage.setItem('products', JSON.stringify($scope.products));
        };
        $scope.filterCart = function(item)
        {
            return (item.quantity !== 0);
        };
    }
    angular.module('myApp').controller('shopController', ['$scope', shopController]);
})();