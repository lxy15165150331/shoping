//https://www.cnblogs.com/ilovexiaoming/p/6840383.html
//v-backtop   bind inserted updated  
//注册全局自定义指令
import Vue from "vue"
Vue.directive("backtop",{
    bind(el,binding,vnode,oldvnode){
        let eventType = binding.arg || "click"
        el.addEventListener(eventType,e=>{
            let obj = document.documentElement || document.body;
            obj.scrollTop = 0;
        })
    }
})
