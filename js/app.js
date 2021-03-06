"use strict";

(function(){

angular
  	.module("wdinstagram", ["ui.router"])
  	.config(["$stateProvider", Router])
  	.controller("WdinstagramIndexController", [
  		WdinstagramIndexControllerFunction
  		])
  	.controller("WdinstagramShowController", [
  		"$stateParams",
  		WdinstagramShowControllerFunction
  		])

  function Router($stateProvider){
  	console.log("function Router is working")
  	$stateProvider
  	.state("wdinstagramIndex", {
  		url: "/instagrams",
  		controller: "WdinstagramIndexController",
  		controllerAs: "vm",
  		templateUrl: "js/ng-views/index.html"
  	})
  	.state("wdinstagramShow", {
  		url: "/instagrams/:id",
  		controller: "WdinstagramShowController",
  		controllerAs: "vm",
  		templateUrl: "js/ng-views/show.html"
  	});
  }

  function WdinstagramIndexControllerFunction(){
  	console.log("I'm in the controller!");
  	this.instagrams = instagrams;
  }

  function WdinstagramShowControllerFunction($stateParams){
  	console.log($stateParams);
  	this.instagram = instagrams[$stateParams.id];
  }



})();
