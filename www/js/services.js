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
        })
    .service('presidentService', function($http, dateService) {

        this.getPresidents = function(callbackOK, callbackNOK) {
            var searchURL = "https://api.myjson.com/bins/po22";

            $http.get(searchURL).then(
                function(response) {
                	for(var i=0; i<response.data.length; i++) {
                		response.data[i].startOfPresidency = dateService.formatDate(response.data[i].startOfPresidency);
                		response.data[i].endOfPresidency = dateService.formatDate(response.data[i].endOfPresidency);
                	}
                    callbackOK(response.data);
                },
                function(response) {
                    callbackNOK(response.status, response.statusText);
                });
        };
    });
    




