<template>
  <div class="data-grid">
    <DxDataGrid
      id="gridContainer"
      ref="dataGrid"
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
      @selectionChanged="onSelectionChanged"
      @rowClick="onRowClick"
      @mouseover="showDeleteButton = true"
      @mouseleave="showDeleteButton = false"
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
  },
  mounted() {
    this.dataTable = this.$refs.dataGrid.instance;
    // Sử dụng biến dataGrid ở đây
  },
  updated() {
    this.entitis = this.entity;

    if (!this.isShowSelectedRows) {
      this.clearSelection();
    }
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
    },
    /**
     * Hàm thêm nhân viên vào danh sách được chọn
     * @param {Thêm danh sách bản ghi đã chọn} selectedItems
     * CreatedBy: Bien (24/04/2023)
     */
    onSelectionChanged(event) {
  
      if (
        event.currentDeselectedRowKeys.length > 0 &&
        event.selectedRowKeys.length > 0
      ) {
        if (this.$parent.selectedList.length < event.selectedRowsData.length) {
          this.$parent.selectedList = event.selectedRowsData;
        }
      } else {
        if (this.$parent.selectedList.length > 0) {
          let selectCol = event.selectedRowsData;
          if (selectCol.length > 0) {
            selectCol.map((item) => {
              if(!this.$parent.selectedList.includes(item)){
                this.$parent.selectedList.push(item);
              }
            });
          } else {
            this.$parent.selectedList = event.currentDeselectedRowKeys;
          }
        } else {
          if (event.currentDeselectedRowKeys.length > 0) {
            this.$parent.selectedList = event.currentDeselectedRowKeys;
          } else {
            this.$parent.selectedList = event.selectedRowKeys;
          }
        }
      }
      /* eslint-disable */
      // debugger
      this.$emit("selectedList", this.$parent.selectedList);
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
          const dataGrid = this.$refs.dataGrid.instance;
          this.dataTable.refresh();
          dataGrid.selectRows(this.$parent.selectedList, false);
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

      dataTable: null,
    };
  },
};
</script>
<style scoped>
@import url(./datagrid.css);
</style>
