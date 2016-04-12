app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/article/article.html'
            });
        $urlRouterProvider.otherwise('home');
    }]);
