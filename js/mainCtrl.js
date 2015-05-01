var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService){

	$scope.getQuotes = function() {
		$scope.quotes = dataService.getData();
	};

	$scope.getQuotes();

	$scope.addQuote = function(){
		dataService.addData($scope.quoteInput, $scope.authorInput);
		$scope.quoteInput = '';
		$scope.authorInput = '';
	};

	$scope.delete = function(item){
		dataService.removeData(item);
	};
});