var module = angular.module('module', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "app/views/home.html",
            controller: 'moduleController'
        })
        .when('/directory', {
            templateUrl: 'app/views/directory.html',
            controller: 'moduleController'
        })
        .otherwise({
            redirectTo: "/home"
        });
}])


    /*creating custom directive*/
        module.directive('randomPerson', [function() {
            return {
                restrict: 'E',
                scope: {
                    people: '=',
                    title: '='
                },
                templateUrl: 'app/views/random.html',
                controller: function ($scope) {
                    $scope.random = Math.floor(Math.random() * 5);
                }
            };
        }]);
    /*End of creating custom directive */

module.controller('moduleController', ['$scope','$http', function ($scope, $http) {

    $scope.removeDeveloper = function (person) {
        var removedDeveloper = $scope.people.indexOf(person);//getting the index of the developer i.e the position in the array

        $scope.people.splice(removedDeveloper, 1); //using the splice method to remove the element from the array
    };

    $scope.addNewDeveloper = function () {
        $scope.people.push ({
            name: $scope.newDeveloper.name,
            developer: $scope.newDeveloper.stack,
            worth: $scope.newDeveloper.worth,
            belt: $scope.newDeveloper.belt,
            available: true
        });

        $scope.newDeveloper.name = "";
        $scope.newDeveloper.stack = "";
        $scope.newDeveloper.worth = "";
        $scope.newDeveloper.belt = "";
    };

    $scope.people = [{
        name : "Doro",
        developer:"Full stack developer",
        worth:48000000000,
        belt :"black",
        available :true
        },{
            name :"Damilare",
            developer :"Front end developer",
            worth :5000,
            belt :"green",
            available :true
        },{
            name:"frank",
            developer:"Full stack Developer",
            "worth":10000,
            "belt":"yellow",
            "available":true
        },{
            name:"kayode",
            developer:"Back end developer",
            worth :30000,
            belt:"orange",
            available :false
    }]
}]);

/*The Arrayed object that holds $scope.people innformation*/

   /* $scope.people = [{
        name : "Doro",
        developer:"Full stack developer",
        worth:48000000000,
        belt :"black",
        available :true
        },{
            name :"Damilare",
            developer :"Front end developer",
            worth :5000,
            belt :"green",
            available :true
        },{
            name:"frank",
            developer:"Full stack Developer",
            "worth":10000,
            "belt":"yellow",
            "available":true
        },{
            name:"kayode",
            developer:"Back end developer",
            worth :30000,
            belt:"orange",
            available :false
    }]*/
