class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`speed level: ${this.wheelCount}`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    // super 클래스의 생성자 호출
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motorcycle();
motorCycle.updateWheelCount(22);
motorCycle.showNumberOfWheels();

const automobile = new Automobile();
automobile.showNumberOfWheels();