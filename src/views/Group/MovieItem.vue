<template>
    <router-link class="MovieItem"
        tag="div"
        :to="{name:'movieDetail',params:{id:movie.id}}"
    >
       <div class="img-box">
           <img v-lazy="getImages(movie.images.small)" alt="">
       </div>
       <div class="info">
           <div class="info-left">
               <p class="title">电影：{{movie.title}}</p>
               <p class="count">观影量：{{movie.collect_count}}</p>
           </div>
           <div class="info-right">
               <p class="director">导演：{{movie.directors[0].name}}</p>
               <p class="rating">评分：{{movie.rating.average}}</p>
           </div>
       </div>
    </router-link>
</template>

<script>
export default {
    props:["movie"],
    methods:{
        // 解决403图片缓存问题
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        },
    }
}
</script>
<style lang="scss">
    .MovieItem{
        padding:14px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        .img-box{
            width:100%;
            img{
                width:100%;
                height:2.4rem;
            }
        }
        .info{
            width:100%;
            display:flex;
            justify-content:space-between;
            padding:.1rem .2rem;
            .title{
                font-size:12px;
                font-weight:bold;
                color:#585664c7;
                margin-bottom:4px;
            }
            .director{
                font-size: 12px;
                color:#9c8f8f;
            }
            .rating{
                margin-top:4px;
                color:orange;
            }
        }
    }
</style>
