angular.module('Smartmeter', []).controller('smartCtrl', function($scope) {
$scope.rPlace = '';
$scope.rDeviceName = '';
$scope.Category = '';
$scope.imgEnergyClass = '';
$scope.rEnergyClass = '';
$scope.rConsumption = '';
$scope.rPrice = '';
$scope.results = [
{id:1, rPlace:"first", rDeviceName:'Sumsang UE12345LCD', img:'TV.png',rEnergyClass:"A++",imgEnergyClass: "A++.png",rConsumption:47,rPrice:499},
{id:2, rPlace:"second", rDeviceName:'Tobisha Regza221', img:'TV2.png',rEnergyClass:"B",imgEnergyClass:"B.png",rConsumption:146,rPrice:333},
{id:3, rPlace:"third", rDeviceName:'Sunny Bavaria KDL15C', img:'TV.png',rEnergyClass:"D",imgEnergyClass:"D.png",rConsumption:253,rPrice:1499},
];

$scope.devices = [
{id:1, dCategory:"Wohnzimmer", dName:"Fernseher", dEnergyClass:"A" ,dUsagePerDay:3, dConsumption:132, dPrice:350 },
];

$scope.editDevice = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.dName = '';
	$scope.dEnergyClass = '';
    $scope.dUsagePerDay = '';
	$scope.dConsumption = '';
	$scope.dPrice = '';
    
	} else {
    $scope.edit = false;
    $scope.dName = $scope.device[id-1].dName;
    $scope.dEnergyClass = $scope.device[id-1].dEnergyClass;
	$scope.dUsagePerDay = $scope.device[id-1].dUsagePerDay;
	$scope.dConsumption = $scope.device[id-1].dConsumption;
	$scope.dPrice = $scope.device[id-1].dPrice;
  }
};

$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;


});
