import axiosClient from "./axiosClient";
// import axios from "axios";

/**
 * Các API liên quan đến Employee
 * CreatedBy: Bien (20/01/2023)
 */
const employeeApi = {
 
  /**
   * API lấy danh sách nhân viên theo trang
   * @param {* Gía trị trang muốn lấy dữ liệu} pageNumber
   * @param {* Kích thước của trang} pageSize
   * @param {* Đường dẫn gọi API} baseUrl
   * @param {* Tên, mã nhân viên muốn tìm kiếm} filter
   * @returns
   * CreatedBy: Bien (20/01/2023)
   */
  getPaging: (offset, limit, baseUrl, filter, misaCode) => {
    try {
      if (filter) {
        return axiosClient.get(
          baseUrl + `filter?offset=${offset}&limit=${limit}&filter=${filter}&statusFilter=0&misaCode=${misaCode}`
        );
      } else {
        return axiosClient.get(
          baseUrl + `filter?offset=${offset}&limit=${limit}&statusFilter=0&misaCode=${misaCode}`
        );
      }
    } catch (error) {
      console.log("Lỗi lấy danh sach theo phân trang và tìm kiến: " + error);
    }
  },
};

export default employeeApi;
