<template>
  <div class="container-function">
    <div class="func-delete" @click="btnDeleteEmployee">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ec5504"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  </div>
</template>
  <script>
export default {
  inject: ["diy"],
  emits: ["Business"],
  name: "MCustomEdit",
  props: ["data"],
  components: {
  },
  created() {
    /* eslint-disable */
  },
  methods: {
      /**
     * Hàm sửa nhân viên
     * @param {Sự kiện} event
     * CreaetedBy: Bien (09/05/2023)
     */
     btnDeleteEmployee(event) {
        console.log(this.data.data);
      event.stopPropagation();
      this.$emit("Business", this.data.data);
    },
  },
  data() {
    return {
      // Nội dung muốn tìm kiếm
      textSearch: "",

      // Lọc theo đơn vị
      misaCode: "",

      // Trạng thái muốn lọc
      statusKey: 0,

      // Nội dung thông báo
      labelNotify: null,

      // Hiển thị thông báo kết quả thực hiện hành động
      isShowNotify: false,

      // Id bản ghi muốn xóa
      missionallowanceId: null,

      // Nội dung dialog
      lableDialog: null,

      // Hiển thị thông báo
      isShowDialog: false,
    };
  },
};
</script>
  <style scoped>
.container {
  display: flex;
  align-items: center;
}
.name {
  margin-left: -15px;
}
.avatar {
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
}
</style>