import path from 'path'
import glob from 'glob'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

jest.mock('inquirer-npm-name', () => (prompt, inquirer) => inquirer.prompt(prompt))

const templatePath = (...args) => path.join(__dirname, '../../template', ...args)

const getTemplateFiles = () => {
  const ignore = ['**/.git/**', 'README.md']
  return glob.sync('**/*', { ignore, cwd: templatePath(), dot: true })
}

const run = () => helpers.run(path.join(__dirname))

describe('nodule:app', () => {
  it('copies files properly', async () => {
    await run().withPrompts()
    const templateFiles = getTemplateFiles()
    assert.file(templateFiles)
  })
})
