import apiURL from '../config'

class Auth {

    // check with backend
    // update in the localstorage
    // return result
    login(loginParticulars, cb) {
        console.log('Login particulars', loginParticulars)
        const herokuserver = apiURL + 'login'
        const localhost = "http://localhost:3001/login"

        fetch(herokuserver, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginParticulars)
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data.message)

            if(data.message === 'success'){
                localStorage.setItem('isAuthenticated', true)
                localStorage.setItem('id', data.body.id)
                localStorage.setItem('username', loginParticulars.username)
                localStorage.setItem('usertype', loginParticulars.usertype)
                cb(true)
            } else cb(false)
        })
        .catch(error => {
            //alert (`Log in failed. Please try again ${error}`)
            cb(false)
        }) 
    }

    logout(cb) {
        localStorage.clear()
        window.location = `/login`
        cb()
    }

    isAuthenticated() {
        if(localStorage.getItem('isAuthenticated')) return true
        else return false
    }
}

export default new Auth()