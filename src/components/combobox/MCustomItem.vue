<template>
  <div class="custom-item">
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
    this.valueAvatar = this.itemData.FullName.split(" ");
    this.textAvatar =
      this.valueAvatar[0].slice(0, 1) + this.valueAvatar[2].slice(0, 1);
  },
  data() {
    return {
      // Chữ avatar
      textAvatar: null,

      // Chuỗi cắt tên
      valueAvatar: null,

      // Random màu avatar
      backgroundColors: ["#fe6000", "#a52a2a", "#2291e6", "#9b71cd"],
    };
  },
};
</script>
<style scoped>
@import url(./combobox.css);
</style>
