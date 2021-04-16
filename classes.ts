class Vehicle {
  constructor(private color: string) {}

  protected honk(): void {
    console.log(`My ${this.color} car, beep beep!`);
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
};

const car = new Car('orange');
car.startDrivingProcess();
