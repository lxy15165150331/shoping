<template>
    <div class="shoppingDetail">
            <div class="shoppingHeader">
                <router-link  class="fa fa-chevron-left"
                    tag="i"
                    :to="{name:'ShoppingList'}"
                >返回</router-link>
                <span>{{$route.params.txt}}</span>
                <i class="fa fa-hand-o-down"></i>
            </div>
            <div class="shoppingContent">
                <img :src="this.$route.params.good.SmallPic" alt="">
                <div class="SubTitle">标题：<i>{{this.$route.params.good.SubTitle}}</i></div>
                <div class="price">单价：<i>{{'￥'+this.$route.params.good.OriginalPrice}}</i></div>
                <div class="Spec">规格：<i>{{this.$route.params.good.Spec}}</i></div>
                <div class="title">商品简介：<i>{{this.$route.params.good.CommodityName}}</i></div>
            </div>
            <div class="shoppingFooter" 
                v-for="good in cars"
                :key="good.CommodityId"  
            >
               <div class="home">
                   <i class="fa fa-home"></i>
                   <router-link
                        tag="span"
                        to="/home"
                   >首页</router-link>
               </div>
               <div class="car">
                    <i class="fa fa-shopping-cart"></i>
                   <router-link
                        tag="span"
                        :to="{name:'shoppingCar'}"
                   >购物车</router-link>
                   <p>{{compoteTotal.num}}</p> 
               </div>
               <div @click="addGoodInCar(good)"  class="addcar">加入购物车</div>
            </div>
            <!-- <router-link class="shoppingCar fa fa-shopping-cart"
                tag="div"
                :to="{name:'shoppingCar'}"
            ></router-link> -->
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
     data(){
        return{
            goods:[],
            isShow:true
        }
    },
      computed:{
       ...mapState({
           cars:state=>state.myCar.cars //模块名：myCar
       }),
       ...mapGetters(["compoteTotal"]) //getter.js中的方法：compoteTotal
     },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"]),//增加和减少商品的方法
        // getGoods(){
        //     this.$http.get("/api/fruit"+this.$route.params.id+".json").then(res=>{
        //         this.goods = res.data.Data.CommodityList;
        //         // console.log(this.goods)
        //     })
        // }
    },
    // created(){
    //     this.getGoods();
    // }
}
</script>
<style lang="scss" scoped> 
   .shoppingDetail{
       width:100%;
       .shoppingCar{
            position:fixed;
            bottom:40px;
            right:10px;
            width:30px;
            height:30px;
            background:rgba(0,0,0,.5);
            border-radius:6px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:16px;
            color:#fff;
        }
       .shoppingHeader{
            // position:fixed;
            // top:0;
            // left:0;
            z-index:10;
            width:100%;
            height:0.5rem;
            padding:0 14px;
            display:flex;
            font-size:12px;
            justify-content:space-between;
            align-items:center;
            background:#fff;
            border-bottom:1px solid #eee;
            i{
                font-size:12px;
            }
       }
       .shoppingContent{
           width:200px;
           height:200px;
           img{
               width:100%;
               height:100%;
               margin-left:60px; 
           }
           .SubTitle{
                color:#000000c7;
                margin:0 0 10px 10px;
                i{
                    color:#666;
                }
           }
           .price{
                color:#000000c7;
                margin:0 0 10px 10px;
               i{
                    color:#ff6353;
               }
           }
           .Spec{
                color:#000000c7;
                margin:0 0 10px 10px;
                i{
                    color:#ff6353;
                }
           }
           .title{
                width:300px;
                margin:0 0 10px 10px;
               color:#000000c7;
               i{
                color:#666;
               }
           }
       }
       .shoppingFooter{
           position:fixed;
           bottom:0;
           left:0;
           display:flex;
           width:100%;
           height:40px;
           justify-content:space-between;
           align-items:center;
           background:#eee;
           .home{
               display:flex;
               justify-content:center;
               align-items:center;
               flex-direction:column;
               margin-left:10px;
               span{
                   font-size:12px;
               }
           }
           .car{
               display:flex;
               justify-content:center;
               align-items:center;
               flex-direction:column;
               margin-right:50px;
               position:relative;
                span{
                   font-size:12px;
               }
               p{
                   background:#ff6353;
                   border-radius:50%;
                   width:18px;
                   height:18px;
                   position:absolute;
                   top:-0.04rem;
                   right:-0.04rem;
                   display:flex;
                   justify-content:center;
                   align-items:center;
                   color:#fff;
               }
           }
           .addcar{
               width:96px;
               height:40px;
               font-size:.05rem; 
               display:flex;
               justify-content:center;
               align-items:center;
               background:#ff6353;
               color:#fff;           
            }
       }
   }
</style>
