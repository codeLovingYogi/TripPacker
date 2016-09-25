(function(){
	var app = angular.module('tripPacker', ['trip-details', 'bag-contents']);

	app.controller('BagController', ['$scope', '$filter', function($scope, $filter){
		this.items = myItems;
		this.numClothes = totalClothes;
		this.numToiletries = totalToiletries;
		this.numElectronics = totalElectronics;
		
		$scope.cnter = 0;
		$scope.counter = function(){
			$scope.cnter += 1;
		}

		$scope.addItem = function(){
			$scope.bag.newItem.packed = false;
			$scope.bag.items.push(this.bag.newItem);
			this.bag.newItem = {};
		}

		$scope.toggle = function(packedItems){
			//alert('Packed items: ' + packedItems.length);
			$scope.bag.items = $filter('filter')($scope.bag.items, { packed: false });
		
		}

		$scope.getTotal = function(category){
			var total = 0;
			for(var i = 0; i < $scope.bag.items.length; i++){
				if($scope.bag.items[i].category === category){
					var item = $scope.bag.items[i];
					total = total + (parseInt(item.quantity) || 0);
				}
			}
			if(category === 'Clothes'){
				this.numClothes = total;
			}
			else if(category === 'Electronics'){
				this.numElectronics = total;
			}
			else if(category === 'Toiletries'){
				this.numToiletries = total;
			}
			return total;
		}

		$scope.getCombination = function(){
			var combination = 0;
			combination = $scope.bag.items[0].quantity * $scope.bag.items[1].quantity;
			return combination;
		}
	}]);

	app.controller('WeatherController', ['$scope', function($scope){
		this.place = tripLocation;
		this.weather = tripWeather;
		
		$scope.getWeather = function(){
			if($scope.weatherCtrl.place){
				var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.weatherCtrl.place +'&appid=0270772329583d1c169479841cd4c878'
				// var url2 = 'http://api.openweathermap.org/data/2.5/forecast/daily?appid=0270772329583d1c169479841cd4c878&q=' + $scope.weatherCtrl.place
				var xhr = new XMLHttpRequest();
				// handle request asynchronously
				xhr.open('GET', url, true);
				// event handler function object to check request state, if transaction complete, display response
				xhr.onload = function (e) {
				  if (xhr.readyState === 4) {
				    if (xhr.status === 200) {
				      console.log(xhr.responseText);
				      var response = JSON.parse(xhr.responseText);
				      console.log("Temperature(K): " + response.main.temp);
				      this.currentTemp = Math.round(response.main.temp * (9/5) - 459.67);
				      $scope.weatherCtrl.weather = 'Current weather for ' + $scope.weatherCtrl.place + ' is ' + this.currentTemp + ' degrees';
				      $scope.weatherCtrl.place = '';
				    } else {
				      console.error(xhr.statusText);
				    }
				  }
				};
				xhr.onerror = function (e) {
				  console.error(xhr.statusText);
				};
				// initiate GET request
				xhr.send(null);	
			}
		}
	}]);

	app.controller('DatesController', ['$scope', function($scope){
		this.startDate = tripStart;
		this.endDate = tripEnd;
		$scope.message = '';
		$scope.duration = 0;

		$scope.getDuration = function(){
			if($scope.datesCtrl.startDate && $scope.datesCtrl.endDate){
				this.startDate = $scope.datesCtrl.startDate;
				this.endDate = $scope.datesCtrl.endDate;
				// Parsed dates are in milliseconds, convert to days by dividing by 86400000
				$scope.duration = Math.floor(Date.parse(this.endDate) - Date.parse(this.startDate)) / (24 * 60 * 60 * 1000);
				$scope.message = 'You are travelling for ' + ($scope.duration + 1) + ' day(s), ' + $scope.duration + ' night(s)!';
			}
			else{
				$scope.message = '';
			}
		}
	}]);

	var tripLocation = '';
	var tripWeather = '';
	var tripStart = '';
	var tripEnd = '';
	var totalClothes = 0;
	var totalToiletries = 0;
	var totalElectronics = 0;
	var myItems = [
		{
			category: 'Clothes',
			type: 'T-Shirt',
			quantity: '0',
			packed: false,
		},
		{
			category: 'Clothes',
			type: 'Pant',
			quantity: '0',
			packed: false,
		},
		{
			category: 'Clothes',
			type: 'Long-sleeved Shirt',
			quantity: '0',
			packed: false,
		},
		{
			category: 'Toiletries',
			type: 'Toothbrush',
			quantity: '0',
			packed: false,
		},
		{
			category: 'Toiletries',
			type: 'Toothpaste',
			quantity: '0',
			packed: false,
		},
		{
			category: 'Electronics',
			type: 'Laptop',
			quantity: '0',
			packed: false,
		}
	];
})();
