const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("11 더하기 22는 33", () => {
  expect(sum(11, 22)).toBe(33);
});

test("객체 할당 테스트", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("양수 더하기", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("undefined", () => {
  const n = undefined;
  expect(n).not.toBeNull();
  expect(n).toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Using matchers

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4.0);
  expect(value).toEqual(4.0);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("but there is a 'stop' in Christoph", () => {
  expect("Christoph").toMatch("stop");
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towel",
  "milk",
];
test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

async function fetchData() {
  return "peanut butter";
}

test("the data is peanut butter", async () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the fetch fails with an error", async () => {
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

function initializeCityDatabase() {}

function clearCityDatabase() {}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

function isCity(city) {
  return city == "Vienna";
}
test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).not.toBeTruthy();
});
