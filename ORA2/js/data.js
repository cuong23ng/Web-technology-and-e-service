// Menu saves menu item
const menu = {
  itemCount: 4, 
  'item_1': { 
    name: "Trang chủ", 
    itemCount: 3,
    sidebar: `<h4 id="sbar-1-0" class="w3-bar-item"></h4>
      <a id="sbar-1-1" class="w3-bar-item w3-button w3-hover-black" href="#classInfo">Thông tin khai giảng</a>
      <a id="sbar-1-2" class="w3-bar-item w3-button w3-hover-black" href="#seminar">Thông tin Seminar</a>
      <a id="sbar-1-3" class="w3-bar-item w3-button w3-hover-black" href="#company">Thông tin công ty quan tâm</a>`,
    sections: {
      contentCount: 0,
      // content_1: {
      //    name: "",
      // }
    }
  },
  'item_2': { 
    name: "Thông tin môn học", 
    itemCount: 5,
    sidebar: `<h4 id="sbar-2-0" class="w3-bar-item"></h4>
      <a id="sbar-2-1" class="w3-bar-item w3-button w3-hover-black" href="#summaryVN">Mô tả tóm tắt học phần (tiếng Việt) (*)</a>
      <a id="sbar-2-2" class="w3-bar-item w3-button w3-hover-black" href="#summaryEN">Mô tả tóm tắt học phần (tiếng Anh) (*)</a>
      <a id="sbar-2-3" class="w3-bar-item w3-button w3-hover-black" href="#contentVN">Nội dung tóm tắt học phần (tiếng Việt) (*)</a>
      <a id="sbar-2-4" class="w3-bar-item w3-button w3-hover-black" href="#contentEN">Nội dung tóm tắt học phần (tiếng Anh) (*)</a>
      <a id="sbar-2-5" class="w3-bar-item w3-button w3-hover-black" href="#reference">Sách tham khảo</a>`,
    sections: {}
  },
  'item_3': { 
    name: "Công nghệ Web", 
    itemCount: 9,
    sidebar: `<h4 id="sbar-3-0" class="w3-bar-item"></h4>
      <a id="sbar-3-1" class="w3-bar-item w3-button w3-hover-black" href="#frontend">1. Frontend (Giao diện người dùng)</a>
      <a id="sbar-3-2" class="w3-bar-item w3-button w3-hover-black" href="#backend">2. Backend (Máy chủ và xử lý dữ liệu)</a>
      <a id="sbar-3-3" class="w3-bar-item w3-button w3-hover-black" href="#database">3. Cơ sở dữ liệu</a>
      <a id="sbar-3-4" class="w3-bar-item w3-button w3-hover-black" href="#api">4. API và Tích hợp dịch vụ</a>
      <a id="sbar-3-5" class="w3-bar-item w3-button w3-hover-black" href="#devops">5. DevOps và Triển khai</a>
      <a id="sbar-3-6" class="w3-bar-item w3-button w3-hover-black" href="#security">6. Bảo mật</a>
      <a id="sbar-3-7" class="w3-bar-item w3-button w3-hover-black" href="#testing">7. Testing và Debugging</a>
      <a id="sbar-3-8" class="w3-bar-item w3-button w3-hover-black" href="#optimization">8. Performance Optimization</a>
      <a id="sbar-3-9" class="w3-bar-item w3-button w3-hover-black" href="#authentication">9. User Authentication & Authorization</a>`,
    sections: {}
  },
  'item_4': { 
    name: "Thông tin sinh viên", 
    itemCount: 4,
    sidebar: `<h4 id="sbar-4-0" class="w3-bar-item"></h4>
      <a id="sbar-4-1" class="w3-bar-item w3-button w3-hover-black" href="#academic-info">Thông tin học tập</a>
      <a id="sbar-4-2" class="w3-bar-item w3-button w3-hover-black" href="#skills-info">Kĩ năng</a>
      <a id="sbar-4-3" class="w3-bar-item w3-button w3-hover-black" href="#projects-info">Dự án</a>
      <a id="sbar-4-4" class="w3-bar-item w3-button w3-hover-black" href="#hobbies-info">Sở thích</a>`,
    sections: {}
  }
}