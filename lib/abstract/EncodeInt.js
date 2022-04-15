'use strict';

const MathFloor = require('#primordials/MathFloor');
const ALPHABET = require('#internal/ALPHABET');

const EncodeInt = integer => {
  if (!integer) {
    return '0';
  }
  let string = '';
  let carry = integer < 0 ? -integer : integer;
  while (carry) {
    const charIndex = carry % 32;
    const char = ALPHABET[charIndex];
    string = `${char}${string}`;
    carry = MathFloor(carry / 32);
  }
  return string;
}

module.exports = EncodeInt;
