<template>
    <div class="homedetail">
        <!-- 详情{{$route.params.id}} -->
        <div class="detail-header">
            <router-link  class="fa fa-chevron-left"
                 tag="i"
                :to="{name:'ShoppingList'}"
            >返回</router-link>
            <i class="fa fa-hand-o-down"></i>
            <!-- <router-link class="fa fa-forward"
                tag="i"
                :to="{name:'ShoppingDetail'}"
            >返回详情页</router-link> -->
        </div>
        <div  class="detail-content">
            <p class="p1" v-if="cars.length === 0">购物车空空的,快去逛逛吧！</p>
           <div v-else>
                <mt-cell 
                    :label="'￥' + good.OriginalPrice + '*' + good.num"
                    :title="good.CommodityName"
                    v-for="good in cars"
                    :key="good.CommodityId"
                    >
                    <mt-button @click="addGoodInCar(good)"  size="small">+</mt-button>
                    <mt-button @click="reduceGoodInCar(good)"  size="small">-</mt-button>
                    <img slot="icon" :src="good.SmallPic" width="48" height="48" alt="">
                 </mt-cell> 
                  <div class="total">
                        <p>合计总价格：<i>{{'￥' + compoteTotal.price}}</i></p>
                        <p>合计总数目：<i>{{compoteTotal.num}}</i></p>
                        <p>去结算</p>
                 </div>
            </div>
           
        </div>
        <!-- <router-link class="shoppingCar fa fa-shopping-cart"
            tag="div"
            :to="{name:'shoppingCar'}"
         ></router-link> -->
    </div>
</template>

<script> 
import {mapState,mapActions,mapGetters} from "vuex" //辅助函数:mapState、mapActions
export default {
   computed:{
       ...mapState({
           cars:state=>state.myCar.cars //模块名：myCar   以回调函数的形式拿到状态
       }),
       ...mapGetters(["compoteTotal"]) //getter.js中的方法：compoteTotal
   },
   methods:{
       ...mapActions(["addGoodInCar","reduceGoodInCar"])//增加和减少商品的方法
   }
}

</script>

<style lang="scss">
    .homedetail{
        width:100%;
        .detail-header{
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
        .detail-nav{
            width:100%;
            height:0.4rem;
            font-size:12px;
            display:flex;
            align-items:center;
           
            span{
                padding-left:14px;
                font-size:12px;
            }
            i{
                padding-left:8px;
                font-size:12px;
            }
        }
        .detail-content{
            .mint-cell{
                margin-bottom:10px;
                border-bottom:1px dashed #ddd;
                img{
                    float:left;
                }
                .mint-cell-title{
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                }
                .mint-cell-label{
                    font-size:14px;
                    color:#fb3d3d;
                }
                .mint-cell-text{
                    font-size:12px;
                }
                .mint-button{
                    width:30px;
                    height:30px;
                    border-radius:50%;
                    margin-left:7px;
                    font-size:15px;
                    background:#008842a6;
                    color:#fff;
                }
            }
           .p1{
                width:100%;
                height:210px;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:14px;
                color:#666;
                background:url(../../assets/shoppingCar.jpg) no-repeat center -15px;
                background-size:50%;
            }
            .total{
                position:fixed;
                bottom:0;
                width:100%;
                height:40px;
                background:#eee;
                display:flex;
                justify-content:space-around;
                align-items:center;
                font-size:12px;
                p:last-child{
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    width:50px;
                    height:40px;
                    background:#003affe3;
                    color:#fff;
                    border-radius:4px;
                }
                p:nth-child(1){
                    color:#555;
                   i{
                       color:#d61717d6;
                   }
                }
                 p:nth-child(2){
                    color:#555;
                   i{
                       color:#d61717d6;
                   }
                }
            }
           
        }
    }
</style>
