(function () {

  angular.module('warp.services',['ngResource'])
  .factory('WarpService',['$resource', '$http', function($resource, $http){

  	function operar(caso) {
  		return $http.post('/api', caso);
  	}

  	return {
  		query: $resource('/api').query,
  		operar: operar
  	}
  }])

})();
