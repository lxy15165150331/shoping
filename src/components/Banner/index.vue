<template>
    <div class="swiper-container bg-img" :class="appbanner">
        <div class="swiper-wrapper">
            <!-- 循环生成swiper-slide -->
            <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                <img width="100%" :src="getImages(banner.images.small)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
// 后台请求接口：http://47.96.0.211:9000/db/in_theaters

import Swiper from "swiper"
// import axios from "axios"ad
export default {
    data(){
        return {
            banners:[]
        }
    },
    props:{ //接收实例化多个banner图的class名
        appbanner:{
            type:String,
            default:"app-banner"//不传默认为使用app-banner
        }
    },
    methods:{
        // 解决403图片缓存问题
        getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
            }
        },
        getBanners(){
        //发送请求
        this.$http.get("/api/db/in_theaters",{
            params:{
                limit:6 //显示返回六条数据
            }
        }).then(res=>{
            // console.log(res);
            this.banners = res.data.object_list;
            //1.实例化Swiper，实现滑动;
            //问题：必须要等到数据更新引发视图重新渲染后，再去实例化操作:this.$nextTick(()=>)
            this.$nextTick(()=>{
                 new Swiper("." + this.appbanner,{//2.实例化多个banner图写法
                    loop:true,
                    pagination:{//添加分页器
                        el:".swiper-pagination"
                    },
                    autoplay:true,//等同于以下设置
                    // autoplay: {
                    //     delay:1000,
                    //     stopOnLastSlide: false,
                    //     disableOnInteraction: true,
                    // },
                })
            })
        })
     }
   },
   created(){
       this.getBanners()
   }
}
</script>

<style lang="scss">
    .swiper-container{
      width:100%;
      height:2.4rem;
        img{
            width:100%;
            height:2.4rem;
        }
        .swiper-pagination{
            left:auto;
            width:auto;
            right:10px;
        }
        .swiper-pagination-bullet-active{
            background:#fff;
        }
    }
</style>
