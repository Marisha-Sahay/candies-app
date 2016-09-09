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

    $scope.deleteCandy = function(candy) {
      $http.delete("api/v1/candies/" + candy.id + '.json').then(function(response) {
        var index = $scope.candies.indexOf(candy);
        $scope.candies.splice(index,1);
      }, function(error) {
        $scope.deleteErrors = error.data.errors;
      });
    }

    $scope.updateCandy = function(candy,updatedName,updatedExpiry,updatedPrice) {
      candy.name = updatedName,
      candy.expiry = updatedExpiry,
      candy.price = updatedPrice
      $http.patch("/api/v1/candies/" + candy.id + '.json', candy).then(function(response) {
        console.log(candy);
      });
  }

    $scope.toggleByAttribute = function(attribute) {
      if(attribute == $scope.orderAttribute) {
        $scope.descending = !$scope.descending
      } else {
        $scope.orderAttribute = attribute;        
      }
    }

    window.$scope = $scope;
    
  });
})();
