/**
 * Created by a.ovsiannikov on 7/7/2015.
 */
(function (){
    "use strict";
    var app = angular.module("newsManagement",
        ["common.services","ui.router"]);

    app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("newList",{
                    url:"/",
                    templateUrl: "app/news/newListView.html",
                    controller: "newsCtrl as vm"})
        }]
    );
}());

