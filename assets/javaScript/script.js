const calculate = document.getElementById ("calculate");


function bmi () {
    let name = document.getElementById ("name").value;
    let height = document.getElementById ("height").value;
    let weight = document.getElementById ("weight").value;
    let outcome = document.getElementById ("outcome");

    if (name !== "" && height!== "" && weight !== "") {

        const bmiValue = (weight/(height*height)).toFixed(1);
        let classification = "";
        

        if (bmiValue < 18.5) {
            classification = "underweight.";
        } else if (bmiValue < 25) {
            classification = "in a good weight. Congratulations!";
        } else if ( bmiValue < 30) {
            classification = "slightly overweight.";
        } else if (bmiValue< 35) {
            classification = "with grade I obesity.";            
        } else if (bmiValue < 40) {
            classification = "with grade II obesity";
        } else {
            classification = "with morbid obesity (grade III). Be careful!";
        }

        outcome.textContent = `${name}, your BMI is ${bmiValue} and you are ${classification}`;

    } else {
        outcome.textContent = "Fill in all fields correctly!";
    }

}

function clean () {
    
    document.getElementById("name").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.querySelector ("#outcome").innerHTML = "";

}

calculate.addEventListener ("click", bmi);