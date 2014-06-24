var demoApp = angular.module('DemoApp', ['dao','ngRoute']);
demoApp.config(function($routeProvider,$sceDelegateProvider) {
    $routeProvider.when('/',
                  {templateUrl: 'http://restshop:8000/productList.html'});
    $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       // Allow loading from outer templates domain.
       'http://restshop:8000/**'
     ]);
});
