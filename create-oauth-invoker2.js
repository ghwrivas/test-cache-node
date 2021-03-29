const { OauthInvoker } = require("./oauth-invoker")
const tokenInstance = require('./instance-token2');

const getOauthInvoker2 = () => {
  return new OauthInvoker(tokenInstance)
}

module.exports = { getOauthInvoker2 }