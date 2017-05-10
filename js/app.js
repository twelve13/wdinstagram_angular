"use strict";

(function(){

angular
  	.module("wdinstagram", ["ui.router", "ngResource"])
  	.config(["$stateProvider", Router])
    .factory("WdinstagramFactory", [
        "$resource",
        WdinstagramFactoryFunction
      ])
  	.controller("WdinstagramIndexController", [
      "WdinstagramFactory",
  		WdinstagramIndexControllerFunction
  		])
  	.controller("WdinstagramShowController", [
      "WdinstagramFactory",
  		"$stateParams",
  		WdinstagramShowControllerFunction
  		])
    .controller("WdinstagramNewController", [
      "WdinstagramFactory",
      WdinstagramNewControllerFunction
      ])
    .controller("WdinstagramEditController", [
      "WdinstagramFactory",
      "$stateParams",
      "$state",
      WdinstagramEditControllerFunction
      ]);

  function Router($stateProvider){
  	console.log("function Router is working")
  	$stateProvider
  	.state("wdinstagramIndex", {
  		url: "/instagrams",
  		controller: "WdinstagramIndexController",
  		controllerAs: "vm",
  		templateUrl: "js/ng-views/index.html"
  	})
  	.state("wdinstagramNew", {
  		url: "/instagrams/new",
  		controller: "WdinstagramNewController",
  		controllerAs: "vm",
  		templateUrl: "js/ng-views/new.html"
  	})
    .state("wdinstagramShow", {
      url: "/instagrams/:id",
      controller: "WdinstagramShowController",
      controllerAs: "vm",
      templateUrl: "js/ng-views/show.html"
    })
    .state("wdinstagramEdit", {
      url: "/instagrams/:id/edit",
      controller: "WdinstagramEditController",
      controllerAs: "vm",
      templateUrl: "js/ng-views/edit.html"
    })
  }

  function WdinstagramIndexControllerFunction(WdinstagramFactory){
  	console.log("I'm in the controller!!!");
 
  	this.instagrams = WdinstagramFactory.query();
  }

  function WdinstagramShowControllerFunction(WdinstagramFactory, $stateParams){
  	this.instagram = WdinstagramFactory.get({id: $stateParams.id});
  }

  function WdinstagramFactoryFunction($resource){
    return $resource( "http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT"}
    })
  }

  function WdinstagramNewControllerFunction(WdinstagramFactory){
    this.instagram = new WdinstagramFactory();
    this.create = function(){
      this.instagram.$save( function(instagram) {
        $state.go("wdinstagramShow", {id: instagram.id})
      })
    }
  }

  function WdinstagramEditControllerFunction(WdinstagramFactory, $stateParams, $state){
    this.instagram = WdinstagramFactory.get({id: $stateParams.id});
    this.update = function(){
      this.instagram.$update({id: $stateParams.id}, function(instagram) {
        $state.go("wdinstagramShow", {id: instagram.id})
      })
    }
    this.destroy = function(){
      this.instagram.$delete({id: $stateParams.id})
    }
  }


})();
