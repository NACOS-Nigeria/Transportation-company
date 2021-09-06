 class Vehicles{
    
      constructor(name,ManufactureCompany,ID){
        this.name= name;
        this.ManufactureCompany= ManufactureCompany;
        this.ID=ID;
      }
    }

    class Car extends Vehicles{
        
        constructor(name,ManufactureCompany,ID,TypeOfCar){
          super(name,ManufactureCompany,ID);
          this.TypeOfCar=TypeOfCar;
      }
    }

    class Plane extends Vehicles{
        
        constructor(name,ManufactureCompany,ID,Planetype){
        super(name,ManufactureCompany,ID);
        this.Plane=Planetype;
      }
    }

    class Employee{
     
      constructor(ID,DateofBirth){
        this.ID=ID;
        this.DateofBirth=DateofBirth;
      }
    }

    class Driver extends Employee{

      constructor(ID,DateofBirth,licenseID){
      super(ID,DateofBirth);
        this.licenseID=licenseID;
      }
    }

    class Pilot extends Employee{
      constructor(ID,DateofBirth,licenseID){
      super(ID,DateofBirth);
        this.licenseID=licenseID;
      }
    }

    class Reservations{
    static NumberOfReservations = 1;

        constructor(employeeId,reservationDate,reservationID,vehiclesId){
        this.employeeId=employeeId;
        this.reservationDate=new Date();
        this.reservationID=reservationID;
        this.vehiclesId=vehiclesId;
        Reservations.NumberOfReservations++;
      }
    }

    // Cars
    let FirstCar = new Car('Taurus','Ford',1,'Gas'); // The ID of Cars from 1 - 10
    let SecondCar = new Car('Model Three','Tesla',2,'Electric');
    let ThirdCar = new Car('Camry','Toyota',3,'Gas');

    // Planes
    let FirstPlane = new Plane('B3','Airbus',17,'B3'); // The ID of Planes from 11 - 20
    let SecondPlane = new Plane('C4','Airbus',18,'C4');

    // Employees
    let FirstDriver = new Driver(21,'1999-11-10',126621)  // The ID of Drivers from 21 - 30
    let SecondDriver = new Driver(22,'2001-10-10',700345) 
    let ThirdDriver = new Driver(23,'1997-9-29',906754)  

    let FirstPilot = new Pilot(31,'1892-11-7',140506) // The ID of Pilots from 31 - 40
    let SecondPilot = new Pilot(40,'1989-8-7',740589) 

    const ReservationArray =[];   // Array

    const Check= function(EmployeeID,VehicleID){

      if((VehicleID instanceof Car && EmployeeID instanceof Driver) ||
        (VehicleID instanceof Plane &&  EmployeeID instanceof Pilot)){

      let ReservationObject=new Reservations(EmployeeID,new Date(),Reservations.NumberOfReservations,VehicleID);
      ReservationArray.push(ReservationObject);

      }else{
      console.log('The employee ID does not apply with the vehicle ID');
      }
    }

    Check(FirstPilot,FirstPlane);
    Check(SecondDriver,SecondCar);


    ReservationArray.map((Reservation, i) => {
    console.log('Reservation Id: ' +  Reservation.reservationID + '\tReservation Date: ' + Reservation.reservationDate +'\n')
  })