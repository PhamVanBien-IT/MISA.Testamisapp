<template>
  <div class="dx-field">
    <div class="dx-field-label">
      {{ label }}<sup style="color: red">{{ required }}</sup>
    </div>
    <div
      class="dx-field-value"
      :class="{ 'bd-red': this.isValidate }"
      @click="handleDateTime"
    >
      <DxDateBox
        v-model="value"
        type="datetime"
        applyButtonText="Lưu"
        cancelButtonText="Hủy"
        display-format="dd/MM/yyyy HH:mm"
        :open-on-field-click="true"
        :calendar-options="{ cellStyle: { backgroundColor: '#4CAF50' } }"
        :picker-type="'calendar'"
        :showDropDownButton="!this.isValidate"
        :onApplyButtonClick="handleDateTime"
        :tabindex="this.tabindex"
      />
      <div
        class="icon icon-validate-datepicker tags"
        :data-gloss="this.labelValidate"
        v-if="this.isValidate"
      ></div>
    </div>
  </div>
</template>
<script>
import DxDateBox from "devextreme-vue/date-box";
import { locale } from "devextreme/localization";
import viMessages from "devextreme/localization/messages/vi.json";

export default {
  name: "MDatepicker",
  emits: ["update:modelValue"],
  props: [
    "label",
    "required",
    "inputValue",
    "modelValue",
    "labelValidate",
    "isValidate",
    "name",
    "tabindex"
  ],
  components: {
    DxDateBox,
  },
  created() {
    locale("vi", viMessages);
    if (this.modelValue) {
      this.value = this.modelValue;
    } else {
      if(new Date().getHours() < 12){
        this.value = new Date(this.now.setHours(12, 0, 0));
      }else{
      this.value = new Date(this.now.setHours(18, 0, 0));
      }
    }

    this.nameInput = this.name;

  },
  methods: {
    /**
     * Hàm validate khi blur
     * CreatedBy: Bien (04/04/2023)
     */
    handleDateTime() {
      /* eslint-disable */
      // debugger;
        if (!this.modelValue) {
          this.$parent.validateList[`${this.nameInput}`].isStatus = true;
          this.$parent.validateList[`${this.nameInput}`].labelError = this.$t(
            "ERRORVALIDATE.REQUIRED",
            {
              item: this.labelValidate,
            }
          );
        } else {
          this.$parent.validateList[`${this.nameInput}`].isStatus = false;
        }
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
      // Ngày hiện tại
      now: new Date(),

      // Gía trị mặc định
      value: null,

      // Lớp input
      nameInput:null
    };
  },
};
</script>
<style scoped>
@import url(./datepicker.css);
</style>
