export default class Validator {
  static validateUserName = (name) => {
    const required = /^[A-Za-z0-9_-]+$/g.test(name);
    const firstSymb = /^[\d_-]/.test(name);
    const lastSymb = /[\d_-]$/.test(name);
    const manyDigits = /\d{4}/.test(name);

    if (required && !firstSymb && !lastSymb && !manyDigits) {
      return true;
    }
    return false;
  };
}
