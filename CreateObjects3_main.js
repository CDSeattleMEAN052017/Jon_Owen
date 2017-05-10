function Vehicle (name, numWheels, numPassengers, speed){
  var distance_travelled = 0;
  var updateDistanceTravelled = function(distance){
    distance_travelled += distance;
  }
  var newVin = () => {
    var VIN = "VIN";
    for (var i = 0; i <12; i++){
      VIN += Math.floor((Math.random()*9) + 1);
    }
    return VIN;
  };

  this.name = name;
  this.numWheels = numWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;
  this.vin = newVin();
  this.move = function(distance){
    updateDistanceTravelled(distance);
    this.makeNoise();
  }
  this.checkMiles = function(){
    console.log("Odometer: " + distance_travelled);
  }
}
Vehicle.prototype.makeNoise = function(){
  console.log("Vroom, Vroom");
}

var bike = new Vehicle("Bike", 2, 1, 20);
bike.makeNoise = function(){
  console.log("Ring, Ring");
}
var sedan = new Vehicle("Sedan", 4, 5, 80);
sedan.makeNoise = function(){
  console.log("Honk, Honk");
}
var bus = new Vehicle("Bus", 6, 52, 60);
bus.passengerCount = 0;
bus.busStop = function(pass) {
  bus.passengerCount += pass;
}

bike.makeNoise();
sedan.makeNoise();
console.log(bus.passengerCount);
bus.busStop(5);
console.log(bus.passengerCount);
bus.checkMiles();
bus.move(10);
bus.checkMiles();
console.log(sedan.vin);
