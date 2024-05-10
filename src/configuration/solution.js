const hasNumber = (string) => (string.search(/\d/) !== -1);

export default class PasswordValidator {
  constructor(options = {}) {
    // Устанавливаем значения по умолчанию для опций
    this.minLength = options.minLength === undefined ? 8 : options.minLength;
    this.containNumbers = options.containNumbers === undefined ? true : options.containNumbers;
  }

  validate(password) {
    const errors = {};

    if (password.length < this.minLength) {
      errors.minLength = 'too small';
    }

    if (this.containNumbers && !hasNumber(password)) {
      errors.containNumbers = 'should contain at least one number';
    }

    return errors;
  }
}
