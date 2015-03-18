var CofitCtrl = angular.module('CofitCtrl', []);

CofitCtrl.controller('CofitCtrl', ['$scope', function($scope, $http) {
    $scope.msg = "Hello Cofit!";

    $scope.getUser = function($scope, $http) {
        $http({
          method: "GET",
          url: "/users"
        }).success(function(response) {
          $scope.user = response.user;
        });
    };


    // $scope.getUser() = function($http) {
    //   $http({
    //     method: "GET",
    //     url: $scope.urls.books,
    //     headers: {
    //       'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
    //     }
    //   }).success(function(data) {
    //     $scope.user = response.user;
    //   });
    //
    // };

//     $http({ method: "GET", url: "/books" })
// 4
//  .success (response) ->
// 5
//  $scope.books = response.books
//   }
}]);
