<template>
    <div class="overlay">
      <div class="dialog" :key="dialogKey">
        <div class="dialog_header">
          <div class="dialog__title">Cảnh báo</div>
          <div class="icon close" @click="btnCloseDialog"></div>
        </div>
        <div class="dialog__content">
          {{ labelDialog }}
        </div>
        <div class="dialog__btn">
          <MButtonVue
            label="Đóng"
            class="btn-cancel-v3"
            @click="btnCloseDialog"
          ></MButtonVue>
        </div>
      </div>
    </div>
  </template>
  <script>
  import MButtonVue from "../button/MButton.vue";
  
  export default {
    inject: ["diy"],
    name: "MDialogV3",
    props: ["label", "func", "classIcon", "funcEPL", "inputValidate"],
    components: {
      MButtonVue,
    },
    created() {
      let me = this;
      me.iconDialog = me.classIcon;
      this.labelDialog = this.label;
    },
    // updated(){
    //   this.labelDialog = this.label;
    // },
    methods: {
      /**
       * Sự kiện đóng EPLDetail
       * CreatedBy: Bien (4/1/2023)
       */
      btnCloseEPLDetailOnClick() {
        this.diy.clearDialogDuplicate();
      },
  
      /**
       * Sự kiện đóng Dialog
       * CreatedBy: Bien (4/1/2023)
       */
      btnCloseDialog(event) {
        event.stopPropagation();
  
        this.$parent.isShowDialog = false;
        this.diy.clearDialogDuplicate();
      },
  
      /**
       * Hàm truyền dữ liệu ra employeeDetail
       * CreatedBy: Bien (2/1/2023)
       */
      funcDialog(event) {
        event.stopPropagation();
    
        this.diy.clearDialogDuplicate();

      },
    },
    data() {
      return {
        // Khai báo biến nhận class
        iconDialog: null,
  
        // Khai báo biến nhận hàm
        funcEmployee: null,
  
        // Nội dung dialog
        labelDialog: null,
  
        // Key
        dialogKey: 1,
      };
    },
  };
  </script>
  <style scoped>
  @import url(./dialog.css);
  </style>
  