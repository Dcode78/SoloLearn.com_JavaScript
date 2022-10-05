function main() {
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();
    
    var flight1 = new flight(flightNumber, "flightStatus");
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
    
}

function flight(flightNumber, flightStatus) {
    //fix the constructor
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus;
};