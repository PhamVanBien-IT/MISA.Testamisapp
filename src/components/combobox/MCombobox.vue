<template>
  <div class="base-combobox" :class="{ disable: disabled }">
    <div class="title-cbb">
      {{ title }} <sup style="color: red">{{ required }}</sup>
    </div>
    <div class="combobox" @click="toggleComboboxList">
      <div class="combobox-input">
        <input
          @keydown="keyDownSelectItem"
          @input="onSearchItem"
          v-model="textSelected"
          autocomplete="off"
          :id="id"
          class="text-form"
          type="text"
          :class="{ 'bd-red': this.isValidate }"
          :tabindex="tabindex"
          :name="nameInput"
          :ref="nameInput"
          @blur="hanldeBlurInput"
        />
        <div
          class="icon icon-validate-combobox tags"
          :data-gloss="this.labelValidate"
          v-if="this.isValidate"
        ></div>
        <div class="icon-btn-combobox">
          <button
            class="comobox__button"
            @keydown="keyDownSelectItemBtn"
          ></button>
        </div>
      </div>
      <div v-if="this.isShowDataList" class="combobox__data" @scroll="onScroll">
        <div
          class="combobox-item"
          :ref="`item_${index}`"
          :class="{ 'item-select': index == indexItemSelect }"
          @click="itemOnSelect(entity, index)"
          v-for="(entity, index) in entitySearch"
          :key="index"
          :value="entity[propValue]"
        >
          <div
            class="avatar-employee"
            :style="{
              backgroundColor: backgroundColors[Math.floor(Math.random() * 4)],
            }"
          >
            {{ this.$MISACommon.formatTextAvatar(entity[propName]) }}
          </div>
          <div class="text-item">
            <div class="text-item-top">
              <span style="font-weight: 600; font-size: 14px">{{
                entity[propName]
              }}</span>
              ({{ entity[propCode] }})
            </div>
            <div class="text-item-bottom">{{ entity[propPositionName] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import baseApi from "@/api/baseApi";
import _ from "lodash";
export default {
  inject: ["diy"],
  name: "MCombobox",
  emits: ["update:modelValue"],
  props: [
    "id",
    "propName",
    "propValue",
    "modelValue",
    "propPositionName",
    "propCode",
    "class",
    "tabindex",
    "name",
    "title",
    "isShowCombobox",
    "required",
    "entity",
    "labelValidate",
    "isValidate",
    "disabled",
    "valueDefault",
  ],
  created() {
    if (this.entity) {
      this.entities = this.entity;
      this.entitySearch = this.entity;
    }
    this.nameInput = this.name;

    this.isShowDataList = this.isShowCombobox;

    this.hanldeItemActive();
  },
  mounted() {
    // Xóa giá trị input sau khi thêm mới
    if (!this.modelValue) {
      this.textSelected = "";
    }
  },
  updated() {
    this.classInputCBox = this.class;
  },
  methods: {
    /**
     * Hàm hiển thị active item được chọn
     * CreatedBy: Bien (15/04/2023)
     */
    hanldeItemActive() {
      var me = this;
      if (this.entities.length > 0) {
        for (let i = 0; i < this.entities.length; ++i) {
          if (this.entities[i][me.propValue] == this.modelValue) {
            this.itemSelected = this.entities[i];
            this.indexItemSelect = me.findIndexSelected;
            this.textSelected = this.entities[i][me.propName];
          }
        }
      }
    },
    /**
     * Hàm validate khi blur
     * CreatedBy: Bien (04/04/2023)
     */
    hanldeBlurInput() {
      if (this.labelValidate && this.isValidate) {
        if (!this.textSelected) {
          this.$parent.validateList[`${this.nameInput}`].isStatus = true;
          this.$parent.validateList[`${this.nameInput}`].labelError =
            this.$MISAResource.ERRORVALIDATE.REQUIRED(`${this.label}`);
        } else {
          this.$parent.validateList[`${this.nameInput}`].isStatus = false;
        }
      }
    },
    /**
     * Hàm hiển thị danh sách data
     * CreatedBy: Bien (25/04/2023)
     */
    toggleComboboxList() {
      this.isShowDataList = !this.isShowDataList;
    },
    /**
     * Hàm hiển thị thêm danh sách chức danh khi scroll
     * CreatedBy: Bien (07/03/2023)
     */
    onScroll: _.debounce(function () {
      // this.limit = this.limit + 10;
      // this.getEntities(1, this.limit, "Employees/");
    }, 500),
    /**
     * Hàm set focus cho input
     * CreatedBy: Bien (22/02/2023)
     */
    onFocus() {
      this.$refs[this.name].focus();
    },
    /**
     * Hàm lấy dữ liệu cho combobox đơn vị
     * CreatedBy: Bien (9/1/2023)
     */
    async getEntities(offset, limit, baseUrl) {
      try {
        // Gắn giá trị kết quả lấy dữ liệu bảng department
        const response = await baseApi.getPaging(offset, limit, baseUrl);

        // Gắn dữ liệu
        this.entities = response.Data;
        this.setItemSelected();
        this.entitySearch = response.Data;
      } catch (error) {
        console.log(error);
      }
    },

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
     * Hàm gắn giá trị cho input khi chọn combobox-item
     * CreatedBy: Bien (9/1/2023)
     */
    itemOnSelect(entity) {
      var me = this;
      // Reset lại danh sách
      this.entitySearch = this.entities;
      this.itemSelected = entity;
      this.textSelected = entity[this.propName];
      this.$emit("update:modelValue", entity[this.propValue]);
      // Set index của item được chọn
      this.indexItemSelect = me.findIndexSelected;
      if (this.isValidate && this.labelValidate) {
        this.$parent.validateList[`${this.nameInput}`].isStatus = false;
      }
    },

    /**
     * Hàm gắn giá tìm item tương ứng với modelValue
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
      if (this.entity) {
        this.entitySearch = this.entity;
        // Tìm item tướng ứng với modelValue
        this.entitySearch = this.entity.filter((item) =>
          item[me.propName]
            .toLowerCase()
            .includes(me.textSelected.toLowerCase())
        );
      } else {
        this.entitySearch = this.entities;
        // Tìm item tướng ứng với modelValue
        this.entitySearch = this.entities.filter((item) =>
          item[me.propName]
            .toLowerCase()
            .includes(me.textSelected.toLowerCase())
        );
      }
    },

    /**
     * Hàm bắt sự kiện keydown của input combobox
     * CreatedBy: Bien ( 11/1/2023)
     */
    // keyDownSelectItem(event) {
    //   const keyCode = event.keyCode;
    //   switch (keyCode) {
    //     case this.$MISAEnum.KEY_CODE.ENTER:
    //       this.unUpIndexItemSelect = true;
    //       // Xác định item đang chọn dựa vào index
    //       // eslint-disable-next-line no-case-declarations
    //       const item = this.entitySearch[this.indexItemSelect];
    //       this.itemOnSelect(item);
    //       break;
    //     case this.$MISAEnum.KEY_CODE.ROW_UP:
    //       //  Kiểm tra hiển thị
    //       if (!this.isShowData) {
    //         this.diy.showDataCombobox();
    //       }

    //       if (this.indexItemSelect > 0 && !this.unUpIndexItemSelect) {
    //         this.indexItemSelect--;
    //       } else {
    //         this.unUpIndexItemSelect = false;
    //       }
    //       break;
    //     case this.$MISAEnum.KEY_CODE.ROW_DOWN:
    //       //  Kiểm tra hiển thị
    //       if (!this.isShowData) {
    //         this.diy.showDataCombobox();
    //       }
    //       // eslint-disable-next-line no-case-declarations
    //       let maxLength = this.entitySearch.length;
    //       if (
    //         this.indexItemSelect < maxLength - 1 &&
    //         !this.unUpIndexItemSelect
    //       ) {
    //         this.indexItemSelect++;
    //       } else {
    //         this.unUpIndexItemSelect = false;
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // },

    /**
     * Hàm bắt sự kiện keydown của button hiển thị
     * CreatedBy: Bien ( 11/1/2023)
     */
    // keyDownSelectItemBtn(event) {
    //   const keyCode = event.keyCode;
    //   switch (keyCode) {
    //     case this.$MISAEnum.KEY_CODE.ENTER:
    //       this.diy.clearDataCombobox();
    //       // Xác định item đang chọn dựa vào index
    //       // eslint-disable-next-line no-case-declarations
    //       const item = this.entitySearch[this.indexItemSelect];
    //       this.itemOnSelect(item);
    //       break;
    //     case this.$MISAEnum.KEY_CODE.ROW_UP:
    //       //  Kiểm tra hiển thị
    //       if (!this.diy.state.showDataCombobox) {
    //         this.diy.showDataCombobox();
    //       }
    //       if (this.indexItemSelect > 0) {
    //         this.indexItemSelect--;
    //       }
    //       break;
    //     case this.$MISAEnum.KEY_CODE.ROW_DOWN:
    //       //  Kiểm tra hiển thị
    //       if (!this.diy.state.showDataCombobox) {
    //         this.diy.showDataCombobox();
    //       }
    //       // eslint-disable-next-line no-case-declarations
    //       let maxLength = this.entitySearch.length;
    //       if (this.indexItemSelect < maxLength - 1) {
    //         this.indexItemSelect++;
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // },
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
      // Random màu avatar
      backgroundColors: ["#fe6000", "#a52a2a", "#2291e6", "#9b71cd"],
      // Khai báo biến pageSize hiển thị
      limit: 10,

      // Tên combobox
      nameInput: null,

      // Khai báo biện nhân class
      classInputCBox: null,

      // Khai báo biến nhận giá trị
      entities: [],

      // Khai báo biến chứa entity bị thay đổi
      entitySearch: [],

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
