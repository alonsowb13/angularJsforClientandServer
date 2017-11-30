(function(){
    var a = angular.module('store', ['ui.router']);

    a.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/login");


        $stateProvider
        .state('login', {
            url: '/login',
            templateUrl:"./templates/login/index.html", 
        })
    })

    a.controller('StoreController', function(){

    })
})();