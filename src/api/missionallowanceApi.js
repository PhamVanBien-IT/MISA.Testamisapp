import axios from "axios";
import axiosClient from "./axiosClient";
/**
 * Các API liên quan đến đơn công tác
 * CreatedBy: Bien (25/01/2023)
 */
const missionallowanceApi = {
  getAddMissionallowanceToDay() {
    try {
      return axiosClient.get("Missionallowances/MissionallowanceToDay");
    } catch (error) {
      console.log("Lỗi lấy danh sách đơn công tác tạo hôm nay: " + error);
    }
  },
  /**
   * API xóa hàng loạt 
   * @param {*Danh sách id đơn công tác muốn cập nhật} Ids
   * @returns
   * 1: Nếu xóa thành công
   * 0: Nếu xóa thất bại
   * CreatedBy: Bien (20/01/2023)
   */
  updateStatusList: (ids, status) => {
    try {
      const data = ids;
      return axiosClient.put(`Missionallowances?status=${status}`, data)
    } catch (error) {
      console.log("Lỗi cập nhập trạng thái nhiều đơn: " + error);
    }
  },
  /**
   * API xuất khẩu đơn công tác
   * CreatedBy: Bien (20/02/2023)
   */
  exportMissionallowances: (filter) => {
    try {
      axios({
        url: `https://localhost:7185/api/Missionallowances/ExportExcel?filter=${filter}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        window.open();
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Danh_sach_don_cong_tac.xlsx");

        fileLink.click();
      });
    } catch (error) {
      console.log("Lỗi xuất khẩu đơn công tác: " + error);
    }
  },
  /**
   * API xuất khẩu đơn công tác được chọn
   * CreatedBy: Bien (20/02/2023)
   */
  exportMissionallowancesSelected: (missionallowances) => {
    try {
      const data = missionallowances;
      axios({
        url: `https://localhost:7185/api/Missionallowances/ExportExcelSelected`,
        method: "POST",
        responseType: "blob",
        data
      }).then((response) => {
        window.open();
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Danh_sach_don_cong_tac.xlsx");

        fileLink.click();
      });
    } catch (error) {
      console.log("Lỗi xuất khẩu đơn công tác: " + error);
    }
  },
};

export default missionallowanceApi;
