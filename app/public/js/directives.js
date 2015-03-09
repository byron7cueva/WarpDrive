(function () {

  angular.module('warp.directives', []).
  directive('resultadoPlasma', function(){
  	return {
  		restrict: 'E',
  		templateUrl: 'partials/resultado-plasma.html'
  	}
  })
  .directive('casos', function(){
  	return {
  		restrict: 'E',
  		templateUrl: 'partials/casos.html'
  	}
  })
  .directive('caso', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/caso.html'
    }
  })
})();
