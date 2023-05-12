<template>
  <div class="overlay">
    <div class="business-form">
      <div class="business-form-top">
        <div class="tittle-business-form">{{ $t("TITLEFORM.HOME") }}</div>
        <div
          class="icon icon-close-business-form"
          @click="btnCloseFormBusiness"
        ></div>
      </div>
      <div class="business-form-center">
        <div class="business-form-center-nav">
          <div class="input-business-form">
            <div class="icon icon-search"></div>
            <input
              type="text"
              class="input-search"
              v-model="textSearchEmployee"
              :placeholder="$t('BUSINESSFORM.PLACEHOLDER.SEARCH')"
              @input="searchEmployee"
            />
          </div>
          <div class="cobobox-business-form">
            <m-combobox-v-2
              id="cbxDepartments"
              propName="text"
              propValue="id"
              v-model="this.diy.state.treeDepartment.id"
              :entity="this.diy.state.treeDepartment"
              :isShowCombobox="isShowDepartment"
              :placeholderDefault="$t('BUSINESSFORM.PLACEHOLDER.DEPARTMENT')"
              :isShowFooter="true"
              @misaCode="getMisaCode"
            >
            </m-combobox-v-2>
          </div>
          <div class="select-row-length" v-if="isShowSelectedLength">
            {{ $t("BUSINESSFORM.SELECTLIST.SELECTED") }}
            <span style="font-weight: 600">{{ this.selectedList.length }}</span>
          </div>
          <div
            class="select-row-unselect"
            v-if="isShowSelectedLength"
            @click="btnUnselectedList"
          >
            {{ $t("BUSINESSFORM.SELECTLIST.UNSELECTED") }}
          </div>
        </div>
        <div class="business-form-center-table">
          <div class="table-employee-form">
            <m-data-grid
              :entity="this.employees"
              :dataGrid="this.dataGridEmployees"
              @selectedList="selectAll"
              :isShowSelectedRows="isShowSelectedLength"
            ></m-data-grid>
          </div>
          <div class="paging-table-form">
            <div class="total-recort">
              {{ $t("BUSINESSFORM.TOTALRECORD") }}

              <span style="font-weight: 600">{{ this.totalRecord }}</span>
            </div>
            <div class="paging-content-footer">
              <div class="page-size">
                <m-dropdown
                  id="pagination-size"
                  :entity="pagination"
                  :valueDefault="50"
                  :isShow="isShowPagesize"
                  @click="togglePageSize"
                  @valueItem="setPageSize"
                ></m-dropdown>
              </div>
              <div class="paging">
                <div class="recort">
                  {{ $t("BUSINESSFORM.PAGING.FROM") }}
                  <span style="font-weight: 600">{{ startPage }}</span>
                  {{ $t("BUSINESSFORM.PAGING.TO") }}
                  <span style="font-weight: 600">{{ endPage }}</span>
                  {{ $t("BUSINESSFORM.PAGING.RECORD") }}
                </div>
                <div class="icon icon-prevent" @click="preventPage"></div>
                <div class="icon icon-next" @click="nextPage"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="business-form-footer">
        <m-button
          class="btn-cancel-form"
          label="Hủy"
          @click="btnCloseFormBusiness"
        ></m-button>
        <m-button
          class="btn-save"
          label="Chọn"
          @click="btnSelectEmployee"
        ></m-button>
      </div>
    </div>
  </div>
</template>
<script>
import MDataGrid from "@/components/datagrid/MDataGrid.vue";
import MButton from "@/components/button/MButton.vue";
import _ from "lodash";
import employeeApi from "@/api/employeeApi";

export default {
  inject: ["diy"],
  name: "BusinessForm",
  components: { MDataGrid, MButton },
  props: [],
  created() {
    this.getEmployeePaging(1, this.pageSize, "Employees/");
  },
  methods: {
    /**
     * Hàm lọc theo đơn vị
     * @param {Đơn vị muốn lọc} value
     * CreatedBy: Bien (05/05/2023)
     */
    getMisaCode(value) {
      this.misaCode = value;
      this.getEmployeePaging(1, this.pageSize, "Missionallowances/");
    },
    /**
     * Hàm thêm danh sách nhân viên đi công tác
     * CreatedBy: Bien (25/04/2023)
     */
    btnSelectEmployee() {
      let newEmployees = this.$parent.employees;
      this.selectedList.forEach((item) => {
        newEmployees.push(item);
        this.deleteEmployeesSelect(item.EmployeeId, this.employees);
      });
      this.employeeBusiness = newEmployees;
      this.diy.clearFormBusiness();
      console.log(this.employeeBusiness);

      this.$emit("employeesDetail", this.employeeBusiness);
    },

    /**
     * Hàm xóa danh sách nhân viên đã chọn
     * @param {Id nhân viên đã chọn} employeeId
     * @param {Danh sách nhân viên muốn xóa} employees
     * CreatedBy: Bien (25/04/2023)
     */
    deleteEmployeesSelect(employeeId, employees) {
      let id = employeeId;

      let index = employees.findIndex((item) => item.EmployeeId === id); // Tìm chỉ số của sản phẩm có id trong mảng

      if (index !== -1) {
        employees.splice(index, 1); // Xóa sản phẩm có chỉ số là index khỏi mảng
      }
    },
    /**
     * Tìm kiếm sau 0.5s
     * CreatedBy: Bien (24/04/2023)
     */
    searchEmployee: _.debounce(function () {
      this.search();
    }, 500),

    /**
     * Hàm tìm kiếm nhân viên
     * @param {Nội dung muốn tìm kiếm} value
     * CreatedBy: Bien (24/04/2023)
     */
    async search() {
      try {
        let me = this;
        // Nhận dữ liệu khi tìm kiếm
        await this.getEmployeePaging(1, me.pageSize, "Employees/");
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm bỏ chọn danh sách nhân viên
     * CreatedBy: Bien (24/04/2023)
     */
    btnUnselectedList() {
      this.isShowSelectedLength = false;
    },

    /**
     * Hàm thêm nhân viên vào danh sách được chọn
     * @param {Danh sách chọn} selectedRows
     * CreatedBy: Bien (24/04/2023)
     */
    selectAll(selectedRows) {
      this.selectedList = selectedRows;

      if (this.selectedList.length > 0) {
        this.isShowSelectedLength = true;
      } else {
        this.isShowSelectedLength = false;
      }
    },
    /**
     * Hàm quay lại trang trước
     * CreatedBy: Bien (24/04/2023)
     */
    preventPage() {
      if (this.indexPage > 1) {
        this.indexPage = this.indexPage - 1;

        this.startPage = (this.indexPage - 1) * this.pageSize + 1;

        this.endPage = this.indexPage * this.pageSize;

        this.getEmployeePaging(this.indexPage, this.pageSize, "Employees/");
      }
    },
    /**
     * Hàm chuyển trang
     * CreatedBy: Bien (24/04/2023)
     */
    nextPage() {
      if (this.indexPage < this.totalPage) {
        this.indexPage = this.indexPage + 1;

        this.startPage = (this.indexPage - 1) * this.pageSize + 1;

        this.endPage = this.indexPage * this.pageSize;

        this.getEmployeePaging(this.indexPage, this.pageSize, "Employees/");
      }
    },
    /**
     * Hàm set kích thước trang
     * @param {Kích thước trang được chọn} n
     * CreatedBy: Bien (24/04/2023)
     */
    setPageSize(n) {
      this.pageSize = n;

      this.startPage = this.$MISAEnum.PAGING.START;

      this.endPage = this.pageSize;
      // Gọi lại hàm phân trang
      this.getEmployeePaging(1, this.pageSize, "Employees/");
    },
    /**
     * Hàm lấy danh sách nhân viên
     * CreatedBy: Bien (23/04/2023)
     */
    async getEmployeePaging(pageNumber, pageSize, baseUrl) {
      try {
        // Nhận dữ liệu khi tìm kiếm
        const response = await employeeApi.getPaging(
          pageNumber,
          pageSize,
          baseUrl,
          this.textSearchEmployee,
          this.misaCode
        );
        this.employees = response.Data;
        // Xóa nhân viên đã chọn
        this.$parent.employees.forEach((item) => {
          this.deleteEmployeesSelect(item.EmployeeId, this.employees);
        });

        this.indexPage = pageNumber;
        this.totalPage = response.TotalPage;
        this.totalRecord = response.TotalRecord - this.$parent.employees.length;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm đóng form
     * CreatedBy: Bien (19/04/2023)
     */
    btnCloseFormBusiness() {
      this.diy.clearFormBusiness();
    },
    /**
     * Hàm show danh sách status
     * CreatedBy: Bien (15/04/2023)
     */
    togglePageSize() {
      this.isShowPagesize = !this.isShowPagesize;
    },
  },
  watch: {
    /**
     * Hàm tìm kiếm giá trị tìm kiếm thay đổi
     * CreatedBy: Bien (18/1/2023)
     */
    textSearchEmployee: async function () {
      await this.searchEmployee(this.textSearchEmployee);
    },
  },
  data() {
    return {
      // Lọc theo đơn vị
      misaCode: "",
      // Dánh sách nhân viên đi công tác
      employeeBusiness: [],

      // Hiển thị số lượng nhân viên đã chọn
      isShowSelectedLength: false,

      // Danh sách bản ghi đã chọn
      selectedList: [],

      // Số bản ghi đầu
      startPage: 1,

      // Số bản ghi cuối
      endPage: 50,

      // Kích thước trang
      pageSize: 50,

      // Nội dung tìm kiếm nhân viên
      textSearchEmployee: null,

      // Tổng số trang
      totalPage: null,

      // Tổng số bản ghi
      totalRecord: null,

      // Số trang hiện tại
      indexPage: 1,

      // Danh sách nhân viên
      employees: [],

      // Hiển thị danh sách đơn vị
      isShowDepartment: false,

      // Hiển thị danh sách trạng thái
      isShowStatus: false,

      // Hiển thị danh sách trạng thái
      isShowPagesize: false,

      // Khai báo mảng số lượng bản ghi trên 1 trang
      pagination: [
        {
          key: 10,
          value: "10",
        },
        {
          key: 20,
          value: "20",
        },
        {
          key: 30,
          value: "30",
        },
        {
          key: 50,
          value: "50",
        },
        {
          key: 100,
          value: "100",
        },
      ],
      // Danh sách bảng nhân viên
      dataGridEmployees: [
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.EMPLOYEECODE"),
          dataField: "EmployeeCode",
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.EMPLOYEE"),
          dataField: "FullName",
          cellTemplate: "cell-name",
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.POSITIONNAME"),
          dataField: "PositionName",
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.DEPARTMENTNAME"),
          dataField: "DepartmentName",
        },
      ],
      // Tất cả phòng ban
      // treeDepartment: [
      //   {
      //     id: "1",
      //     text: "Công ty Test (Dự án C&B)",
      //     items: [
      //       {
      //         id: "1/1",
      //         text: "Văn phòng",
      //         items: [
      //           {
      //             id: "1/1/1",
      //             text: "Ban giám đốc",
      //           },
      //           {
      //             id: "1/1/2",
      //             text: "Phòng kinh doanh",
      //           },
      //         ],
      //       },
      //       { id: "1/2", text: "Nhà máy" },
      //     ],
      //   },
      //   {
      //     id: "2",
      //     text: "Công ty ROBOCAR",
      //   },
      // ],
    };
  },
};
</script>
<style scoped></style>
