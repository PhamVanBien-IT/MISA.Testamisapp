<template>
  <div class="content">
    <router-view></router-view>
  <m-loading v-if="diy.state.isShowLoading"></m-loading>
  </div>
</template>

<script>
export default {
  inject: ["diy"],
  name: "TheContent",
  components: { },
  methods: {
    /**
     * Hàm show danh sách status
     * CreatedBy: Bien (15/04/2023)
     */
    toggleStatus() {
      this.isShowStatus = !this.isShowStatus;
    },
    /**
     * Hàm show danh sách status
     * CreatedBy: Bien (15/04/2023)
     */
    togglePageSize() {
      this.isShowPagesize = !this.isShowPagesize;
    },
  },
  data() {
    return {
      // Nội dung muốn tìm kiếm
      textSearch: "",
      // Khai báo mảng số lượng bản ghi trên 1 trang
      pagination: [
        {
          key: 10,
          value: "10",
        },
        {
          key: 20,
          value: "20",
        },
        {
          key: 30,
          value: "30",
        },
        {
          key: 50,
          value: "50",
        },
        {
          key: 100,
          value: "100",
        },
      ],
      // Hiển thị danh sách trạng thái
      isShowPagesize: false,
      // Khai báo mảng số lượng bản ghi trên 1 trang
      status: [
        {
          key: 0,
          value: "Tất cả",
        },
        {
          key: 1,
          value: "Chờ duyệt",
        },
        {
          key: 2,
          value: "Đã duyệt",
        },
        {
          key: 3,
          value: "Từ chối",
        },
      ],
      // Hiển thị danh sách trạng thái
      isShowStatus: false,
    };
  },
};
</script>

<style scoped>
@import url(../css/layout/content.css);
</style>
