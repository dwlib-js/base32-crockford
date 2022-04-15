import AlphabetIndexOf from '#internal/AlphabetIndexOf';

const DecodeIntIgnore = string => {
  const length = string.length;
  let integer = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    integer = integer * 32 + charIndex;
  }
  return integer;
}

export default DecodeIntIgnore;
