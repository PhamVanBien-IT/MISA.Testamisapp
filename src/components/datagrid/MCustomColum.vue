<template>
    <div class="container">
        <div class="avatar">
            <div class="avatar-user" :style="{backgroundColor : backgroundColors[Math.floor(Math.random() * 4)]}" >{{this.textAvatar}}</div>
        </div>
        <div class="name">
            {{ data.displayValue }}
        </div>
    </div>
</template>
<script>
export default {
    name:"MCustomColumn",
    props:["data"],
    created(){
        this.valueAvatar = this.data.text.split(" ");
        this.textAvatar = this.valueAvatar[0].slice(0,1) + this.valueAvatar[2].slice(0,1);
    },
    data(){
        return{
            // Chữ avatar
            textAvatar:null,

            // Chuỗi cắt tên
            valueAvatar:null,

            // Random màu avatar
            backgroundColors:['#fe6000','#a52a2a','#2291e6', '#9b71cd']
        }
    }
}
</script>
<style scoped>
.container{
    display: flex;
    align-items: center;
}
.name{
    margin-left: -15px;
}
.avatar{
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
}
</style>