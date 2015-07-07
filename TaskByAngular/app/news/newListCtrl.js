/**
 * Created by a.ovsiannikov on 7/7/2015.
 */
(function (){
    "use strict";

    angular
        .module("newsManagement")
        .controller("newsCtrl",["newsResource",newsCtrl]);

    function newsCtrl(newsResource)
    {
        var vm = this;
        vm.title = "News List";
        newsResource.getNews(function(data){
            var news = data.data;
            if(news.count > 0 )
            {
                vm.title = news.value.description
                vm.news = news.value.items;
            }
            else
            {
                vm.noNews = true;
            }

        });

        vm.togglerDescription = function(newItem)
        {
            newItem.show = !newItem.show;
        };
    }

}());


