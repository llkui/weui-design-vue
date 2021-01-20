const rm = require('rimraf')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const {
  execSync
} = require('child_process')

const getComponentsDirectory = () => {
  return path.resolve(__dirname, '../packages')
}

const getLibraryDirectory = (subLibraryDirectory) => {
  return path.resolve(__dirname, '../publish/lib', subLibraryDirectory)
}

console.log(chalk.cyan(`Building components ...\n`))

fs.readdir(getComponentsDirectory(), (err, files) => {
  if (err) {
    console.log(chalk.red('Build failed with errors.\n'))
    process.exit(1)
  } else {
    if (files.length > 0) {
      let _files = files.filter(name => name !== 'core' && name !== 'styles' && name !== 'index.js' && name !== 'weui.css')
      let index = 1,
        len = _files.length
      _files.forEach(componentName => {
        console.log(chalk.cyan(`Building ${componentName} ${index}/${len}\n`))
        let result = execSync(`vue-cli-service build --target lib --name index --dest publish/lib/${componentName} packages/${componentName}/index.js`)
        console.log(chalk.green(result.toString()))
        rm(getLibraryDirectory(`${componentName}/demo.html`), () => {})
        fs.renameSync(getLibraryDirectory(`${componentName}/index.common.js`), getLibraryDirectory(`${componentName}/index.js`))
          ++index
      })
    }
    console.log(chalk.cyan('Build complete.\n'))
  }
})