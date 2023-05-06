/**
 * Hàm định dùng chung
 * CreatedBy: Bien (11/1/2023)
 */
const MISACommon = {
    /**
       * Hàm đinh dạng ngày giờ
       * CreatedBy: Bien (23/12/2023)
       */
    formatDate(datatime) {
      try {
        // Kiểm tra dữ liệu đầu vào khác null
        if (datatime != null && datatime != undefined) {
          // Chuyển thành dữ liệu dd/mm/yy
          datatime = new Date(datatime);
  
          let date = datatime.getDate();
          date = date < 10 ? `0${date}` : date;
  
          let month = datatime.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
  
          let year = datatime.getFullYear();

          let hours = datatime.getHours();

          let minutes = datatime.getMinutes();
  
          return `${date}/${month}/${year} ${hours}:${minutes}`;
        } else {
          return "";
        }
      } catch (error) {
        console.log("Lỗi định dạng thời gian" + error);
      }
    },
    /**
    * Hàm đinh dạng ngày giờ YYYY-mm-dd
    * CreatedBy: Bien (23/12/2023)
    */
    formatDateReverse(datatime) {
      try {
        // Kiểm tra dữ liệu đầu vào khác null
        if (datatime != null && datatime != undefined) {
          // Chuyển thành dữ liệu dd/mm/yy
          datatime = new Date(datatime);
  
          let date = datatime.getDate();
          date = date < 10 ? `0${date}` : date;
  
          let month = datatime.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
  
          let year = datatime.getFullYear();

          let hours = datatime.getHours();

          let minutes = datatime.getMinutes();
  
          return `${year}-${month}-${date}${hours}:${minutes}`;
        } else {
          return null;
        }
      } catch (error) {
        console.log("Lỗi định dạng thời gian" + error);
      }
    },
    /**
     * Lấy giá trị hiển trị trong avatar
     * @param {*Tên muốn tác} name 
     * @param {* Kết quả tách} textAvatar
     * CreatedBy: Bien (04/05/2023) 
     */
    formatTextAvatar(name){
      let valueAvatar = name.split(" ");
      return valueAvatar[0].slice(0,1) + valueAvatar[2].slice(0,1);
    },
  }
  
  export default MISACommon;