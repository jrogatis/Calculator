
// JavaScript Document
 'use strict';
var arrItens = [];
var acumNum = '';
var app = angular.module('appCalculator', []);

function evil(fn) {
  return new Function('return ' + fn)();
}

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

console.log(evil(subTotal));			
	return evil(subTotal);

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
			case '.':
				acumNum = acumNum.concat(item.toString());
				$scope.displayValue = acumNum;
				break;	
			case '/':
			case '*':
			case '-':
			case '+':
				if (acumNum === 0) {break;} 
				arrItens.push(acumNum);
				arrItens.push(item);
				$scope.displayValue = 0;
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
				acumNum =  calculate(arrItens);
				console.log("total: " + acumNum);
				$scope.displayValue = acumNum;
			
				
				break;
			 default:
				break;		
			
			}
		
		
	
		};
	
	
 }); //FIM DO CONTROLER
  

 

  

 
  