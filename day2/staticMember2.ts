class Runner {
  static lastRunTypeName: string;

  constructor(private typename: string) {}

  run() {
    Runner.lastRunTypeName = this.typename
  }
}

const a = new Runner("a");
const b = new Runner("b");
a.run();
b.run();
console.log(Runner.lastRunTypeName);