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
      validate (a) {
        console.log({ a })
        process.exit(0)
        return true
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
}
