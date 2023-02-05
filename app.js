// get the elements from the html
// const inputDegreeValue = document.getElementById("inputDegree")
// const inputDegreeUnit = document.getElementById("selectInputDegreeType")
// const temperatureType = document.getElementById("temperatureType");

// function to get the value of the input
// temperatureType.addEventListener("click", (e)=> {
//   console.log(e.target.value);
// })



function convertInputDegree(){
    const inputDegreeValue = document.getElementById("inputDegree").value
    const inputDegreeUnit = document.getElementById("selectInputDegreeType").value
    const temperatureType = document.getElementById("temperatureType").value
    const convertedUnit = document.getElementById("convertedUnit");

    let resultValue = ""

    if(temperatureType == 1){
        resultValue = toFahrenheit(inputDegreeValue, inputDegreeUnit)
        convertedUnit.innerText = "F"
    }
    if(temperatureType == 0){
        resultValue = toCelsuis(inputDegreeValue, inputDegreeUnit)
        convertedUnit.innerText = "C"
    }
    if(temperatureType == 2){
        resultValue = toKelvin(inputDegreeValue, inputDegreeUnit)
        convertedUnit.innerText = "K"
    }



// const roundedResultValue = resultValue



    // console.log(resultValue);

    const convertedDegree = document.getElementById("convertedDegree").innerText = resultValue

}











// the submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", (e)=> {
    e.preventDefault()
    convertInputDegree()
})











// fahrenhiet conversion function
// let temperature = ""
function toFahrenheit(inputDegreeValue, inputDegreeUnit){
    let temperature = ""
    if(inputDegreeUnit == "C"){
       temperature = (inputDegreeValue * 9/5) + 32;
    }
    if(inputDegreeUnit == "K"){
       temperature = (inputDegreeValue - 273.15) * 9/5 + 32
    }
    if(inputDegreeUnit == "F"){
        temperature = inputDegreeValue
    }
    return temperature
}


// celsuis conversion function
function toCelsuis(inputDegreeValue, inputDegreeUnit){
    let temperature = ""
    if(inputDegreeUnit == "K"){
        temperature = inputDegreeValue - 273.15
    }
    if(inputDegreeUnit == "F"){
        temperature = (inputDegreeValue - 32) * 5/9;
    }
    if(inputDegreeUnit == "C"){
        temperature = inputDegreeValue
    }
    return temperature
}


// kelvin conversion function
function toKelvin(inputDegreeValue, inputDegreeUnit){
    let temperature = ""
    if(inputDegreeUnit == "F"){
        temperature = (inputDegreeValue -32) * 5/9 + 273.15;
    }
    if(inputDegreeUnit == "C"){
        temperature = inputDegreeValue + 273.15;
    }
    if(inputDegreeUnit == "K"){
        temperature = inputDegreeValue
    }
    return temperature
}