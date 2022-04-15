import ALPHABET from '#internal/ALPHABET';
import AlphabetIndexOf from '#internal/AlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const NormalizeStringStrict = string => {
  const length = string.length;
  let normalized = '';
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = AlphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    normalized += ALPHABET[charIndex];
  }
  return normalized;
}

export default NormalizeStringStrict;
