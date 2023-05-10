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
          class="btn-cancel-1-dialog"
          @click="btnCloseDialog"
        ></MButtonVue>
        <MButtonVue
          label="Không lưu"
          class="btn-cancel-dialog"
          @click="btnNoSave"
        ></MButtonVue>
        <MButtonVue
          label="Lưu"
          class="btn-dialog"
          @click="btnSave"
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
  props: ["label", "classIcon", "funcEPL"],
  components: {
    MButtonVue,
  },
  created() {
    let me = this;
    me.iconDialog = me.classIcon;
  },
  methods: {
    /**
     * Sự kiện click không lưu
     * CreatedBy: Bien (4/1/2023)
     */
     btnNoSave() {
      this.diy.clearBusinessDetail();
      this.diy.clearDialogDetail();
    },

    /**
     * Sự kiện click nút hủy
     * CreatedBy: Bien (4/1/2023)
     */
    btnCloseDialog() {
      this.diy.clearDialogDetail();
    },

    /**
     * Sựu kiện click lưu
     * CreatedBy: Bien (2/1/2023)
     */
     btnSave() {
      this.$emit("funcSave", this.funcEPL);
      this.diy.clearDialogDetail();
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
