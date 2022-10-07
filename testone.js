function main() {
    //take flight number and its status
    // var flightNumber = readLine();
    // var flightStatus = readLine();

    var flightNumber = 121;
    var flightStatus = "landed";
    
    console.log("test");
    console.log(flightNumber);

    var flight1 = new flight(flightNumber, flightStatus);
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + this.flightNumber + ' is ' + this.flightStatus);
    ddsdsds;
    
}

function flight(flightNumber, flightStatus) {
    //fix the constructor
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus;
};