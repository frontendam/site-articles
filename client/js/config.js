app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'views/article/article.html'
            });
        $urlRouterProvider.otherwise('home');
    }]);
