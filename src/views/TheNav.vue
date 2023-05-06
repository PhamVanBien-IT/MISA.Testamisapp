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
        <span class="label-timekeeping">Chấm công</span>
      </div>
    </div>
    <div class="nav-center">
      <div class="title-nav">Tổng quan</div>
      <div class="title-nav" @click="this.diy.toggleSubnavTimekeeping()">
        Chấm công
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavTimekeeping" >
            <div class="item-nav">
                Bảng chấm công chi tiết
            </div>
            <div class="item-nav">
                Bảng chấm công tổng hợp
            </div>
            <div class="item-nav">
               Dữ liệu chấm công
            </div>
        </div>
      </div>
      <div class="title-nav" @click="this.diy.toggleSubnavShift()">
        Ca làm việc
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavShift">
            <div class="item-nav">
                Bảng phân ca tổng hợp
            </div>
            <div class="item-nav">
                Phân ca chi tiết
            </div>
            <div class="item-nav">
               Ca làm việc
            </div>
        </div>
      </div>
      <div class="title-nav" style="border-bottom: 5px solid #EC5504;"  @click="this.diy.toggleSubnavOrder()">
        <span style="font-weight: 600;">
        Quản lý đơn
        </span>
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavOrder">
            <div class="item-nav">
                Đơn xin nghỉ
            </div>
            <div class="item-nav">
                Đăng ký đi muộn, về sớm
            </div>
            <div class="item-nav">
               Đăng ký làm thêm
            </div>
            <div class="item-nav">
               Đề nghị đi công tác
            </div>
            <div class="item-nav">
               Đề nghị cập nhật công
            </div>
            <div class="item-nav">
               Đề nghị đổi ca
            </div>
            <div class="item-nav" style="border-bottom: 1px solid #e7e7e7;">
               Phê duyệt chấm công
            </div>
            <div class="item-nav">
               Bảng tổng hợp nghỉ phép
            </div>
            <div class="item-nav">
               Bảng tổng hợp nghỉ bù
            </div>
            <div class="item-nav">
               Kế hoạch nghỉ phép
            </div>
        </div>
      </div>
      <div class="title-nav"  @click="this.diy.toggleSubnavReport()">
        Báo cáo
        <div class="icon icon-down"></div>
        <div class="sub-nav" v-if="diy.state.isSubnavReport">
            <div class="item-nav">
                Báo cáo nhân viên đi muộn, về sớm, nghỉ
            </div>
            <div class="item-nav">
                Tổng hợp tình hình đi muộn, về sớm
            </div>
            <div class="item-nav">
               Tình hình nghỉ phép theo kế hoạch
            </div>
            <div class="item-nav">
               Danh sách nhân viên đi công tác
            </div>
            <div class="item-nav">
               Báo cáo danh sách nhân viên làm thêm giờ
            </div>
            <div class="item-nav">
               Phân tích tình hình làm thêm
            </div>
            <div class="item-nav" style="border-bottom: 1px solid #e7e7e7;">
               Báo cáo tổng hợp tình hình làm thêm của nhân viên
            </div>
            <div class="item-nav">
               Báo cáo tổng hợp tình hình nhân viên đi công tác
            </div>
        </div>
      </div>
      <div class="title-nav">Thiết lập</div>
    </div>
    <div class="nav-right">
      <div class="icon icon-notify"></div>
      <div class="icon icon-help"></div>
      <div class="icon icon-other"></div>
      <div class="logo-user">BP
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
  },
};
</script>

<style scoped>
@import url(../css/layout/nav.css);
</style>
