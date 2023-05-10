<template>
  <div class="data-grid" :key="keyDataGrid">
    <DxDataGrid
      id="gridContainer"
      ref="dataGrid"
      v-model:selected-row-keys="selectedRowKeys"
      :data-source="entitis"
      :allow-column-resizing="true"
      :show-borders="false"
      :hover-state-enabled="true"
      column-resizing-mode="widget"
      :column-min-width="160"
      :show-column-lines="false"
      :show-row-lines="true"
      :noDataText="$t('DATA.NULL')"
      :sorting="{ mode: 'none' }"
      :paging="{ enabled: false }"
      :preserveSelection="true"
      @rowClick="onRowClick"
      @selectionChanged="onSelectionChanged"
    >
      <DxColumn
        v-for="(item, index) in dataSource"
        :key="index"
        :data-field="item.dataField"
        :caption="item.caption"
        :data-type="item.dataType"
        :width="item.width"
        :fixed="item.fixed"
        :type="item.type"
        :buttons="item.buttons"
        :cell-template="item.cellTemplate"
        :format="item.format"
        :visible="item.visible"
      ></DxColumn>

      <DxSelection
        select-all-mode="page"
        mode="multiple"
        :fixed="true"
        :fixedPosition="'left'"
        show-check-boxes-mode="always"
        width="10"
      />
  
      <template #cell-name="{ data }">
        <MCustomColumVue :data="data"></MCustomColumVue>
      </template>
      <template #cell-status="{ data }">
        <m-custom-column-status :data="data"></m-custom-column-status>
      </template>
      <template #cell-function="{ data }">
        <MCustomFunction :data="data"
        @Business="handleEmitBusiness"
        ></MCustomFunction>
      </template>
    </DxDataGrid>
  </div>
</template>

<script>
import { DxColumn, DxDataGrid, DxSelection } from "devextreme-vue/data-grid";
import MCustomColumVue from "./MCustomColum.vue";
import MCustomColumnStatus from "./MCustomColumnStatus.vue";
import MCustomFunction from "./MCustomFunction.vue";
export default {
  inject: ["diy"],
  name: "MDataGrid",
  emits: ["selectedList", "rowClick"],
  props: ["entity", "dataGrid", "isShowSelectedRows"],
  components: {
    DxDataGrid,
    MCustomColumVue,
    MCustomColumnStatus,
    DxColumn,
    DxSelection,
    MCustomFunction,
  },
  created() {
    if (this.entity) {
      this.entitis = this.entity;
    }

    this.dataSource = this.dataGrid;

    this.isChecked = this.isShowSelectedRows;
  },
  mounted() {
    this.dataTable = this.$refs.dataGrid.instance;
  },
  updated() {
    this.entitis = this.entity;

    this.isChecked = this.isShowSelectedRows;

    this.dataSource = this.dataGrid;
  },
  methods: {
    /**
     * Hàm truyền đối tượng muốn sửa
     * @param {Đối tượng muốn sửa} value 
     * CreatedBy: Bien (10/05/2023)
     */
    handleEmitBusiness(value){
      this.$emit("Business", value);
    },
  
    /**
     * Hàm gắn lại dữ liệu khi click cột chức năng
     * @param {Danh sách dữ liệu mới} value
     * CreatedBy: Bien (10/05/2023)
     */
    // handlerData(value){/* eslint-disable */
    //   debugger
    //   if(value.length > 0){
    //     this.entitis = value;
    //     this.dataTable.refresh();
    //   }
    // },
    /**
     * Hàm xem thông tin hàng khi click
     * @param {Sự kiện} event
     * CreatedBy: Bien (24/04/2024)
     */
    onRowClick(event) {
      const selectedObject = event.data;

      this.$emit("rowClick", selectedObject);
    },
    /**
     * Loại bỏ tất cả phần tử đã chọn
     * CreatedBy: Bien (24/04/2023)
     */
    // clearSelection() {
    //   const dataGrid = this.$refs.dataGrid.instance;

    //   dataGrid.clearSelection();
    //   // this.selectedRowKeys = [];
    // },
    // /**
    //  * Hàm thêm nhân viên vào danh sách được chọn
    //  * @param {Thêm danh sách bản ghi đã chọn} selectedItems
    //  * CreatedBy: Bien (24/04/2023)
    //  */
    onSelectionChanged(e) {
      /* eslint-disable */
      // debugger;
      // this.selectedRowKeys = this.$parent.selectedList;

      let selectRowKeys = e.selectedRowKeys;

      // selectRowKeys.forEach((element) => {
      //   let index = this.selectedRowKeys.findIndex((item) => {
      //     JSON.stringify(item) == JSON.stringify(element);
      //   });
      //   if (!(index > -1)) {
      //     this.selectedRowKeys.push(element);
      //   }
      // });

      this.$emit("selectedList", selectRowKeys);
    },
  },
  watch: {
    isChecked:function(newValue){
      console.log(newValue);
      if(!newValue){
        this.selectedRowKeys = [];
      }
    },
    // selectedRowKeys: {
    //   handler(newValue, oldValue) {
    //     if (newValue.length > 0) {
    //       let selectedEBusinessId = oldValue.map(
    //         (item) => item.MissionallowanceId
    //       );

    //       let selectedNew = newValue.map((item) => item.MissionallowanceId);
    //       /* eslint-disable */
    //       debugger;

    //       if (selectedNew.length != selectedEBusinessId.length) {
    //         selectedNew.forEach((item) => {
    //           if (!selectedEBusinessId.includes(item)) {
    //             selectedEBusinessId.push(item);
    //           } else {
    //             selectedEBusinessId = selectedEBusinessId.filter(
    //               (elelemt) => elelemt != item
    //             );
    //           }
    //         });
    //         this.selectedRowKeys = selectedEBusinessId;
    //         this.$emit("selectedList", this.selectedRowKeys);
    //       } else {
    //         this.$emit("selectedList", selectedEBusinessId);
    //       }
    //     }
    //     // this.selectedRowKeys = this.$parent.selectedList.map((item) => item);
    //   },
    //   deep: true,
    // },
    /**
     * Tải lại bảng khi dữ liệu trong bảng thay đổi
     * CreatedBy: Bien (06/05/2023)
     */
    entity: {
      handler() {
        // debugger
        if (this.dataTable) {
  
          this.dataTable.refresh();

          this.diy.clearLoading();

          // const dataGrid = this.$refs.dataGrid.instance;
          // if (!this.isShowSelectedRows) {
          //   this.selectedRowKeys = [];
          // }
          // if (this.selectedRowKeys.length > 0) {
          //   this.selectedRowKeys.forEach((element) => {
          //     let index = this.entity.findIndex((item) => {
          //       JSON.stringify(item) === JSON.stringify(element);
          //     });
          //     if (index > -1) {
          //       this.selectedRowKeys.push(element);
          //     }
          //   });
          // }
        }
      },
      deep: true,
      immediate: true,
    },
    /**
     * Tải lại bảng khi dữ liệu cột tiêu đề thay đổi
     * CreatedBy: Bien (06/05/2023)
     */
    dataGrid: {
      handler() {
        // debugger
        if (this.dataTable) {
          if (!this.isEditColumn) {
            this.dataTable.refresh();
          }
          this.dataTable.refresh();

        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      // Key datagrid
      keyDataGrid: 1,

      // Danh sách được chọn
      selectedRowKeys: [],

      // Danh sách đối tượng
      entitis: [],

      // Danh sách trưởng tiêu đề
      dataSource: [],

      // Danh sách bản ghi đã chọn
      selectedRows: [],

      // Biến bảng
      dataTable: null,

      // Kiểm tra checkall
      isChecked: null,

      isEditCol: null,
    };
  },
};
</script>
<style scoped>
@import url(./datagrid.css);
</style>
