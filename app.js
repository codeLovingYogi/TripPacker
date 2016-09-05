(function(){
	var app = angular.module('tripPacker', []);

	app.controller('BagController', function(){
		this.items = myItems;
	});

	app.directive('categoryTabs', function(){
  		return {
  			restrict: 'E', 
  			templateUrl: 'category-tabs.html',
  			controller: function(){
				this.tab = 1;

				this.setTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
  			},
  			controllerAs: 'panel'
  		};	
  	});

	app.directive('clothes', function(){
		return {
			restrict: 'E',
			templateUrl: 'clothes.html',
			controllerAs: 'clothing'
		};
	});


	app.directive('toiletries', function(){
		return {
			restrict: 'E',
			templateUrl: 'toiletries.html',
			controllerAs: 'toiletry'
		};
	});

	app.directive('electronics', function(){
		return {
			restrict: 'E',
			templateUrl: 'electronics.html',
			controllerAs: 'electronic'
		};
	});

	var myItems = [
		{
			category: 'Clothes',
			type: 'T-Shirt',
			quantity: '1',
		},
		{
			category: 'Clothes',
			type: 'Pant',
			quantity: '1',
		},
		{
			category: 'Clothes',
			type: 'Long-sleeved Shirt',
			quantity: '1',
		},
		{
			category: 'Toiletries',
			type: 'Toothbrush',
			quantity: '1',
		},
		{
			category: 'Toiletries',
			type: 'Toothpaste',
			quantity: '1',
		},
		{
			category: 'Electronics',
			type: 'Laptop',
			quantity: '1',
		}
	];
})();