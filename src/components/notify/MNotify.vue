<template>
  <div class="notify-main">
    <div class="notify-content">
      <div class="notify-right">
        <div class="notify-icon"></div>
        <div class="notify-des"><span style="color: #5be041;font-weight: 600;">{{label}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"MNotify",
  props:["label"]
};
</script>
<style scoped>
    @import url(./notify.css);
</style>
