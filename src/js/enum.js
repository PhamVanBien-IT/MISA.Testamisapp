/**
 * Hàm khai báo các giá trị số
 * CreatedBy: Bien (11/1/2023)
 */
const MISAEnum = {
    PAGING:{
        START:1,
    },
    KEY_CODE:{
        ENTER:13, // Enter
        ROW_UP:38,// Nút lên
        ROW_DOWN:40,// Nút xuống
        CTRL:17,// Nút Ctrl
        S:83,// Nút S,
        ESC:27, //Nút ESC
        SHIFT:16,// Nút Shift
    },
    STATUSCODE:{
        OK:200, // Thành công
        INSERT:201,// Thêm thành công
        BADREQUEST: 400, // Lỗi dữ liệu nhập vào
        INTERNALSERVER: 500 // Lỗi 
    },
    ERRORCODE:{
        SUCCESS:0, // Thành công
        UNKNOWNERROR:1,// Lỗi không xác định
        VALIDATERROR:2, // Dữ liệu đầu vào không hợp lệ
    },
    STATUS:{
        ALL:0, // Tất cả
        PEDING:1, // Chờ duyệt
        REFUSE:2, // Từ chối,
        APPROVED:3 // Đã duyệt
    }
}

export default MISAEnum;