const { OauthInvoker } = require("./oauth-invoker")
const tokenInstance = require('./instance-token');

const getOauthInvoker1 = () => {
  return new OauthInvoker(tokenInstance)
}

module.exports = { getOauthInvoker1 }