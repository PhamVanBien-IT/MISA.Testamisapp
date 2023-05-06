<template>
     <button :tabindex="tabindex" :class="classBtn">{{ label }}</button>
</template>

<script>
export default {
    name:"MButton",
    props:["label","class","tabindex"],
    components:{

    },
    created(){
        this.classBtn = this.class
    },
    data(){
        return {
            classBtn : null,
        }
    },
}
</script>

<style scoped>
    @import url(./button.css);
</style>