class TokenService {
  getRefreshToken() {
    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    return authInfo?.tokens.refresh.token;
  }

  getAccessToken() {
    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    return authInfo?.tokens.access.token;
  }

  setTokens(tokens) {
    let authInfo = JSON.parse(localStorage.getItem("authInfo"));
    authInfo.tokens = tokens;
    localStorage.setItem("authInfo", JSON.stringify(authInfo));
  }

  getAuthInfo() {
    return JSON.parse(localStorage.getItem("authInfo"));
  }

  setAuthInfo(authInfo) {
    localStorage.setItem("authInfo", JSON.stringify(authInfo));
  }

  removeAuthInfo() {
    localStorage.removeItem("authInfo");
  }
}

export default new TokenService();
