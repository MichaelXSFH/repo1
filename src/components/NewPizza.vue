<template>
    <form action="">
        <h3 class="text-muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
            <label class="col-sm-2">品种</label>
            <div class="col-sm-10 ">
                <input type="text" class="form-control" v-model="newPizza.name" >
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-2">描述</label>
            <div class="col-sm-10">
                <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong>选项1</strong></p>
         <div class="form-group row">
            <label class="col-sm-2" for="">尺寸</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.size1" >
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-2" for="">价格</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.price1" >
            </div>
        </div>
        <p><strong>选项1</strong></p>
         <div class="form-group row">
            <label class="col-sm-2" for="">尺寸</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.size2" >
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-2" for="">价格</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.price2" >
            </div>
        </div>
        <div class="form-group row">
            <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){
        return{
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){


            let info={
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:JSON.stringify([
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ])
            }

            // fetch("http://localhost:9001/menu",{
            //     method:"POST",
            //     headers:{
            //         "Content-type":'application/json'
            //     },
            //     body:JSON.stringify(data)
            // }).then(res => console.log(res))
            
             axios.post('/menu',info).then(res =>{
                  // this.$router.push({name:'menuLink'})
                 this.$store.commit("pushToMenuItems",info)
               })
        }
    }
}
</script>

<style  scoped>

</style>