<template>
    <div class="app-content">
        <!-- 饮食分析 -->
        <div class="Analysis">
            <div class="item">
                <img src="../../assets/fx.png" alt="">
                <span>饮食分析</span>
            </div>
            <div class="item">
                <img src="../../assets/vs.png" alt="">
                <span>搜索对比</span>
            </div>
            <div class="item">
                <img src="../../assets/code.png" alt="">
                <span>扫码对比</span>
            </div>
        </div>
        <!-- 食物分类 -->
        <div class="classify">
            <div class="title">食物分类</div>
            <div class="main">
                <router-link class="item" v-for="item in items" :key="item.id"
                    tag="div"
                    :to="{name:'ShoppingList',params:{id:item.id,txt:item.txt}}"
                >
                    <div class="icon">
                        <img :src="item.icon" :alt="item.txt">
                    </div>
                    <div class="txt">{{item.txt}}</div>
                </router-link>
            </div>
        </div>
        <!-- 热门品牌 -->
        <div class="classify" style="margin-top:20px;">
            <div class="title">热门品牌</div>
            <div class="main">
                <router-link class="item" v-for="list in lists" :key="list.id"
                    tag="div"
                    :to="{name:'ShoppingList',params:{id:list.id,txt:list.txt}}"
                >
                    <div class="icon">
                        <img :src="list.icon" :alt="list.txt">
                    </div>
                    <div class="txt">{{list.txt}}</div>
                </router-link>
            </div>
        </div>
         <!-- 连锁餐饮 -->
        <div class="classify" style="margin-top:20px;">
            <div class="title">连锁餐饮</div>
            <div class="main">
                <router-link class="item" v-for="nav in navs" :key="nav.id"
                    tag="div"
                    :to="{name:'ShoppingList',params:{id:nav.id,txt:nav.txt}}"
                >
                    <div class="icon">
                        <img :src="nav.icon" :alt="nav.txt">
                    </div>
                    <div class="txt">{{nav.txt}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{ 
            items:[
                {id:1,icon:require('../../assets/rice.png'),txt:'主食类',},
                {id:2,icon:require('../../assets/Eggs.png'),txt:'肉蛋类'},
                {id:3,icon:require('../../assets/fish.png'),txt:'大豆及制品'},
                {id:4,icon:require('../../assets/Hamburg.png'),txt:'蔬菜菌藻类'},
                {id:5,icon:require('../../assets/Ice.png'),txt:'水果类'},
                {id:6,icon:require('../../assets/juice.png'),txt:'奶类'},
                {id:7,icon:require('../../assets/pizza.png'),txt:'油脂类'},
                {id:8,icon:require('../../assets/watermelon.png'),txt:'坚果类'},
                {id:9,icon:require('../../assets/sandwich.png'),txt:'调味品'},
                {id:10,icon:require('../../assets/sausage.png'),txt:'海鲜类'},
                {id:11,icon:require('../../assets/steak.png'),txt:'蔬菜类'},
                {id:12,icon:require('../../assets/surface.png'),txt:'副食品类'},
            ],
            lists:[
                {id:13,icon:require('../../assets/Coca Cola Woops.png'),txt:'可口可乐'},
                {id:14,icon:require('../../assets/pepsi.png'),txt:'百事可乐'},
                {id:15,icon:require('../../assets/Soft drink.png'),txt:'雪碧'},
                {id:16,icon:require('../../assets/Maserati.png'),txt:'桂格'},
                {id:17,icon:require('../../assets/Louts.png'),txt:'卡乐比'},
                {id:18,icon:require('../../assets/French fries.png'),txt:'安慕希'},
                {id:19,icon:require('../../assets/Paris Brest.png'),txt:'奥利奥'},
            ],
            navs:[
                {id:20,icon:require('../../assets/Food.jpg'),txt:'肯德基'},
                {id:21,icon:require('../../assets/Food1.jpg'),txt:'麦当劳'},
                {id:22,icon:require('../../assets/Food2.jpg'),txt:'杀绿轻食'},
                {id:23,icon:require('../../assets/Food3.jpg'),txt:'星巴克'},
                {id:24,icon:require('../../assets/Food4.jpg'),txt:'吉野家'},
                {id:25,icon:require('../../assets/Food5.jpg'),txt:'德克士'},
                {id:26,icon:require('../../assets/Food6.jpg'),txt:'大娘水饺'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    html,body{
        box-sizing:border-box; 
    }
    .app-content{
        width:100%;
        padding:0 26px;
        background:#fbf7f8;  
        //Analysis 
       .Analysis{
           width:100%;
           height:0.81rem;
           display:flex;
           justify-content:space-between;
           align-items:center;
           background:#f7f3f4;
           .item{
              width:33.3%;
              height:0.52rem;
              display:flex;
              justify-content:space-around;
              align-items:center;
              flex-direction:column;
              background:#fffdfe;
              border-right:1px solid #eee;  
                img{
                    width:0.2rem;
                    height:0.2rem;
                }
                span{
                    font-size:0.11rem;
                    color:#a2a0a1;
                }
            }
       }
        //classify
        .classify{
            width:100%;
            display:flex;
            flex-direction:column;
            background:#f6f4f7;
            .title{
                width:100%;
                height:0.4rem;
                font-size:12px;
                border-bottom:1px dashed #eee;
                color:#312f32;
                display:flex;
                justify-content:center;
                padding-top:0.08rem;
                background:#fffdff;
            }
            .main{
                width:100%;
                display:flex;
                justify-content:space-between;
                align-items:center;
                flex-wrap:wrap;
                background:#fffdff;
                .item{
                    width:33.3%;
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    flex-direction:column;
                    margin-bottom:0.17rem;
                    .icon{
                        width:0.54rem;
                        height:0.54rem;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        border:1px solid #eee;
                        background:#fffdff;
                        border-radius:50%;
                        img{
                            width:40px;
                            height:36px;
                        }
                    }
                    .txt{
                        font-size:0.1rem;
                        color:#6b696c;
                        margin-top:10px;
                    }
                }
            }
        }
        
    }
</style>
