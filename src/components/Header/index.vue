<template>
    <div class="app-header">
        <i class="fa fa-search"></i>
        <input type="text" value="请输入食物名称">
        <i class="fa  fa-qrcode"></i>       
    </div> 
</template>

<script>
import router from "@/router"
export default {

}
</script>
<style lang="scss">
    html,body{
        box-sizing:border-box;
    }
   .app-header{
       width:100%;
       height:1.88rem;
       background:url(../../assets/food.png) no-repeat;
       background-size:100%;
       padding:0 26px;
       display:flex;
       justify-content:space-between;
       align-items:flex-end;
    //    position:fixed;
    //    top:0;
    //    left:0;
       input{
            width:100%;
            height:0.42rem;
            font-size:0.12rem;
            color:#c1956a;
            text-indent:12px;
            border:none;
            margin-bottom:0.08rem;
       }
       i{
           height:0.42rem;
           background:#fff;
           color:#c1956a;
           display:flex;
           align-items:center;
           margin-bottom:0.08rem;
           padding-left:0.16rem;
       }
        i:nth-of-type(2){
                padding:0 0.16rem 0 0;
        }
   }
</style>
