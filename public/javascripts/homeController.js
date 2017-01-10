/**
 * Created by lucz on 2017/1/7.
 */

var app = angular.module("appMenu", ["ngRoute"]);

app.config(["$routeProvider","$locationProvider", function ($routeProvider,$locationProvider) {
    $routeProvider.when("/", {
            title:"NOS",
            templateUrl: "/html/home1.html"
        })
        .when("/login", {
            title:"NOS-Login",
            templateUrl: "/html/login.html"
        })
        .when("/login1", {
            title:"NOS-Loin1",
            templateUrl: "/public/html/login1.html"
        })
        .when("/menuNav", {
            title:"NOS-MenuNav",
            templateUrl: "/public/html/menuNav.html"
        })
        .otherwise({
            templateUrl: "/public/html/menuNav.html"
        });

    $locationProvider.html5Mode(true);

}]);



app.controller("controllerMenu",["$rootScope","$scope",function($rootScope,$scope){

    $rootScope.toNavPage = function (page) {
            $location.url("/nos/" + page);

    };

}])
