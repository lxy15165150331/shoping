<template>
    <div class="home">
         <div class="app-wrap" v-if="isFixed">
             <i class="fa fa-search"></i>
             <input type="text" value="请输入食物名称"> 
             <i class="fa  fa-qrcode"></i>    
         </div> 
        <AppHeader></AppHeader>
        <Banner></Banner>
        <Appcontent></Appcontent>
        <Tabbar></Tabbar>
        <BackTop></BackTop>

    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import AppHeader from "@/components/Header"
import Appcontent from "./HomeContent"
import Banner from "@/components/Banner"
import BackTop from "./BackTop"
export default {
      components:{
        Tabbar,
        AppHeader,
        Appcontent,
        Banner,
        BackTop,

    },
    data(){
        return{
            isFixed:false
        }
    },
    methods:{
        listenScroll(){
            // console.log(11111);
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=112){
                if(!this.isFixed) this.isFixed = true;//提升性能，只设置一次
            }else{
                if(this.isFixed) this.isFixed = false;
            }
        }
    },
    created(){
        window.addEventListener("scroll",this.listenScroll)
    },
    beforeDestroy(){
        window.removeEventListener("scroll",this.listenScroll)
        this.isFixed = false; 
    }
}
</script>
<style  lang="scss" scoped>
    .home{
        padding-bottom:60px;
        // margin-top:1.88rem;
        .app-wrap{
            width:100%;
            height:0.75rem;
            background-size:100%;
            padding:0 26px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            background:#ed8a53;
            z-index:10;
            position:fixed;
            top:0;
            left:0;
            input{
                width:100%;
                height:0.42rem;
                font-size:0.12rem;
                color:#c1956a;
                text-indent:12px;
                border:none;
            }
            i{
                height:0.42rem;
                background:#fff;
                color:#c1956a;
                display:flex;
                align-items:center;
                padding-left:0.16rem;
            }
            i:nth-of-type(2){
                padding:0 0.16rem 0 0;
            }
        }
        // &.fixedtop{
        //     position:fixed;
        //     top:0;
        //     left:0;
        //     width:100%;
        // }
    }
</style>
