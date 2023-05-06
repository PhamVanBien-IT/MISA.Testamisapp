<template>
  <div>
    <input
      :type="TypeInput"
      :value="money"
      :class="classInput"
      :tabindex = "tabindexInput"
      @input="changeValue"
    />
  </div>
</template>
<script>
export default {
  name: "MInputMoney",
  emits: ["update:modelValue"],
  props: ["class", "type","tabindex", "modelValue"],
  created() {
    // Nhận giá trị modelValue
    this.classInput = this.class;

    // Nhận giá trị type đã truyền vào
    this.TypeInput = this.type;

    // Nhận giá trị tabindex
    this.tabindexInput = this.tabindex;

    // Nhận giá trị modelValue
    this.value = this.modelValue;
  },
  methods: {
   
    /**
     * Hàm hiển thị khi tìm kiếm
     * CreatedBy: Bien (16/1/2023)
     */
    changeValue(event) {
      var ValueRoot = event.target.value.replaceAll(".", "");

      var value = parseInt(ValueRoot);

      this.$emit("update:modelValue", value);
    },
  },
  computed: {
    /**
     * Thực hiện hàm khi tiền thay đổi
     * CreatedBy: Bien (16/1/2023)
     */
    money: function () {
      if (this.value) {
        var money = new Intl.NumberFormat().format(this.value);
        return money;
      } else {
        return "";
      }
    },
  },

  watch: {
    /**
     * Theo dõi sự thay đổi của modelVualue
     * CreatedBy: Bien (16/1/2023)
     */
    modelValue: function (newValue) {
      this.value = newValue;
    },
  },
  data() {
    return {
      // Khai báo biến nhận value
      value: null,

      // Khai báo biến nhận tabindex
      tabindexInput: null,
    };
  },
};
</script>
<style scoped></style>
