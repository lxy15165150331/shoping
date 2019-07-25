<template>
    <div class="Group">
        <div class="Group-header">
            <p>逛吃</p>
            <i class="fa fa-camera"></i>
        </div>
        <div class="nav-bar">
            <span
                v-for="nav in navs"
                :key="nav.id"
                :class="{'active':type===nav.type}"
                @click="type=nav.type"
            >{{nav.title}}</span>
        </div>
        <div>
            <MovieBox :type="type"></MovieBox>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import MovieBox from "./MovieBox"
import Tabbar from "@/components/Tabbar"
export default {
    name:"group",//做缓存用
    components:{
        Tabbar,
        MovieBox
    },
     data(){
         return {
            isShow:false,
            type:"in_theaters",
            navs:[
                {id:1,title:"正在上映",type:"in_theaters"},
                {id:2,title:"即将上映",type:"coming_soon"},
            ]
         }
     }
}
</script>

<style lang="scss">
    .Group{
        width:100%;
        height:0.5rem;
        .Group-header{
            display:flex;
            position:fixed;
            top:0;
            z-index:5;
            width:100%;
            height:0.5rem;
            padding:0 0.15rem;
            background:#fff;
            border-bottom:1px solid #ddd;
           p{
                display:flex;
                width:100%;
                height:0.5rem;
                line-height:.5rem;
                justify-content:center;
                align-items:center;
           }
           i{
                position:absolute;
                top:0;
                right:0.15rem;
                height:0.5rem;
                line-height:.5rem;
                color:#dc7c8dd9;
           }
        }
       .nav-bar{
           position:fixed;
           top:0;
           z-index:5;
           background:#fff;
           margin-top:50px;
           width:100%;
           height:0.44rem;
           display:flex;
           justify-content:space-around;
           align-items:center;
           span{
               font-size:12px;
           }
           .active{
                color: #dc7c8dd9;
                font-weight: bold;
            }
       }
    }
</style>
