<template>
  <div class="overlay">
    <div class="dialog">
      <div class="dialog_header">
        <div class="dialog__title">Cảnh báo</div>
        <div class="icon close" @click="btnCloseDialog"></div>
      </div>
      <div class="dialog__content">
        {{ label }}
      </div>
      <div class="dialog__btn">
        <MButtonVue
          label="Hủy"
          class="btn-cancel"
          @click="btnCloseDialog"
        ></MButtonVue>
        <MButtonVue
          label="Không lưu"
          class="btn-cancel-dialog"
          @click="btnCloseEPLDetailOnClick"
        ></MButtonVue>
        <MButtonVue
          label="Lưu"
          class="btn-dialog"
          @click="funcEditEmployee"
        ></MButtonVue>
      </div>
    </div>
  </div>
</template>
<script>
import MButtonVue from "../button/MButton.vue";

export default {
  inject: ["diy"],
  name: "MDialog",
  props: ["label", "func", "classIcon", "funcEPL","inputValidate"],
  components: {
    MButtonVue,
  },
  created() {
    let me = this;
    me.iconDialog = me.classIcon;
  },
  methods: {
    /**
     * Sự kiện đóng EPLDetail
     * CreatedBy: Bien (4/1/2023)
     */
    btnCloseEPLDetailOnClick() {
      this.diy.clearEPLDetail();
      this.diy.clearDialogDeleteEmployees();
      this.diy.clearDialog();
    },

    /**
     * Sự kiện đóng Dialog
     * CreatedBy: Bien (4/1/2023)
     */
    btnCloseDialog() {
      this.diy.clearDialog();
      this.diy.clearDialogDeleteEmployees();
      this.diy.clearDialogValidate();
      this.diy.clearDialogDevelop();
      if(this.inputValidate){
        this.$parent.inputOnFocus(this.inputValidate);
      }else{
      this.$parent.inputOnFocus('EmployeeCode');
      }
    },

    /**
     * Hàm truyền dữ liệu ra employeeDetail
     * CreatedBy: Bien (2/1/2023)
     */
    funcEditEmployee() {
      this.$emit("EditEPL", this.funcEPL);
      this.diy.clearFunctionAll();
      this.$parent.isFunctionAll = false;
    },
  },

  data() {
    return {
      // Khai báo biến nhận class
      iconDialog: null,

      // Khai báo biến nhận hàm
      funcEmployee: null,
    };
  },
};
</script>
<style scoped>
@import url(./dialog.css);
</style>
