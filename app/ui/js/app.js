
// Declare app level module which depends on filters, and services
var routePlanner = angular.module('routePlanner', [
  'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/route/edit', {templateUrl: 'ui/partials/route.edit.html'});
  $routeProvider.when('/route/create', {templateUrl: 'ui/partials/route.create.html'});
  $routeProvider.when('/route/view', {templateUrl: 'ui/partials/route.view.html', controller: 'routeViewController'});
  $routeProvider.otherwise({redirectTo: 'route/view'});
}]);

