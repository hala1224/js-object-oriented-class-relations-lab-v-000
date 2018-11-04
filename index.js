let driverId=0;
let store={drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name){
    this.id=++driverId;
    this.name=name;
    store.drivers.push(this);
  }
  
  //  returns all of the trips that driver had taken
  
   trips() {
     return store.trips.filter(trip => {
     return trip.driverId == this.id;
     })
   }

//   returns all of the passengers that driver has taken on a trip

   passengers(){
     return this.trips().map(trip => {
       return trip.passenger()
     })
   }
  
 
  
}

let passengerId=0;

class Passenger {
  constructor(name){
    this.id=++passengerId;
    this.name=name;
    store.passengers.push(this);
  }
  
   trips(){
      return store.trips.filter(trip =>{
      return trip.passengerId == this.id;
    });
  }

   drivers() {
      return this.trips().map(trip => {
      return trip.driver();
      });
   }
  
}

let tripId=0;

// class Trip {
//   constructor(driver, passenger){
//     this.id=++tripId;
//     let myDriver= new Driver(driver);
//     this.driverId= myDriver.id;
//     let myPassenger = new Passenger(passenger);
//     this.passengerId= myPassenger.id;
//     store.trips.push(this);
//   }
  class Trip {
    constructor(id, driver, passenger){
      this.id = ++id
      this.driver = driver
      this.passenger = passenger
      store.trips.push(this)
    }
 
    driver(){
      return store.trips.find(driver => {
      return driver.id == this.driverId;
    });
  }
  passenger(){
    return store.trips.find(passenger => {
      return passenger.id == this.passengerId;
    });
  }
  
}