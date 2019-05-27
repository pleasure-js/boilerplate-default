module.exports = {
  install ({ options, fileMap }) {
    return {
      options,
      fileMap
    }
  },
  // see: https://github.com/terkelg/prompts
  prompts: {
    type: 'text',
    name: 'author',
    message: 'Author name?'
  }
}
