<template>
  <div class="notify-main">
    <div class="notify-content">
      <div class="notify-right">
        <div class="notify-icon"></div>
        <div class="notify-des"><span style="color: #5be041;font-weight: 600;">{{lableNotify || "Xóa thành công"}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"MNotify",
  props:["label"],
  created(){
    this.lableNotify = this.label;
  },
  data(){
    return{
      // Nội dung thông báo
      lableNotify: "Xóa thành công",
    }
  }
};
</script>
<style scoped>
    @import url(./notify.css);
</style>
