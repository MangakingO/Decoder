const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("encoding: translates each letter to pair of numbers", () => {
    const input = "thinkful";
    const expected = "4432423352125413";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("encoding: ignores capital letters", () => {
    const input = "Hello world";
    const expected = "3251131343 2543241341";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("decoding: translates each pair of numbers to a letter", () => {
    const input = "3251131343 2543241341";
    const expected = "hello world";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });

  it("decoding: outputs (i/j) for 42", () => {
    const input = "4432423352125413";
    const expected = "th(i/j)nkful";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });

  it("decoding: returns false if input has odd number of characters", () => {
    const input = "44324233521254134";
    const expected = false;
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });

  it("encoding: should maintain spaces", () => {
    const input = "Hello world";
    const expected = "3251131343 2543241341";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  
  it("decoding: should maintain spaces", () => {
    const input = "3251131343 2543241341";
    const expected = "hello world";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
});
