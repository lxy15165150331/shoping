export default {
    name:"group",
    path:"/group",
    meta: {
        keepAlive:true
    },
    component:()=>import("@/views/Group/Group")
}