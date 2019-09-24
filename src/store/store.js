import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var user = JSON.parse(localStorage.getItem('user') || 'null')
var isLogin = JSON.parse(localStorage.getItem('isLogin') || 'null')
export const store=new Vuex.Store({
    state:{
        //设置属性
        menuItems:{},
        currentUser:user,
        isLogin:isLogin
    },
    getters:{
        //获取属性的状态
        getMenuItems:state => state.menuItems,
        currentUser:state => state.currentUser,
        isLogin:state => state.isLogin
    },
    mutations:{
        //改变属性的状态
        setMenuItems(state,data){
            state.menuItems=data
        },
        //将匹配到对象，在menuItems数组中删除
        removeMenuItems(state,data){
            state.menuItems.forEach((item,index) => {
                if(item==data){
                    state.menuItems.splice(index,1)
                }
            }); 
        },
        //将新添加的pizza Push到menuItems属性中
        pushToMenuItems(state,data){
            state.menuItems.push(data)
        },
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
    },
    actions:{
        //应用mutations
        setUser({commit},user){
            commit("userStatus",user)
        }
    }
})