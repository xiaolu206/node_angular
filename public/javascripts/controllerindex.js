/**
 * Created by lucz on 2017/1/7.
 */

var app = angular.module("appindex",["ui.router"]);


app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state("perfer",{
        url:"/perfer",
        templateUrl:"/html/perfer.html",
        controller:"controllerindex"
    })
        .state("perfer.list1",{
            url:"/list1",
            templateUrl:"/html/perferlist1.html",
            controller:"controllerlist1"
        })
        .state("perfer1",{
            url:"/perfe1r",
            templateUrl:"/html/perfer/perferlist1.html",
            controller:"controllerindex"
        })

    $urlRouterProvider.otherwise("/perfer");

}]);

app.controller("controllerindex",["$scope",function($scope){

    $scope.title1="这是链接过来的主页";
}]);


app.controller("controllerlist1",["$scope",function($scope){
   //这里的内容显示在perfer内容里面，（即界面里再嵌入界面）
    $scope.title="this is controllerlist1";
    console.log($scope.title);
}]);


app.controller("con_perferlist1",["$scope",function($scope){

    $scope.title="这是perfer文件夹中的perferlist1.html内容";
}]);
