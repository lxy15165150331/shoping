<template>
  <!-- v-infinite-scroll指令为执行加载更多数据的方法loadMore -->
    <div class="MovieBox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
       <div v-if="!movies" class="bg-img"></div>
        <MovieItem
            v-for="movie in movies"
            :key = "movie.id"
            :movie = "movie"
        ></MovieItem>
       
    </div>
</template>

<script>
import MovieItem from  "./MovieItem"
//引入Toast组件
import {Toast} from "mint-ui"
export default {
    props:["type"],
    watch:{
        type(){//监听传递来的type的变化，一旦发生改变了
            this.movies = [];  //数组内容要清空
            this.page = 1;     //页码从第一页开始
            this.hasMore = true; //默认都是有更多数据
            this.getMovies();//请求数据
        }
    },
    components:{
         MovieItem,
    },
    data(){
        return{
            movies:[],
            page:1,
            limit:6,
            loading:false,//默认开启无限滚动   true的话就代表关闭无限滚动
            hasMore:true,//有更多数据
        }
    },
    methods:{
        loadMore(){ //加载更多的方法  
           if(!this.hasMore){ //如果没有更多数据了
                Toast({
                    message: '我是有底线的....',
                    duration:2000,
                    position:"bottom"
                });
                //关闭无限滚动
               this.loading = true;
               return false;//不在请求数据
            }
            this.getMovies() 
        },
        getMovies(){
            this.loading = true;//关闭无限滚动  5s
            let {page,limit} = this;  //不使用{}解构时的写法：let page = this.page
            let toast = Toast({
                message: '正在加载....',
                iconClass: 'fa fa-cog fa-spin',
                duration:-1
            });
            this.$http.get("/api/db/"+this.type,{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                //  console.log(res.data);
               //拼接数组  追加每一页的电影条目
                this.movies = this.movies.concat(res.data.object_list);
                this.loading = false;//继续开启无限滚动
                toast.close();//关闭toast
                 if(page*limit >= res.data.total){ //判断是否有更多数据
                    this.hasMore = false; //没有更多数据了
                    return false;
                }
                this.page++;
            })
        }
    },
     activated(){
        this.loading = false;
    },
    deactivated(){
        this.loading = true;
    }
    // created(){
    //     this.getMovies()
    // }
}
</script>

<style lang="scss">
    .MovieBox{
        margin-bottom:60px;
    }
</style>
