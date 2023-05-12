<template>
  <div class="nav">
    <div class="nav-left">
      <div class="icon icon-nav"></div>
      <div class="icon-timekeeping">
        <img
          class="logogo"
          src="../assets/images/logo-cham-cong.svg"
          height="32px"
          width="32px"
          alt="Logo"
        />
        <span class="label-timekeeping">{{ $t("THENAV.APP") }}</span>
      </div>
    </div>
    <div class="nav-center">
      <div class="title-nav">{{ $t("THENAV.OVERVIEW") }}</div>
      <div class="title-nav" @click="this.diy.toggleSubnavTimekeeping()">
        {{ $t("THENAV.APP") }}
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavTimekeeping">
          <div class="item-nav">{{ $t("THENAV.TIMEKEEPING1") }}</div>
          <div class="item-nav">{{ $t("THENAV.TIMEKEEPING2") }}</div>
          <div class="item-nav">{{ $t("THENAV.TIMEKEEPING3") }}</div>
        </div>
      </div>
      <div class="title-nav" @click="this.diy.toggleSubnavShift()">
        {{ $t("THENAV.SHIFTWORK") }}
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavShift">
          <div class="item-nav">{{ $t("THENAV.SHIFTWORK1") }}</div>
          <div class="item-nav">{{ $t("THENAV.SHIFTWORK2") }}</div>
          <div class="item-nav">{{ $t("THENAV.SHIFTWORK") }}</div>
        </div>
      </div>
      <div
        class="title-nav"
        style="border-bottom: 5px solid #ec5504"
        @click="this.diy.toggleSubnavOrder()"
      >
        <span style="font-weight: 600"> {{ $t("THENAV.ORDER") }} </span>
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavOrder">
          <div class="item-nav">{{ $t("THENAV.ORDER1") }}</div>
          <div class="item-nav">{{ $t("THENAV.ORDER2") }}</div>
          <div class="item-nav">{{ $t("THENAV.ORDER3") }}</div>
          <div class="item-nav">{{ $t("THENAV.ORDER4") }}</div>
          <div class="item-nav">{{ $t("THENAV.ORDER5") }}</div>
          <div class="item-nav" style="border-bottom: 1px solid #e7e7e7">
            {{ $t("THENAV.ORDER6") }}
          </div>
          <div class="item-nav">{{ $t("THENAV.ORDER7") }}</div>
          <div class="item-nav">{{ $t("THENAV.ORDER8") }}</div>
          <div class="item-nav">{{ $t("THENAV.ORDER9") }}</div>
        </div>
      </div>
      <div class="title-nav" @click="this.diy.toggleSubnavReport()">
        {{ $t("THENAV.REPORT") }}
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavReport">
          <div class="item-nav">{{ $t("THENAV.REPORT1") }}</div>
          <div class="item-nav">{{ $t("THENAV.REPORT2") }}</div>
          <div class="item-nav">{{ $t("THENAV.REPORT3") }}</div>
          <div class="item-nav">{{ $t("THENAV.REPORT4") }}</div>
          <div class="item-nav">{{ $t("THENAV.REPORT5") }}</div>
          <div class="item-nav" style="border-bottom: 1px solid #e7e7e7">
            {{ $t("THENAV.REPORT6") }}
          </div>
          <div class="item-nav">
            {{ $t("THENAV.REPORT7") }}
          </div>
        </div>
      </div>
      <div class="title-nav">{{ $t("THENAV.SETTING") }}</div>
    </div>
    <div class="nav-right">
      <div class="icon icon-notify"></div>
      <div class="icon icon-help"></div>
      <div class="icon icon-other"></div>
      <div class="logo-user" @click="this.diy.toggleLaguage()">BP</div>
      <div
        class="edit-column custom-user"
        id="high-filter"
        v-if="this.diy.state.isLaguage"
      >
        <div class="user-avatar">
          <div class="avatar-user-user">BP</div>
        </div>
        <div class="user-name">{{ $t("THENAV.NAMEUSER") }}</div>
        <div class="user-game">Pvb0204@gmail.com</div>
        <div class="user-password col-user">
          <div class="icon-password">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#686c7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-key"
            >
              <path
                d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
              ></path>
            </svg>
          </div>
          <div class="text-password">{{ $t("THENAV.PASSWORD") }}</div>
        </div>
        <div class="user-accout col-user">
          <div class="icon-accout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#686c7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="text-accout">{{ $t("THENAV.SETACCOUNT") }}</div>
        </div>
        <div class="user-security col-user">
          <div class="icon-security">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#686c7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-shield"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="text-security">{{ $t("THENAV.SETSECURITY") }}</div>
        </div>
        <div class="user-point col-user">
          <div class="icon-point">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#686c7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-gift"
            >
              <polyline points="20 12 20 22 4 22 4 12"></polyline>
              <rect x="2" y="7" width="20" height="5"></rect>
              <line x1="12" y1="22" x2="12" y2="7"></line>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
          </div>
          <div class="text-point">{{ $t("THENAV.POINT") }}</div>
        </div>
        <div class="user-language col-user">
          <div class="icon-language"></div>
          <div class="text-language">
            {{ $t("THENAV.LANGUAGE") }}:
            <m-dropdown
              id="pagination-size"
              :entity="listLaguage"
              :valueDefault="valueDefault"
              :isShow="isLaguage"
              @click="toggleLaguage"
              @valueItem="setLaguage"
              customDropdow="custom-dropdown-language"
            >
            </m-dropdown>
          </div>
        </div>
        <div class="log-out col-user">
          <div class="icon-logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#686c7b"
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
          <div class="text-logut">{{ $t("THENAV.LOGOUT") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["diy"],
  name: "TheNav",
  components: {},
  created() {
    if (JSON.parse(localStorage.getItem("language")) != null) {
      this.valueDefault = JSON.parse(localStorage.getItem("language"));
      this.$i18n.locale = this.valueDefault;
    } else {
      this.setLocalStorage(this.valueDefault);
      this.$i18n.locale = this.valueDefault;
    }
  },
  methods: {
    /**
     * Hàm lưu biến trên localStorage
     * @param {Đối tượng muốn lưu} listColumn
     * CreatedBy: Bien (09/05/2023)
     */
    async setLocalStorage(listColumn) {
      await localStorage.setItem("language", JSON.stringify(listColumn));
    },
    /**
     * Hiển thị chuyển đổi ngôn ngữ
     * CreatedBy: Bien (08/05/2023)
     */
    toggleLaguage() {
      this.isLaguage = !this.isLaguage;
    },
    /**
     * Hàm set giá trị ngôn ngữ
     * @param {Ngôn ngữ muốn chọn} value
     * CreatedBy: Bien (05/05/2023)
     */
    setLaguage(value) {
      this.valueDefault = value;
      this.$i18n.locale = value;
      this.setLocalStorage(this.valueDefault);
      if (value == "vi") {
        localStorage.setItem(
          "dataGridEmployee",
          JSON.stringify(this.dataGridBussiness)
        );
      } else {
        localStorage.setItem(
          "dataGridEmployee",
          JSON.stringify(this.dataGridBussinessEN)
        );
      }

      this.diy.clearLaguage();
    },
  },
  watch: {
    /**
     * Lắng nghe sự thay đổi ngôn ngữ để render lại giao diện
     * @param {Gía trị mới của biến} neweValue
     * CreatedBy: Bien (09/05/2023)
     */
    isLaguage: function (neweValue) {
      if (!neweValue) {
        this.$parent.appKey += 1;
      }
    },
  },
  data() {
    return {
      // Gía trị ngôn ngữ muốn chuyển
      valueDefault: "vi",

      // Hiển thị chuyển ngôn ngữ
      isLaguage: false,

      // Danh sách các loại ngôn ngữ
      listLaguage: [
        {
          key: "vi",
          value: "Việt Nam",
        },
        {
          key: "en",
          value: "English",
        },
      ],
      dataGridBussiness: [
        {
          caption: "Mã nhân viên",
          dataField: "EmployeeCode",
          fixed: true,
          dataType: "string",
          visible: true,
          width: "120",
        },
        {
          caption: "Người đề nghị",
          dataField: "FullName",
          fixed: true,
          dataType: "string",
          width: "200",
          cellTemplate: "cell-name",
          visible: true,
        },
        {
          caption: "Vị trí công việc",
          dataField: "PositionName",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Đơn vị công tác",
          dataField: "DepartmentName",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Ngày đề nghị",
          dataField: "RequestDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:mm",
          visible: true,
          width: "150",
          alignment: "center",
        },
        {
          caption: "Ngày đi",
          dataField: "FromDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:mm",
          visible: true,
          width: "150",
          alignment: "center",
        },
        {
          caption: "Ngày về",
          dataField: "ToDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:mm",
          visible: true,
          width: "150",
          alignment: "center",
        },
        {
          caption: "Số ngày đi công tác",
          dataField: "LeaveDay",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: "Địa điểm công tác",
          dataField: "Location",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Lý do công tác",
          dataField: "Purpose",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Yêu cầu hỗ trợ",
          dataField: "Request",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Người hỗ trợ",
          dataField: "SupportNames",
          fixed: false,
          dataType: "string",
          width: "300",
          visible: true,
        },
        {
          caption: "Người duyệt",
          dataField: "ApprovalNames",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Người liên quan",
          dataField: "RelationShipNames",
          fixed: false,
          dataType: "string",
          width: "300",
          visible: true,
        },
        {
          caption: "Ghi chú",
          dataField: "Notes",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "100",
        },
        {
          caption: "Trạng thái",
          dataField: "StatusName",
          fixed: false,
          dataType: "string",
          cellTemplate: "cell-status",
          visible: true,
          width: "150",
        },
        {
          width: "10",
          fixed: true,
          cellTemplate: "cell-function",
          visible: true,
        },
      ],
      // // Danh sách tiêu đề bảng nhân viên
      // dataGridBussiness: [
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.EMPLOYEECODE"),
      //     dataField: "EmployeeCode",
      //     fixed: true,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.EMPLOYEE"),
      //     dataField: "FullName",
      //     fixed: true,
      //     dataType: "string",
      //     width: "200",
      //     cellTemplate: "cell-name",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.POSITIONNAME"),
      //     dataField: "PositionName",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.DEPARTMENTNAME"),
      //     dataField: "DepartmentName",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.REQUESDATE"),
      //     dataField: "RequestDate",
      //     fixed: false,
      //     dataType: "date",
      //     format: "dd/MM/yyyy hh:MM",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.FORMDATE"),
      //     dataField: "FromDate",
      //     fixed: false,
      //     dataType: "date",
      //     format: "dd/MM/yyyy hh:MM",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.TODATE"),
      //     dataField: "ToDate",
      //     fixed: false,
      //     dataType: "date",
      //     format: "dd/MM/yyyy hh:MM",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.LEAVEDAY"),
      //     dataField: "LeaveDay",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.LOCATION"),
      //     dataField: "Location",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.PURPOSE"),
      //     dataField: "Purpose",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.REQUEST"),
      //     dataField: "Request",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.SUPPORT"),
      //     dataField: "SupportNames",
      //     fixed: false,
      //     dataType: "string",
      //     width: "300",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.APPROVAL"),
      //     dataField: "ApprovalNames",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.RELATIONSHIP"),
      //     dataField: "RelationShipNames",
      //     fixed: false,
      //     dataType: "string",
      //     width: "300",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.NOTES"),
      //     dataField: "Notes",
      //     fixed: false,
      //     dataType: "string",
      //     visible: true,
      //   },
      //   {
      //     caption: this.$t("BUSINESSDETAIL.TITLEFORM.STATUS"),
      //     dataField: "StatusName",
      //     fixed: false,
      //     dataType: "string",
      //     cellTemplate: "cell-status",
      //     visible: true,
      //   },
      //   {
      //     fixed: true,
      //     cellTemplate: "cell-function",
      //     visible: true,
      //   },
      // ],

      dataGridBussinessEN: [
        {
          caption: "Employee code",
          dataField: "EmployeeCode",
          fixed: true,
          dataType: "string",
          visible: true,
          width: "120",
        },
        {
          caption: "Recommender",
          dataField: "FullName",
          fixed: true,
          dataType: "string",
          width: "200",
          cellTemplate: "cell-name",
          visible: true,
        },
        {
          caption: "Job position",
          dataField: "PositionName",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Working unit",
          dataField: "DepartmentName",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Recommended date",
          dataField: "RequestDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:mm",
          visible: true,
          width: "150",
          alignment: "center",
        },
        {
          caption: "Departure date",
          dataField: "FromDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:mm",
          visible: true,
          width: "150",
          alignment: "center",
        },
        {
          caption: "Date of return",
          dataField: "ToDate",
          fixed: false,
          dataType: "date",
          format: "dd/MM/yyyy hh:mm",
          visible: true,
          width: "150",
          alignment: "center",
        },
        {
          caption: "Number of business days",
          dataField: "LeaveDay",
          fixed: false,
          dataType: "string",
          visible: true,
        },
        {
          caption: "Working place",
          dataField: "Location",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Reason for work",
          dataField: "Purpose",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Request for support",
          dataField: "Request",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Supporter",
          dataField: "SupportNames",
          fixed: false,
          dataType: "string",
          width: "300",
          visible: true,
        },
        {
          caption: "Browser",
          dataField: "ApprovalNames",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "150",
        },
        {
          caption: "Related person",
          dataField: "RelationShipNames",
          fixed: false,
          dataType: "string",
          width: "300",
          visible: true,
        },
        {
          caption: "Note",
          dataField: "Notes",
          fixed: false,
          dataType: "string",
          visible: true,
          width: "100",
        },
        {
          caption: "Status",
          dataField: "StatusName",
          fixed: false,
          dataType: "string",
          cellTemplate: "cell-status",
          visible: true,
          width: "150",
        },
        {
          width: "10",
          fixed: true,
          cellTemplate: "cell-function",
          visible: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url(../css/layout/nav.css);
</style>
