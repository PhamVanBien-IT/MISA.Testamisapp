/**
 * Hàm khai báo các giá trị chữ
 * CreatedBy: Bien (11/1/2023)
 */
/* eslint-disable */
const MISAResource = {
	messages: {
		vi: {
			THENAV:{
				APP:"Chấm công",
				OVERVIEW:"Tổng quan",
				TIMEKEEPING1:"Bảng chấm công chi tiết",
				TIMEKEEPING2:"Bảng chấm công tổng hợp",
				TIMEKEEPING3:"Dữ liệu chấm công",
				SHIFTWORK:"Ca làm việc",
				SHIFTWORK1:"Bảng phân ca tổng hợp",
				SHIFTWORK2:"Phân ca chi tiết",
				ORDER:"Quản lý đơn",
				ORDER1:"Đơn xin nghỉ",
				ORDER2:"Đăng ký đi muộn, về sớm",
				ORDER3:"Đăng ký làm thêm",
				ORDER4:"Đề nghị đi công tác",
				ORDER5:"Đề nghị đổi ca",
				ORDER6:"Phê duyệt chấm công",
				ORDER7:"Bảng tổng hợp nghỉ phép",
				ORDER8:"Bảng tổng hợp nghỉ bù",
				ORDER9:"Kế hoạch nghỉ phép",
				REPORT:"Báo cáo",
				REPORT1:"Báo cáo nhân viên đi muộn, về sớm, nghỉ",
				REPORT2:"Tình hình nghỉ phép theo kế hoạch",
				REPORT3:"Danh sách nhân viên đi công tác",
				REPORT4:"Báo cáo danh sách nhân viên làm thêm giờ",
				REPORT5:"Phân tích tình hình làm thêm",
				REPORT6:"Báo cáo tổng hợp tình hình làm thêm của nhân viên",
				REPORT7:"Báo cáo tổng hợp tình hình nhân viên đi công tác",
				SETTING:"Thiết lập",
				NAMEUSER:"Phạm Văn Biển",
				PASSWORD:"Đổi mật khẩu",
				SETACCOUNT:"Thiết lập tài khoản",
				SETSECURITY:"Thiết lập bảo mật",
				POINT:"Giới thiệu - Tích điểm",
				LANGUAGE:"Ngôn ngữ",
				LOGOUT:"Đăng xuất"
			},
			BUTTON:{
				ADD:"Thêm",
				IMPORT:"Nhập khẩu",
				REFUSE:"Từ chối",
				APPROVE:"Duyệt",
				EXPORT:"Xuất khẩu",
				DELETE:"Xóa",
				FILTER:"Bộ lọc",
				APPLY:"Áp dụng",
				SETCOLUMN:"Tùy chỉnh cột",
				SAVE:"Lưu",
				DEFAULT:"Mặc định",
				CANCEL:"Hủy"
			},
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
				ADD: "Thêm mới đề nghị công tác",
				UPDATE: "Sửa đề nghị đi công tác",
				DETAIL: "Chi tiết đề nghị đi công tác",
				HOME: "Chọn nhân viên",
				BUSSINESS: "Đề nghị đi công tác"
			},
			NOTIFY: {
				ADD: `Thêm đơn mới thành công`,
				DELETE: `Xóa thành công`,
				UPDATE: `Cập nhập đơn thành công`
			},
			DATA: {
				NULL: 'Không có dữ liệu'
			},
			STATUS:{
				PENDING:'1'
			},
			STATUSPENDING: '1',
			STATUSAPPROVED: '2',
			STATUSREFUSE: '3',
			BUSINESSFORM: {
				PLACEHOLDER: {
					SEARCH: "Tìm kiếm",
					DEPARTMENT: "Tất cả đơn vị",
					NOTES: "Nhập ghi chú"
				},
				SELECTLIST: {
					SELECTED: "Đã chọn",
					UNSELECTED: "Bỏ chọn"
				},
				TOTALRECORD: "Tổng số bản ghi:",
				PAGING: {
					FROM: "Từ",
					TO: "đến",
					RECORD: " bản ghi"
				}
			},
			BUSINESSDETAIL: {
				TITLEFORM: {
					EMPLOYEE: "Người đề nghị",
					DEPARTMENTNAME: "Đơn vị công tác",
					REQUESDATE: "Ngày đề nghị",
					FORMDATE: "Ngày đi",
					TODATE: "Ngày về",
					LEAVEDAY: "Số ngày đi công tác",
					LOCATION: "Địa điểm công tác",
					PURPOSE: "Lý do công tác",
					REQUEST: "Yêu cầu hỗ trợ",
					SUPPORT: "Người hỗ trợ",
					APPROVAL: "Người duyệt",
					RELATIONSHIP: "Người liên quan",
					STATUS: "Trạng thái"
				},
				TITLETABLE: "DANH SÁCH NHÂN VIÊN ĐI CÔNG TÁC",
				NOTES: "Ghi chú",
				ESC: "Nhấp Esc để",
				CANCEL: "Hủy",
				ALL: "Tất cả",
				TEXTNOTE: "Ghi chú",
				HISTORY: "Nhật ký hoạt động",
				ADDEMPLOYEE:"Thêm"
			}
		},
		en: {
			THENAV:{
				APP: "Timekeeping",
				OVERVIEW:"Overview",
				TIMEKEEPING1:"Detailed timesheet",
				TIMEKEEPING2:"General timesheet",
				TIMEKEEPING3:"Timekeeping data",
				SHIFTWORK:"Working shift",
				SHIFTWORK1:"General shift table",
				SHIFTWORK2:"Detailed shift",
				ORDER:"Manage menu",
				ORDER1:"Application for leave",
				ORDER2: "Register to go late, leave early",
				ORDER3:"Register for a part-time job",
				ORDER4:"Recommended business trip",
				ORDER5:"Request to change shift",
				ORDER6:"Timekeeping Approval",
				ORDER7:"Leave Summary Table",
				ORDER8:"Compensated leave summary table",
				ORDER9:"Plan for leave",
				REPORT: "Report",
				REPORT1: "Reporting employees coming late, leaving early, taking leave",
				REPORT2:"Planned leave status",
				REPORT3:"List of employees on business trips",
				REPORT4:"Report list of overtime employees",
				REPORT5: "Analyzing the situation of overtime",
				REPORT6:"Synthetic report on employee's overtime situation",
				REPORT7: "Synthetic report on the situation of employees going on business trips",
				SETTING: "Setting",
				NAMEUSER: "Pham Van Bien",
				PASSWORD:"Change Password",
				SETACCOUNT: "Account Setup",
				SETSECURITY:"Security Settings",
				POINT:"Introduction - Earn Points",
				LANGUAGE: "Language",
				LOGOUT: "Logout"
				},
				BUTTON:{
				ADD: "Add",
				IMPORT: "Import",
				REFUSE:"Reject",
				APPROVE:"Browse",
				EXPORT: "Export",
				DELETE: "Delete",
				FILTER: "Filter",
				APPLY: "Apply",
				SETCOLUMN:"Customize columns",
				SAVE: "Save",
				DEFAULT: "Default",
				CANCEL:"Cancel"
				},
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
				HOME: "Select staff",
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
			STATUSPENDING: '1',
			STATUSAPPROVED: '2',
			STATUSREFUSE: '3',
			BUSINESSFORM: {
				PLACEHOLDER: {
					SEARCH: "Search",
					DEPARTMENT: "All units",
					NOTES: "Enter notes"
				},
				SELECTLIST: {
					SELECTED: "Selected",
					UNSELECTED: "Uncheck"
				},
				TOTALRECORD: "Total number of records:",
				PAGING: {
					FROM: "From",
					TO: "come",
					RECORD: "record"
				}
			},
			BUSINESSDETAIL: {
				TITLEFORM: {
					EMPLOYEE: "Proposer",
					DEPARTMENTNAME: "Working Unit",
					REQUESDATE: "Recommended date",
					FORMDATE: "Departure date",
					TODATE: "Date of return",
					LEAVEDAY: "Number of business days",
					LOCATION: "Working place",
					PURPOSE: "Reason for work",
					REQUEST: "Request for Support",
					SUPPORT: "Supporter",
					APPROVAL: "Browser",
					RELATIONSHIP: "Relevant person",
					STATUS: "Status"
				},
				TITLETABLE: "LIST OF EMPLOYEES GOING TO WORK",
				NOTES: "Notes",
				ESC: "Click Esc to",
				CANCEL: "Cancel",
				ALL: "All",
				TEXTNOTE: "Note",
				HISTORY: "Activity Log",
				ADDEMPLOYEE:"Add"
			}

		}
	}
};

export default MISAResource;