module.exports = {
  // see `inquirer.prompt` in https://github.com/SBoudrias/Inquirer.js/
  prompts: [
    {
      name: 'author',
      message: 'Author name?'
    },
    {
      type: 'checkbox',
      name: 'config',
      message: 'Author name?',
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
