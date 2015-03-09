(function () {

  angular.module('warp.filters', [])
  .filter('tiempoformat', function(){
  	return function(tiempo) {
  		if(tiempo === undefined) {
  			return 'La nave no ha operado';
  		}

  		if(tiempo === 'Infinito') {
  			return tiempo;
  		}

  		return tiempo + ' minutos';
  	};
  })
  .filter('plasmaformat', function(){
  	return function(plasma) {
  		if(plasma === undefined) {
  			return '';
  		}

  		return plasma + ' mg/s';
  	};
  });

})();
