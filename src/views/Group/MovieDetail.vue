<template>
    <div class="movie-box">
        <!-- <div v-if="movie.length===0" class="bg-img"></div> -->
        <div v-if="!movie" class="bg-img"></div>
        <div v-else class="movie-header">
            <mt-header :title="movie.title" fixed>
                <router-link to="/group" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class="movie">
                <div class="img-box">
                    <img width="100%" v-lazy="getImages(movie.images.small)" alt="">
                </div>
                <div class="movie-detail">
                    <p>{{movie.title}}</p>
                    <p>{{movie.genres[0]}} | {{movie.genres[1]}} | {{movie.genres[2]}}</p>
                    <p>{{movie.year}}上映</p>
                    <p>{{movie.countries[0]}} | 114分钟</p>
                    <p>{{movie.summary}}</p>
                </div>
                <div class="actors">
                    <div class="actors-title">演职人员</div>
                    <div class="actors-box">
                         <div class="actors-list"
                            v-for="cast in movie.casts"
                            :key="cast.id"
                         >
                            <div class="actors-img-box"> 
                                <img v-lazy="getImages(cast.avatars.small)" alt=""/>
                            </div>
                            <div class="actors-name">{{cast.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-box">
            <video-player  
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
            ></video-player>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // movie:[]
            movie:null,
            playerOptions:{
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                type: "",
                src: "https://cloud.video.taobao.com/play/u/686773455/p/1/e/6/t/1/224083088596.mp4" //url地址
                }],
                //poster: "../../static/images/test.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                }
            }
        }
    },
    methods:{
        getMovie(){
            this.$http.get("/api/db/movie_detail/"+this.$route.params.id).then(res=>{
                this.movie = res.data;
                console.log(this.movie)
            })
        },
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
    created(){
        this.getMovie()
    }
}
</script>

<style lang="scss">
    .movie-header{
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        .movie{
            width:100%;
            display:flex;
            justify-content:space-between;
            flex-direction:column;
            .movie-detail{
                display:flex;
                justify-content:space-between;
                flex-direction:column;
                padding: 15px;
                padding-top: 12px;
                background-color: #fff;
                p{
                    font-size: 13px;
                    color: #797d82;
                    margin-top: 4px;
                }
                p:nth-child(1){
                    color: #191a1b;
                    font-size: 18px;
                    height: 24px;
                    line-height: 24px;
                    margin-right: 7px;
                }
                p:last-child{
                   margin-top: 12px; 
                }
            }
            .actors{
                margin-top: 10px;
                background-color: #fff;
                .actors-title{
                    width:100%;
                    padding:15px;
                }
                .actors-box{
                    display:flex;
                    overflow-x:auto;
                    overflow-y:hidden;
                    margin-left:.15rem;
                    .actors-list{
                        width:85px;
                        min-width: 85px;
                        display:flex;
                        justify-content:space-between;
                        flex-direction:column;
                        margin-right:10px;
                        .actors-img-box{
                            width:85px;
                            img{
                                width:100%;
                            }
                        }
                        .actors-name{
                            text-align:center;
                            font-size: 12px;
                            height:.22rem;
                            line-height:.22rem;
                            color: #191a1b;
                            width:100%;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                        }
                    }
                }
            }
        }
    }
    .video-box{
        margin-top:15px;
    }
</style>
