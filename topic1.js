		function fiveTable () {
		var printValue = "";
        var inputNumber = parseInt(document.getElementById("userInput").value);
		var outputSum = 0;
            
        if (inputNumber <= 0) {
            printValue = "Please enter a number greater than 0";
        }
        else if (inputNumber >= 100) {
            printValue = "Please enter a number smaller than 100";
        }
        else {
            for (var i = 1; i <= inputNumber; i++) {
                outputSum = i + 4;
                printValue += "4 + " + i + " = " + outputSum + "<br>";	
            }
        }
		
		//Output entire five times table
		document.getElementById("outputDiv").innerHTML = printValue;		
	   }
            
        // Function to clear all fields
        function clearFields() {
            location.reload();
        }
            
/*Part # 2*/           
       function myFunction() {
    var person = prompt("Please enter your name", "Put your name in this box");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
      
/* Part # 3*/          
        function favoriteSelections() {
            
            var favoriteCar = document.getElementById("car").value;
            var favoriteYear = document.getElementById("year").value;
            var favoriteColor = document.getElementById("color").value;
            
            var associativeArray = {"car": favoriteCar, "year": favoriteYear, "color": favoriteColor};
            
            document.getElementById("associativeArray").innerHTML = "<br>Your array is: <br>{car: " + associativeArray["car"] 
                +", year: " + associativeArray["year"] + ", color: " + associativeArray["color"] + "}";
        }
		