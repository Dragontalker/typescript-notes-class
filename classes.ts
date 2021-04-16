class Vehicle {
  public drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
};

const car = new Car();
car.drive();
car.honk();