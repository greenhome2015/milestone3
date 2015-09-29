angular.module('Smartmeter', []).controller('smartCtrl', function($scope) {
$scope.dPlace = '';
$scope.dName = '';
$scope.Category = '';
$scope.eClass = '';
$scope.Standby = '';
$scope.Power = '';
$scope.Price = '';
$scope.results = [
{id:1, dPlace:"first", dName:'Sumsang UE12345LCD', img:'TV.png',eClass:"A++",Standby:"0,3 W",Power:"47 W",Price:"499 €"},
{id:2, dPlace:"second", dName:'Tobisha Regza221', img:'TV2.png',eClass:"B",Standby:"1,3 W",Power:"126 W",Price:"333 €"},
{id:3, dPlace:"third", dName:'Sunny Bavaria KDL15C', img:'TV.png',eClass:"F",Standby:"2,7 W",Power:"182 W",Price:"1499 €"},
];

$scope.devices = [
{id:1, dCategory:"Wohnzimmer", dName:"Fernseher", dClass:"A" ,dUsagePerDay:3, dConsumption:132, dPrice:350 },
];

$scope.editDevice = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.dName = '';
	$scope.dClass = '';
    $scope.dUsagePerDay = '';
	$scope.dConsumption = '';
	$scope.dPrice = '';
    
	} else {
    $scope.edit = false;
    $scope.dName = $scope.device[id-1].dName;
    $scope.dClass = $scope.device[id-1].dClass;
	$scope.dUsagePerDay = $scope.device[id-1].dUsagePerDay;
	$scope.dConsumption = $scope.device[id-1].dConsumption;
	$scope.dPrice = $scope.device[id-1].dPrice;
  }
};

$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;



});