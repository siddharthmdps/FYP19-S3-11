class Auth {
    constructor() {
        this.authenticated = false
    }

    isValid(username, password) {
        if (username === "username" && password === "password") {
            return true
        }
        else return false
    }

    login(cb) {
        this.authenticated = true
        localStorage.setItem('authenticated', true)
        cb()
    }

    logout(cb){
        this.authenticated = false
        localStorage.setItem('authenticated', false)
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()