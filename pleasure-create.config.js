module.exports = {
  // see `inquirer.prompt` in https://github.com/SBoudrias/Inquirer.js/
  prompts: [
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
  ],
  transform (data) {
    const config = {}
    data.config.forEach(v => {
      config[v] = true
    })
    return config
  }
}
