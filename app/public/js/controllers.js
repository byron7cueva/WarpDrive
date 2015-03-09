(function () {

  angular.module('warp.controllers', [])
  	.controller('WarpController', ['$scope', 'WarpService', function($scope, WarpService){
  		$scope.casos= [];
  		$scope.resultado= {};

  		WarpService.query({}, function(data){
  			$scope.casos = data;
  		});

  		$scope.operar = function(caso) {
  			WarpService.operar(caso)
  			.success(function(data){
  				$scope.resultado = data;
  			})
        .error(function(data, status, headers, config) {
          $scope.resultado = {};
          alert(data);
        })
  		}
  	}])

})();
