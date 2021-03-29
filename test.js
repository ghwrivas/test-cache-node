const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const { getOauthInvoker1 } = require('./create-oauth-invoker1');
const { getOauthInvoker2 } = require('./create-oauth-invoker2');

const invoker1 = getOauthInvoker1();
const invoker2 = getOauthInvoker2();

var recursiveAsyncReadLine = function () {
  rl.question('Token: ', function (token) {
    if (token == 'exit') //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.

    let token1 = invoker1.getToken();
    console.log('previous invoker1.getToken', token1)
    invoker1.setToken(token)
    console.log('new invoker1.getToken', invoker1.getToken())

    let token2 = invoker2.getToken();
    console.log('previous invoker2.getToken', token2)
    invoker2.setToken(token+'2')
    console.log('new invoker2.getToken', invoker2.getToken())

    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine();





