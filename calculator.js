
// JavaScript Document
 'use strict';
var arrItens = [];
var acumNum = '';
var app = angular.module('appCalculator', []);



 function  calculate(arrForCalc) {
	var subTotal=0;
	arrForCalc.forEach(function(item, index, arr){
	
		
			switch (item){
				
				case '/':
				case '*':
				case '-':
				case '+':
					subTotal = arr[index -1] + item + arr[index +1] ;
					break;
				default:
					break;
				}
		
	});

console.log(eval(subTotal));			
	return eval(subTotal);

}
  
app.controller('MainCtrl',  function($scope) {

	var init = function () {
	$scope.displayValue = 0;
	}; //FIM DO INIT
	
	init();
	
	$scope.addItem  = function (item) {
		
		switch (item){
			
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 0:
				acumNum = acumNum.concat(item.toString());
				$scope.displayValue = acumNum;
				break;	
			case '.':
				if (acumNum === '') {acumNum = '0';}
				acumNum = acumNum.concat(item.toString());
				$scope.displayValue = acumNum;
				break;	
			case '/':
			case '*':
			case '-':
			case '+':
				if (acumNum === 0) {break;} 
				if (arrItens[arrItens.length - 1] === '+' ||
				arrItens[arrItens.length - 1] === '-' ||
				arrItens[arrItens.length - 1] === '*' ||
				arrItens[arrItens.length - 1] === '/' 
				) {
				
					arrItens[arrItens.length -1] = item;
					break;
					}
			
				console.log("antes no sinal: "+ arrItens);
				if (acumNum !=='') {arrItens.push(acumNum);}
				arrItens.push(item);
				console.log("depois no sinal: "+ arrItens);
				//$scope.displayValue = 0;
				acumNum = '';
				
				//alert(item);
				break;
				
			case 'AC':
				arrItens = [];
				acumNum = '';
				$scope.displayValue = 0;
				break;
				
				
			case '=':
				if (arrItens.length === 0) {break;} 
				arrItens.push(acumNum);			
			    $scope.displayValue =  calculate(arrItens);
				console.log("arrant: "+ arrItens);
				acumNum = '';
				arrItens = [$scope.displayValue] ;
				console.log("novoarr: "+ arrItens);
			
				
				break;
				
			case 'CE':
				if (arrItens.length > 0) {
					arrItens.pop();
					if (arrItens.length > 0 &&
					 isNaN(arrItens[arrItens.length  -1]) !== true) {
					$scope.displayValue = arrItens[arrItens.length -1];
					 } else {
						 arrItens = [];
							acumNum = '';
							$scope.displayValue = 0;
						 }
					
					}
					
					
				break;	
				
			case '%':
					acumNum = (acumNum/100);
					$scope.displayValue = acumNum;
			break;		
					
			 default:
				break;		
			
			}
		
		
	
		};
	
	
 }); //FIM DO CONTROLER
  

 

  

 
  