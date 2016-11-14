angular.module("myApp", [])
.controller('MainController', function($scope) {  
	$scope.basket=[];
	$scope.getBasketTotal = function() {
		var total = 0;
		for (var i = 0; i < $scope.basket.length; i++) {
			total += ($scope.basket[i]["prod"].price * $scope.basket[i].qty);
		}
		return total;
	};

    var Product = function(name, price) {
        this.name = name;
        this.price = price;

        this.addToBasket = function() {
            var isNewItem = true;
            for (var i = 0; i < $scope.basket.length; i++) {
         
                if ($scope.basket[i]["prod"].name === this.name) {
                    $scope.basket[i].qty++;
                    isNewItem = false;
                    break;
                }

            }
            if (isNewItem) {
                $scope.basket.push({prod: this, qty: 1});
            }
        };
        this.removeFromBasket = function() {
        	
        	for (var i = 0; i < $scope.basket.length; i++) {
        		if( $scope.basket[i]["prod"].name === this.name ) {
        			$scope.basket[i].qty--;

        			if($scope.basket[i].qty < 1 ) {
        				$scope.basket.splice(i,1);
        			}
        			break;
        		}
        		
        	}
        };
    };

	$scope.products = [
		new Product('Bread', 1.99),
		new Product('Wine', 10.12),
		new Product('Cheese', 3.45)
	];



    });
