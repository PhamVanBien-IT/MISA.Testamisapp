<template>
  <div class="custom-item" @click="handleSelect">
    <div
      class="avatar-employee"
      :style="{
        backgroundColor: backgroundColors[Math.floor(Math.random() * 4)],
      }"
    >
      {{ textAvatar }}
    </div>
    <div class="text-item">
      <div class="text-item-top">
        <span style="font-weight: 600; font-size: 14px">{{
          this.itemData.FullName
        }}</span>
        ({{ this.itemData.EmployeeCode }})
      </div>
      <div class="text-item-bottom">{{ this.itemData.PositionName }}</div>
    </div>
    <div class="icon-checked" v-if="isCheckedTag">
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
        class="feather feather-check"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "MCustomItem",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    /* eslint-disable */
    this.valueAvatar = this.itemData.FullName.split(" ");
    this.textAvatar =
      this.valueAvatar[0].slice(0, 1) + this.valueAvatar[2].slice(0, 1);
  },
  methods: {
    /**
     * Xác nhận đã chọn hay chưa
     * CreatedBy: Bien (12/05/2023)
     */
    handleSelect() {
      this.isCheckedTag = !this.isCheckedTag
    },
  },
  data() {
    return {
      // Chữ avatar
      textAvatar: null,

      // Chuỗi cắt tên
      valueAvatar: null,

      // Random màu avatar
      backgroundColors: ["#fe6000", "#a52a2a", "#2291e6", "#9b71cd"],

      // Hiển thị đã chọn
      isCheckedTag:false,
    };
  },
};
</script>
<style scoped>
@import url(./combobox.css);
</style>
