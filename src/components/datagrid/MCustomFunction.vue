<template>
  <div class="container-function">
    <div class="func-edit" @click="editBussiness">
      <div class="icon-edit"></div>
    </div>
    <div class="func-delete" @click="btndeleteBussiness">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fe6000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-trash"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path
          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        ></path>
      </svg>
    </div>
  </div>
  <m-dialog-v-2
    v-if="isShowDialog"
    :label="lableDialog"
    @FuncDialog="this.deleteBusiness(this.missionallowanceId)"
  ></m-dialog-v-2>
  <m-notify v-if="diy.state.isShowNotify" :label="labelNotify"></m-notify>
</template>
<script>
import MDialogV2 from "../dialog/MDialogV2.vue";
import baseApi from "@/api/baseApi";
import MNotify from "../notify/MNotify.vue";
export default {
  inject: ["diy"],
  emits: ["Business"],
  name: "MCustomFunction",
  props: ["data"],
  components: {
    MDialogV2,
    MNotify,
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
    editBussiness(event) {
      event.stopPropagation();
      // debugger
      this.$emit("Business", this.data.data);
    },
    /**
     * Hàm xóa nhân viên
     * @param {Sự kiện} e
     * CreaetedBy: Bien (09/05/2023)
     */
    btndeleteBussiness(event) {
      // debugger
      event.stopPropagation();
      this.isShowDialog = true;
      this.lableDialog = this.$t("CONTENTDIALOG.DELETE");
      this.missionallowanceId = this.data.data.MissionallowanceId;
    },
    /**
     * API Xóa 1 đơn công tác
     * @param {Đường dẫn API} baseUrl
     * @param {Id đơn công tác muốn xóa} id
     * CreatedBy: Bien (03/05/2023)
     */
    async deleteBusiness() {
      const response = await baseApi.delete(
        "Missionallowances/",
        this.missionallowanceId
      );
      console.log(response);

      if (response.IsSuccess) {
        this.labelNotify = this.$t("NOTIFY.DELETE");
        this.diy.showNotify();
        // this.diy.showNotify();
        this.getPaging(1, 50, "Missionallowances/");
        this.isShowDialog = false;

        this.diy.clearBusinessDetail();
      }
    },
    /**
     * Hàm lấy danh sách nhân viên
     * CreatedBy: Bien (23/04/2023)
     */
    async getPaging(pageNumber, pageSize, baseUrl) {
      try {
        this.diy.showLoading();

        // Nhận dữ liệu khi tìm kiếm
        const response = await baseApi.getPaging(
          pageNumber,
          pageSize,
          baseUrl,
          this.textSearch,
          this.statusKey,
          this.misaCode
        );
        this.diy.setDataBusiness(response.Data);

        this.diy.clearLoading();
      } catch (error) {
        console.log(error);
      }
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