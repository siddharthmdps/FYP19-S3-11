class Auth {
    constructor() {
        this.authenticated = false
    }

    isValid(username, password) { //unused due to async required for fetch post

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