const { buildPath, resolveFileName, baseAction, getTemplatePath } = require('./core');

module.exports = function (plop, baseActions) {

  plop.setGenerator('directive', {
    description: 'Create a new lit directive',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'The directive name:'
    }, ...baseActions],
    actions(data) {
      const {
        name,
        directory
      } = data;

      const fileName = resolveFileName(name);

      return [{
        ...baseAction(),
        path: buildPath(`${fileName}/${fileName}.directive.ts`, directory),
        templateFile: getTemplatePath('directive/directive')
      }];
    }
  });
}