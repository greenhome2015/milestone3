angular.module('Smartmeter', []).controller('deviceCtrl', function($scope) {
$scope.dName = '';
$scope.Class = '';
$scope.Standby = '';
$scope.Power = '';
$scope.Price = '';
$scope.devices = [
{id:1, dName:'Fernseher', Class:"A", Standby:"1,4 W", Power:"132 W", Price:"350 €" },

];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 


$scope.editDevice = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.dName = '';
	$scope.Class = '';
    $scope.Standby = '';
	$scope.Power = '';
	$scope.Price = '';
    
	} else {
    $scope.edit = false;
    $scope.dName = $scope.device[id-1].dName;
    $scope.Class = $scope.device[id-1].Class;
	$scope.Standby = $scope.device[id-1].Standby;
	$scope.Power = $scope.device[id-1].Power;
	$scope.Price = $scope.device[id-1].Price;
  }
};

});