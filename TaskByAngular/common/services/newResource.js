/**
 * Created by a.ovsiannikov on 7/7/2015.
 */
(function (){
    "use strict";
    angular
        .module("common.services")
        .factory("newsResource",
        ["$http",newsResource]);

    function newsResource($http)
    {
        var getNews = function(callback)
        {
            return $http.get("http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json").then(callback);
        };
        return {getNews:getNews};
    }

}());



