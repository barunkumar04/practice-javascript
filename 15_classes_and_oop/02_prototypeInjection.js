function recordWeatherInfo(state, weather){
    this.state = state;
    this.weather = weather;
}

// Injecting a print method.

recordWeatherInfo.prototype.printWeatherInfo = function(){
    console.log(`${this.state} weather is ${this.weather} today.`);
}

const karnataka = recordWeatherInfo('Karnataka', 'Rainy');
// karnataka.printWeatherInfo(); // Why error!! TypeError: Cannot read properties of undefined (reading 'prototype')
                              // Because, We must use 'new' keyword here, then only reference will be set.

const karnatakaAgain = new recordWeatherInfo('Karnataka', 'Rainy');
karnatakaAgain.printWeatherInfo();