const { buildPath, resolveFileName, baseAction, getTemplatePath } = require('./core');

module.exports = function (plop, baseActions) {

  plop.setGenerator('controller', {
    description: 'Create a new lit controller',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'The controller name:'
    }, ...baseActions],
    actions(data) {
      const {
        name,
        directory
      } = data;

      const fileName = resolveFileName(name);

      return [{
        ...baseAction(),
        path: buildPath(`${fileName}/${fileName}.controller.ts`, directory),
        templateFile: getTemplatePath('controller/controller')
      }];
    }
  });
}