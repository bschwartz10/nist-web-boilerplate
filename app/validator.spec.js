import Validator from './validator';
import "isomorphic-fetch"

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    const commonPasswordsSample = '123456\npassword\n12345678\nqwerty\n123456789\n12345\n1234\n111111'
    validator = new Validator(commonPasswordsSample);
  })

  test('8 character password returns true', () => {
    const value = 'foobarbaz'
    expect(validator.isValidCharacterLength(value)).toEqual(true)
  })

  test('64 character password returns true', () => {
    const value = 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwer'
    expect(validator.isValidCharacterLength(value)).toEqual(true)
  })

  test('7 character password returns false', () => {
    const value = 'foobarb'
    expect(validator.isValidCharacterLength(value)).toEqual(false)
  })

  test('65 character password returns false', () => {
    const value = 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwerq'
    expect(validator.isValidCharacterLength(value)).toEqual(false)
  })

  test('only ascii characters returns true', () => {
    const value = 'foobarbaz'
    expect(validator.isOnlyASCIICharacters(value)).toEqual(true)
  })

  test('non-ascii characters returns false', () => {
    const value = 'ááááááááááá'
    expect(validator.isOnlyASCIICharacters(value)).toEqual(false)
  })

  test('password is not included in common passwords file returns true', () => {
    const value = 'foobarbaz'

    expect(validator.isNotCommonPassword(value)).toEqual(true)
  })

  test('password is included in common passwords file returns false', () => {
    const value = '123456'

    expect(validator.isNotCommonPassword(value)).toEqual(false)
  })

  test('isValid returns true for valid password', () => {
    const value = 'brettspasswordvalidator'

    expect(validator.isValid(value)).toEqual(true)
  })

  test('isValid returns false for invalid password', () => {
    const value = 'á1234'

    expect(validator.isValid(value)).toEqual(false)
  })

  test('errorMessages is blank if password is valid', () => {
    const value = 'foobarbaz'
    validator.isValid(value)

    expect(validator.errorMessages).toEqual('')
  })

  test('adds error message if password is too short', () => {
    const value = 'foobarb'
    validator.isValid(value)

    expect(validator.errorMessages).toEqual('Password length must be between 8 and 64 characters')
  })

  test('adds error message if password is too long', () => {
    const value = 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwerq'
    validator.isValid(value)

    expect(validator.errorMessages).toEqual('Password length must be between 8 and 64 characters')
  })

  test('adds error message if password is not ascii compliant', () => {
    const value = 'ááááááááááá'
    validator.isValid(value)

    expect(validator.errorMessages).toEqual('Password must contain only ASCII characters')
  })

  test('adds error message is included in common passwords', () => {
    const value = '123456789'
    validator.isValid(value)

    expect(validator.errorMessages).toEqual('Password must be more unique')
  })

});
