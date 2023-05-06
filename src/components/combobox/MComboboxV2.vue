<template>
  <div class="base-combobox">
    <div class="combobox-v2">
      <div class="combobox-input-v2" @click="toggleComboboxList">
        <input
          @keydown="keyDownSelectItem"
          v-model="textSelected"
          autocomplete="off"
          :id="id"
          class="input-combobox-v2"
          type="text"
          :class="classInputCBox"
          :tabindex="tabindex"
          :placeholder="placeholderDefault"
          readonly
          :name="nameInput"
          :ref="nameInput"
        />
        <div class="icon-btn-combobox-v2"></div>
        <div
          class="icon-close-btn-combobox-v2"
          v-if="isShowCloseValue"
          @click="deleteValueSelect($event)"
        ></div>
      </div>
      <div
        v-if="this.isShowDataList"
        class="combobox-data-v2"
        @scroll="onScroll"
      >
        <div class="combobox-data-v2-input">
          <div class="icon icon-search"></div>
          <input
            type="text"
            class="input-search"
            v-model="textSearch"
            placeholder="Tìm kiếm"
            @input="onSearchItem"
            name="input-search-combobox-v2"
            ref="input-search-combobox-v2"
          />
        </div>
        <div class="combobox-data-v2-list">
          <dx-tree-view :items="treeData" @itemClick="handleItemClick" />
        </div>
        <div class="combobox-data-v2-footer" v-if="isShowFooter">
          <!-- <div class="combobox-v2-checkbox"> -->
          <label>
            <input type="checkbox" id="chkProdTomove" />
            <span class="check-box-effect"></span>
          </label>
          <div>Hiển thị đơn vị ngừng theo dõi</div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import comboboxApi from "@/api/comboboxApi";
import { DxTreeView } from "devextreme-vue";

export default {
  inject: ["diy"],
  name: "MCombobox",
  components: { DxTreeView },
  emits: ["update:modelValue", "textSelected"],
  props: [
    "id",
    "propName",
    "propValue",
    "modelValue",
    "class",
    "tabindex",
    "name",
    "title",
    "entity",
    "isShowCombobox",
    "required",
    "placeholderDefault",
    "isShowFooter",
  ],
  created() {
    if (this.entity) {
      // Lấy dữ liệu của bảng department
      this.entities = this.entity;
    }

    this.nameInput = this.name;

    this.isShowDataList = this.isShowCombobox;
  },
  mounted() {
    // Xóa giá trị input sau khi cất nhân viên
    if (!this.modelValue) {
      this.textSelected = "";
    }
  },
  updated() {
    this.classInputCBox = this.class;
  },
  methods: {
    /**
     * Hàm hiển thị danh sách data
     * CreatedBy: Bien (19/04/2023)
     */
    toggleComboboxList() {
      this.isShowDataList = !this.isShowDataList;
      this.treeData = this.entities;
    },
    /**
     * Hàm gắn giá trị cho item được chọn
     * CreatedBy: Bien (20/04/2023)
     */
    handleItemClick(data) {
      this.textSelected = data.itemData.text;
      this.isShowDataList = false;
      this.indexItemSelect = data.itemData.id;
      this.isShowCloseValue = true;
      this.$emit("misaCode", data.itemData.misaCode);
      console.log();
    },
    /**
     * Hàm xóa giá trị đã chọn
     * CreatedBy: Bien (20/04/2023)
     */
    deleteValueSelect(event) {
      event.stopPropagation();
      this.isShowCloseValue = false;
      this.textSelected = null;
      this.isShowDataList = false;
      this.$emit("misaCode", "");

    },
    /**
     * Hàm focus cho input tìm kiếm
     * CreatedBy: Bien (22/02/2023)
     */
    // inputOnFocus(inputName) {
    //   this.$nextTick(() => {
    //     this.$refs[inputName].onFocus();
    //   });
    // },

    /**
     * Hàm hiển thị Comboboxdata
     * CreatedBy: Bien (9/1/2023)
     */
    onShowHideData() {
      if (this.baseURL) {
        this.diy.toggleDataCombobox();
      }
    },
    /**
     * Hàm gắn giá tìm item tương ứng với modelVue
     * CreatedBy: Bien (9/1/2023)
     */
    setItemSelected() {
      var me = this;
      // Tìm item tướng ứng với modelValue
      let entitySelected = this.entities.find(
        (item) => item[me.propValue] == me.modelValue
      );

      if (entitySelected) {
        this.textSelected = entitySelected[this.propName];
      }
    },

    /**
     * Hàm gắn giá trị theo ô input
     * CreatedBy: Bien (9/1/2023)
     */
    onSearchItem() {
      var me = this;
      this.treeData = this.entities;
      // Tìm item tướng ứng với modelValue
      this.treeData = this.entities.filter((item) =>
        item[me.propName].toLowerCase().includes(me.textSearch.toLowerCase())
      );
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
      let findIndex = this.entitySearch.findIndex(
        (item) => item[me.propValue] == me.itemSelected[me.propValue]
      );
      return findIndex;
    },
  },
  data() {
    return {
      // Hiển thị nút xóa giá trị
      isShowCloseValue: false,

      // Gía trị muốn tìm
      textSearch: null,

      // Khai báo biến pageSize hiển thị
      litMit: 10,

      // Tên combobox
      nameInput: null,

      // Khai báo biện nhân class
      classInputCBox: null,

      // Khai báo biến nhận giá trị
      entities: [],

      // Khai báo biến chứa entity bị thay đổi
      treeData: [],

      // Khai báo biến cho input
      textSelected: null,

      // Khai báo biến ngăn tăng indexItemSelect
      unUpIndexItemSelect: true,

      // Khai báo biến index trong comboxbox__data
      indexItemSelect: null,

      // Khai báo item được chọn
      itemSelected: null,

      // Hiển thị combobox list
      isShowDataList: null,
    };
  },
};
</script>
<style scoped>
@import url(./combobox.css);
</style>
