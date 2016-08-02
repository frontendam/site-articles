(function() {'use strict';
    angular.module('app')
      .controller('ControllerCategoryList', ['$scope', 'Categoria', function($scope, Categoria) {
          $scope.categories = [];
          $scope.id_delete = '';

          $scope.list = function() {
            Categoria.find().$promise.then(function(res, err) {
              if(res.$resolved) {
                $scope.categories = res;
              }
            });
          };

          $scope.modal_delete = function(category_id) {
            $scope.id_delete = category_id;
          };

          $scope.delete = function(category_id) {
            Categoria.deleteById({id: category_id})
              .$promise
              .then(function(res, err) {
                if(res.$resolved) {
                  $scope.list();
                }
              }
            );
          };

          $scope.list();
      }])
      .controller('ControllerCategoryNew', ['$scope', '$location', 'Categoria', function($scope, $location, Categoria) {
          $scope.category = angular.copy(category);

          $scope.save = function() {
            Categoria.create($scope.category, function(res, err) {
                if(res.$resolved === true) {
                  // Mensagem de confirmação
                  $location.path('/categories');
                } else {
                  // Mensagem de erro
                }
            });
          };
    }])
    .controller('ControllerCategoryUpdate', ['$scope', '$state', '$location', 'Categoria', function($scope, $state, $location, Categoria) {
        $scope.category = angular.copy(category);

        Categoria.findById({id: $state.params.id}).$promise.then(function(res, err) {
          if(res.$resolved) {
            $scope.category.id = res.id;
            $scope.category.nome = res.nome;
          }
        });

        $scope.update = function() {
          Categoria.prototype$updateAttributes(
            {id: $scope.category.id},
            $scope.category,
            function(res) {
              if(res.$resolved) {
                $location.path('/categories');
              }
            },
            function(error) {
              console.log(error);
            }
          );
        }
    }]);

    var category = {
      id: 0,
      nome: ''
    };

})();
