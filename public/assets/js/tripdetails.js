(function(){
	var app = angular.module('trip-details', []);

	app.directive('tripInfo', function(){
  		return {
  			restrict: 'E', 
  			templateUrl: 'trip-info.html',
  			controllerAs: 'trip'
  		};	
  	});

  	app.directive('weather', function(){
		return {
			restrict: 'E',
			templateUrl: 'weather.html',
			controllerAs: 'weather'
		};
	});

	app.directive('dates', function(){
		return {
			restrict: 'E',
			templateUrl: 'dates.html',
			controllerAs: 'dates'
		};
	});
})();
