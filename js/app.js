"use strict";

(function(){

	let instaData = [
		{ photo_url: "http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg", author: "Caroline", body: "Here are some overlapping mountains." },
		{ photo_url: "http://theuiaa.org/wp-content/uploads/2016/08/mountain-protection-award-slider-1920x1000.jpg", author: "Caroline", body: "Mountains, mountains, pretty mountains." },
		{ photo_url: "http://zllox.com/wp-content/uploads/2016/02/Beautiful-Mountain-Background.jpg", author: "still Caroline", body: "Oh a mountain with a cabin." },
		{ photo_url: "http://cdn.akamai.steamstatic.com/steam/apps/313340/ss_2438af1c01cab61aac7f6317b4a012b1a7fdd47a.600x338.jpg?t=1492725929", author: "somebody", body: "An inspirational mountain." },
		{ photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Susa_group%2C_mountain_gorilla.jpg/1200px-Susa_group%2C_mountain_gorilla.jpg", author: "CC", body: "And a gorilla." }
	]

  angular
  	.module("wdinstagram", ["ui.router"])
  	.config(["$stateProvider", Router])
  	.controller("WdinstagramIndexController", [
  		WdinstagramIndexControllerFunction
  		])

  function Router($stateProvider){
  	console.log("function Router is working")
  	$stateProvider
  	.state("wdinstagramIndex", {
  		url: "/instagrams",
  		controller: "WdinstagramIndexController",
  		controllerAs: "vm"
  	});
  }

  function WdinstagramIndexControllerFunction(){
  	console.log("I'm in the controller!")
  }




})();
