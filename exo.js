var app = angular.module("myShoppingList", []);

app.controller("myCtrl",["$scope", function($scope){
  $scope.title="My Shopping List";
  $scope.products=[];
  $scope.addItem= function (){
    $scope.errorText="";
    if(!$scope.addMe) {return};
    if($scope.products.indexOf($scope.addMe)== -1){
      $scope.products.push($scope.addMe);
    }else{
      $scope.errorText="*This element is already existing, please choose an other one ";
    }

  }
  $scope.removeItem=function(x){
    $scope.errorText="";
    $scope.products.splice(x,1);
  }



}])
