const {
  src,
  dest,
  series
} = require('gulp')
const clean = require('gulp-rimraf')

function cleanFile() {
  return src(['publish/types', 'publish/README.md'], {
      read: false,
      allowEmpty: true
    })
    .pipe(clean())
}

function copyTypes() {
  return src('types/*', {
      base: '.'
    })
    .pipe(dest('publish'))
}

function copyReadme() {
  return src('README.md')
    .pipe(dest('publish'))
}

exports.default = series(cleanFile, copyTypes, copyReadme)