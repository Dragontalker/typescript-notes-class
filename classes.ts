class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.honk();
  }
};

const car = new Car();
car.startDrivingProcess();
car.honk();