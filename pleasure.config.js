module.exports = {
  debug: true,
  ui: {
    postCssVariables: {
      theme: {
        profile: {
          // todo: see if it can be reloaded
          background: `green`, // can be accessed via var(--theme-profile-background) in any postcss scope
        }
      }
    }
  }
}
