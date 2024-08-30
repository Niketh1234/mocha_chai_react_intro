// test/math.spec.js
import { expect } from "chai";
import { add, subtract } from "../functions.js";

describe("Math Functions", () => {
  before("", () => {
    console.log("This is the before all");
  });

  beforeEach("", () => {
    console.log("test started");
  });

  it("should add two numbers correctly", () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it("should subtract two numbers correctly", () => {
    const result = subtract(5, 3);
    expect(result).to.equal(2);
  });

  after("", () => {
    console.log("This is the after all");
  });

  afterEach("", () => {
    console.log("test completed");
  });
});

describe("", () => {});
