import TypedArrayLength from '#primordials/TypedArrayLength';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';

const DecodeBytesIntoIgnore = (string, destination) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  let index = 0;
  let destinationIndex = 0;
  let bits = 0;
  let carry = 0;
  while (index < length && destinationIndex < destinationLength) {
    const char = string[index++];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    carry = (carry << 5) | charIndex;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      destination[destinationIndex++] = (carry >>> bits) & 0xff;
    }
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default DecodeBytesIntoIgnore;
