import axios from "axios";
/**
 * Các API liên quan đến đơn công tác
 * CreatedBy: Bien (25/01/2023)
 */
const missionallowanceApi = {
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
      axios({
        url: `https://localhost:7185/api/Missionallowances/ExportExcel`,
        method: "POST",
        responseType: "blob",
        data:{
            missionallowances
        }
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
