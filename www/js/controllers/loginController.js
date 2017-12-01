(function(){
    var a = angular.module('login.controller', []);

    a.controller('LoginController', function($scope, $state){
        $scope.user = {
            email: '',
            password: ''
        };

        $scope.login = function(){
            var user = angular.copy($scope.user);
            console.log(user);
        }

        $scope.sendRegister = function(){
            $state.go('register', {}, {reload: true})
        }
    });

})();