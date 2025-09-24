import { expect } from "chai";
import { add, subtract, multiply, divide } from "../mylib.js";

describe("mylib arithmetic operations", function () {
  before(function () {
    console.log("Starting arithmetic tests...");
  });

  after(function () {
    console.log("All tests completed!");
  });

  it("should add two numbers", function () {
    expect(add(2, 3)).to.equal(5);
  });

  it("should subtract two numbers", function () {
    expect(subtract(5, 2)).to.equal(3);
  });

  it("should multiply two numbers", function () {
    expect(multiply(4, 3)).to.equal(12);
  });

  it("should divide two numbers", function () {
    expect(divide(10, 2)).to.equal(5);
  });

  it("should throw an error when dividing by zero", function () {
    expect(() => divide(10, 0)).to.throw("ZeroDivisionError");
  });
});
