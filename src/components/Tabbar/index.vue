<template>
   <div class="tabbar">
    <!-- 1.父子组件通信：父组件更改子组件数据，父组件定义自定义属性txt，子组件props接收 -->
    <!-- 2.父组件给子组件传图片(normal和active)，用slot插槽；子组件提供插槽，父组件传入图片 -->
    <!-- 3.父组件传入mark标志和定义sel自定义属性进行TabItem切换 -->
    <!-- 4.子组件更改父组件数据：1)将changeselected方法的引用传给子组件;形式： :changeSelected 
                               2)父组件绑定自定义事件，子组件this.$emit()触发;形式： @changeSelected
    -->
    <!-- [注]TabItem使用第二种方法切换不需要 @changeSelected自定义事件 -->
       <TabItem txt="食物百科" mark="home" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">78
        </TabItem> 
         <TabItem txt="逛吃" mark="group" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
        </TabItem>
         <TabItem txt="我的" mark="mine" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
        </TabItem>
   </div>
</template>

<script>
import TabItem from "./TabItems"
export default {
    data(){
        return {
            selected:this.$route.name//找到name属性对应的路由实现跳转
        }
    },
    methods:{//TabItem使用第二种方式不需要changeSelected方法
        changeSelected(val){
            this.selected = val;
        }
    },
    components:{
        TabItem
    }
}
</script>

<style lang="scss" scoped> //scoped:样式作用于当下模块
  .tabbar{
        position: fixed;
        bottom:0;
        left:0;
        height:60px;
        width:100%;
        display: flex;
        border-top:1px solid #f7ecec;
        background: #fff;
    }
</style>
