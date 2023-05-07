<template>
  <div class="data-grid">
    <DxDataGrid
      id="gridContainer"
      ref="dataGrid"
      v-model="selectedRowKeys"
      :data-source="entitis"
      :allow-column-resizing="true"
      :show-borders="false"
      :hover-state-enabled="true"
      column-resizing-mode="widget"
      :column-min-width="160"
      :show-column-lines="false"
      :show-row-lines="true"
      :noDataText="this.$MISAResource.DATA.NULL"
      :sorting="{ mode: 'none' }"
      :paging="{ enabled: false }"
      :preserveSelection="true"
      :selectedRowKeys="selectedRowKeys"
      @selectionChanged="onSelectionChanged"
      @rowClick="onRowClick"
      @mouseover="showDeleteButton = true"
      @mouseleave="showDeleteButton = false"
      :header-cell-template="headerCellTemplate"
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
    </DxDataGrid>
  </div>
</template>

<script>
import { DxColumn, DxDataGrid, DxSelection } from "devextreme-vue/data-grid";
import MCustomColumVue from "./MCustomColum.vue";
import MCustomColumnStatus from "./MCustomColumnStatus.vue";
// import _ from "lodash";
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

    console.log(this.isChecked);
  },
  methods: {
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
    clearSelection() {
      const dataGrid = this.$refs.dataGrid.instance;

      dataGrid.clearSelection();
      // this.selectedRowKeys = [];
    },
    /**
     * Hàm thêm nhân viên vào danh sách được chọn
     * @param {Thêm danh sách bản ghi đã chọn} selectedItems
     * CreatedBy: Bien (24/04/2023)
     */
    onSelectionChanged() {
      /* eslint-disable */
      debugger;

      // console.log(this.selectedRowKeys);
      // let listSelect = this.$parent.selectedList;

      // if (event.currentSelectedRowKeys.length == 0) {
      //   if (
      //     event.currentDeselectedRowKeys.length > 0 &&
      //     event.selectedRowKeys.length > 0
      //   ) {
      //     listSelect = event.selectedRowKeys;
      //   }else if(event.currentDeselectedRowKeys.length != 50){
      //     listSelect = [];
      //   }
      //   // listSelect = event.currentDeselectedRowKeys;
      // } else if (
      //   event.currentSelectedRowKeys.length > 0 &&
      //   listSelect.length > 0
      // ) {
      //   const isObjectInArray = listSelect.some((item) => {
      //     _.isEqual(item, event.currentSelectedRowKeys); 
      //   });
      //   event.currentSelectedRowKeys.map(item =>{
      //   if(!isObjectInArray && event.currentSelectedRowKeys.length != 50){
      //       listSelect.push(item);
      //   }
      // }) 
      // } else {
      //   event.currentSelectedRowKeys.map((item) => {
      //     listSelect.push(item);
      //   });
      // }

      // this.selectedRowKeys = listSelect;
        // const selectRowKeys = this.$MISAResource.SELECTLIST.selectedRowKeys;

        // let seletList = e.selectedRowKeys;

        // seletList.map(iten =>{
        //   if(JSON.stringify(item))
        // })
        // selectRowKeys = e.selectedRowKeys;

      this.$emit("selectedList", this.$MISAResource.SELECTLIST.selectedRowKeys);
    },
  },
  watch: {
    /**
     * Tải lại bảng khi dữ liệu trong bảng thay đổi
     * CreatedBy: Bien (06/05/2023)
     */
    entity: {
      handler() {
        if (this.dataTable) {
          debugger;
          const dataGrid = this.$refs.dataGrid.instance;
          if(!this.isShowSelectedRows){
            this.selectedRowKeys = [];
          }
          dataGrid.selectRows(this.selectedRowKeys, false);
          this.dataTable.refresh();

          // if(this.$parent.selectedList > 0){
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
        if (this.dataTable) {
          this.dataTable.refresh();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
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
      
    };
  },
};
</script>
<style scoped>
@import url(./datagrid.css);
</style>
