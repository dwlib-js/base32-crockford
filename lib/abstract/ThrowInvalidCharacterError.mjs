import RangeError from '#primordials/RangeError';

const ThrowInvalidCharacterError = index => {
  throw new RangeError(`Invalid Base32Crockford character at index ${index}`);
}

export default ThrowInvalidCharacterError;
