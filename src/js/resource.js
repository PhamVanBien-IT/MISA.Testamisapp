/**
 * Hàm khai báo các giá trị chữ
 * CreatedBy: Bien (11/1/2023)
 */
const MISAResource = {
	ERRORVALIDATE: {
		FORMATCODE:"Mã nhân viên không đúng định dạng <NV-XXXXX>",
		EXISTEMPLOYEECODE:(item) => `Mã nhân viên <${item}> đã tồn tại trong hệ thống.`,
		REQUIRED:(item) => `${item} không được để trống`, 
		INVALIDFORMAT:(item) => `${item} không đúng định dạng`,
		INVALIDDATETIME:(item) => `${item} lớn hơn ngày hiện tại`,
	},
	CONTENTDIALOG:{
		DELETE:`Bạn có chắc muốn xóa đơn này không?`,
		DELETES:`Bạn có chắc chắn muốn xóa các đơn đã chọn không?`,
		SAVE:"Dữ liệu đã thay đổi. Bạn có muốn cất không?",
		DEVELOPING:"Chức năng đang phát triển."
	},
	TITLEFORM:{
		ADD: "Thông tin nhân viên",
		UPDATE:"Sửa đề nghị đi công tác",
		DETAIL:"Chi tiết đề nghị đi công tác"
	},
	NOTIFY:{
		ADD:`Thêm đơn mới thành công`,
		DELETE:`Xóa thành công`,
		UPDATE:`Cập nhập đơn thành công`
	},
	DATA:{
		NULL:'Không có dữ liệu'
	},
	STATUS:{
		PENDING:1,// Chờ duyệt
		APPROVED:2,// Đã duyệt
		REFUSE:3// Từ chối
	},
};

export default MISAResource;