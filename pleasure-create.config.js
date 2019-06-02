const path = require('path')

module.exports = {
  // see `inquirer.prompt` in https://github.com/SBoudrias/Inquirer.js/
  prompts (dst) {
    return [
      {
        name: 'projectName',
        message: 'Project name',
        default: path.basename(dst)
      },
      {
        name: 'author',
        message: 'Author'
      },
      {
        type: 'checkbox',
        name: 'config',
        message: 'Setup',
        validate (o) {
          return o.length === 0 ? 'Pick at least one option' : true
        },
        choices: [
          {
            name: 'api',
            value: 'api',
            short: 'Enable RESTful API',
            checked: true
          },
          {
            name: 'ui',
            value: 'ui',
            short: 'Enable UI',
            checked: true
          }
        ]
      }
    ]
  },
  transform (data) {
    const config = {}
    data.config.forEach(v => {
      config[v] = true
    })
    data.config = config
    return data
  },
  async finished ({ data, dir, fse }) {
    if (!data.config.ui) {
      await fse.remove(path.join(dir, 'nuxt.config.js'))
      await fse.remove(path.join(dir, 'client'))
    }
    if (!data.config.api) {
      await fse.remove(path.join(dir, 'api'))
    }
  }
}
