routePlanner.controller('routeViewController', ['$scope', '$http', 'routeViewService',
  function($scope, $http, routeViewService) {
    $scope.route = undefined;

    routeViewService.getRoute('blue').success(function(data) {
      console.log("got the data");
      $scope.route = data;
    });

    $scope.getRoute = function(name) {
      $scope.route = routeViewService.getRoute(name);
    };

}]);
