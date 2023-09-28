
const form = document.querySelector("form");

// add listner on fomr
form.addEventListener('submit', function(event){

    event.preventDefault(); // By default, form submit does many call back submits, prevneitng them.

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    // Note - If get fetch these value outside this listner then we would get empty value.
    // Because, at beginging/form load, values are empty always

    const result = document.querySelector("#result")

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `<span>Invalid value of height ${height}</span>`;
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `<span>Invalid value of weight ${weight}</span>`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.5){
            result.innerHTML = `<p><span>${bmi}</span></p> <p> Eat!! You are underweight!!</p>`;
        }else if(bmi >= 18.5 && bmi <= 25){
            result.innerHTML = `<p><span>${bmi}</span></p> <p> Well Done!! You have normal weight</p>`;
        }else{
            result.innerHTML = `<p><span>${bmi}</span></p> <p> Carefull!! you are overweight</p>`;
        }

    }



});


