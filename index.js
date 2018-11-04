let driverId=0;
let store={drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name){
    this.id=++driverId;
    this.name=name;
    store.drivers.push(this);
  }
  //  returns all of the trips that driver had taken
  
  trips(){
    // driverId= driverId - 1;
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  
  passengers(){
  
  }
  
}

let passengerId=0;

class Passenger {
  constructor(name){
    this.id=++passengerId;
    this.name=name;
    store.passengers.push(this);
  }
}

let tripId=0;

class Trip {
  constructor(driver, passenger){
    this.id=++tripId;
    let myDriver= new Driver(driver);
    this.driverId= myDriver.id;
    let myPassenger = new Passenger(passenger);
    this.passengerId= myPassenger.id;
    store.trips.push(this);
  }
}