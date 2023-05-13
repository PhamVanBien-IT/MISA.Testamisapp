<template>
  <div class="content-top">
    <div class="tittle-content-top">
      <div class="icon" style="margin-top: 5px" @click="btnCancelAddEmployee">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#666666"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </div>
      {{ this.$parent.labeBusinessDetail }}
    </div>
    <div class="add-content-top" v-if="this.diy.state.isAddBussiness">
      <m-button
        class="btn-save-business"
        :label="$t('BUTTON.SAVE')"
        @click="btnSaveBusiness"
      ></m-button>
      <m-button
        class="btn-cancel"
        :label="$t('BUTTON.CANCEL')"
        @click="btnCancelAddEmployee"
      ></m-button>
    </div>
    <div class="add-content-top" v-else>
      <m-button
        class="btn-save-business"
        label="Sửa"
        @click="btnBusinessEdit"
      ></m-button>
    </div>
  </div>
  <div class="content-detail-center" v-if="!isLoadData">
    <div class="content-detail-center-employee">
      <div class="content-detail-center-top">
        <div class="content-detail-center-top-left">
          <div class="proponent">
            <m-combobox
              id="cbxSupplier"
              :title="$t('BUSINESSDETAIL.TITLEFORM.EMPLOYEE')"
              propName="FullName"
              propValue="EmployeeId"
              propCode="EmployeeCode"
              propPositionName="PositionName"
              v-model="business.EmployeeId"
              tabindex="1"
              :ref="'EmployeeId'"
              :name="'EmployeeId'"
              :isShowCombobox="isShowProponents"
              required="*"
              :labelValidate="validateList[`EmployeeId`].labelError"
              :isValidate="validateList[`EmployeeId`].isStatus"
              :disabled="isEdit"
              :entity="this.$parent.employees"
              v-if="this.diy.state.isBusinessEdit"
            ></m-combobox>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                Người đề nghị<sup style="color: red">*</sup>
              </div>
              <div class="combobox-value">
                {{ business.FullName }}
              </div>
            </div>
          </div>
          <div class="department">
            <m-input-text
              type="text"
              class="text-form"
              :label="$t('BUSINESSDETAIL.TITLEFORM.DEPARTMENTNAME')"
              v-model="business.DepartmentName"
              :disabled="true"
              v-if="this.diy.state.isBusinessEdit"
            >
            </m-input-text>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.DEPARTMENTNAME") }}
              </div>
              <div class="combobox-value">
                {{ business.DepartmentName }}
              </div>
            </div>
          </div>
          <div class="suggested-date">
            <m-datepicker
              :label="$t('BUSINESSDETAIL.TITLEFORM.REQUESDATE')"
              tabindex="2"
              :name="'RequestDate'"
              required="*"
              v-model="business.RequestDate"
              :labelValidate="this.validateList[`RequestDate`].labelError"
              :isValidate="this.validateList[`RequestDate`].isStatus"
              v-if="this.diy.state.isBusinessEdit"
            ></m-datepicker>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.REQUESDATE")
                }}<sup style="color: red">*</sup>
              </div>
              <div class="combobox-value">
                {{ this.$MISACommon.formatDate(business.RequestDate) }}
              </div>
            </div>
          </div>
          <div class="out-date">
            <m-datepicker
              :label="$t('BUSINESSDETAIL.TITLEFORM.FORMDATE')"
              tabindex="3"
              :name="'FromDate'"
              required="*"
              v-model="business.FromDate"
              :labelValidate="this.validateList[`FromDate`].labelError"
              :isValidate="this.validateList[`FromDate`].isStatus"
              v-if="this.diy.state.isBusinessEdit"
            ></m-datepicker>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.FORMDATE")
                }}<sup style="color: red">*</sup>
              </div>
              <div class="combobox-value">
                {{ this.$MISACommon.formatDate(business.FromDate) }}
              </div>
            </div>
          </div>
          <div class="comeback-date">
            <m-datepicker
              tabindex="4"
              :label="$t('BUSINESSDETAIL.TITLEFORM.TODATE')"
              required="*"
              :name="'ToDate'"
              v-model="business.ToDate"
              :labelValidate="this.validateList[`ToDate`].labelError"
              :isValidate="this.validateList[`ToDate`].isStatus"
              v-if="this.diy.state.isBusinessEdit"
            ></m-datepicker>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.TODATE")
                }}<sup style="color: red">*</sup>
              </div>
              <div class="combobox-value">
                {{ this.$MISACommon.formatDate(business.ToDate) }}
              </div>
            </div>
          </div>
          <div class="bussiness-day mg-t-7">
            <m-input-text
              type="number"
              tabindex="5"
              :label="$t('BUSINESSDETAIL.TITLEFORM.LEAVEDAY')"
              valueDefault="0"
              v-model="business.LeaveDay"
              :ref="'LeaveDay'"
              :name="'LeaveDay'"
              v-if="this.diy.state.isBusinessEdit"
            >
            </m-input-text>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.LEAVEDAY") }}
              </div>
              <div class="combobox-value">
                {{ business.LeaveDay }}
              </div>
            </div>
          </div>
          <div class="address mg-t-7">
            <m-input-text
              type="text"
              tabindex="6"
              :label="$t('BUSINESSDETAIL.TITLEFORM.LOCATION')"
              required="*"
              v-model="business.Location"
              :labelValidate="validateList[`Location`].labelError"
              :isValidate="validateList[`Location`].isStatus"
              :ref="'Location'"
              :name="'Location'"
              v-if="this.diy.state.isBusinessEdit"
            >
            </m-input-text>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.LOCATION")
                }}<sup style="color: red">*</sup>
              </div>
              <div class="combobox-value">
                {{ business.Location }}
              </div>
            </div>
          </div>
          <div class="reason-bussiness mg-t-7">
            <m-textarea
              tabindex="7"
              :label="$t('BUSINESSDETAIL.TITLEFORM.PURPOSE')"
              required="*"
              v-model="business.Purpose"
            >
            </m-textarea>
          </div>
        </div>
        <div class="content-detail-center-top-right">
          <div class="request-help">
            <m-textarea
              tabindex="8"
              :label="$t('BUSINESSDETAIL.TITLEFORM.REQUEST')"
              v-model="business.Request"
              v-if="this.diy.state.isBusinessEdit"
            >
            </m-textarea>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.REQUEST") }}
              </div>
              <div class="combobox-value">
                {{ business.Request }}
              </div>
            </div>
          </div>
          <div class="employee-support">
            <div class="icon-dx" v-if="this.diy.state.isBusinessEdit"></div>
            <div class="dx-field-label">
              {{ $t("BUSINESSDETAIL.TITLEFORM.SUPPORT") }}
            </div>
            <div class="dx-field-value">
              <DxTagBox
                id="dxSupportIds"
                :showSelectionControls="true"
                v-model:value="selectedSupportIds"
                :data-source="this.$parent.employees"
                :noDataText="$t('DATA.NULL')"
                value-expr="EmployeeId"
                display-expr="FullName"
                :search-enabled="true"
                placeholder=""
                tabindex="9"
                item-template="item"
                v-if="this.diy.state.isBusinessEdit"
              >
                <template #item="{ data }">
                  <m-custom-item-vue :item-data="data"></m-custom-item-vue>
                </template>
              </DxTagBox>
              <div class="base-combobox" v-else>
                <div
                  class="combobox-value"
                  style="width: 100%"
                  :title="business.SupportNames"
                >
                  {{ business.SupportNames }}
                </div>
              </div>
            </div>
          </div>
          <div class="mg-t-7 employee-censor">
            <m-combobox
              id="cbxEmployeeCensor"
              :title="$t('BUSINESSDETAIL.TITLEFORM.APPROVAL')"
              propName="FullName"
              propValue="EmployeeId"
              propCode="EmployeeCode"
              propPositionName="PositionName"
              tabindex="10"
              :ref="'ApprovalIds'"
              :name="'ApprovalIds'"
              :isShowCombobox="isShowProponents"
              required="*"
              v-model="business.ApprovalIds"
              :labelValidate="this.validateList[`ApprovalIds`].labelError"
              :isValidate="this.validateList[`ApprovalIds`].isStatus"
              :entity="this.$parent.employees"
              :valueDefault="business.ApprovalIds"
              v-if="this.diy.state.isBusinessEdit"
            ></m-combobox>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.APPROVAL")
                }}<sup style="color: red">*</sup>
              </div>
              <div class="combobox-value">
                {{ business.ApprovalNames }}
              </div>
            </div>
          </div>
          <div class="mg-t-7 employee-support">
            <div class="icon-dx" v-if="this.diy.state.isBusinessEdit"></div>
            <div class="dx-field-label">
              {{ $t("BUSINESSDETAIL.TITLEFORM.RELATIONSHIP") }}
            </div>
            <div class="dx-field-value">
              <DxTagBox
                v-model:value="selectedRelationShipIds"
                :data-source="this.$parent.employees"
                :showSelectionControls="true"
                value-expr="EmployeeId"
                display-expr="FullName"
                :search-enabled="true"
                :noDataText="$t('DATA.NULL')"
                placeholder=""
                tabindex="11"
                v-if="this.diy.state.isBusinessEdit"
              >
                <template #item="{ data }">
                  <m-custom-item-vue :item-data="data"></m-custom-item-vue>
                </template>
              </DxTagBox>
              <div class="base-combobox" v-else>
                <div
                  class="combobox-value"
                  style="width: 100%"
                  :title="business.RelationShipNames"
                >
                  {{ business.RelationShipNames }}
                </div>
              </div>
            </div>
          </div>
          <div class="mg-t-7">
            <m-combobox-v-4
              id="cbxStatus"
              :title="$t('BUSINESSDETAIL.TITLEFORM.STATUS')"
              propName="value"
              propValue="key"
              v-model="business.Status"
              tabindex="12"
              :ref="'Status'"
              :name="'Status'"
              :isShowCombobox="isShowProponents"
              required="*"
              :entity="status"
              :labelValidate="this.validateList[`Status`].labelError"
              :isValidate="this.validateList[`Status`].isStatus"
              v-if="this.diy.state.isBusinessEdit"
            >
            </m-combobox-v-4>
            <div class="base-combobox" v-else>
              <div class="title-cbb">
                {{ $t("BUSINESSDETAIL.TITLEFORM.STATUS")
                }}<sup style="color: red">*</sup>
              </div>
              <div class="combobox-value">
                <div
                  class="status-value"
                  :style="{
                    backgroundColor:
                      business.Status == this.$t('STATUSPENDING')
                        ? backgroundColors[0]
                        : business.Status == this.$t('STATUSAPPROVED')
                        ? backgroundColors[1]
                        : backgroundColors[2],
                    color:
                      business.Status == this.$t('STATUSPENDING')
                        ? colors[0]
                        : business.Status == this.$t('STATUSAPPROVED')
                        ? colors[1]
                        : colors[2],
                    border:
                      business.Status == this.$t('STATUSPENDING')
                        ? borders[0]
                        : business.Status == this.$t('STATUSAPPROVED')
                        ? borders[1]
                        : borders[2],
                  }"
                >
                  {{ business.StatusName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-detail-center-center">
        <div class="tittle-employee">
          <div class="tittle-epl">
            {{ $t("BUSINESSDETAIL.TITLETABLE") }}
            <div class="func-list-detail" v-if="isShowSelectedLength">
              <div class="select-row-length">
                {{ $t("BUSINESSFORM.SELECTLIST.SELECTED") }}
                <span style="font-weight: 600">{{
                  this.selectedList.length
                }}</span>
              </div>
              <div class="select-row-unselect"  style="color: #7ba3f6" @click="btnUnSelectEmployeeDetail">
                {{ $t("BUSINESSFORM.SELECTLIST.UNSELECTED") }}
              </div>
              <div
                class="select-row-unselect"
                @click="btnRemoveEmployeeDetail"
              >
                {{ $t("BUSINESSFORM.SELECTLIST.CLEAR") }}
              </div>
            
            </div>
            <!-- v-if="isShowSelectedLength" -->
          </div>
          <div
            class="add-epl-detail"
            v-if="this.diy.state.isBusinessEdit"
            @click="btnAddBusiness"
          >
            <div class="icon-add-detail" tabindex="13">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ec5504"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            {{ $t("BUSINESSDETAIL.ADDEMPLOYEE") }}
          </div>
        </div>
        <div class="list-employee">
          <m-data-grid
            :entity="employees"
            :dataGrid="dataGridEmployeeHeader"
            @selectedList="selectAll"
            :isShowSelectedRows="isShowSelectedLength"
            @Business="btnDeleteEmployeeMissionallowance"
          ></m-data-grid>
          <div class="total-epl">
            {{ $t("BUSINESSFORM.TOTALRECORD") }}
            <span style="font-weight: 600">{{
              this.employees.length || 0
            }}</span>
          </div>
        </div>
      </div>
      <div class="content-detail-center-footer"></div>
    </div>
    <div class="content-detail-center-note">
      <div class="content-detail-center-note-title">
        {{ $t("BUSINESSDETAIL.NOTES") }}
      </div>
      <div class="content-detail-center-note-content">
        <div class="emloyee-text-note">
          <div class="logo-user" style="margin-right: 25px">BP</div>
          <div class="input-note">
            <input
              type="text"
              class="text-form"
              :placeholder="$t('BUSINESSFORM.PLACEHOLDER.NOTES')"
            />
          </div>
        </div>
        <div class="cancel-note">
          {{ $t("BUSINESSDETAIL.ESC") }}
          <span style="color: #fe6000; font-weight: 600; font-weight: 600">{{
            $t("BUSINESSDETAIL.CANCEL")
          }}</span>
        </div>
        <div class="nav-note">
          <div class="all-note">{{ $t("BUSINESSDETAIL.ALL") }}</div>
          <div class="text-note">{{ $t("BUSINESSDETAIL.TEXTNOTE") }}</div>
          <div class="history-note">{{ $t("BUSINESSDETAIL.HISTORY") }}</div>
        </div>
        <div class="list-no"></div>
      </div>
    </div>
  </div>
  <BusinessForm
    v-if="diy.state.isFormBusiness"
    @employeesDetail="addEmployees"
  ></BusinessForm>
  <m-dialog
    :label="labelDialog"
    v-if="diy.state.isShowDialogDetail"
    @funcSave="btnSaveBusiness"
  ></m-dialog>
  <MDialogV3Vue
    :label="labelDialogDuplicate"
    v-if="diy.state.isShowDialogDuplicate"
    @funcSave="this.diy.clearDialogDuplicate()"
  >
  </MDialogV3Vue>
</template>
<script>
import DxTagBox from "devextreme-vue/tag-box";
import MButton from "@/components/button/MButton.vue";
import MCombobox from "@/components/combobox/MCombobox.vue";
import MComboboxV4 from "@/components/combobox/MComboboxV4.vue";
import MDatepicker from "@/components/datepicker/MDatepicker.vue";
import MTextarea from "@/components/input/MTextarea.vue";
import MDataGrid from "@/components/datagrid/MDataGrid.vue";
import BusinessForm from "./BusinessForm.vue";
import MCustomItemVue from "@/components/combobox/MCustomItem.vue";
import baseApi from "@/api/baseApi";
import employeeMissionallowancesApi from "@/api/employeeMissionallowancesApi";
import MDialog from "@/components/dialog/MDialog.vue";
import _ from "lodash";
import missionallowanceApi from "@/api/missionallowanceApi";
import MDialogV3Vue from "@/components/dialog/MDialogV3.vue";

export default {
  inject: ["diy"],
  name: "BusinessDetail",
  components: {
    MButton,
    MCombobox,
    MDatepicker,
    MTextarea,
    MDataGrid,
    BusinessForm,
    DxTagBox,
    MComboboxV4,
    MCustomItemVue,
    MDialog,
    MDialogV3Vue,
  },
  props: ["businessDetailId", "isEditBusiness"],
  async created() {
    /* eslint-disable */
    if (this.businessDetailId) {
      this.businessId = this.businessDetailId;
      this.isLoadData = true;
      await this.getBusinessById("Missionallowances/", this.businessId);
      this.isDisabled = true;
      this.isEdit = this.isEditBusiness;
    } else {
      this.business = {};
      this.isEdit = false;
    }

    this.getEmployeeCombobox(this.$parent.employees.length);

    this.getAddMissionallowanceToDay();
  },
  methods: {
    /**
     * Loại bỏ danh sách nhân viên đã chọn
     * 
     */
    btnUnSelectEmployeeDetail(){
      this.selectedList = []
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
     * Hàm thực hiện thêm nhân viên công tác
     * CreatedBy: Bien (07/05/2023)
     */
    btnAddBusiness() {
      this.diy.showFormBusiness();
      this.dataGridEmployeeHeader[4].visible = true;
    },
    /**
     * Loại bỏ danh sách nhân viên đi công tác đã chọn
     * CreatedBy: Bien (13/05/2023)
     */
    btnRemoveEmployeeDetail(){
        let selectedListIds = this.selectedList.map(
        (object) => object.EmployeeId
      );

      this.employees = this.employees.filter(item => !selectedListIds.includes(item.EmployeeId));

      this.business.EmployeeMissionallowances = this.employees
        .map((object) => object.EmployeeId)
        .join(",");
    },
    /**
     * Hàm xóa nhân viên đi công tác
     * @param {Nhân viên đi công tác muốn xóa} employee
     * CreatedBy: Bien (05/05/2023)
     */
    btnDeleteEmployeeMissionallowance(employee) {

      console.log(this.employees);

      const index = this.employees.findIndex(
        (item) => item.EmployeeId === employee.EmployeeId
      );

      if (index !== -1) {
        this.employees.splice(index, 1);
      }

      this.business.EmployeeMissionallowances = this.employees
        .map((object) => object.EmployeeId)
        .join(",");
    },
    /**
     * Hàm thực hiện khi click nút sửa
     * CreatedBy: Bien (04/05/2023)
     */
    btnBusinessEdit() {
      this.$parent.labeBusinessDetail = this.$t("TITLEFORM.UPDATE");
      this.diy.showBusinessEdit();
      this.diy.showisAddBussiness();
      this.isEdit = true;
    },
    /**
     * Hàm tìm kiếm theo tên và mã nhân viên
     * CreatedBy: Bien (27/04/2023)
     */
    searchEmployeeMissionallowances: _.debounce(function () {
      this.search();
    }, 500),

    /**
     * Hàm tìm kiếm nhân viên
     * @param {Nội dung muốn tìm kiếm} value
     * CreatedBy: Bien (19/1/2023)
     */
    async search() {
      try {
        // Nhận dữ liệu khi tìm kiếm
        this.getEmployeeMissionallowances(
          "EmployeeMissionallowances/",
          this.businessId
        );
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm thay đổi kích thước khi scroll
     * CreatedBy: Bien (30/04/2023)
     */
    handleScrollCombobox(e) {
      console.log(e.scrollOffset);
      this.numberEmp += this.numberEmp;
      this.getEmployeeCombobox(this.numberEmp);
    },
    /**
     * Hàm lấy danh sách nhân viên
     * CreatedBy: Bien (23/04/2023)
     */
    getEmployeeCombobox(numberEmployee) {
      for (let i = 0; i < numberEmployee; i++) {
        this.employeeList.push(this.$parent.employees[i].FullName);
      }
    },
    /**
     * Hàm lấy giá trị được chọn trong dxtagbox
     * CreatedBy: Bien (01/05/2023)
     */
    selectedDxtagbox() {
      if (this.selectedSupportIds) {
        // Chuyển mảng id thành chuỗi id
        this.business.SupportIds = this.selectedSupportIds.join(",");

        // Lấy tên tương ứng với id nhân viên
        this.business.SupportNames = this.$parent.employees
          .filter((item) => this.selectedSupportIds.includes(item.EmployeeId))
          .map((item) => item.FullName)
          .join(",");
      }
      if (this.selectedRelationShipIds) {
        // Chuyển mảng id thành chuỗi id
        this.business.RelationShipIds = this.selectedRelationShipIds.join(",");

        // Lấy tên tương ứng với id nhân viên
        this.business.RelationShipNames = this.$parent.employees
          .filter((item) =>
            this.selectedRelationShipIds.includes(item.EmployeeId)
          )
          .map((item) => item.FullName)
          .join(",");
      }

      if (this.business.ApprovalIds) {
        this.$parent.employees.map((object) =>
          object.EmployeeId == this.business.ApprovalIds
            ? (this.business.ApprovalNames = object.FullName)
            : ""
        );
      }

      if (this.business.Status) {
        this.status.map((object) =>
          object.key == this.business.Status
            ? (this.business.StatusName = object.value)
            : ""
        );
      }

      let employeeFind = this.$parent.employees.find(
        (item) => item.EmployeeId === this.business.EmployeeId
      );
      if (employeeFind != null) {
        this.business.DepartmentId = employeeFind.DepartmentId;
        this.business.DepartmentName = employeeFind.DepartmentName;
      }
    },
    /**
     * Hàm thêm đơn công tác
     * CreatedBy: Bien (25/04/2023)
     */
    btnSaveBusiness() {
      // Lấy giá trị dữ liệu ô tagbox
      this.selectedDxtagbox();

      this.validateBusiness();

      if (this.isValidate) {
        if (this.isEdit) {
          this.updateBusiness();
        } else {
          this.createdBusiness("Missionallowances/", this.business);
          this.employeeMissionallowances.EmployeeId =
            this.business.EmployeeMissionallowances;
        }
      }
    },
    /**
     * Hàm cập nhập đơn công tác
     * CreatedBy: Bien (05/05/2023)
     */
    async updateBusiness() {
      const response = await baseApi.update(
        "Missionallowances/",
        this.businessId,
        this.business
      );

      if (response.IsSuccess) {
        this.$parent.labelNotify = this.$t("NOTIFY.UPDATE");
        this.diy.showNotify();
        this.$parent.getPaging(1, this.$parent.pageSize, "Missionallowances/");
        this.diy.clearBusinessDetail();
      }
    },

    /**
     * Hàm kiểm tra giá trị không được để trống
     * @param {Tên trường muốn kiểm tra} nameInput
     * @param {Gía trị muốn kiểm tra} valueInput
     * @param {Trường thông báo lỗi} labelName
     * CreatedBy: Bien (27/04/202)
     */
    validateRequired(nameInput, valueInput, labelName) {
      if (valueInput) {
        this.validateList[nameInput].isStatus = false;
      } else {
        this.validateList[nameInput].isStatus = true;
        this.validateList[nameInput].labelError = this.$t(
          "ERRORVALIDATE.REQUIRED",
          { item: labelName }
        );
        this.isValidate = false;
      }
    },
   
    /**
     * Hàm lấy danh sách nhân viên đã thêm đơn ngày hôm nay
     * CreatedBy: Bien (12/05/2023)
     */
    async getAddMissionallowanceToDay() {
      const response = await missionallowanceApi.getAddMissionallowanceToDay();

      console.log(response);
      if (response.IsSuccess) {
        this.missionallowanceToDay = response.Data;
      }
    },
    /**
     * Hàm kiểm tra giá trị nhập vào của đơn công tác
     * CreatedBy: Bien (27/04/202)
     */
    validateBusiness() {
      this.isValidate = true;

      if (this.employees.length < 1) {
        this.diy.showDialogDuplicate();
        this.labelDialogDuplicate = this.$t("ERRORVALIDATE.EMPLOYEEDETAIL");
        this.isValidate = false;
      }

      this.validateRequired(
        "EmployeeId",
        this.business.EmployeeId,
        this.$t("BUSINESSDETAIL.TITLEFORM.EMPLOYEE")
      );

      this.validateRequired(
        "RequestDate",
        this.business.RequestDate,
        this.$t("BUSINESSDETAIL.TITLEFORM.REQUESDATE")
      );

      this.validateRequired(
        "FromDate",
        this.business.FromDate,
        this.$t("BUSINESSDETAIL.TITLEFORM.FORMDATE")
      );

      this.validateRequired(
        "ToDate",
        this.business.ToDate,
        this.$t("BUSINESSDETAIL.TITLEFORM.TODATE")
      );
      this.validateRequired(
        "Location",
        this.business.Location,
        this.$t("BUSINESSDETAIL.TITLEFORM.LOCATION")
      );
      this.validateRequired(
        "Purpose",
        this.business.Purpose,
        this.$t("BUSINESSDETAIL.TITLEFORM.PURPOSE")
      );
      this.validateRequired(
        "ApprovalIds",
        this.business.ApprovalIds,
        this.$t("BUSINESSDETAIL.TITLEFORM.APPROVAL")
      );
      this.validateRequired(
        "Status",
        this.business.Status,
        this.$t("BUSINESSDETAIL.TITLEFORM.STATUS")
      );

      if (!this.isEdit) {
        if (
          this.missionallowanceToDay &&
          this.missionallowanceToDay.indexOf(this.business.EmployeeId) !== -1
        ) {
          this.isValidate = false;
          this.labelDialogDuplicate = this.$t(
            "ERRORVALIDATE.DUPLICATEBUSSINESS"
          );
          this.diy.showDialogDuplicate();
        }
        if (
          this.business.FromDate &&
          this.business.ToDate &&
          this.business.FromDate > this.business.ToDate
        ) {
          this.validateList["ToDate"].isStatus = true;
          this.validateList["ToDate"].labelError = this.$t(
            "ERRORVALIDATE.FROMDATE"
          );
          this.isValidate = false;
        } else {
          this.validateList["ToDate"].isStatus = false;
        }
      }
    },
    /**
     * API thêm mới đơn công tác
     * @param {Đường dẫn} baseUrl
     * @param {Đối tượng đơn} business
     * CreaetedBy: Bien (26/04/2023)
     */
    async createdBusiness(baseUrl, business) {
      const response = await baseApi.createEntity(baseUrl, business);

      console.log(response);

      if (response.IsSuccess) {
        this.diy.clearBusinessDetail();
        this.$parent.labelNotify = this.$t("NOTIFY.ADD");
        this.diy.showNotify();
        this.$parent.getPaging(1, this.$parent.pageSize, "Missionallowances/");
      } else {
        this.handleErrorValidate(response);
      }
    },
    /**
     * Hàm handle lỗi validate khi gọi API
     * @param {Kết quả gọi API} res
     * CreatedBy: Bien (24/02/2023)
     */
    handleErrorValidate(res) {
      switch (res.response.status) {
        case this.$MISAEnum.STATUSCODE.OK:
          this.validateList[`isActive`] = false;
          break;
        case this.$MISAEnum.STATUSCODE.BADREQUEST:
          var moreInfo = res.response.data.MoreInfo;
          if (
            res.response.data.ErrorCode == this.$MISAEnum.ERRORCODE.VALIDATERROR
          ) {
            this.validateList[`isActive`] = true;
            if (this.validateList[`isActive`] && moreInfo) {
              moreInfo.forEach((item) => {
                this.validateList[`${item.Key}`].labelError = item.Value;
                this.validateList[`${item.Key}`].isStatus = true;
              });
            }
          }
          break;
        case this.$MISAEnum.STATUSCODE.INTERNALSERVER:
          if (
            res.response.data.errorCode == this.$MISAEnum.ERRORCODE.UNKNOWNERROR
          ) {
            this.$parent.labelNotify = this.$t("NOTIFY.INTERNALSERVER");
            this.diy.showNotify();
          }
          break;
        default:
          break;
      }
    },
    /**
     * Hàm lấy đơn công tác theo id
     * CreatedBy: Bien (24/04/2023)
     */
    async getBusinessById(baseUrl, id) {
      if (this.businessId) {
        // Nhận dữ liệu sau khi lấy nhân viên theo id
        const response = await baseApi.getById(baseUrl, id);

        console.log(response);

        if (response.IsSuccess) {
          this.business = response.Data[0];
          this.employeeMissionallowances =
            response.Data[0].EmployeeMissionallowances;
          this.getEmployeeMissionallowances(
            "EmployeeMissionallowances/",
            this.businessId
          );

          if (this.business.SupportIds) {
            this.business.SupportIds = this.business.SupportIds.split(",");
          } else {
            this.business.SupportIds = [];
          }

          if (this.business.RelationShipIds) {
            this.business.RelationShipIds =
              this.business.RelationShipIds.split(",");
          } else {
            this.business.RelationShipIds = [];
          }

          this.businessClone = { ...this.business };

          for (let i = 0; i < this.business.SupportIds?.length; i++) {
            this.selectedSupportIds.push(this.business.SupportIds[i]);
          }

          for (let i = 0; i < this.business.RelationShipIds?.length; i++) {
            this.selectedRelationShipIds.push(this.business.RelationShipIds[i]);
          }

          this.isLoadData = false;

          this.diy.clearLoading();
        }
      }
    },
    /**
     * Hàm cập nhật danh sách nhân viên đi công tác
     * @param {Danh sách nhân viên được chọn} list
     * CreatedBy: Bien (25/04/2023)
     */
    addEmployees(list) {
      this.employees = list;

      this.business.EmployeeMissionallowances = list
        .map((object) => object.EmployeeId)
        .join(",");
    },

    /**
     * Hàm lấy sanh sách nhân viên công tác
     * CreatedBy: Bien (28/04/2023)
     */
    async getEmployeeMissionallowances(baseUrl, id) {
      const response =
        await employeeMissionallowancesApi.getEmployeeMissionallowances(
          baseUrl,
          id
        );

      if (response != null) {
        this.employees = response.Data;
      }
    },
    /**
     * Hàm thực hiện khi click hủy thêm mới đơn công tác
     * CreatedBy: Bien (28/04/2023)
     */
    btnCancelAddEmployee() {
      this.$parent.selectedList = [];
      this.diy.showSearchBusiness();

      if (this.isBusinessClone) {
        this.diy.clearBusinessDetail();
        this.diy.clearBusinessEdit();
      } else {
        this.labelDialog = this.$t("CONTENTDIALOG.SAVE");
        this.diy.showDialogDetail();
      }
    },
  },
  watch: {
    /**
     * Kiểm tra sự thay đổi đơn công tác
     * CreatedBy: Bien (11/05/2023)
     */
    business: {
      handler(newValue) {
        this.businessClone.RequestDate = newValue.RequestDate;
        this.businessClone.FromDate = newValue.FromDate;
        this.businessClone.ToDate = newValue.ToDate;

        if (newValue && this.businessClone) {
          if (JSON.stringify(newValue) == JSON.stringify(this.businessClone)) {
            this.isBusinessClone = true;
          } else {
            this.isBusinessClone = false;
          }
        }
      },
      deep: true,
    },
    /**
     * Lắng nghe có phải sự kiện sửa
     * CreatedBy: Bien (05/05/2023)
     */
    isEdit: function (newValue) {
      if (newValue) {
        this.dataGridEmployeeHeader[4].visible = true;
      } else {
        this.dataGridEmployeeHeader[4].visible = false;
      }
    },
    /**
     * Hàm tìm kiếm nhân viên đi công tác tìm kiếm thay đổi
     * CreatedBy: Bien (18/1/2023)
     */
    textSearchEmployee: async function () {
      await this.searchEmployeeMissionallowances(
        this.textSearchEmployeeMissionallowances
      );
    },
  },
  data() {
    return {
      // Hiển thị số lượng nhân viên đã chọn
      isShowSelectedLength: false,

      // Nội dung thông báo
      labelDialogDuplicate: null,

      // Danh sách đơn công tác thêm hôm nay
      missionallowanceToDay: {},

      // Load dữ liệu
      isLoadData: false,

      // Hiển thị thông báo
      isShowDialog: false,

      // Nội dung thông báo
      labelDialog: "",

      // Khai báo biến theo dõi sự thay đổi của business
      isBusinessClone: false,

      // Biến đơn clone
      businessClone: {},

      // Random màu background
      backgroundColors: ["#ebe9fb", "#B9F8E4", "#fee8e7"],

      // Random màu chữ
      colors: ["#6153DF", "#11aa7a", "#ef292f"],

      // Random màu border
      borders: ["1px solid #6153DF", "1px solid #11aa7a", "1px solid #ef292f"],

      // Kiểm tra có phải form sửa hay không
      isEdit: null,

      // Danh sách nhân viên liên quan đã chọn
      selectedEmployeesRelationShipIds: [],

      // Danh sách nhân viên hỗ trợ đã chọn
      selectedEmployeesSupportIds: [],

      // Ngày hiện tại
      now: new Date(),

      selectedList: {},
      // Tìm kiếm nhân viên đi công tác
      textSearchEmployeeMissionallowances: null,

      // Danh sách nhân viên được chọn
      selectedSupportIds: [],

      // Danh sách nhân viên được chọn
      selectedRelationShipIds: [],

      // Số nhân viên muốn lấy
      numberEmp: 20,

      // Không cho chỉnh sửa
      isDisabled: null,

      // Kích thước nhân viên
      pageSize: 10,

      // Danh sách nhân viên tên nhân viên
      employeeList: [],

      // Dánh sách nhân viên đi công tác
      employeeMissionallowances: {},

      // Thông tin đơn công tác
      business: {},

      // Id đơn công tác
      businessId: null,

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

      // Danh sách id nhân viên
      employeesId: {},

      // Hiển thị combobox list
      isShowProponents: false,

      // Khai báo mảng số lượng bản ghi trên 1 trang
      status: [
        {
          key: 1,
          value: "Chờ duyệt",
        },
        {
          key: 2,
          value: "Đã duyệt",
        },
        {
          key: 3,
          value: "Từ chối",
        },
      ],

      // Danh sách bảng nhân viên
      dataGridEmployeeHeader: [
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
        {
          type: "buttons",
          buttons: [
            {
              name: "Edit",
              text: "Edit",
              icon: "close",
              onClick: (e) => {
                this.btnDeleteEmployeeMissionallowance(e);
              },
            },
          ],
          visible: false,
          cellTemplate: "cell-edit",
        },
      ],

      // Kiểm tra giá trị nhập vào
      isValidate: true,

      // Khai báo biến nhận giá trị lỗi validate
      validateList: {
        isActive: false,
        EmployeeId: {
          labelError: null,
          isStatus: false,
        },
        Location: {
          labelError: null,
          isStatus: false,
        },
        Purpose: {
          labelError: null,
          isStatus: false,
        },
        ApprovalIds: {
          labelError: null,
          isStatus: false,
        },
        Status: {
          labelError: null,
          isStatus: false,
        },
        FromDate: {
          labelError: null,
          isStatus: false,
        },
        RequestDate: {
          labelError: null,
          isStatus: false,
        },
        ToDate: {
          labelError: null,
          isStatus: false,
        },
      },
    };
  },
};
</script>

<style scoped>
@import url(./business.css);
.dx-datagrid .dx-link:first-child {
  color: red;
}
</style>
