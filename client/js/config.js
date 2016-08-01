app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/article/article.html'
            })
            .state('categories', {
              url: '/categories',
              templateUrl:  'views/categories/categories.html'
            })
            .state('categories-new', {
              url: '/categories/new',
              templateUrl: 'views/categories/new.html'
            })
            .state('categories-update', {
              url: '/categories/update',
              templateUrl: 'views/categories/update.html'
            });
        $urlRouterProvider.otherwise('home');
    }]);
