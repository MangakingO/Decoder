const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe("substitution", () => {
  it("should encode 'thinkful' correctly with given alphabet", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });

  it("should encode 'You are an excellent spy' correctly with given alphabet", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });

  it("should decode 'jrufscpw' correctly with given alphabet", () => {
    const expected = "thinkful";
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });

  it("should encode 'message' correctly with custom alphabet", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });

  it("should decode 'y&ii$r&' correctly with custom alphabet", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  });

  it("should return false if alphabet is not a string of 26 unique characters", () => {
    const expected = false;
    const actual1 = substitution("thinkful", "short");
    const actual2 = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual1).to.equal(expected);
    expect(actual2).to.equal(expected);
  });

  it("should maintain spaces throughout encoding/decoding", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });

});


