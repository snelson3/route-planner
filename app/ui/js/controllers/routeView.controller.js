routePlanner.controller('routeViewController', ['$scope', '$http', 'routeViewService',
  function($scope, $http, routeViewService) {
    $scope.routes = undefined;

    routeViewService.getRouteNames().then(function(ret) {
      $scope.routes = ret.data;
    });

    $scope.route = undefined;
    
    $scope.getRoute = function(name) {
      routeViewService.getRoute(name).then(function(ret) {
        $scope.route = ret.data;
      });
    };

}]);
