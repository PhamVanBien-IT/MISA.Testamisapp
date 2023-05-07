/**
 * Hàm khai báo các giá trị chữ
 * CreatedBy: Bien (11/1/2023)
 */
const MISAResource = {
	messages: {
		vi: {
			hello: 'Xin chào',
			ERRORVALIDATE: {
				FORMATCODE: "Mã nhân viên không đúng định dạng <NV-XXXXX>",
				EXISTEMPLOYEECODE: (item) => `Mã nhân viên <${item}> đã tồn tại trong hệ thống.`,
				REQUIRED: (item) => `${item} không được để trống`,
				INVALIDFORMAT: (item) => `${item} không đúng định dạng`,
				INVALIDDATETIME: (item) => `${item} lớn hơn ngày hiện tại`,
			},
			CONTENTDIALOG: {
				DELETE: `Bạn có chắc muốn xóa đơn này không?`,
				DELETES: `Bạn có chắc chắn muốn xóa các đơn đã chọn không?`,
				SAVE: "Dữ liệu đã thay đổi. Bạn có muốn cất không?",
				DEVELOPING: "Chức năng đang phát triển."
			},
			TITLEFORM: {
				ADD: "Thông tin nhân viên",
				UPDATE: "Sửa đề nghị đi công tác",
				DETAIL: "Chi tiết đề nghị đi công tác",
				HOME:"Chọn nhân viên",
				BUSSINESS:"Đề nghị đi công tác"
			},
			NOTIFY: {
				ADD: `Thêm đơn mới thành công`,
				DELETE: `Xóa thành công`,
				UPDATE: `Cập nhập đơn thành công`
			},
			DATA: {
				NULL: 'Không có dữ liệu'
			},
			STATUSPENDING: '1',
			STATUSAPPROVED: '2',
			STATUSREFUSE: '3',
			SELECTLIST: {
				selectedRowKeys: []
			}
		},
		en: {
			hello: 'Hello!',
			ERRORVALIDATE: {
				FORMATCODE: "Invalid employee ID <NV-XXXXX>",
				EXISTEMPLOYEECODE: (item) => `Employee ID <${item}> already exists in the system.`,
				REQUIRED: (item) => `${item} cannot be empty`,
				INVALIDFORMAT: (item) => `${item} malformed`,
				INVALIDDATETIME: (item) => `${item} is greater than current date`,
				},
				CONTENTDIALOG: {
				DELETE: `Are you sure you want to delete this application?`,
				DELETES: `Are you sure you want to delete the selected applications?`,
				SAVE: "Data has changed. Do you want to save?",
				DEVELOPING: "Function in development."
				},
				TITLEFORM: {
				ADD: "Employee Information",
				UPDATE: "Fix proposal for business trip",
				DETAIL: "Details of business travel request",
				HOME:"Select staff",
				BUSSINESS: "Offer to go on a business trip"
				},
				NOTIFY: {
				ADD: `New application successfully added`,
				DELETE: `Delete Successful`,
				UPDATE: `Successful application update`
				},
				DATA: {
				NULL: 'No data'
				},
				STATUS: {
				PENDING: 1, // Waiting for approval
				APPROVED: 2, // Approved
				REFUSE: 3// Deny
				},
				SELECTLIST: {
				selectedRowKeys: []
				}
		}
	}
};

export default MISAResource;