function main() {
    //take flight number and its status
    // var flightNumber = console.readLine();
    // var flightStatus = readLine();

    var flightNumber = 121;
    var flightStatus = "landed";
    
    console.log("test");

    var flight1 = new flight(flightNumber, flightStatus);
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + flight1.flightNumber + ' is ' + flight1.flightStatus);
    
}

function flight(flightNumber, flightStatus) {
    //fix the constructor
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus;
};