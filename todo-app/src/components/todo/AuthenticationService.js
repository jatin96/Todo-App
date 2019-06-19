class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
        
    }
    logout() {
        console.log('logged out successfully')
        sessionStorage.removeItem('authenticatedUser');
    }
    isLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) {
            return false
        }
        return true;
    }
    getLoggedInUserName() {
        return sessionStorage.getItem('authenticatedUser')
    }

}
export default new AuthenticationService(); 