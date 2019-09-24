var isLogin = JSON.parse(localStorage.getItem('isLogin') || true)

const state={
    isLogin:isLogin
}


const getters={
    isLogin:state => state.isLogin
}

const mutations={

}

const actions={

}

export default {
    state,
    getters,
    mutations,
    actions
}
