<template>
    <div class="notify-main">
      <div class="notify-content-error" style="background-color: #ef292f ;color: #fff;">
        <div class="notify-right">
          <div class="notify-error-icon"></div>
          <div class="notify-des"><span style="color: #fff;font-weight: 600;">{{ label }}</span></div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name:"MNotifyError",
    props:["label"],
    created(){ 
    },
    data(){
      return{
    
      }
    }
  };
  </script>
  <style scoped>
      @import url(./notify.css);
  </style>
  