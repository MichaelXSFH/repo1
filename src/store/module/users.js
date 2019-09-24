var user = JSON.parse(localStorage.getItem('user') || 'null')

const state={
    currentUser:user,
}


const getters={
    currentUser:state => state.currentUser
}

const mutations={
    //更改用户的状态信息
    userStatus(state,user){
        if(user){
            state.currentUser=user
            state.isLogin=true
            localStorage.setItem('user', JSON.stringify(state.currentUser))
            localStorage.setItem('isLogin', JSON.stringify(state.isLogin))
        }else{
            state.currentUser=null
            state.isLogin=false
            localStorage.setItem('user', JSON.stringify(state.currentUser))
            localStorage.setItem('isLogin', JSON.stringify(state.isLogin))
        }
    }
}

const actions={
     //应用mutations
     setUser({commit},user){
        commit("userStatus",user)
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}
