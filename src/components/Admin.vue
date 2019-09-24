<template>
    <div class="row" >
        <div class="col-sm-12 col-md-8">
            <app-new-pizza ></app-new-pizza>
        </div>
            <!-- new pizza -->
        <div class="col-sm-12 col-md-4">
                <!-- 品种展示 -->
                <h3 class="text-muted my-5">菜单</h3>
                <table class="table">
                    <thead class="table table-default">
                        <tr>
                            <th>品种</th>
                            <th>删除</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" :key="item.name">
                        <tr>
                            <td>{{item.name}}</td>
                            <td>
                                <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import NewPizza from './NewPizza.vue'
export default {
   
    data(){
        return{
           // getMenuItems:[],
            //info:[],
           
        }
    },
    components:{
        'app-new-pizza':NewPizza
    },
    created(){
        axios.get('/menu').then(res => {
          let menuArray=res.data.data
        //   for(let key in res.data.data){
        //       res[key].id=key
        //       menuArray.push(res[key])
        //   }
        
         this.$store.commit('setMenuItems',menuArray)
        
        })
    },
    computed:{
         getMenuItems:{
             //在vuex中获取数据
             get(){
                    return this.$store.getters.getMenuItems
                    console.log(this.$store.state.menuItems);
                 },
             set(){}
            
        }
    },
    methods:{
      
        deleteData(item){
            axios.delete('/menu/'+item.id).then(res => {
            this.$store.commit('removeMenuItems',item)
        })
        }
    }
}
</script>