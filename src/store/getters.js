const getters = {
    token: (state) => state.user.token,
    userInfo: (state) => state.user.userInfo,
    jurisdiction: (state) => state.user.jurisdiction
}

export default getters