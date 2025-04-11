<template>
    <div id="search">
        
    </div>
    <router-view />
</template>

<script>
export default{
    methods:{
        initVanta(){
            window.VANTA.WAVES({
                el: "#search",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00})
        }
    },
    mounted(){
        this.initVanta();
    return{
        initVanta,
    }
}
}
</script>
<style lang="less" >
</style>