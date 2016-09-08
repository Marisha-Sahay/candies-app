(function() {
  "use.strict";

  angular.module("app").controller("candiesCtrl", function($scope,$http) {

    $scope.candies = [];  

    $scope.setup = function() {
      $http.get("/api/v1/candies.json").then(function(response){
        $scope.candies = response.data;
        // console.log(response.data)
      });
    };

    $scope.addCandy = function(newName,newExpiry,newPrice) {
      var candy = {
        name: newName,
        expiry: newExpiry,
        price: newPrice
      };
      $http.post("/api/v1/candies.json", candy).then(function(response){
        console.log(candy);
        $scope.candies.push(response.data);
      }, function(error) {
        $scope.errors = error.data.errors;
      });
    };

    $scope.sortByAttribute = function(attribute) {
      $scope.orderAttribute = attribute;
    }

    window.$scope = $scope;
    
  });
})();
