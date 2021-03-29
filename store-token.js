class StoreToken {
  constructor() {
    this.token = null;
  }

  setToken(newToken) {
    this.token = newToken;
  }

  getToken(){
    return this.token;
  }
}

module.exports = { StoreToken }