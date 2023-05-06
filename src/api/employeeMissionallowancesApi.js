import axiosClient from "./axiosClient.js";
import axios from "axios";
/**
 * Các API liên quan đến Department
 * CreatedBy: Bien (25/01/2023)
 */
const employeeMissionallowancesApi = {
    /**
   * API xuất khẩu nhân viên
   * CreatedBy: Bien (20/02/2023)
   */
  exportMissionallowances:(filter) =>{
     try {
      axios({
          url: `https://localhost:7185/api/Employees/ExportExcel?filter=${filter}`,
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          window.open();
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "Danh_sach_nhan_vien.xlsx");

          fileLink.click();
        });
     } catch (error) {
      console.log("Lỗi xuất khẩu nhân viên: "+error);
     }
  },
    /**
     * API lấy danh sách nhân viên công tác
     * @returns danh sách department
     * CreatedBy: Bien (25/01/2023)
     */
    getEmployeeMissionallowances: (baseUrl, id) => {
        try {
            return axiosClient.get(baseUrl + id);
        } catch (error) {
            console.log("Lỗi lấy danh sách nhân viên đi công tác" + error);
        }
    },
};

export default employeeMissionallowancesApi;