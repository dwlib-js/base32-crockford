import TypedArraySlice from '#primordials/TypedArraySlice';
import Uint8Array from '#primordials/Uint8Array';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import GetMaxByteCount from './GetMaxByteCount.mjs';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const DecodeBytesStrict = string => {
  const length = string.length;
  const maxByteCount = GetMaxByteCount(length);
  const bytes = new Uint8Array(maxByteCount);
  let index = 0;
  let bits = 0;
  let carry = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    carry = (carry << 5) | charIndex;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      bytes[index++] = (carry >>> bits) & 0xff;
    }
  }
  return index !== maxByteCount ? TypedArraySlice(bytes, 0, index) : bytes;
}

export default DecodeBytesStrict;
