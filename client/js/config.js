app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/article/article.html'
            })
            .state('login', {
              url: '/signup',
              templateUrl: 'views/login/signup.html',
              controller: 'ControllerLoginSigup'
            })
            .state('categories', {
              url: '/categories',
              templateUrl:  'views/categories/categories.html',
              controller: 'ControllerCategoryList'
            })
            .state('categories-new', {
              url: '/categories/new',
              templateUrl: 'views/categories/new.html',
              controller: 'ControllerCategoryNew'
            })
            .state('categories-update', {
              url: '/categories/update/{id}',
              templateUrl: 'views/categories/update.html',
              controller: 'ControllerCategoryUpdate'
            });
        $urlRouterProvider.otherwise('home');
    }]);
