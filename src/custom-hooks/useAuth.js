import Api from '../Api'


async function login(data) {
    // todo: do the error handling overhere:
    let _token = await Api.login(data)
    return _token

}


export {login}