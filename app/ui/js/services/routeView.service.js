routePlanner.factory('routeViewService', [ '$http', function ($http) {

    var _getRoute =  function(name) {
        return $http.get('data/routes/' + name + '.json');
    };

    var _getStringRoute = function(name){
    	return JSON.stringify($http.get('data/routes/' + name + '.json'));
    };

    var _getRouteNames = function(){
        return $http.get('data/routenames.lst')
    }

    return {
        getRoute : _getRoute,
        getRouteNames : _getRouteNames,
        getStringRoute : _getStringRoute
    };

}]);