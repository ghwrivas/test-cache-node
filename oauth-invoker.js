class OauthInvoker {
  constructor(tokenInstance) {
    this.tokenInstance = tokenInstance
  }

  setToken(token) {
    this.tokenInstance.setToken(token)
  }

  getToken() {
    return this.tokenInstance.getToken();
  }
}

module.exports = { OauthInvoker };