class Auth {
    constructor() {
        this.authenticated = false
    }

    isValid(username, password) { //unused due to async required for fetch post
        if (username === "username" && password === "password") {
            return true
        }
        else return false
    }

    login(cb) {
        this.authenticated = true
        cb()
    }

    logout(cb){
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()