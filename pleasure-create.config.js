module.exports = {
  install ({ options, fileMap }) {
    return {
      options,
      fileMap
    }
  },
  // see `inquirer.prompt` in https://github.com/SBoudrias/Inquirer.js/
  prompts: [
    {
      name: 'author',
      message: 'Author name?'
    }
  ]
}
