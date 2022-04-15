import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ArrayForEach from '#primordials/ArrayForEach';
import FunctionBind from '#primordials/FunctionBind';
import Map from '#primordials/Map';
import MapSet from '#primordials/MapSet';
import ALPHABET from './ALPHABET.mjs';

const MapPrototypeGet = GetIntrinsicOrThrow('Map.prototype.get');

const ALPHABET_LOOKUP = new Map();

for (let i = 0; i < 32; i++) {
  const char = ALPHABET[i];
  MapSet(ALPHABET_LOOKUP, char, i);
}

const AlphabetIndexOf = FunctionBind(MapPrototypeGet, ALPHABET_LOOKUP);

ArrayForEach([
  ['0', 'Oo'],
  ['1', 'IiLl'],
  ['A', 'a'],
  ['B', 'b'],
  ['C', 'c'],
  ['D', 'd'],
  ['E', 'e'],
  ['F', 'f'],
  ['G', 'g'],
  ['H', 'h'],
  ['J', 'j'],
  ['K', 'k'],
  ['M', 'm'],
  ['N', 'n'],
  ['P', 'p'],
  ['Q', 'q'],
  ['R', 'r'],
  ['S', 's'],
  ['T', 't'],
  ['V', 'v'],
  ['X', 'x'],
  ['Y', 'y'],
  ['Z', 'z']
], entry => {
  const char = entry[0];
  const aliases = entry[1];
  const charIndex = AlphabetIndexOf(char);
  const numberOfAliases = aliases.length;
  for (let i = 0; i < numberOfAliases; i++) {
    const alias = aliases[i];
    MapSet(ALPHABET_LOOKUP, alias, charIndex);
  }
});

export default AlphabetIndexOf;
