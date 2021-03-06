(function ()
{
    var module = angular.module('dao', ['ngResource']);
    module.factory('ProductDAO', function ($resource)
    {
        var ProductResource = $resource('http://restshop:8000/api/product/:id/:action', {'id': '@id'}, {'like': {method: 'POST', params: {action: 'like'}},
            'query': {method: 'JSONP', isArray: true, params: {callback: 'JSON_CALLBACK'}}});
        return {
            like: function (product)
            {
                return new ProductResource(product).$like();
            },
            query: function (filter)
            {
                return ProductResource.query({searchQuery: filter}).$promise;
            },
            remove: function (product)
            {
                return new ProductResource(product).$remove();
            }, save: function (product)
            {
                return new ProductResource(product).$save();
            }
        }
    });
})();
