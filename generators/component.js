const { buildPath, resolveFileName, baseAction, getTemplatePath } = require('./core');

module.exports = function (plop, baseActions, context) {
  const prefix = context.userConfig?.prefix || 'app';

  plop.setGenerator('component', {
    description: 'Create a new lit component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'The component name:'
    }, ...baseActions],
    actions(data) {
      const {
        name,
        directory
      } = data;

      const fileName = resolveFileName(name);

      return [{
        ...baseAction(),
        data: { prefix },
        path: buildPath(`${fileName}/${fileName}.component.ts`, directory),
        templateFile: getTemplatePath('component/component')
      },
      {
        ...baseAction(),
        path: buildPath(`${fileName}/${fileName}.style.ts`, directory),
        templateFile: getTemplatePath('component/style')
      }];
    }
  });
}