<template>
    <div id="search">
        
    </div>
    <router-view />
</template>

<script>
export default{
    methods:{
        //我想引入的动态的动画属性中，可能有些会和量表中的内容冲突，把这些都注释掉后，量表就可以正常点击了。
    //     initVanta(){
    //         window.VANTA.WAVES({
    //             el: "#search",
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00})
    //     }
    },
//     mounted(){
//         this.initVanta();
//     return{
//         initVanta,
//     }
// }
}
</script>
<style lang="less" >
</style>