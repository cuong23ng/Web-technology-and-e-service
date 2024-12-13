let index = parseInt(localStorage.getItem('index'));
if (!index) index = 8;
/**
 * Tạo ID duy nhất dựa trên index tự cộng thêm 1 sau một lần sinh
 * @param {String} name - Đơn vị muốn đặt tên (menu, sidebar, content)
 * @returns - ID tương ứng duy nhất
 */
function generateId(name) {
  return `${name}-${index++}`;
}

/**
 * Lấy Link từ menuItemId
 * @param {String} id - ID của MenuItem
 * @returns - Link tương ứng mở trang Menu Item đã chọn
 */
function getLinkFromId(id) {
  return `index.html?page=${id}`
}

/**
 * Hàm lấy giá trị của một query parameter từ URL
 * @param {string} param - Tên của query parameter cần lấy
 * @returns {string|null} - Gía trị của query parameter hoặc null nếu không tìm thấy
 */
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const appData = new AppData();
/**
 * Hàm khởi tạo giá trị
 */
function initializeDefaultData() {
  const content1_1_1 = new ContentItem(
    generateId('content'),
    'Thông tin khai giảng',
    1, 12, { row: 1, column: 1 }, 'text',
    `
    <table class="w3-table w3-striped w3-bordered">
      <tr>
        <th>Thứ</th>
        <td>Thứ 6</td>
      </tr>
      <tr>
        <th>Thời gian/Tiết</th>
        <td>Từ 3 đến 6</td>
      </tr>
      <tr>
        <th>Ngày/Tuần</th>
        <td>2-9,11-18</td>
      </tr>
      <tr>
        <th>Tại địa điểm</th>
        <td>D9-501</td>
      </tr>
    </table>
    `
  );
  const sidebar1_1 = new SidebarItem(
    generateId('sidebar'),
    'Thông tin khai giảng'
  );
  sidebar1_1.addContent(content1_1_1);

  const content1_2_1 = new ContentItem(
    generateId('content'),
    'Thông tin Seminar',
    1, 12, { row: 1, column: 1 }, 'text',
    `
    <table class="w3-table w3-striped w3-bordered">
      <tr>
        <th>Mã lớp</th>
        <td>151900</td>
      </tr>
      <tr>
        <th>Loại hình</th>
        <td>LT+BT</td>
      </tr>
      <tr>
        <th>Hệ</th>
        <td>HEDSPI</td>
      </tr>
      <tr>
        <th>GVHD</th>
        <td>Phạm Huy Hoàng</td>
      </tr>
      <tr>
        <th>Số lần vắng</th>
        <td>0</td>
      </tr>
      <tr>
        <th>Số sinh viên</th>
        <td>150</td>
      </tr>
      <tr>
        <th>Hình thức GD</th>
        <td>Offline</td>
      </tr>
    </table>
    `
  );
  const sidebar1_2 = new SidebarItem(generateId('sidebar'), 'Thông tin Seminar');
  sidebar1_2.addContent(content1_2_1);

  const content1_3_1 = new ContentItem(
    generateId('content'),
    'Thông tin',
    1, 8, { row: 1, column: 1 }, 'text',
    `
    <ul>
      <li><strong>Công ty:</strong> FPT Software</li>
    </ul>
    <p>
      FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với nhiệm vụ chính là gia công phần mềm tại Việt Nam và nước ngoài. Thành lập từ năm 1988 đến nay với 3 Trụ sở chính FPT Software đặt tại Việt Nam và một số nước trên toàn thế giới như Hoa Kỳ, Nhật Bản, Malaysia, Đức, Úc, Singapore, Malaysia, Thái Lan và Philipines hiện FPT Software đáp ứng nhu cầu gia công phần mềm lớn cho hơn 150 công ty hàng đầu tại 20 quốc gia lớn nhất trên thế giới hiện nay với các hợp đồng lớn có khi đạt cả 1 triệu USD dành cho một số đối tác lớn như Hitachi, NEOPOST, Petronas, Deutsche Bank, và Unilever với hơn 4000 nhân viên trên toànthế giới. </p>

    <p>
      FPT Software theo đuổi mục tiêu gia công phần mềm để đáp ứng cho nhu cầu phát triển CNTT của các hãng phần mềm trong nước, các công ty lớn trong nước và tham vọng hơn là xuất khẩu phần mềm trên toàn thế giới cho các công ty nước ngoài biết đến tập đoàn FPT, mục đích chính là vươn đến tầm cao mới thông qua công nghệ nhằm nâng cao năng suất lao động.</p>

    <p>
      Kinh doanh của FPT Software xuất phát từ Công nghệ thông tin và Viễn Thông FPT là cốt lõi để đáp ứng cho khách hàng trên 63 tỉnh thành trên toàn lãnh thổ Việt Nam và mở rộng đến khách hàng toàn cầu. Từ khi được thành lập cho đến nay, FPT Software đã là công ty phần mềm số 1 tại Việt Nam trong lĩnh vực tích hợp hệ thống, phân phối và bán lẻ, dịch vụ Công Nghệ Thông tin, xuất khẩu gia công phần mềm, bán lẻ sản phẩm CNTT. Ở lĩnh vực Viễn Thông FPT là một trong 3 nhà cung cấp dịch vụ internet cáp quang FPT hàng đầu tại Việt Nam. Về lĩnh vực quảng cáo, FPT là đơn vị quảng cáo trực tuyến số 1 tại Việt Nam với trang báo điện tử VNexpress với hơn 42 triệu lượt truy cập mỗi ngày.</p>
    `
  );
  const content1_3_2 = new ContentItem(
    generateId('content'),
    'Ảnh',
    1, 4, { row: 1, column: 9 }, 'text',
    `
    <img src="http://itde.hvnh.edu.vn/public/img/news/files/FPT%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20(2).jpg" class="w3-image w3-round">
    `
  );
  const sidebar1_3 = new SidebarItem(
    generateId('sidebar'),
    'Thông tin công ty'
  );
  sidebar1_3.addContent(content1_3_1);
  sidebar1_3.addContent(content1_3_2);

  let menuId1 = generateId('top-menu');
  const topMenu1 = new TopMenuItem(
    menuId1,
    'Trang chủ',
    getLinkFromId(menuId1),
    'fa-home', false
  );
  topMenu1.addSidebar(sidebar1_1);
  topMenu1.addSidebar(sidebar1_2);
  topMenu1.addSidebar(sidebar1_3);

  appData.addTopMenu(topMenu1);

  // Menu 2
  const content2_1_1 = new ContentItem(
    generateId('content'),
    'Thông tin chung 1',
    1, 6, { row: 1, column: 1 }, 'text',
    `
  <div class="w3-margin-bottom">
      <label>Đơn vị:</label>
      <input class="w3-input w3-border w3-round-large" type="text"
          value="Trường Công nghệ Thông tin và Truyền thông" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Mã học phần:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="IT4409" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Tên học phần:</label>
      <input class="w3-input w3-border w3-round-large" type="text"
          value="Công nghệ Web và dịch vụ trực tuyến" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Tên tiếng Anh:</label>
      <input class="w3-input w3-border w3-round-large" type="text"
          value="Web technologies and e-Services" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Hệ đào tạo:</label>
      <input class="w3-input w3-border w3-round-large" type="text"
          value="Thạc sỹ Khoa học, Kỹ sư chính quy, Cử nhân, Việt-Nhật" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Ngành đào tạo:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="Kỹ thuật phần mềm" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Điều phối viên:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="Phạm Huy Hoàng" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Nhóm chuyên môn:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="Phạm Huy Hoàng" disabled>
  </div>
  `);
  const content2_1_2 = new ContentItem(
    generateId('content'),
    'Thông tin chung 2',
    1, 6, { row: 1, column: 7 }, 'text',
    `
  <div class="w3-margin-bottom">
      <label>Loại hình:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="Lớp" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Số tín chỉ:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="3" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Số giờ LT:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="2" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Số giờ BT:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="2" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Số giờ TN/TH:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="0" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Số giờ tự học:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="6" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Phân bố:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="3(2-2-0-6)" disabled>
  </div>
  <div class="w3-margin-bottom">
      <label>Hình thức thi cuối kỳ:</label>
      <input class="w3-input w3-border w3-round-large" type="text" value="Tự luận" disabled>
  </div>
  `);
  const sidebar2_1 = new SidebarItem(generateId('sidebar'), 'Thông tin chung');
  sidebar2_1.addContent(content2_1_1);
  sidebar2_1.addContent(content2_1_2);

  const content2_2_1 = new ContentItem(
    generateId('content'),
    'Mô tả',
    1, 12, { row: 1, column: 1 }, 'text',
    `
  <p>Mục tiêu: Học phần cung cấp các kiến thức cần thiết để xây dựng và phát triển các ứng dụng, dịch
      vụ trực tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:</p>
  <ul class="w3-ul">
      <li>Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các lĩnh
          vực
          khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng điện tử
          (eCommerce, eLearning, eGoverment,…)</li>
      <li>Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.</li>
  </ul>
  <p>Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái độ
      cần thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.</p>
  `);
  const sidebar2_2 = new SidebarItem(generateId('sidebar'), 'Mô tả tóm tắt học phần (tiếng Việt)');
  sidebar2_2.addContent(content2_2_1);

  const content2_3_1 = new ContentItem(
    generateId('content'),
    'Mô tả',
    1, 12, { row: 1, column: 1 }, 'text',
    `
  <p>Mục tiêu: Học phần cung cấp các kiến thức cần thiết để xây dựng và phát triển các ứng dụng, dịch
      vụ
      trực tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:</p>
  <ul class="w3-ul">
      <li>Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các lĩnh
          vực
          khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng điện tử
          (eCommerce, eLearning, eGoverment,…)</li>
      <li>Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.</li>
  </ul>
  <p>Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái độ
      cần
      thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.</p>
  `);
  const sidebar2_3 = new SidebarItem(generateId('sidebar'), 'Mô tả tóm tắt học phần (tiếng Anh)');
  sidebar2_3.addContent(content2_3_1);

  const content2_4_1 = new ContentItem(
    generateId('content'),
    'Danh sách',
    1, 12, { row: 1, column: 1 }, 'text',
    `
  <ul>
    <li>Web Technologies: A Computer Science Perspective by Jeffrey C. Jackson</li>
    <li>Web Technologies: Concepts, Methodologies, Tools, and Applications by Arthur Tatnall</li>
    <li>Web Technologies: A Computer Science Perspective by Jeffrey C. Jackson</li>
    <li>Web Technologies: Concepts, Methodologies, Tools, and Applications by Arthur Tatnall</li>
  </ul>
  `);
  const sidebar2_4 = new SidebarItem(generateId('sidebar'), 'Sách tham khảo');
  sidebar2_4.addContent(content2_4_1);

  let menuId2 = generateId('top-menu');
  const topMenu2 = new TopMenuItem(menuId2, 'Thông tin môn học', getLinkFromId(menuId2));
  topMenu2.addSidebar(sidebar2_1);
  topMenu2.addSidebar(sidebar2_2);
  topMenu2.addSidebar(sidebar2_3);
  topMenu2.addSidebar(sidebar2_4);

  appData.addTopMenu(topMenu2);

  // Menu 3
  const content3_1_1 = new ContentItem(
    generateId('content'),
    'Nội dung ASP.NET',
    1, 8, { row: 1, column: 1 }, 'text',
    `
  <p><strong>ASP.NET</strong> là một framework phát triển ứng dụng web do Microsoft phát
      triển. Nó cung cấp một nền tảng mạnh mẽ để xây dựng các ứng dụng web, API, và dịch vụ
      trực tuyến.
      ASP.NET hỗ trợ phát triển ứng dụng bằng các ngôn ngữ lập trình như C#, Visual Basic và
      F#.
      Framework này bao gồm các thư viện và công cụ mạnh mẽ để quản lý hiệu suất, bảo mật, và
      tích hợp với các dịch vụ khác như Azure.</p>
  <p>Ưu điểm của ASP.NET:</p>
  <ul class="w3-ul">
      <li>Hỗ trợ mạnh mẽ cho các ứng dụng lớn với khả năng mở rộng cao.</li>
      <li>Có thể tích hợp tốt với các dịch vụ đám mây của Microsoft như Azure.</li>
      <li>Bảo mật cao và hỗ trợ tốt cho quản lý danh tính và quyền truy cập.</li>
  </ul>
  `);
  const content3_1_2 = new ContentItem(
    generateId('content'),
    'Ảnh ASP.NET',
    1, 4, { row: 1, column: 9 }, 'text',
    `
  <img src="assets/aspnet.png" alt="ASP.NET Logo" class="w3-image">
  `);
  const sidebar3_1 = new SidebarItem(generateId('sidebar'), 'ASP.NET');
  sidebar3_1.addContent(content3_1_1);
  sidebar3_1.addContent(content3_1_2);

  const content3_2_1 = new ContentItem(
    generateId('content'),
    'Nội dung SpringBoot',
    1, 8, { row: 1, column: 1 }, 'text',
    `
  <p><strong>SpringBoot</strong> là một framework mã nguồn mở dựa trên Java, được thiết kế để
      tạo các ứng dụng độc lập, sẵn sàng chạy và dễ dàng triển khai. SpringBoot cung cấp một
      cấu trúc dễ dàng cho phát triển ứng dụng web và các API RESTful. Với khả năng quản lý dự
      án và tạo ứng dụng linh hoạt, SpringBoot đã trở thành một trong những framework phổ biến
      nhất trong cộng đồng Java.</p>
  <p>Ưu điểm của SpringBoot:</p>
  <ul class="w3-ul">
      <li>Giảm thiểu cấu hình phức tạp, giúp khởi tạo nhanh chóng các ứng dụng.</li>
      <li>Tích hợp tốt với các công nghệ như Hibernate, JPA để quản lý cơ sở dữ liệu.</li>
      <li>Cộng đồng hỗ trợ lớn và tài liệu phong phú.</li>
  </ul>
  `);
  const content3_2_2 = new ContentItem(
    generateId('content'),
    'Ảnh SpringBoot',
    1, 4, { row: 1, column: 9 }, 'text',
    `
  <img src="assets/Spring.svg" alt="SpringBoot Logo" class="w3-image">
  `);
  const sidebar3_2 = new SidebarItem(generateId('sidebar'), 'SpringBoot');
  sidebar3_2.addContent(content3_2_1);
  sidebar3_2.addContent(content3_2_2);

  const content3_3_1 = new ContentItem(
    generateId('content'),
    'Nội dung ReactJS',
    1, 8, { row: 1, column: 1 }, 'text',
    `
  <p><strong>ReactJS</strong> là một thư viện JavaScript mã nguồn mở, được phát triển bởi Facebook
      để xây dựng giao diện người dùng trên các ứng dụng web đơn trang. ReactJS sử dụng cú pháp
      JSX để tạo các component UI, giúp quản lý trạng thái và hiển thị giao diện một cách dễ dàng
      và linh hoạt.</p>
  <p>Ưu điểm của ReactJS:</p>
  <ul class="w3-ul">
      <li>Hiệu suất cao với Virtual DOM.</li>
      <li>Thích hợp cho các ứng dụng web đơn trang (SPA).</li>
      <li>Thư viện hỗ trợ lớn và cộng đồng phát triển mạnh mẽ.</li>
  </ul>
  `);
  const content3_3_2 = new ContentItem(
    generateId('content'),
    'Ảnh ReactJS',
    1, 4, { row: 1, column: 9 }, 'text',
    `
  <img src="assets/reactjs.png" alt="ReactJS Logo" class="w3-image">
  `);
  const sidebar3_3 = new SidebarItem(generateId('sidebar'), 'ReactJS');
  sidebar3_3.addContent(content3_3_1);
  sidebar3_3.addContent(content3_3_2);

  let menuId3 = generateId('top-menu');
  const topMenu3 = new TopMenuItem(menuId3, 'Các công nghệ Web', getLinkFromId(menuId3));
  topMenu3.addSidebar(sidebar3_1);
  topMenu3.addSidebar(sidebar3_2);
  topMenu3.addSidebar(sidebar3_3);

  appData.addTopMenu(topMenu3);
}

/**
 * Hàm lưu dữ liệu vào localStorage
 */
function saveAppData() {
  const data = {
    topMenus: appData.topMenus.map(menu => ({
      id: menu.id,
      name: menu.name,
      link: menu.link,
      icon: menu.icon,
      editable: menu.editable,
      sidebars: menu.sidebars.map(sidebar => ({
        id: sidebar.id,
        name: sidebar.name,
        contents: sidebar.contents.map(content => ({
          id: content.id,
          name: content.name,
          rowSpan: content.rowSpan,
          columnSpan: content.columnSpan,
          position: content.position,
          contentType: content.contentType,
          htmlContent: content.htmlContent
        }))
      }))     
    }))
  };
  localStorage.setItem('appData', JSON.stringify(data));
  localStorage.setItem('index', index);
}

/**
 * Hàm để tải dữ liệu từ localStorage hoặc khởi tạo dữ liệu mặc định
 */
function loadAppData() {
  const data = localStorage.getItem('appData');
  if (data) {
    const parsed = JSON.parse(data);
    // Clear appData
    appData.topMenus = [];
    appData.topMenus = parsed.topMenus.map(menu => {
      const topMenu = new TopMenuItem(menu.id, menu.name, menu.link, menu.icon, menu.editable);
      topMenu.sidebars = menu.sidebars.map(sidebar => {
        const sb = new SidebarItem(sidebar.id, sidebar.name);
        sb.contents = sidebar.contents.map(content => new ContentItem(
          content.id,
          content.name,
          content.rowSpan,
          content.columnSpan,
          content.position,
          content.contentType,
          content.htmlContent
        ));
        return sb;
      });
      return topMenu;
    });
  } else {
    initializeDefaultData();
    saveAppData();
  }
}
