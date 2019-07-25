<template>
                <!-- 自定义指令实现置顶:v-backtop="backtop" -->
    <div class="back-top-box" v-if="isShow" @click="backtop">
        <div class="back-top">
            <i class="fa fa-arrow-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        //实现置顶效果的方法：backtop
        backtop(){
            document.documentElement.scrollTop = 0;
        },
        listenScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=200){
                if(!this.isShow) this.isShow = true;
            }else{
                if(this.isShow) this.isShow = false;
            }
        }
    },
    created(){
        window.addEventListener("scroll",this.listenScroll)
    },
    // beforeDestroy(){
    //     window.removeEventListenter("scroll",this.listenScroll)
    // }
}
</script>

<style lang="scss">
    .back-top-box{
        position:fixed;
        right:5px;
        bottom:80px;
        width:.4rem;
        height:.4rem;
        background:rgba(0,0,0,.5);
        color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        i{
            font-size:18px;
        }
    }
</style>
