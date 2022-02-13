const { readFileSync } = require('fs')

const folder = './specs-tmp';

const createFiles = (type) => {
  const command = `npx plop ${type} foo ${folder}`;

  require('child_process').execSync(
    command,
    { stdio: 'inherit' }
  );
}

test('Component', () => {
  createFiles('component');

  expect(readFileSync(`${folder}/foo/foo.component.ts`, { encoding: 'utf8' })).toMatchSnapshot();
  expect(readFileSync(`${folder}/foo/foo.style.ts`, { encoding: 'utf8' })).toMatchSnapshot();
})

test('Directive', () => {
  createFiles('directive');

  expect(readFileSync(`${folder}/foo/foo.directive.ts`, { encoding: 'utf8' })).toMatchSnapshot();
})

test('Controller', () => {
  createFiles('controller');

  expect(readFileSync(`${folder}/foo/foo.controller.ts`, { encoding: 'utf8' })).toMatchSnapshot();
})