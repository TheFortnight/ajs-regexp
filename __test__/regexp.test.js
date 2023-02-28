import Validator from '../src/validator';

test('proper name', () => {
  const result = Validator.validateUserName('Sancho134-er_ty');
  expect(result).toEqual(true);
});

test('Wrong first symbol', () => {
  const result = Validator.validateUserName('_Sancho134erty');
  expect(result).toEqual(false);
});

test('Wrong last symbol', () => {
  const result = Validator.validateUserName('Sancho134erty4');
  expect(result).toEqual(false);
});

test('4+ digits in consequence', () => {
  const result = Validator.validateUserName('_Sancho1234erty');
  expect(result).toEqual(false);
});
