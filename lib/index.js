'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const HasIntrinsic = require('#intrinsics/HasIntrinsic');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const Base32CrockfordDecode = require('./decode');
const Base32CrockfordDecodeInt = require('./decodeInt');
const Base32CrockfordDecodeInto = require('./decodeInto');
const Base32CrockfordEncode = require('./encode');
const Base32CrockfordEncodeInt = require('./encodeInt');
const Base32CrockfordIsValid = require('./isValid');
const Base32CrockfordNormalize = require('./normalize');
const Base32CrockfordValidate = require('./validate');

const hasBigInt = HasIntrinsic('BigInt');

const Base32CrockfordDecodeBigInt = hasBigInt ? require('./decodeBigInt') : undefined;
const Base32CrockfordEncodeBigInt = hasBigInt ? require('./encodeBigInt') : undefined;

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

module.exports = Base32Crockford;
