 function favoriteSelections() {
            
            var color = document.getElementById("color").value;
            var years = document.getElementById("years").value;
            var model = document.getElementById("model").value;
            
            var associativeArray = {"color": color, "years": years, "model": model};
            
            document.getElementById("associativeArray").innerHTML = "<br>Your array looks like this: <br>{color: " + associativeArray["color"] 
                +", years: " + associativeArray["years"] + ", model: " + associativeArray["model"] + "}";
        }
		