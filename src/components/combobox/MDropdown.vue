<template>
  <div
    class="dropdown"
    :class="this.customDropdow"
    @click="this.diy.togglePageSize()"
  >
    <input
      v-model="textSelectTed"
      disabled
      :id="id"
      class="dropdown__input"
      :class="this.customDropdow"
      type="text"
    />
    <div class="dropdown__button icon icon-dropdown"></div>
    <div
      v-show="this.isShow"
      class="dropdown__data"
      :class="{ 'custom-show': this.showData }"
    >
      <div
        class="dropdown-item"
        v-for="(item, index) in entities"
        :key="index"
        :class="{ 'item-select': index == indexItemSelect }"
        @click="itemOnSelect(item, index)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["diy"],
  name: "MDropdown",
  emits: ["update:modelValue", "valueItem"],
  props: [
    "id",
    "entity",
    "valueDefault",
    "customDropdow",
    "isShow",
    "showData",
  ],
  created() {
    if (this.entity) {
      // Nhận giá trị tổng bản ghi
      this.entities = this.entity;
    }
    this.hanldeItemActive();
  },
  methods: {
    /**
     * Hàm hiển thị active item được chọn
     * CreatedBy: Bien (15/04/2023)
     */
    hanldeItemActive() {
      var me = this;
      for (let i = 0; i < this.entities.length; ++i) {
        if (this.entities[i].key == this.valueDefault) {
           this.itemSelected = this.entities[i];
          this.indexItemSelect = me.findIndexSelected;
          this.textSelectTed = this.entities[i].value;
        }
      }
    },
    /**
     * Hàm gắn giá trị khi chọn kích thước
     * CreatedBy: Bien (9/1/2023)
     */
    itemOnSelect(item, index) {
      this.textSelectTed = item.value;
      this.indexItemSelect = index;
      this.$emit("valueItem", item.key);
    },
  },
  computed: {
    /**
     * Tìm kiếm giá trị được chọn
     * CreatedBy: Bien (9/2/2023)
     */
    findIndexSelected: function () {
      var me = this;
      // Tính index của item đã được chọn
      let findIndex = this.entities.findIndex(
        (item) => item.key == me.itemSelected.key);
      return findIndex;
    },
  },
  data() {
    return {
      // Vị trí hiển thị
      customShow: "",

      // Khai báo biến nhận giá trị
      entities: [],

      // Khai báo biến cho input
      textSelectTed: "",

      // Khai báo biến index trong comboxbox__data
      indexItemSelect: null,

      // Khai báo item được chọn
      itemSelected: null,
    };
  },
};
</script>

<style scoped>
@import url(./combobox.css);
</style>
