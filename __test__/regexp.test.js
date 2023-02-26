import Validator from '../validator';

const validator = new Validator();

test('proper name', () => {
  const result = validator.validateUserName('Sancho134-er_ty');
  expect(result).toEqual(true);
});

test('Wrong first symbol', () => {
  const result = validator.validateUserName('_Sancho134erty');
  expect(result).toEqual(false);
});

test('Wrong last symbol', () => {
  const result = validator.validateUserName('Sancho134erty4');
  expect(result).toEqual(false);
});

test('4+ digits in consequence', () => {
  const result = validator.validateUserName('_Sancho1234erty');
  expect(result).toEqual(false);
});
