(function(){
    var a = angular.module('store', ['ui.router', 'login.controller']);

    a.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/login");


        $stateProvider
        .state('login', {
            url: '/login',
            templateUrl:"./templates/login/index.html", 
            controller: "LoginController"
        })
        .state('register', {
            url: '/register',
            templateUrl:"./templates/register/index.html",
            controller: "RegisterController" 
        })
    })

    a.controller('StoreController', function(){

    });

    a.controller('RegisterController', function($scope, $state){

    })
})();