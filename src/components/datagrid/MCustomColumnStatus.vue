<template>
    <div class="container">
      <div
        class="status"
        :style="{
          backgroundColor: background,
          color: colorText,
          border: borderColor
        }"
      >
        {{ data.displayValue }}
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "MCustomColumnStatus",
    props: ["data"],
    created(){
      this.handleColor(this.data.data.Status);
    },
    mounted() {
    //   this.handleColor(this.data.data.Status);
    },
    methods: {
      /**
       * Hàm thêm css tương ứng giá trị trạng thái
       * @param {Gía trị trạng thái} statusKey
       * CreatedBy: Bien (08/05/2023) 
       */
      handleColor(statusKey) {
         /* eslint-disable */
        // debugger
        switch (statusKey.toString()) {
          case this.$t('STATUS.PENDING'):
            this.background = this.backgroundColors[0];
            this.colorText = this.colors[0];
            this.borderColor = this.borders[0];
            break;
          case this.$t('STATUSAPPROVED'):
            this.background = this.backgroundColors[1];
            this.colorText = this.colors[1];
            this.borderColor = this.borders[1];
            break;
          case this.$t('STATUSREFUSE'):
            this.background = this.backgroundColors[2];
            this.colorText = this.colors[2];
            this.borderColor = this.borders[2];
            break;
          default:
            break;
        }
      },
    },
    data() {
      return {
        // Chữ avatar
        textAvatar: null,
  
        // Chuỗi cắt tên
        valueAvatar: null,
  
        // Random màu background
        backgroundColors: ["#ebe9fb", "#B9F8E4", "#fee8e7"],
  
        // Random màu chữ
        colors: ["#6153DF", "#11aa7a", "#ef292f"],
  
        // Random màu border
        borders: ["1px solid #6153DF", "1px solid #11aa7a", "1px solid #ef292f"],
  
        // Gía trị background
        background: null,
  
        // Gía trị màu chữ
        colorText: null,
  
        // Gía trị màu border
        borderColor : null,
      };
    },
  };
  </script>
  <style scoped>
  .container {
    display: flex;
    align-items: center;
  }
  .status {
    padding: 0px 8px;
    border-radius: 4px;
  }
  </style>
  