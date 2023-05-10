<template>
    <div class="overlay">
        <div class="loading" >
            <img src="../../assets/images/loading.gif" class="img-loading" alt="">
   </div>
    </div>
</template>
<script>

export default {
    inject:["diy"],
    name:"MLoading",
    components:{
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
   @import url(./loading.css);
</style>