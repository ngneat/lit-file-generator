const kebabCase = require('lodash.kebabcase');
const path = require('path');

module.exports = {
  buildPath(name, dir) {
    return path.resolve(dir, name);
  },
  resolveFileName(name) {
    return kebabCase(name);
  },
  getTemplatePath(template) {
    return `./templates/${template}.txt`
  }, baseAction() {
    return {
      type: 'add',
      skipIfExists: true,
      force: true,
    }
  }
}