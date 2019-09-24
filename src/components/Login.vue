<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../../src/assets/icon.jpg" class="mx-auto d-block" alt="" width="380" height="300" >
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                         
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- <ul>
            <li v-for="item in list">
                {{item.email}}
            </li>
        </ul> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:'',
            list:[]
        }
    },

    beforeRouteEnter:(to,from,next) => {
        next(vm => vm.$store.dispatch("setUser",null))
    },

    methods:{
        onSubmit(){
            axios.get('/user').then(res => {
                const data=res.data.data
               // console.log(data);
                const users=[]
                for(let key in data){
                    const user=data[key]
                    //测试
                    console.log(data[1]);
                    users.push(user)
                }

               
                //实现过滤
               // console.log(users)
               let result= users.filter((user) => {
                  
                     return user.email===this.email && user.password===this.password
                   
                    })
                     if(result!=null && result.length>0){
                        // this.$store.state.currentUser=result[0].email
                         this.$store.dispatch("setUser",result[0].email)
                         this.$router.push({name:"homeLink"})
                    }else{
                         alert("账号或密码错误");
                         this.$store.dispatch("setUser",null)
                     }
                    // console.log(result);
                    
            })
        }
    }
}
</script>