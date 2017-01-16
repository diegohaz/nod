import path from 'path'
import fs from 'fs'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

jest.mock('inquirer-npm-name', () => (prompt, inquirer) => inquirer.prompt(prompt))

const run = () => helpers.run(path.join(__dirname))

describe('nodule:app', () => {
  const files = [
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
  ]

  it('copies files properly', async () => {
    await run()
    assert.file(files)
  })

  it('copies files passing name as argument', async () => {
    const dir = await run().withArguments(['generator-node'])
    assert.file(files)
    const pkg = JSON.parse(fs.readFileSync(path.join(dir, 'package.json')))
    expect(pkg.name).toBe('generator-node')
  })
})
