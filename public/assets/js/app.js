(function(){
	var app = angular.module('tripPacker', []);

	app.controller('BagController', ['$scope', function($scope){
		this.items = myItems;
		this.numClothes = totalClothes;
		// this.numToiletries = totalToiletries;
		// this.numElectronics = totalElectronics;

		$scope.cnter = 0;
		$scope.counter = function(){
			$scope.cnter += 1;
		}

		$scope.getTotal = function(category){
			var total = 0;
			for(var i = 0; i < $scope.bag.items.length; i++){
				if($scope.bag.items[i].category === category){
					var item = $scope.bag.items[i];
					total = total + parseInt(item.quantity);
				}
			}
			this.numClothes = total;
			return this.numClothes;
		} 

		$scope.getCombination = function(){
			var combination = 0;
			combination = $scope.bag.items[0].quantity * $scope.bag.items[1].quantity;
			return combination;
		}
	}]);

	app.directive('tripInfo', function(){
  		return {
  			restrict: 'E', 
  			templateUrl: 'trip-info.html',
  			controllerAs: 'trip'
  		};	
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

	var totalClothes = 0;
	var totalToiletries = 0;
	var totalElectronics = 0;
	var myItems = [
		{
			category: 'Clothes',
			type: 'T-Shirt',
			quantity: '0',
		},
		{
			category: 'Clothes',
			type: 'Pant',
			quantity: '0',
		},
		{
			category: 'Clothes',
			type: 'Long-sleeved Shirt',
			quantity: '0',
		},
		{
			category: 'Toiletries',
			type: 'Toothbrush',
			quantity: '0',
		},
		{
			category: 'Toiletries',
			type: 'Toothpaste',
			quantity: '0',
		},
		{
			category: 'Electronics',
			type: 'Laptop',
			quantity: '0',
		}
	];
})();