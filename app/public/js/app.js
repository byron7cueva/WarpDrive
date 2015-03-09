(function () {

  var app = angular.module('warp', [
      'ngRoute', //Servicio para hacer el ruteo
      'warp.controllers',
      'warp.directives',
      'warp.services',
      'warp.filters'
    ]);

  app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/warp.html',
            controller: 'WarpController'
        });
  }]);

})();
