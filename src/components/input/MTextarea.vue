<template>
  <div class="base-input">
    <div class="label-input">
      {{ label }} <sup style="color: red">{{ required }}</sup>
    </div>
    <div class="textarea-container">
      <textarea
        class="col-8 text-textarea"
        :name="nameInput"
        :ref="nameInput"
        :tabindex="tabindexInput"
        :type="typeInput"
        v-model="value"
        :id="idInput"
        :class="{ 'bd-red': isValidate }"
        :placeholder="placeholderText"
        :max="maxDateInput"
        @blur="hanldeBlurInput"
        :disabled="this.disabled"
        rows="5"
      ></textarea>
      <div
        class="icon icon-validate-textarea tags"
        :data-gloss="labelValidate"
        v-if="this.isValidate"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MTextarea",
  emits: ["update:modelValue"],
  props: [
    "class",
    "type",
    "tabindex",
    "modelValue",
    "placeholder",
    "id",
    "maxDate",
    "name",
    "maxlength",
    "labelValidate",
    "regexString",
    "label",
    "required",
    "disabled",
    "isValidate",
  ],
  created() {
    // Nhận giá trị modelValue
    this.classInput = this.class;

    // Nhận giá trị type đã truyền vào
    this.typeInput = this.type;

    // Nhận giá trị tabindex
    this.tabindexInput = this.tabindex;

    // Nhận giá trị id truyền vào
    this.idInput = this.id;

    // Nhận giá trị placeholder đã truyền vào
    this.placeholderText = this.placeholder;

    // Nhận giá trị thời gian hiện tại
    this.maxDateInput = this.maxDate;

    // Nhận giá trị refs
    this.nameInput = this.name;

    // Nhận giá trị modelValue
    this.value = this.modelValue;
  },
  updated() {
    // Nhận giá trị class đã truyền vào
    this.classInput = this.class;
  },
  methods: {
    /**
     * Hàm kiểm tra ngày giờ
     * CreatedBy: Bien (05/04/2023)
     */
    validateDateTime() {
      if (this.type == "date") {
        const dateNow = new Date();

        const inputDate = new Date(this.modelValue);

        if (inputDate > dateNow) {
          this.$parent.validateList[`${this.nameInput}`].isStatus = true;
          this.$parent.validateList[`${this.nameInput}`].labelValidate =
          this.$t("ERRORVALIDATE.INVALIDDATETIME", {
              item: this.labelValidate,
            });
        } else {
          this.$parent.validateList[`${this.nameInput}`].isStatus = false;
        }
      }
    },
    /**
     * Hàm validate dữ liệu bằng regex
     * CreatedBy: Bien (05/04/2023)
     */
    validateRegex() {
      if (this.regexString) {
        if (new RegExp(this.regexString).test(this.modelValue)) {
          this.$parent.validateList[`${this.nameInput}`].isStatus = false;
        } else {
          this.$parent.validateList[`${this.nameInput}`].isStatus = true;
          this.$parent.validateList[`${this.nameInput}`].labelValidate =
          this.$t("ERRORVALIDATE.INVALIDFORMAT", {
              item: this.labelValidate,
            });
        }
      } else {
        this.$parent.validateList[`${this.nameInput}`].isStatus = false;
      }
    },
    /**
     * Hàm validate khi blur
     * CreatedBy: Bien (04/04/2023)
     */
    hanldeBlurInput() {
      if (this.isValidate && this.labelValidate) {
        if (!this.modelValue) {
          this.$parent.validateList[`${this.nameInput}`].isStatus = true;
          this.$parent.validateList[`${this.nameInput}`].labelError =
          this.$t("ERRORVALIDATE.REQUIRED", {
              item: this.labelValidate,
            });
        } else {
          this.$parent.validateList[`${this.nameInput}`].isStatus = false;
        }
      }
    },
    /**
     * Hàm set focus cho input
     * CreatedBy: Bien (22/02/2023)
     */
    onFocus() {
      this.$refs[this.name].focus();
    },
  },
  watch: {
    /**
     * Theo dõi sự thay đổi của modelVualue
     * CreatedBy: Bien (16/1/2023)
     */
    value: function (newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },
  data() {
    return {
      // Khai báo biến nhận giá trị ref
      nameInput: null,

      // Khai báo biến classInput
      classInput: null,

      // Khai báo biến nhận value
      value: null,

      // Khai baso biến nhận type
      typeInput: null,

      // Khai báo nhận biến tabindex
      tabindexInput: null,

      // Khai báo biến nhận placeholder
      placeholderText: null,

      // Khai báo biến nhận id
      idInput: null,

      // Khai báo biến nhận giá trị ngày lớn nhất
      maxDateInput: null,

      // Chuỗi regex muốn validate
      regexFormat: null,
    };
  },
};
</script>
<style scoped>
@import url(./input.css);
</style>
