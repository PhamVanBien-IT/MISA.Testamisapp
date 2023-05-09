<template>
  <div :key="businessListKey" class="business-list" v-if="!diy.state.isShowBusinessDetail">
    <div class="content-top">
      <div class="tittle-content-top">{{ $t("TITLEFORM.BUSSINESS") }}</div>
      <div class="add-content-top">
        <div class="icon-add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <m-button
          class="btn-add"
          @click="btnAddEmployee"
          :label="$t('BUTTON.ADD')"
        ></m-button>
        <div class="btn-add-down"></div>
        <button class="down-list" @click="this.diy.toggleImport()">
          <div class="icon icon-list"></div>
        </button>
        <div class="add-import" v-if="diy.state.isImport">
          <div class="icon icon-import"></div>
          <div class="title-import">{{ $t("BUTTON.IMPORT") }}</div>
        </div>
      </div>
    </div>
    <div class="content-list-center">
      <div class="content-center" :class="{ 'width-full': !isShowListFilter }">
        <div class="content-center-header">
          <div class="content-center-header-left">
            <div
              class="content-center-header-left mg-l10"
              v-if="this.diy.state.isSearchBusiness"
            >
              <div class="icon icon-search-list"></div>
              <input
                type="text"
                class="input-search"
                v-model="textSearch"
                :placeholder="$t('BUSINESSFORM.PLACEHOLDER.SEARCH')"
                @input="searchBusiness"
              />
            </div>
            <div class="content-center-header-left-select" v-else>
              <div class="number-select">
                {{ $t("BUSINESSFORM.SELECTLIST.SELECTED") }}
                <span style="font-weight: 600">{{
                  this.selectedList.length
                }}</span>
              </div>
              <div class="un-select" @click="btnUnselectedList">
                {{ $t("BUSINESSFORM.SELECTLIST.UNSELECTED") }}
              </div>
              <div class="btn-refuse">
                <div class="icon-btn-refuse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F44336"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-slash"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                  </svg>
                </div>
                <div class="text-btn-refuse">{{ $t("BUTTON.REFUSE") }}</div>
              </div>
              <div class="btn-approve">
                <div class="icon-btn-approve">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00c853"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div class="text-btn-approve">{{ $t("BUTTON.APPROVE") }}</div>
              </div>
              <div class="btn-export">
                <div class="icon-btn-export">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#212121"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                </div>
                <div class="text-btn-export">{{ $t("BUTTON.EXPORT") }}</div>
              </div>
              <div
                class="btn-delete"
                @click="btnDeletedeleteMissionallowanceList"
              >
                <div class="icon-btn-delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef292F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-trash"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    ></path>
                  </svg>
                </div>
                <div class="text-btn-delete">{{ $t("BUTTON.DELETE") }}</div>
              </div>
            </div>
          </div>
          <div class="content-center-header-right">
            <div class="content-center-header-status">
              <div class="title-status">
                {{ $t("BUSINESSDETAIL.TITLEFORM.STATUS") }}:
              </div>
              <m-dropdown
                id="status"
                :entity="status"
                :valueDefault="0"
                customDropdow="custom-dropdown"
                :isShow="isShowStatus"
                @click="toggleStatus"
                :showData="true"
                @valueItem="setStatus"
              ></m-dropdown>
            </div>
            <div class="combobox-list-department">
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
            <div class="icon icon-refresh" @click="btnReFresh"></div>
            <!-- <div class="tags tooltip-refresh" data-gloss="Tải lại">
              
            </div> -->
            <div
              class="icon icon-filter"
              @click="toggleListFilter"
              :class="{ 'icon-focus': isShowListFilter }"
            ></div>
            <div
              class="icon icon-export"
              @click="btnExportMissionllowances"
            ></div>
            <div
              class="icon icon-setting"
              @click="btnShowEditColumn($event)"
              :class="{ 'icon-focus': isShowEditColumn }"
            ></div>
          </div>
        </div>
        <div class="content-center-content">
          <m-data-grid
            :dataGrid="dataGridEmployee"
            :entity="employeesBusiness"
            @rowClick="onClickRow"
            @selectedList="selectAll"
            :isShowSelectedRows="isShowSelected"
            :isEditColumn="isShowEditColumn"
          ></m-data-grid>
        </div>
        <div class="content-footer">
          <div class="total-recort">
            {{ $t("BUSINESSFORM.TOTALRECORD") }}
            <span style="font-weight: 600">{{ totalRecord }}</span>
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
                <span style="font-weight: 600">{{ endPage }}</span
                >{{ $t("BUSINESSFORM.PAGING.RECORD") }}
              </div>
              <div class="icon icon-prevent" @click="preventPage"></div>
              <div class="icon icon-next" @click="nextPage"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="high-filter" v-if="isShowListFilter">
        <div class="high-filter-header">
          <div class="filter-header-top">
            <div class="high-filter-header-title">
              {{ $t("BUTTON.FILTER") }}
            </div>
            <div
              class="icon icon-close-high-filter"
              @click="toggleListFilter"
            ></div>
          </div>
          <div class="high-filter-header-left">
            <div class="icon icon-search"></div>
            <input
              type="text"
              class="input-search"
              v-model="textSearchHighFilter"
              :placeholder="$t('BUSINESSFORM.PLACEHOLDER.SEARCH')"
              @input="searchHighFilter"
            />
          </div>
        </div>
        <div class="high-filter-center">
          <div class="high-filter-data">
            <div
              class="high-filter-item"
              id="high-item"
              v-for="(item, index) in dataSearchFilter"
              :key="index"
            >
              <div class="label-high-filter">
                <div class="checkbox-high-filter">
                  <label>
                    <input
                      type="checkbox"
                      id="chkProdTomove"
                      @click="toggleBoxHighFilter"
                    />
                    <span class="check-box-effect"></span>
                  </label>
                </div>
                <div class="label-value">
                  {{ item.caption }}
                </div>
              </div>
              <div class="box-high-filter" v-if="isShowBoxHighFilter">
                <m-combobox-v-3
                  id="cbxListFilter"
                  propName="value"
                  propValue="key"
                  v-model="listFilter.key"
                  :entity="listFilter"
                  tabindex="4"
                  :isShowCombobox="isShowHighFilter"
                  :defaultValue="listFilter[2].key"
                ></m-combobox-v-3>
                <m-input-text-v2
                  class="text-form"
                  v-model="textFilter"
                ></m-input-text-v2>
              </div>
            </div>
          </div>
        </div>
        <div class="high-filter-footer">
          <m-button
            class="btn-save-filter"
            :label="$t('BUTTON.APPLY')"
          ></m-button>
          <m-button
            class="btn-cancel-filter"
            :label="$t('BUTTON.FILTER')"
            @click="toggleListFilter"
          ></m-button>
        </div>
      </div>
      <teleport to="body">
        <div
          class="edit-column"
          id="high-filter"
          v-if="isShowEditColumn"
          :style="positionEditColumn"
        >
          <div class="high-filter-header">
            <div class="filter-header-top">
              <div class="high-filter-header-title">
                {{ $t("BUTTON.SETCOLUMN") }}
              </div>
              <div
                class="icon icon-close-high-filter"
                @click="toggleEditColumn"
              ></div>
            </div>
            <div class="high-filter-header-left">
              <div class="icon icon-search"></div>
              <input
                type="text"
                class="input-search"
                v-model="textSearchHighFilter"
                :placeholder="$t('BUSINESSFORM.PLACEHOLDER.SEARCH')"
                @input="searchHighFilter"
              />
            </div>
          </div>
          <div class="high-filter-center list-edit-column">
            <div class="high-filter-data" style="height: 456px">
              <div
                class="high-filter-item"
                id="high-item"
                v-for="(item, index) in dataGridEmployee"
                :key="index"
              >
                <div class="label-high-filter">
                  <div class="checkbox-high-filter">
                    <label>
                      <input
                        type="checkbox"
                        id="chkProdTomove"
                        v-model="item.visible"
                      />
                      <span class="check-box-effect"></span>
                    </label>
                  </div>
                  <div class="label-value">
                    {{ item.caption }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="edit-column-footer">
            <m-button
              class="btn-save-edit-colummn"
              @click="saveEditColumn"
              :label="$t('BUTTON.SAVE')"
            ></m-button>
            <m-button
              class="btn-cancel btn-default-edit-colummn"
              @click="setDeafaultColumn"
              :label="$t('BUTTON.DEFAULT')"
            ></m-button>
          </div>
        </div>
      </teleport>
    </div>
  </div>
  <business-detail
    :businessDetailId="businessDetailId"
    v-if="diy.state.isShowBusinessDetail"
    :isEditBusiness="isEditBusiness"
  ></business-detail>
  <m-dialog-v2
    v-if="diy.state.isShowDialog"
    :label="lableDialog"
    @FuncDialog="handleFunctionDialog"
  ></m-dialog-v2>
  <m-notify v-if="diy.state.isShowNotify" :label="labelNotify"></m-notify>
</template>
<script>
import BusinessDetail from "@/views/business/BusinessDetail.vue";
import MButton from "@/components/button/MButton.vue";
import MComboboxV3 from "@/components/combobox/MComboboxV3.vue";
import baseApi from "@/api/baseApi";
import _ from "lodash";
import MDialogV2 from "@/components/dialog/MDialogV2.vue";
import MNotify from "@/components/notify/MNotify.vue";
import missionallowanceApi from "@/api/missionallowanceApi";

export default {
  inject: ["diy"],
  name: "BusinessList",
  components: { MButton, MComboboxV3, BusinessDetail, MDialogV2, MNotify },
  props: ["rowClick"],
  created() {
    this.getPaging(1, this.pageSize, "Missionallowances/");

    this.getEmployees("Employees/");

    if (JSON.parse(localStorage.getItem("dataGridEmployee")) != null) {
      this.dataGridEmployee = JSON.parse(
        localStorage.getItem("dataGridEmployee")
      );
      this.dataSearchFilter = this.dataGridEmployee;
    } else {
      this.setLocalStorage(this.dataGridBussiness);
      this.dataGridEmployee = this.dataGridBussiness;
      this.dataSearchFilter = this.dataGridEmployee;
    }
  },
  methods: {
    /**
     * Hàm set thứ tự cột mặc định
     * CreatedBy: Bien (09/05/2023)
     */
    setDeafaultColumn() {
      this.setLocalStorage(this.dataGridBussiness);
      this.dataGridEmployee = JSON.parse(
        localStorage.getItem("dataGridEmployee")
      );
      this.isShowEditColumn = false;
    },
    /**
     * Hàm thực hiện lưu tùy chỉnh cột
     * CreatedBy: Bien (09/05/2023)
     */

    saveEditColumn() {
      /* eslint-disable */
    // debugger

      this.isShowEditColumn = false;
      this.setLocalStorage(this.dataGridEmployee);
      this.dataGridEmployee = JSON.parse(
        localStorage.getItem("dataGridEmployee")
      );
    },
    /**
     * Hàm lưu biến trên localStorage
     * @param {Đối tượng muốn lưu} listColumn
     * CreatedBy: Bien (09/05/2023)
     */
    setLocalStorage(listColumn) {
      localStorage.setItem("dataGridEmployee", JSON.stringify(listColumn));
    },
    /**
     * Hàm xuất khẩu nhân viên
     * CreatedBy: Bien (03/05/2023)
     */
    btnExportMissionllowances() {
      const response = missionallowanceApi.exportMissionallowances(
        this.textSearch
      );
      console.log(response);
    },
    /**
     * Hàm kiểm tra xem hành động xóa 1 hoặc xóa nhiều
     * CreatedBy: Bien (03/05/2023)
     */
    handleFunctionDialog() {
      if (this.selectedList.length > 0) {
        this.deletedeleteMissionallowanceList("Missionallowances");
      } else {
        this.deleteBusiness();
      }
    },
    /**
     * Hàm xóa nhiều đơn công tác
     * CreaetedBy: Bien (03/05/2023)
     */
    async deletedeleteMissionallowanceList(baseUrl) {
      const response = await baseApi.deleteList(baseUrl, this.selectedListIds);

      console.log(response);

      if (response.IsSuccess) {
        this.labelNotify = this.$t("NOTIFY.DELETE");
        this.diy.showNotify();
        this.getPaging(1, this.pageSize, "Missionallowances/");
        this.diy.clearDialog();
        this.diy.showSearchBusiness();
        this.selectedList = [];
      }
    },
    /**
     * Hàm hỏi trước khi xóa nhiều đơn công tác
     * CreatedBy: Bien (03/05/2023)
     */
    btnDeletedeleteMissionallowanceList() {
      this.lableDialog = this.$t("CONTENTDIALOG.DELETES");
      this.diy.showDialog();
      this.selectedListIds = this.selectedList.map(
        (object) => object.MissionallowanceId
      );

      console.log(this.selectedListIds);
    },
    /**
     * Hàm thực hiện khi click icon xóa
     * CreatedBy: Bien (03/05/2023)
     */
    btnDeleteBusiness(id) {
      this.lableDialog = this.$t("CONTENTDIALOG.DELETE");
      this.diy.showDialog();
      this.businessId = id;
    },
    /**
     * Hàm thực hiện khi click icon sửa
     * CreatedBy: Bien (03/05/2023)
     */
    btnEditBusiness(business) {
      console.log(business.MissionallowanceId);
      this.businessDetailId = business.MissionallowanceId;
      this.diy.showBusinessDetail();
      this.diy.showBusinessEdit();
      this.labeBusinessDetail = this.$t("TITLEFORM.UPDATE");
      this.isEditBusiness = true;
    },
    /**
     * API Xóa 1 đơn công tác
     * @param {Đường dẫn API} baseUrl
     * @param {Id đơn công tác muốn xóa} id
     * CreatedBy: Bien (03/05/2023)
     */
    async deleteBusiness() {
      const response = await baseApi.delete(
        "Missionallowances/",
        this.businessId
      );

      console.log(response);

      if (response.IsSuccess) {
        this.labelNotify = this.$t("NOTIFY.DELETE");
        this.diy.showNotify();
        this.getPaging(1, this.pageSize, "Missionallowances/");
        this.diy.clearDialog();
      }
    },
    /**
     * Hàm lấy thông tin được chọn theo id
     * @param {Id được chọn} id
     * CreaetedBy: Bien (28/04/2023)
     */
    onClickRow(id) {
      this.businessDetailId = id.MissionallowanceId;
      this.diy.showBusinessDetail();
      this.diy.clearBusinessEdit();
      this.diy.clearIsAddBussiness();
      this.labeBusinessDetail = this.$t("TITLEFORM.DETAIL");
    },
    /**
     * Hàm kiểm tra lấy danh sách nhân viên
     * @param {Đường dẫn API} baseUrl
     * CreatedBy: Bien (28/04/2023)
     */
    async getEmployees(baseUrl) {
      const response = await baseApi.getAll(baseUrl);

      if (response.Data) {
        this.employees = response.Data;
      }
    },

    /**
     * Hàm load lại trang đơn công tác
     * CreatedBy: Bien (27/04/2023)
     */
    btnReFresh() {
      this.getPaging(1, this.pageSize, "Missionallowances/");
    },
    /**
     * Hàm tìm kiếm theo tên và mã nhân viên
     * CreatedBy: Bien (27/04/2023)
     */
    searchBusiness: _.debounce(function () {
      this.search();
    }, 500),

    /**
     * Hàm tìm kiếm nhân viên
     * @param {Nội dung muốn tìm kiếm} value
     * CreatedBy: Bien (19/1/2023)
     */
    async search() {
      try {
        let me = this;
        // Nhận dữ liệu khi tìm kiếm
        await this.getPaging(1, me.pageSize, "Missionallowances/");
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm bỏ chọn danh sách đơn công tác
     * CreatedBy: Bien (24/04/2023)
     */
    btnUnselectedList() {
      /* eslint-disable */
      // debugger;
      this.diy.showSearchBusiness();
      this.isShowSelected = false;
      this.selectedList = [];
    },

    /**
     * Hàm thêm nhân viên vào danh sách được chọn
     * @param {Danh sách chọn} selectedRows
     * CreatedBy: Bien (24/04/2023)
     */
    selectAll(selectedRows) {
      /* eslint-disable */
      debugger;

      this.selectedList = selectedRows;

      if (this.selectedList.length > 0) {
        this.diy.clearSearchBusiness();
      } else {
        this.diy.showSearchBusiness();
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

        this.getPaging(this.indexPage, this.pageSize, "Missionallowances/");
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

        this.getPaging(this.indexPage, this.pageSize, "Missionallowances/");
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
      this.getPaging(1, this.pageSize, "Missionallowances/");
    },
    /**
     * Hàm set giá trị trạng thái lọc trang
     * @param {Trạng thái muốn lọc} value
     * CreatedBy: Bien (05/05/2023)
     */
    setStatus(value) {
      this.statusKey = value;

      this.getPaging(1, this.pageSize, "Missionallowances/");
    },
    /**
     * Hàm lọc theo đơn vị
     * @param {Đơn vị muốn lọc} value
     * CreatedBy: Bien (05/05/2023)
     */
    getMisaCode(value) {
      this.misaCode = value;
      this.getPaging(1, this.pageSize, "Missionallowances/");
    },
    /**
     * Hàm lấy danh sách nhân viên
     * CreatedBy: Bien (23/04/2023)
     */
    async getPaging(pageNumber, pageSize, baseUrl) {
      try {
        this.diy.showLoading();

        // Nhận dữ liệu khi tìm kiếm
        const response = await baseApi.getPaging(
          pageNumber,
          pageSize,
          baseUrl,
          this.textSearch,
          this.statusKey,
          this.misaCode
        );
        this.indexPage = pageNumber;
        this.employeesBusiness = response.Data;
        this.totalPage = response.TotalPage;
        this.totalRecord = response.TotalRecord;
        this.diy.clearLoading();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm hiển thị chức năng tùy chỉnh
     * CreatedBy: Bien (24/04/2023)
     */
    toggleEditColumn() {
      this.isShowEditColumn = !this.isShowEditColumn;
    },
    /**
     * Vị trí xuất hiện của form điều chỉnh cột
     * CreatedBy: Bien (20/04/2023)
     */
    btnShowEditColumn(event) {
      this.positionX = event.clientX;
      this.positionY = event.clientY;
      console.log(this.positionX + "y" + this.positionY);
      this.isShowEditColumn = !this.isShowEditColumn;
    },
    /**
     * Hàm ẩn hiện form chọn cách lọc nâng cao
     * CreatedBy: Bien (20/04/2023)
     */
    toggleBoxHighFilter() {
      this.isShowBoxHighFilter = !this.isShowBoxHighFilter;
    },
    /**
     * Hàm ẩn hiện form lọc nâng cao
     * CreatedBy: Bien (20/04/2023)
     */
    toggleListFilter() {
      this.isShowListFilter = !this.isShowListFilter;
    },
    /**
     * Tìm kiếm danh sách lọc nâng cao
     * CreatedBy: Bien (19/04/2023)
     */
    searchHighFilter() {
      var me = this;
      // Tìm item tướng ứng với modelValue
      this.dataSearchFilter = this.dataGridEmployee.filter((item) =>
        item.caption
          .toLowerCase()
          .includes(me.textSearchHighFilter.toLowerCase())
      );
    },
    /**
     * Hàm chuyển sang form thêm mới
     * CreatedBy: Bien (17/04/2023)
     */
    btnAddEmployee() {
      this.businessDetailId = null;
      this.labeBusinessDetail = this.$t("TITLEFORM.ADD");
      this.diy.showBusinessDetail();
      this.diy.showBusinessEdit();
      this.diy.showisAddBussiness();
    },
    /**
     * Hàm show danh sách status
     * CreatedBy: Bien (15/04/2023)
     */
    toggleStatus() {
      this.isShowStatus = !this.isShowStatus;
    },
    /**
     * Hàm show danh sách status
     * CreatedBy: Bien (15/04/2023)
     */
    togglePageSize() {
      this.isShowPagesize = !this.isShowPagesize;
    },
  },
  computed: {
    /**
     * Hàm set vị trị hiển thị danh sách chức năng tùy chỉnh cột
     * CreatedBy: Bien (20/04/2023)
     * */
    positionEditColumn() {
      return {
        top: `calc(${this.positionY}px + 30px)`,
        left: `calc(${this.positionX}px - 270px)`,
      };
    },
  },
  watch: {
    /**
     * Thay đổi cột trong bảng đơn khi lưu tùy chỉnh cột
     * @param {Gía trị có thay đổi cột hay không} newValue 
     * CreatedBy: Bien (09/05/2023)
     */
    isShowEditColumn:function(newValue){
      if(!newValue){
        this.businessListKey += 1;
      }
    },
    /**
     * Hàm lắng nghe sự thay đổi checkall
     * CreatedBy: Bien (18/1/2023)
     */
    selectedList: function () {
      /* eslint-disable */
      // debugger
      if (this.selectedList.length > 0) {
        this.isShowSelected = true;
      } else {
        this.isShowSelected = false;
      }
    },
  },
  data() {
    return {
      // Hiển thị khi chọn nhiều
      // isSelectList:true,

      // Lọc theo đơn vị
      misaCode: "",

      // Trạng thái muốn lọc
      statusKey: 0,

      // Có phải chức năng xóa hay không
      isEditBusiness: null,

      // Danh sách id muốn xóa
      selectedListIds: [],

      // Hủy chọn tất cả
      isShowSelected: true,

      // Danh sách đơn công tác được chọn
      selectedList: [],

      // Thông báo kết quả thực hiện
      labelNotify: null,

      // Id đơn công tác
      businessId: null,

      // Nội dung thông báo
      lableDialog: null,

      // Tiêu đề đơn chi tiết
      labeBusinessDetail: null,

      // Không cho chọn combobox
      isDisableCombobox: false,

      // danh sách nhân viên
      employees: [],

      // Id đơn công tác
      businessDetailId: null,

      // Số bản ghi đầu
      startPage: 1,

      // Số bản ghi cuối
      endPage: 50,

      // Hiển thị tùy chỉnh cột
      isShowEditColumn: false,

      // Hiển thị chức năng lọc
      isShowBoxHighFilter: false,

      // Gía trị muốn lọc
      textFilter: null,

      // Hiển thị form lọc nâng cao
      isShowListFilter: false,

      // Hiển thị bộ lọc nâng cao
      isShowHighFilter: false,

      // Hiển thị danh sách tất cả đơn vị
      isShowDepartment: false,

      // Nội dung muốn tìm kiếm
      textSearch: "",

      // Tổng số trang
      totalPage: null,

      // Tổng số bản ghi
      totalRecord: null,

      // Số trang hiện tại
      indexPage: 1,

      // Kích thước trang
      pageSize: 50,

      // Nội dung tìm kiếm lọc nâng cao
      textSearchHighFilter: null,

      // Hiển thị danh sách trạng thái
      isShowStatus: false,

      // Hiển thị danh sách trạng thái
      isShowPagesize: false,

      // Danh sách tìm kiếm lọc nâng cao
      dataSearchFilter: {},

      businessListKey:0,
      // Danh sách tiêu đề bảng đơn
      dataGridEmployee: [],

      // Danh sách tiêu đề bảng nhân viên
      dataGridBussiness: [
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.EMPLOYEECODE"),
          dataField: "EmployeeCode",
          fixed: true,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.EMPLOYEE"),
          dataField: "FullName",
          fixed: true,
          dataType: "string",
          width: "200",
          cellTemplate: "cell-name",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.POSITIONNAME"),
          dataField: "PositionName",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.DEPARTMENTNAME"),
          dataField: "DepartmentName",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.REQUESDATE"),
          dataField: "RequestDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:MM",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.FORMDATE"),
          dataField: "FromDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:MM",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.TODATE"),
          dataField: "ToDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:MM",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.LEAVEDAY"),
          dataField: "LeaveDay",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.LOCATION"),
          dataField: "Location",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.PURPOSE"),
          dataField: "Purpose",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.REQUEST"),
          dataField: "Request",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.SUPPORT"),
          dataField: "SupportNames",
          fixed: false,
          dataType: "string",
          width: "300",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.APPROVAL"),
          dataField: "ApprovalNames",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.RELATIONSHIP"),
          dataField: "RelationShipNames",
          fixed: false,
          dataType: "string",
          width: "300",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.NOTES"),
          dataField: "Notes",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: this.$t("BUSINESSDETAIL.TITLEFORM.STATUS"),
          dataField: "StatusName",
          fixed: false,
          dataType: "string",
          cellTemplate: "cell-status",
          visible: true,
        },
        {
          type: "buttons",
          fixed: true,
          buttons: [
            {
              name: "Edit",
              text: "Edit",
              icon: "edit",
              onClick: (e) => {
                this.btnEditBusiness(e.row.data);
              },
            },
            {
              name: "Delete",
              text: "Delete",
              icon: "trash",
              onClick: (e) => {
                this.btnDeleteBusiness(e.row.data.MissionallowanceId);
              },
            },
          ],
          visible: true,
        },
      ],

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

      // Khai báo mảng số lượng bản ghi trên 1 trang
      status: [
        {
          key: 0,
          value: this.$t('STATUSNAME.ALL'),
        },
        {
          key: 1,
          value: this.$t('STATUSNAME.PENDING'),
        },
        {
          key: 2,
          value: this.$t('STATUSNAME.APPROVED'),
        },
        {
          key: 3,
          value: this.$t('STATUSNAME.REFUSE'),
        },
      ],

      // Danh sách nhân viên
      employeesBusiness: [],

      // Danh sách chức năng lọc nâng cao
      listFilter: [
        {
          key: 0,
          value: "Chứa",
        },
        {
          key: 1,
          value: "Không chứa",
        },
        {
          key: 2,
          value: "Bằng",
        },
        {
          key: 3,
          value: "Bắt đầu bằng",
        },
        {
          key: 4,
          value: "Kết thúc bằng",
        },
        {
          key: 5,
          value: "Trống",
        },
        {
          key: 6,
          value: "Không trống",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url(./business.css);
</style>
