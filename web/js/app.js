angular.module('inventory', ['EditModule','InventoryModule', 'inventory.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/prducts', {
		templateUrl: "views/list.html"
	})
	/*
	listar y agregar
	 */
	.when('/products', {
		templateUrl: "views/list.html",
		controller: 'listCtrl as list'
	})
	/*
	editar
	 */
	.when('/product/:id', {
		templateUrl: "views/detail.html",
		controller: 'editController as product'
	})
	.otherwise({
		redirectTo: '/products'
	});

	var config = {
    apiKey: "AIzaSyChqjTB8yd5Cjtmzmc4mtUObhei-EEbX2M",
    authDomain: "practica-firebase-c98eb.firebaseapp.com",
    databaseURL: "https://practica-firebase-c98eb.firebaseio.com",
    storageBucket: "practica-firebase-c98eb.appspot.com",
  };
  firebase.initializeApp(config);
  
});

