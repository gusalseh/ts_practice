namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    
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

    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }

    showNumberOfWheels() {
      console.log(`down speed level: ${this.wheelCount}`);
    }
  }
  
  const motorCycle = new Motorcycle();
  motorCycle.updateWheelCount(22);
  motorCycle.showNumberOfWheels();
  
  const automobile = new Automobile();
  automobile.updateWheelCount(14);
  automobile.showNumberOfWheels();
}