const expect = require('chai').expect;
const { caesar } = require('../src/caesar');

describe('caesar', () => {
  it('should encode a message correctly', () => {
    const input = 'thinkful';
    const shift = 3;
    const expected = 'wklqnixo';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should decode a message correctly', () => {
    const input = 'wklqnixo';
    const shift = 3;
    const expected = 'thinkful';
    const actual = caesar(input, shift, false);
    expect(actual).to.equal(expected);
  });

  it('should maintain spaces and other nonalphabetic symbols', () => {
    const input = 'this is a secret message!';
    const shift = 8;
    const expected = 'bpqa qa i amkzmb umaaiom!';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should ignore capital letters', () => {
    const input = 'THINKFUL';
    const shift = 3;
    const expected = 'wklqnixo';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should return false if shift value is not present, equal to 0, less than -25, or greater than 25', () => {
    const input = 'thinkful';
    const shift = '';
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should wrap around to the front of the alphabet if a letter goes "off" the alphabet', () => {
    const input = 'z';
    const shift = 3;
    const expected = 'c';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
});
