import Api from '../Api'


async function login(data) {
    // todo: do the error handling overhere:
    let user = await Api.login(data)
    return user

}
async function signup(data) {
    // todo: do the error handling overhere:
    let user = await Api.signup(data)
    return user

}

function isLogged() {
    if (JSON.parse(window.localStorage.getItem("_token")) !== null) {
       return true
    }
    else {
      return false
    }

  }


export {login, signup, isLogged}