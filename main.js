// Create a class for vehicles
class Vehicle {
    constructor(name, manufacturer, ID) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.ID = ID;
    }
  }
  
  // Create a class for cars that inherits from the Vehicle class
  class Car extends Vehicle {
    constructor(name, manufacturer, ID, carType, fuelType) {
      super(name, manufacturer, ID);
      this.carType = carType;
      this.fuelType = fuelType;
    }
  }
  
  // Create a class for airplanes that inherits from the Vehicle class
  class Airplane extends Vehicle {
    constructor(name, manufacturer, ID, planeType) {
      super(name, manufacturer, ID);
      this.planeType = planeType;
    }
  }
  
  // Create a class for employees
  class Employee {
    constructor(name, ID, dateOfBirth) {
      this.name = name;
      this.ID = ID;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  // Create a class for drivers that inherits from the Employee class
  class Driver extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
      super(name, ID, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // Create a class for pilots that inherits from the Employee class
  class Pilot extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
      super(name, ID, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // Create a class for reservations
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  // Create objects for three cars and two planes
  const car1 = new Car('Car1', 'Toyota', 'C001', 'Sedan', 'Gas');
  const car2 = new Car('Car2', 'Honda', 'C002', 'SUV', 'Electric');
  const car3 = new Car('Car3', 'Ford', 'C003', 'Hatchback', 'Gas');
  
  const plane1 = new Airplane('Plane1', 'Boeing', 'P001', 'Commercial');
  const plane2 = new Airplane('Plane2', 'Airbus', 'P002', 'Private');
  
  // Write a function to check compatibility and make a reservation
  function makeReservation(employeeID, vehicleID) {
    const employee = employees.find(emp => emp.ID === employeeID);
    const vehicle = vehicles.find(veh => veh.ID === vehicleID);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log('Pilots cannot drive cars. Reservation not allowed.');
    } else if (employee instanceof Driver && vehicle instanceof Airplane) {
      console.log('Drivers cannot pilot airplanes. Reservation not allowed.');
    } else {
      const reservation = new Reservation(new Date(), employeeID, vehicleID, reservations.length + 1);
      reservations.push(reservation);
      console.log('Reservation successfully made.');
    }
  }
  
  // Create instances of employees, drivers, and pilots
  const employee1 = new Employee('John Doe', 'E001', '1990-01-01');
  const driver1 = new Driver('Alice Smith', 'D001', '1985-05-15', 'L001');
  const pilot1 = new Pilot('Bob Johnson', 'P001', '1980-10-20', 'PL001');
  
  // Create an array to store reservations
  const reservations = [];
  
  // Create an array to store vehicles
  const vehicles = [car1, car2, car3, plane1, plane2];
  
  // Create an array to store employees, drivers, and pilots
  const employees = [employee1, driver1, pilot1];
  
  // Make reservations
  makeReservation('D001', 'C001'); // Allowed
  makeReservation('P001', 'C002'); // Not allowed
  makeReservation('D001', 'P001'); // Not allowed
  
  // Print the content of the reservations array using the map function
  console.log('Reservations:');
  reservations.map(reservation => console.log(reservation));
  