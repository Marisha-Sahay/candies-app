(function() {
  "use.strict";

  angular.module("app").controller("candiesCtrl", function($scope,$http) {
  
  $scope.candies = [];  
  
    $scope.setup = function() {
      $http.get("/api/v1/candies.json").then(function(response){
        $scope.candies = response.data;
        console.log(response.data)
      })
    };

    $scope.addCandy = function(newName,newExpiry,newPrice) {
      var candy = {
        name: newName,
        expiry: newExpiry,
        price: newPrice
      };
      console.log(candy)
      $scope.candies.push(candy);
    }

window.$scope = $scope;
    
  });
})();
