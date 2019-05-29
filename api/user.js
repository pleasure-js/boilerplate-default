module.exports = {
  model: {
    // see: https://mongoosejs.com/docs/guide.html#definition
    schema: {
      firstName: {
        type: String,
      },
      email: {
        type: String,
        validate: {
          validator: /^[a-z0-9.+_]+@[a-z0-9-.]+\.[a-z]{2,}$/
        }
      }
    }
  }
}
