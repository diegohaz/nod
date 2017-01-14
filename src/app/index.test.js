import path from 'path'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

jest.mock('inquirer-npm-name', () => (prompt, inquirer) => inquirer.prompt(prompt))

const run = () => helpers.run(path.join(__dirname))

describe('nodule:app', () => {
  it('copies files properly', async () => {
    await run().withPrompts()
    assert.file([
      'src/index.js',
      'test/index.js',
      '.babelrc',
      '.editorconfig',
      '.eslintrc',
      '.flowconfig',
      '.gitignore',
      '.travis.yml',
      'LICENSE',
      'README.md',
      'index.js',
      'package.json',
      'yarn.lock'
    ])
  })
})
