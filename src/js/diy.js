import { reactive, readonly } from "vue";

/**
 * Khai báo biến state
 * CreatedBy: Bien (4/1/2023)
 */
const state = reactive({
  isSubnavTimekeeping: false,
  isSubnavShift:false,
  isSubnavOrder:false,
  isSubnavReport:false,
  isImport:false,
  isPageSize:false,
  isFormBusiness:false,
  isShowBusinessDetail:false,
  isBusinessEdit:false,
  isAddBussiness:false,
  isShowDialog:false,
  isShowNotify:false,
  isSearchBusiness:true,
  isShowLoading:false,
  treeDepartment: [
    {
      id: "5e6695e2-5aad-3241-6c1a-bb545470e80c",
      text: "Công ty Test (Dự án C&B)",
      misaCode:"1",
      items: [
        {
          id: "6207a9a7-3bf9-7288-8565-390639088226",
          text: "Phòng bảo vệ",
          misaCode:"1/1",
          items: [
            {
              id: "4c95f543-d483-4989-b5d2-7039120b9e06",
              text: "Nhóm 1",
              misaCode:"1/1/1"
            }
          ],
        },
        { id: "6d81a322-63f0-7270-6d1a-bb545470e80c",
         text: "Phòng kinh doanh",
        misaCode:"1/2" ,
      items:[
        {
          id:"b2e00fa1-61c8-483e-9896-5f2f441883a4",
          text:"Nhóm 1",
          misaCode:"1/2/1",
        },
        {
          id:"77172f10-30b7-4390-8c92-a0b691480533",
          text:"Nhóm 2",
          misaCode:"1/2/2",
        }
      ]},
      ],
    },
    {
      id: "60e226cb-63fb-4363-fc4d-8601bf3d85d8",
      text: "Công ty Hoàng Minh",
      misaCode:"2",
      items:[
        {
          id:"d5f80067-1dcc-4477-bef5-386b5041dcd4",
          text:"Phòng sản xuất",
          misaCode:"2/1"
        }
      ]
    },
  ],
});
/**
 * Hàm ẩn loading
 * CreatedBy: Bien (20/1/2023)
 */
const clearLoading = function(){
  state.isShowLoading = false;
}; 

/**
 * Hàm hiển thị loading
 * CreatedBy: Bien (20/1/2023)
 */
const showLoading = function(){
  state.isShowLoading = true;
}; 
/**
 * Hàm ẩn thị tìm kiếm đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const clearSearchBusiness = function(){
  state.isSearchBusiness = false;
}; 

/**
 * Hàm hiển thị tìm kiếm đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const showSearchBusiness = function(){
  state.isSearchBusiness = true;
}; 
/**
 * Hàm hiển thị kết quả thực hiện hành động
 * CreatedBy: Bien (20/1/2023)
 */
const showNotify = function(){
  state.isShowNotify = true;
  setTimeout(() => {
    state.isShowNotify = false;
  }, 2000);
}; 
/**
 * Hàm hiển thị dialog
 * CreatedBy: Bien (20/1/2023)
 */
const showDialog = function(){
  state.isShowDialog = true;
}; 
/**
 * Hàm ẩn dialog
 * CreatedBy: Bien (20/1/2023)
 */
const clearDialog = function(){
  state.isShowDialog = false;
}; 
/**
 * Hàm hiển thị trang sửa đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const showIsBusinessEdit = function(){
  state.isBusinessEdit = true;
}; 
/**
 * Hàm ẩn trang sửa đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const clearIsAddBussiness = function(){
  state.isAddBussiness = false;
}; 
/**
 * Hàm hiển thị nút thêm mới đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const showisAddBussiness = function(){
  state.isAddBussiness = true;
}; 
/**
 * Hàm ẩn trang thêm mới đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const toggleisAddBussiness = function(){
  state.isAddBussiness = !state.isAddBussiness;
};
/**
 * Hàm hiển thị ẩn sửa đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const clearBusinessEdit = function(){
  state.isBusinessEdit = false;
};
/**
 * Hàm hiển thị trang sửa đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const showBusinessEdit = function(){
  state.isBusinessEdit = true;
}; 
/**
 * Hàm hiển thị danh sách nhân viên
 * CreatedBy: Bien (01/05/2023)
 */
const showBusinessDetail = function(){
  state.isShowBusinessDetail = true;
}; 
/**
 * Hàm ẩn trang thêm mới đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const toggleBusinessDetail = function(){
  state.isShowBusinessDetail = !state.isShowBusinessDetail;
}; 
/**
 * Hàm ẩn trang thêm mới đơn công tác
 * CreatedBy: Bien (20/1/2023)
 */
const clearBusinessDetail = function(){
  state.isShowBusinessDetail = false;
}; 
/**
 * Hàm hiển thị form nhân viên
 * CreatedBy: Bien (20/1/2023)
 */
const showFormBusiness = function(){
  state.isFormBusiness = true;
};
/**
 * Hàm ẩn danh sách nhân viên
 * CreatedBy: Bien (20/1/2023)
 */
const clearFormBusiness = function(){
  state.isFormBusiness = false;
};
/**
 * Hàm ẩn hiện danh sách kích thước trang
 * CreatedBy: Bien (20/1/2023)
 */
const clearPageSize = function(){
    state.isPageSize = false;
  };
/**
 * Hàm ẩn hiện danh sách kích thước trang
 * CreatedBy: Bien (20/1/2023)
 */
const togglePageSize = function(){
    state.isPageSize = !state.isPageSize;
  }; 
/**
 * Hàm ẩn hiện thêm import excel
 * CreatedBy: Bien (20/1/2023)
 */
const toggleImport = function(){
    state.isImport = !state.isImport;
  };
/**
 * Hàm ẩn hiện menu con chấm công
 * CreatedBy: Bien (20/1/2023)
 */
const toggleSubnavTimekeeping = function(){
  state.isSubnavTimekeeping = !state.isSubnavTimekeeping;
};
/**
 * Hàm ẩn hiện menu con ca làm việc
 * CreatedBy: Bien (20/1/2023)
 */
const toggleSubnavShift = function(){
    state.isSubnavShift = !state.isSubnavShift;
};
/**
 * Hàm ẩn hiện menu con đơn hàng
 * CreatedBy: Bien (20/1/2023)
 */
const toggleSubnavOrder = function(){
    state.isSubnavOrder = !state.isSubnavOrder;
  };
  /**
 * Hàm ẩn hiện menu con báo cáo
 * CreatedBy: Bien (20/1/2023)
 */
const toggleSubnavReport = function(){
    state.isSubnavReport = !state.isSubnavReport;
  };
export default {
  state: readonly(state),
  toggleSubnavTimekeeping,
  toggleSubnavShift,
  toggleSubnavOrder,
  toggleSubnavReport,
  toggleImport,
  togglePageSize,
  clearPageSize,
  showFormBusiness,
  clearFormBusiness,
  toggleBusinessDetail,
  showBusinessEdit,
  toggleisAddBussiness,
  clearIsAddBussiness,
  clearBusinessEdit,
  showIsBusinessEdit,
  showisAddBussiness,
  showBusinessDetail,
  showDialog,
  clearDialog,
  showNotify,
  clearSearchBusiness,
  showSearchBusiness,
  clearBusinessDetail,
  clearLoading,
  showLoading

};
