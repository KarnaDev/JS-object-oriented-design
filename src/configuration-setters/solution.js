export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  constructor(options = {}) {
    this.options = { ...Truncater.defaultOptions, ...options };
  }

  truncate(text, options = {}) {
    const { separator = this.options.separator, length = this.options.length } = options;

    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + separator;
  }
}
