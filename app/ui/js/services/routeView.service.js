routePlanner.factory('routeViewService', [ '$http', function ($http) {

    var _getRoute =  function(name) {
        return $http.get('data/routes/' + name + '.json');
    };

    var _getStringRoute = function(name){
    	return JSON.stringify($http.get('data/routes/' + name + '.json'));
    };

    return {
        getRoute : _getRoute,
        getStringRoute : _getStringRoute
    };

}]);