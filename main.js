//Object Constructor
function Workout(which, length, calories) {
    this.which = which;
    this.length = length;
    this.calories = calories;
}

let calorieArr = [];

document.addEventListener("DOMContentLoaded", function (event) { 

    // Add button function
    document.getElementById("add").addEventListener("click", function () {

        // Groups radio items by name and then checks which one is clicked
        let radioButtonGroup = document.getElementsByName("exercise");
        let checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);

        // Creates variables that will be entered as parameters to create a new Workout Object
        let which = checkedRadio.value;
        let length = document.getElementById("minutes").value;
        let calories = 10;

        if (checkedRadio.value == "Push Ups") {
            calories = 15;
        } else if (checkedRadio.value == "Jump Rope") {
            calories = 18; 
        }

        calories = calories * length;

        calorieArr.push(new Workout(which, length, calories));

        // Log to check work in console
        console.log(calorieArr);

        // Clearing Textboxes
        document.getElementById("minutes").value= "";
        document.getElementById("burned").value= "";
    });

    // Most Burned button function
    document.getElementById("mostburned").addEventListener("click", function () {
        let burnArr = [];
        let max = 0;

        for (let i = 0; i < calorieArr.length; i++) {
            let current = calorieArr[i].calories;

            if (current > max) {
                max = current;
                burnArr = calorieArr[i];
            }
        }
        
        if (burnArr.length > 0) {
            document.getElementById("burned").value = burnArr.which + ' - ' + burnArr.calories + ' calories';
        }
    });

    // Show all button function
    document.getElementById("showall").addEventListener("click", function () {
        let display = "Cataloged Exercises:\n";
        
        for (let i = 0; i < calorieArr.length; i++) {
            display = display + "<li>" + calorieArr[i].which + ": " + calorieArr[i].length + " minutes " + calorieArr[i].calories +  " calories </li>";
        }

        document.getElementById("displayCalories").innerHTML = display;
        
    });
});