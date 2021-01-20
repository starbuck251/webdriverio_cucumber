const fetch = require('node-fetch');

class Api_Calls {
  post(url, body) {
    const io = browser.getNamedCookie('io').value;
    const xsrf_token = browser.getNamedCookie('XSRF-TOKEN').value;
    const mv_access = browser.getNamedCookie('mv_access').value;
    (async () => {
      const rawResponse = await fetch(url, {
        method: 'POST',
        // TODO single_sign_on integration headers update required
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Cookie: `io=${io}; XSRF-TOKEN=${xsrf_token} ; mv_access=${mv_access}`,
        },
        body: JSON.stringify(body),
      });
      // TODO improve to return output / fail on error
      // const content = await rawResponse.json();
      // const status = await rawResponse.status;
      // console.log(status);
    })();
  }
}

module.exports = new Api_Calls();
