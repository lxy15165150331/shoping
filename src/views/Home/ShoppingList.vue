<template>
    <div class="shoppingList">
        <!-- 详情{{$route.params.id}} -->
        <div class="detail-header">
            <router-link  class="fa fa-chevron-left"
                 tag="i"
                :to="{name:'home'}"
            >返回</router-link>
            <span>{{$route.params.txt}}</span>
            <i class="fa fa-hand-o-down"></i>
        </div>
        <div class="detail-nav">
            <span>常见</span>
            <i class="fa fa-chevron-down"></i>
        </div>
        <div  class="detail-content">
                <router-link
                        tag="div"
                        :to="{name:'ShoppingDetail',params:{good:good}}"
                        v-for="good in goods"
                        :key="good.CommodityId"        
                    >
                    <div class="search">查看详情</div>
                    <mt-cell
                        :label="'￥' + good.OriginalPrice"
                        :title="good.CommodityName"
                    >   
                        <mt-button @click.stop="addGoodInCar(good)" size="small"></mt-button>
                        <img slot="icon" :src="good.SmallPic" width="48" height="48" alt="">
                    </mt-cell> 
             </router-link>
                <!-- <mt-cell
                    :label="'￥' + good.OriginalPrice"
                    :title="good.CommodityName"
                    v-for="good in goods"
                    :key="good.CommodityId"
                >   
                    <router-link
                        tag="p"
                        :to="{name:'ShoppingDetail',params:{CommodityCode:good.CommodityCode}}"
                    >查看详情</router-link>
                    <mt-button @click="addGoodInCar(good)" type="danger" size="small">购物</mt-button>
                    <img slot="icon" :src="good.SmallPic" width="48" height="48" alt="">
                </mt-cell>  -->
        </div>
        <router-link class="shoppingCar fa fa-shopping-cart"
            tag="div"
            :to="{name:'shoppingCar'}"
         ></router-link>
    </div>
</template>

<script>
// import shoppingDetail from "./ShoppingDetail"
import {mapActions} from "vuex" //辅助函数：mapActions
export default {
    // components:{
    //     shoppingDetail
    // },
    data(){
        return{
            goods:[],
        }
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
        getGoods(){
            this.$http.get("/api/fruit" +this.$route.params.id + ".json").then(res=>{
                this.goods = res.data.Data.CommodityList;
                // console.log("goods",this.goods)
            })
        },
    },
    created(){
        this.getGoods();
    },
}

</script>

<style lang="scss">
    .shoppingList{
        width:100%;
        padding-top:50px;
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
        .detail-header{
            position:fixed;
            top:0;
            left:0;
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
            .search{
                width:70px;
                position:relative;
                top:45px;
                left:110px;
                z-index:1;
                color:#666;
                font-size:12px;
            }
            .mint-cell{
                margin-top:6px;
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
                    color:#000000d9;
                }
                .mint-button{
                    width:25px;
                    height:25px;
                    border-radius:50%;
                    background:url(../../assets/add.png) no-repeat center #fff;
                    background-size:100%;
                }
                p{  
                    position:relative;
                    bottom:0;
                    right:90px;
                    font-size:12px;
                    color:#666;
                    margin-right:18px;
                    padding-top:10px;
                }
            }
        }
    }
</style>
