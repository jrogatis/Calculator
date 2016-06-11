
// JavaScript Document
 'use strict';
var arrItens = [];
var acumNum = '';
var app = angular.module('appCalculator', []);



  
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
				arrItens.push(acumNum);
				console.log(arrItens);	
				break;
			 default:
				break;		
			
			}
		
		
	
		};
	
	
 }); //FIM DO CONTROLER
  

 

  

 
  