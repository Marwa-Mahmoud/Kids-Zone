class Auth {
  
    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(authInfo) {
      localStorage.setItem('token', authInfo.kid.token);
      localStorage.setItem('name', authInfo.kid.name)
      localStorage.setItem('id', authInfo.kid.id)
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      if(localStorage.getItem('token') != null)
      return true;
      else
      return false
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('name')
      localStorage.removeItem('id')
  
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getToken() {
      return localStorage.getItem('token');
    }
  
  }
  
  export default Auth;
  