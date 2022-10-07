function main() {
    // //take flight number and its status as keyboard input

    const prompt = require('prompt-sync')();
    const flightNumber = prompt('What is the Flight Number..? ');
    const flightStatus = prompt('What is the Flight Status..? ');
    
    var flight1 = new flight(flightNumber, flightStatus);
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + flight1.flightNumber + ' is ' + flight1.flightStatus);
    
}main();

function flight(flightNumber, flightStatus) {
    //fix the constructor
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus;
};