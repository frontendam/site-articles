(function() {'use strict';
  angular.module('app')
    .controller('ControllerLoginSigup', ['$scope', 'Usuario', function($scope, Usuario) {
      $scope.usuario = angular.copy(usuario);

      $scope.create = function() {
        $scope.usuario.login = $scope.usuario.email;
        Usuario.create($scope.usuario, function(res, err) {
          if(res.$resolved) {
            console.log(res);
          } else {
            console.log(err);
          }
        });
      };
    }]);

    var usuario = {
      'id': 0,
      'login': '',
      'senha': '',
      'nome': '',
      'sobrenome': '',
      'ativo': 0,
      'email': ''
    };

})();
