class Vehicle {
  // private라면, 캡슐화를 위해 하위클래스에서 접근할 수 없어 오류 발생
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

// 하위클래스 인스턴스 생성
const motorCycle = new Motorcycle();
motorCycle.updateWheelCount(22);
motorCycle.showNumberOfWheels();

// 하위클래스 인스턴스 생성
const automobile = new Automobile();
automobile.showNumberOfWheels();
