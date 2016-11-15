angular.module('starter.services', [])
    .service('dateService', function() {
        var day = 0;
        var month = -1;
        var year = 0;
        var newDate = null;

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
        
        this.formatDate = function(dateString) {

            var dateParts = dateString.split(" ");
            try {
                // match month
                for (var i = 0; i < months.length; i++) {
                    if (months[i] === dateParts[0]) {
                        month = i; // zero-based 
                        break;
                    }
                }

                // get day
                day = parseInt(dateParts[1]);

                // get year
                year = parseInt(dateParts[2]);

                // make new date
                newDate = new Date(year, month, day);

            } catch (e) {
                console.log("There was an error: " + e + ".");
            }

              
            return newDate; 
        };

        this.calculateAge = function(date) {
    	    	var age = -1;
    	        try {
    	            var now = new Date();
    	            age = now.getFullYear() - date.getFullYear();
    	            if (now.getMonth() < date.getMonth()) {
    	                age -= 1;
    	            } else if (now.getMonth() === date.getMonth() &&
    	                now.getDate() < date.getDate()) {
    	                age -= 1;
    	            }
    	        } catch (e) {
    	            console.log("Error in age calculation: " + e);
    	        }
    	        return age;
        };

    });

