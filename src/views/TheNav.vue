<template>
  <div class="nav">
    <div class="nav-left">
      <div class="icon icon-nav"></div>
      <div class="icon-timekeeping">
        <img
          src="../assets/images/logo-cham-cong.svg"
          height="32px"
          width="32px"
          alt="Logo"
        />
        <span class="label-timekeeping">{{ $t('THENAV.APP') }}</span>
      </div>
    </div>
    <div class="nav-center">
      <div class="title-nav">{{ $t('THENAV.OVERVIEW') }}</div>
      <div class="title-nav" @click="this.diy.toggleSubnavTimekeeping()">
        {{ $t('THENAV.APP') }}
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavTimekeeping">
          <div class="item-nav">{{ $t('THENAV.TIMEKEEPING1') }}</div>
          <div class="item-nav">{{ $t('THENAV.TIMEKEEPING2') }}</div>
          <div class="item-nav">{{ $t('THENAV.TIMEKEEPING3') }}</div>
        </div>
      </div>
      <div class="title-nav" @click="this.diy.toggleSubnavShift()">
        {{ $t('THENAV.SHIFTWORK') }}
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavShift">
          <div class="item-nav">{{ $t('THENAV.SHIFTWORK1') }}</div>
          <div class="item-nav">{{ $t('THENAV.SHIFTWORK2') }}</div>
          <div class="item-nav">{{ $t('THENAV.SHIFTWORK') }}</div>
        </div>
      </div>
      <div
        class="title-nav"
        style="border-bottom: 5px solid #ec5504"
        @click="this.diy.toggleSubnavOrder()"
      >
        <span style="font-weight: 600"> {{ $t('THENAV.ORDER') }} </span>
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavOrder">
          <div class="item-nav">{{ $t('THENAV.ORDER1') }}</div>
          <div class="item-nav">{{ $t('THENAV.ORDER2') }}</div>
          <div class="item-nav">{{ $t('THENAV.ORDER3') }}</div>
          <div class="item-nav">{{ $t('THENAV.ORDER4') }}</div>
          <div class="item-nav">{{ $t('THENAV.ORDER5') }}</div>
          <div class="item-nav" style="border-bottom: 1px solid #e7e7e7">
            {{ $t('THENAV.ORDER6') }}
          </div>
          <div class="item-nav">{{ $t('THENAV.ORDER7') }}</div>
          <div class="item-nav">{{ $t('THENAV.ORDER8') }}</div>
          <div class="item-nav">{{ $t('THENAV.ORDER9') }}</div>
        </div>
      </div>
      <div class="title-nav" @click="this.diy.toggleSubnavReport()">
        {{ $t('THENAV.REPORT') }}
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavReport">
          <div class="item-nav"> {{ $t('THENAV.REPORT1') }}</div>
          <div class="item-nav"> {{ $t('THENAV.REPORT2') }}</div>
          <div class="item-nav"> {{ $t('THENAV.REPORT3') }}</div>
          <div class="item-nav"> {{ $t('THENAV.REPORT4') }}</div>
          <div class="item-nav"> {{ $t('THENAV.REPORT5') }}</div>
          <div class="item-nav" style="border-bottom: 1px solid #e7e7e7">
            {{ $t('THENAV.REPORT6') }}
          </div>
          <div class="item-nav">
            {{ $t('THENAV.REPORT7') }}
          </div>
        </div>
      </div>
      <div class="title-nav">{{ $t('THENAV.SETTING') }}</div>
    </div>
    <div class="nav-right">
      <div class="icon icon-notify"></div>
      <div class="icon icon-help"></div>
      <div class="icon icon-other"></div>
      <div class="logo-user" @click="this.diy.toggleLaguage()">BP</div>
      <div class="edit-column custom-user" id="high-filter" v-if="this.diy.state.isLaguage">
        <div class="user-avatar">
          <div class="avatar-user-user">BP</div>
        </div>
        <div class="user-name">{{ $t('THENAV.NAMEUSER') }}</div>
        <div class="user-game">Pvb0204@gmail.com</div>
        <!-- <div class="user-company">CTY MISA</div> -->
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
          <div class="text-password">{{ $t('THENAV.PASSWORD') }}</div>
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
          <div class="text-accout">{{ $t('THENAV.SETACCOUNT') }}</div>
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
          <div class="text-security">{{ $t('THENAV.SETSECURITY') }}</div>
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
          <div class="text-point">{{ $t('THENAV.POINT') }}</div>
        </div>
        <div class="user-language col-user">
          <div class="icon-language"></div>
          <div class="text-language">
            {{ $t('THENAV.LANGUAGE') }}:
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
          <div class="text-logut">{{ $t('THENAV.LOGOUT') }}</div>
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
  methods: {
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
      this.diy.clearLaguage();
    },
  },
  data() {
    return {
      // Gía trị ngôn ngữ muốn chuyển
      valueDefault:'vi',

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
    };
  },
};
</script>

<style scoped>
@import url(../css/layout/nav.css);
</style>
