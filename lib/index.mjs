import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import HasIntrinsic from '#intrinsics/HasIntrinsic';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import Base32CrockfordDecode from './decode.mjs';
import Base32CrockfordDecodeInt from './decodeInt.mjs';
import Base32CrockfordDecodeInto from './decodeInto.mjs';
import Base32CrockfordEncode from './encode.mjs';
import Base32CrockfordEncodeInt from './encodeInt.mjs';
import Base32CrockfordIsValid from './isValid.mjs';
import Base32CrockfordNormalize from './normalize.mjs';
import Base32CrockfordValidate from './validate.mjs';

const ImportFunction = async name => {
  const module = await import(`./${name}.mjs`);
  return module.default;
}

const hasBigInt = HasIntrinsic('BigInt');

const Base32CrockfordDecodeBigInt = hasBigInt ? await ImportFunction('decodeBigInt') : undefined;
const Base32CrockfordEncodeBigInt = hasBigInt ? await ImportFunction('encodeBigInt') : undefined;

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const Base32Crockford = ObjectCreate(ObjectPrototype, {
  decode: {
    value: Base32CrockfordDecode
  },
  decodeBigInt: {
    value: Base32CrockfordDecodeBigInt
  },
  decodeInt: {
    value: Base32CrockfordDecodeInt
  },
  decodeInto: {
    value: Base32CrockfordDecodeInto
  },
  encode: {
    value: Base32CrockfordEncode
  },
  encodeBigInt: {
    value: Base32CrockfordEncodeBigInt
  },
  encodeInt: {
    value: Base32CrockfordEncodeInt
  },
  isValid: {
    value: Base32CrockfordIsValid
  },
  normalize: {
    value: Base32CrockfordNormalize
  },
  validate: {
    value: Base32CrockfordValidate
  }
});
ReflectDefineProperty(Base32Crockford, SymbolToStringTag, {
  value: 'Base32Crockford'
});

export default Base32Crockford;
