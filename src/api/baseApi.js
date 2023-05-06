import axiosClient from "./axiosClient";
// import axios from "axios";

/**
 * Các API liên quan đến Employee
 * CreatedBy: Bien (20/01/2023)
 */
const baseApi = {
  /**
   * Hàm lấy tất cả đối tượng
   * @param {Đường dẫn API} baseUrl 
   * @returns Danh sách đối tượng
   * CreatedBy: Bien (27/04/2023)
   */
  getAll: (baseUrl) => {
    try {
      return axiosClient.get(
        baseUrl);
    } catch (error) {
      console.log("Lỗi lấy danh sach theo phân trang và tìm kiến: " + error);
    }
  },
  /**
   * API lấy danh sách nhân viên theo trang
   * @param {* Gía trị trang muốn lấy dữ liệu} pageNumber
   * @param {* Kích thước của trang} pageSize
   * @param {* Đường dẫn gọi API} baseUrl
   * @param {* Tên, mã nhân viên muốn tìm kiếm} filter
   * @returns
   * CreatedBy: Bien (20/01/2023)
   */
  getPaging: (offset, limit, baseUrl, filter, statusFilter, misaCode) => {
    try {
      if (filter) {
        return axiosClient.get(
          baseUrl + `filter?offset=${offset}&limit=${limit}&filter=${filter}&statusFilter=${statusFilter}&misaCode=${misaCode}`
        );
      } else {
        return axiosClient.get(
          baseUrl + `filter?offset=${offset}&limit=${limit}&statusFilter=${statusFilter}&misaCode=${misaCode}`
        );
      }
    } catch (error) {
      console.log("Lỗi lấy danh sach theo phân trang và tìm kiến: " + error);
    }
  },
   /**
   * API lấy nhân viên theo id
   * @param {*Id nhân viên muốn lấy} id
   * CreatedBy: Bien (20/01/2023)
   */
  getById: (baseUrl, id) => {
      try {
          return axiosClient.get(baseUrl + id);
      } catch (error) {
          console.log("Lỗi lấy đối tượng theo id: "+error);
      }
  },
 
  /**
   * API thêm nhân viên
   * @param {*Nhân viên muốn thêm} employee
   * CreatedBy: Bien (20/01/2023)
   */
  createEntity: (baseUrl, enity) => {
      try {
          return axiosClient.post(baseUrl, enity);
      } catch (error) {
          console.log("Lỗi thêm nhân viên mới: "+error);
      }
  },
  /**
   * API sửa nhân viên
   * @param {*Id đối tượng muốn sửa} id
   * @param {*Thông tin đối tượng mới} newEntity
   * CreatedBy: Bien (20/01/2023)
   */
  update: (baseUrl, id, newEntity) => {
      try {
          return axiosClient.put(baseUrl + id, newEntity);
      } catch (error) {
          console.log("Lỗi cập nhật đối tượng mới: "+error);
      }
  },
  /**
   * API xóa 1
   * @param {*Id đối tượng muốn xóa} id
   * CreatedBy: Bien (03/05/2023)
   */
  delete: (baseUrl,id) => {
      try {
          return axiosClient.delete(baseUrl + id);
      } catch (error) {
          console.log("Lỗi khi xóa : " +error);
      }
  },
  /**
   * API xóa hàng loạt 
   * @param {*Danh sách id nhân viên muốn xóa} Ids
   * @returns
   * 1: Nếu xóa thành công
   * 0: Nếu xóa thất bại
   * CreatedBy: Bien (20/01/2023)
   */
  deleteList:(baseUrl, ids) => {
      try {
          return axiosClient.delete(baseUrl,{
              data: ids
          })
      } catch (error) {
          console.log("Lỗi xóa nhiều: "+error);
      }
  }
};

export default baseApi;
