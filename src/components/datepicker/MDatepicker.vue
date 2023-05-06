<template>
  <div class="dx-field">
    <div class="dx-field-label">
      {{ label }}<sup style="color: red">{{ required }}</sup>
    </div>
    <div class="dx-field-value">
      <DxDateBox
        v-model="value"
        type="datetime"
        applyButtonText="Lưu"
        cancelButtonText="Hủy"
        display-format="dd/MM/yyyy HH:mm"
        :open-on-field-click="true"
        :calendar-options="{ cellStyle: { backgroundColor: '#4CAF50' } }"
        :picker-type="'calendar'"
      />
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
  props: ["label", "required", "inputValue", "modelValue"],
  components: {
    DxDateBox,
  },
  created() {
    locale("vi", viMessages);
    if (this.modelValue) {
      this.value = this.modelValue;
    } else {
      this.value = new Date(this.now.setHours(12, 0, 0));
    }
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
    };
  },
};
</script>
<style scoped>
@import url(./datepicker.css);
</style>
