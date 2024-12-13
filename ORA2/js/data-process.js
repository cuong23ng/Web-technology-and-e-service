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

  // Wikipedia Page | Menu 5
  const content5_1_1 = new ContentItem(
    generateId('content'),
    'Semantic web',
    1, 12, { row: 1, column: 1}, 'wikiPage',
    `<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr"><div class="shortdescription nomobile noexcerpt noprint searchaux" style="display:none">Extension of the Web to facilitate data exchange</div>
<p class="mw-empty-elt">
</p>
<figure typeof="mw:File/Thumb"><a href="/wiki/File:Rdf-graph2.png" class="mw-file-description"><img src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Rdf-graph2.png/266px-Rdf-graph2.png" decoding="async" width="266" height="108" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Rdf-graph2.png/399px-Rdf-graph2.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Rdf-graph2.png/532px-Rdf-graph2.png 2x" data-file-width="796" data-file-height="322"></a><figcaption>A <a href="/wiki/Tag_cloud" title="Tag cloud">tag cloud</a> (a typical Web 3.0 phenomenon in itself) presenting Web 3.0 themes</figcaption></figure>
<style data-mw-deduplicate="TemplateStyles:r1129693374">.mw-parser-output .hlist dl,.mw-parser-output .hlist ol,.mw-parser-output .hlist ul{margin:0;padding:0}.mw-parser-output .hlist dd,.mw-parser-output .hlist dt,.mw-parser-output .hlist li{margin:0;display:inline}.mw-parser-output .hlist.inline,.mw-parser-output .hlist.inline dl,.mw-parser-output .hlist.inline ol,.mw-parser-output .hlist.inline ul,.mw-parser-output .hlist dl dl,.mw-parser-output .hlist dl ol,.mw-parser-output .hlist dl ul,.mw-parser-output .hlist ol dl,.mw-parser-output .hlist ol ol,.mw-parser-output .hlist ol ul,.mw-parser-output .hlist ul dl,.mw-parser-output .hlist ul ol,.mw-parser-output .hlist ul ul{display:inline}.mw-parser-output .hlist .mw-empty-li{display:none}.mw-parser-output .hlist dt::after{content:": "}.mw-parser-output .hlist dd::after,.mw-parser-output .hlist li::after{content:" · ";font-weight:bold}.mw-parser-output .hlist dd:last-child::after,.mw-parser-output .hlist dt:last-child::after,.mw-parser-output .hlist li:last-child::after{content:none}.mw-parser-output .hlist dd dd:first-child::before,.mw-parser-output .hlist dd dt:first-child::before,.mw-parser-output .hlist dd li:first-child::before,.mw-parser-output .hlist dt dd:first-child::before,.mw-parser-output .hlist dt dt:first-child::before,.mw-parser-output .hlist dt li:first-child::before,.mw-parser-output .hlist li dd:first-child::before,.mw-parser-output .hlist li dt:first-child::before,.mw-parser-output .hlist li li:first-child::before{content:" (";font-weight:normal}.mw-parser-output .hlist dd dd:last-child::after,.mw-parser-output .hlist dd dt:last-child::after,.mw-parser-output .hlist dd li:last-child::after,.mw-parser-output .hlist dt dd:last-child::after,.mw-parser-output .hlist dt dt:last-child::after,.mw-parser-output .hlist dt li:last-child::after,.mw-parser-output .hlist li dd:last-child::after,.mw-parser-output .hlist li dt:last-child::after,.mw-parser-output .hlist li li:last-child::after{content:")";font-weight:normal}.mw-parser-output .hlist ol{counter-reset:listitem}.mw-parser-output .hlist ol>li{counter-increment:listitem}.mw-parser-output .hlist ol>li::before{content:" "counter(listitem)"\a0 "}.mw-parser-output .hlist dd ol>li:first-child::before,.mw-parser-output .hlist dt ol>li:first-child::before,.mw-parser-output .hlist li ol>li:first-child::before{content:" ("counter(listitem)"\a0 "}</style><style data-mw-deduplicate="TemplateStyles:r1126788409">.mw-parser-output .plainlist ol,.mw-parser-output .plainlist ul{line-height:inherit;list-style:none;margin:0;padding:0}.mw-parser-output .plainlist ol li,.mw-parser-output .plainlist ul li{margin-bottom:0}</style><style data-mw-deduplicate="TemplateStyles:r1246091330">.mw-parser-output .sidebar{width:22em;float:right;clear:right;margin:0.5em 0 1em 1em;background:var(--background-color-neutral-subtle,#f8f9fa);border:1px solid var(--border-color-base,#a2a9b1);padding:0.2em;text-align:center;line-height:1.4em;font-size:88%;border-collapse:collapse;display:table}body.skin-minerva .mw-parser-output .sidebar{display:table!important;float:right!important;margin:0.5em 0 1em 1em!important}.mw-parser-output .sidebar-subgroup{width:100%;margin:0;border-spacing:0}.mw-parser-output .sidebar-left{float:left;clear:left;margin:0.5em 1em 1em 0}.mw-parser-output .sidebar-none{float:none;clear:both;margin:0.5em 1em 1em 0}.mw-parser-output .sidebar-outer-title{padding:0 0.4em 0.2em;font-size:125%;line-height:1.2em;font-weight:bold}.mw-parser-output .sidebar-top-image{padding:0.4em}.mw-parser-output .sidebar-top-caption,.mw-parser-output .sidebar-pretitle-with-top-image,.mw-parser-output .sidebar-caption{padding:0.2em 0.4em 0;line-height:1.2em}.mw-parser-output .sidebar-pretitle{padding:0.4em 0.4em 0;line-height:1.2em}.mw-parser-output .sidebar-title,.mw-parser-output .sidebar-title-with-pretitle{padding:0.2em 0.8em;font-size:145%;line-height:1.2em}.mw-parser-output .sidebar-title-with-pretitle{padding:0.1em 0.4em}.mw-parser-output .sidebar-image{padding:0.2em 0.4em 0.4em}.mw-parser-output .sidebar-heading{padding:0.1em 0.4em}.mw-parser-output .sidebar-content{padding:0 0.5em 0.4em}.mw-parser-output .sidebar-content-with-subgroup{padding:0.1em 0.4em 0.2em}.mw-parser-output .sidebar-above,.mw-parser-output .sidebar-below{padding:0.3em 0.8em;font-weight:bold}.mw-parser-output .sidebar-collapse .sidebar-above,.mw-parser-output .sidebar-collapse .sidebar-below{border-top:1px solid #aaa;border-bottom:1px solid #aaa}.mw-parser-output .sidebar-navbar{text-align:right;font-size:115%;padding:0 0.4em 0.4em}.mw-parser-output .sidebar-list-title{padding:0 0.4em;text-align:left;font-weight:bold;line-height:1.6em;font-size:105%}.mw-parser-output .sidebar-list-title-c{padding:0 0.4em;text-align:center;margin:0 3.3em}@media(max-width:640px){body.mediawiki .mw-parser-output .sidebar{width:100%!important;clear:both;float:none!important;margin-left:0!important;margin-right:0!important}}body.skin--responsive .mw-parser-output .sidebar a>img{max-width:none!important}@media screen{html.skin-theme-clientpref-night .mw-parser-output .sidebar:not(.notheme) .sidebar-list-title,html.skin-theme-clientpref-night .mw-parser-output .sidebar:not(.notheme) .sidebar-title-with-pretitle{background:transparent!important}html.skin-theme-clientpref-night .mw-parser-output .sidebar:not(.notheme) .sidebar-title-with-pretitle a{color:var(--color-progressive)!important}}@media screen and (prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .sidebar:not(.notheme) .sidebar-list-title,html.skin-theme-clientpref-os .mw-parser-output .sidebar:not(.notheme) .sidebar-title-with-pretitle{background:transparent!important}html.skin-theme-clientpref-os .mw-parser-output .sidebar:not(.notheme) .sidebar-title-with-pretitle a{color:var(--color-progressive)!important}}@media print{body.ns-0 .mw-parser-output .sidebar{display:none!important}}</style><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1126788409"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1246091330"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1126788409"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1246091330"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><table class="sidebar nomobile nowraplinks" style="width:19.0em"><tbody><tr><th class="sidebar-title" style="background:#ccccff;border-bottom:#fafafa solid 1px;"><a href="/wiki/Semantics" title="Semantics">Semantics</a></th></tr><tr><th class="sidebar-heading" style="background:#ddddff;font-size:105%;">
<div class="hlist"><ul><li><a href="/wiki/Formal_semantics_(linguistics)" class="mw-redirect" title="Formal semantics (linguistics)">Linguistic</a></li><li><a href="/wiki/Formal_semantics_(logic)" class="mw-redirect" title="Formal semantics (logic)">Logical</a></li></ul></div></th></tr><tr><td class="sidebar-content plainlist" style="padding-top:0.15em;padding-bottom:0.6em;">
<table class="sidebar nomobile nowraplinks" style="background-color: transparent; color: var( --color-base ); border-collapse:collapse; border-spacing:0px; border:none; width:100%; margin:0px; font-size:100%; clear:none; float:none"><tbody><tr><th class="sidebar-heading">
Subfields</th></tr><tr><td class="sidebar-content plainlist">
<div class="hlist">
<ul><li><a href="/wiki/Computational_semantics" title="Computational semantics">Computational</a></li>
<li><a href="/wiki/Lexical_semantics" title="Lexical semantics">Lexical</a> (<a href="/wiki/Lexis_(linguistics)" title="Lexis (linguistics)">lexis</a>, <a href="/wiki/Lexicology" title="Lexicology">lexicology</a>)</li>
<li><a href="/wiki/Statistical_semantics" title="Statistical semantics">Statistical</a></li>
<li><a href="/wiki/Structural_semantics" title="Structural semantics">Structural</a></li></ul>
</div></td>
</tr><tr><th class="sidebar-heading">
Topics</th></tr><tr><td class="sidebar-content plainlist">
<ul><li><a href="/wiki/Semantic_analysis_(linguistics)" title="Semantic analysis (linguistics)">Analysis</a></li>
<li><a href="/wiki/Compositionality" class="mw-redirect" title="Compositionality">Compositionality</a></li>
<li><a href="/wiki/Context_(language_use)" class="mw-redirect" title="Context (language use)">Context (language use)</a></li>
<li><div class="hlist"><ul><li><a href="/wiki/Prototype_theory" title="Prototype theory">Prototype theory</a></li><li><a href="/wiki/Force_dynamics" title="Force dynamics">Force dynamics</a></li></ul></div></li>
<li><a href="/wiki/Semantic_feature" title="Semantic feature">Semantic feature</a></li>
<li><a href="/wiki/Semantic_gap" title="Semantic gap">Semantic gap</a></li>
<li><a href="/wiki/Theory_of_descriptions" title="Theory of descriptions">Theory of descriptions</a></li></ul></td>
</tr><tr><th class="sidebar-heading">
Analysis</th></tr><tr><td class="sidebar-content plainlist">
<div class="hlist">
<ul><li><a href="/wiki/Latent_semantic_analysis" title="Latent semantic analysis">Latent</a></li>
<li><a href="/wiki/Semantic_analysis_(computational)" title="Semantic analysis (computational)">Computational</a></li>
<li><a href="/wiki/Semantic_analysis_(machine_learning)" title="Semantic analysis (machine learning)">Machine-learning</a></li></ul>
</div></td>
</tr><tr><th class="sidebar-heading">
Applications</th></tr><tr><td class="sidebar-content plainlist">
<ul><li><a href="/wiki/Semantic_file_system" title="Semantic file system">Semantic file system</a></li>
<li><a href="/wiki/Semantic_desktop" title="Semantic desktop">Semantic desktop</a></li>
<li><a href="/wiki/Semantic_matching" title="Semantic matching">Semantic matching</a></li>
<li><a href="/wiki/Semantic_parsing" title="Semantic parsing">Semantic parsing</a></li>
<li><a href="/wiki/Semantic_similarity" title="Semantic similarity">Semantic similarity</a></li>
<li><a href="/wiki/Semantic_query" title="Semantic query">Semantic query</a></li>
<li><div class="hlist"><ul><li><a class="mw-selflink selflink">Semantic Web</a></li><li><a href="/wiki/Semantic_wiki" title="Semantic wiki">Semantic wiki</a></li></ul></div></li></ul></td>
</tr></tbody></table></td>
</tr><tr><th class="sidebar-heading" style="background:#ddddff;font-size:105%;">
<a href="/wiki/Semantics_(computer_science)" title="Semantics (computer science)">Semantics of<br>programming languages</a></th></tr><tr><td class="sidebar-content plainlist" style="padding-top:0.15em;padding-bottom:0.6em;">
<table class="sidebar nomobile nowraplinks" style="background-color: transparent; color: var( --color-base ); border-collapse:collapse; border-spacing:0px; border:none; width:100%; margin:0px; font-size:100%; clear:none; float:none"><tbody><tr><th class="sidebar-heading">
Types</th></tr><tr><td class="sidebar-content plainlist">
<div class="hlist">
<ul><li><a href="/wiki/Action_semantics" title="Action semantics">Action</a></li>
<li><a href="/wiki/Algebraic_semantics_(computer_science)" title="Algebraic semantics (computer science)">Algebraic</a></li>
<li><a href="/wiki/Axiomatic_semantics" title="Axiomatic semantics">Axiomatic</a></li>
<li><a href="/wiki/Categorical_logic" title="Categorical logic">Categorical</a></li>
<li><a href="/wiki/Concurrency_semantics" title="Concurrency semantics">Concurrency</a></li>
<li><a href="/wiki/Denotational_semantics" title="Denotational semantics">Denotational</a></li>
<li><a href="/wiki/Game_semantics" title="Game semantics">Game</a></li>
<li><a href="/wiki/Operational_semantics" title="Operational semantics">Operational</a></li>
<li><a href="/wiki/Predicate_transformer_semantics" title="Predicate transformer semantics">Predicate transformational</a></li></ul>
</div></td>
</tr><tr><th class="sidebar-heading">
Theory</th></tr><tr><td class="sidebar-content plainlist">
<ul><li><a href="/wiki/Abstract_interpretation" title="Abstract interpretation">Abstract interpretation</a></li>
<li><a href="/wiki/Abstract_semantic_graph" title="Abstract semantic graph">Abstract semantic graph</a></li></ul></td>
</tr></tbody></table></td>
</tr><tr><td class="sidebar-below hlist" style="background:#ddddff">
<ul><li><a href="/wiki/Language" title="Language">Language</a></li>
<li><a href="/wiki/Linguistics" title="Linguistics">Linguistics</a></li></ul></td></tr><tr><td class="sidebar-navbar"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><style data-mw-deduplicate="TemplateStyles:r1239400231">.mw-parser-output .navbar{display:inline;font-size:88%;font-weight:normal}.mw-parser-output .navbar-collapse{float:left;text-align:left}.mw-parser-output .navbar-boxtext{word-spacing:0}.mw-parser-output .navbar ul{display:inline-block;white-space:nowrap;line-height:inherit}.mw-parser-output .navbar-brackets::before{margin-right:-0.125em;content:"[ "}.mw-parser-output .navbar-brackets::after{margin-left:-0.125em;content:" ]"}.mw-parser-output .navbar li{word-spacing:-0.125em}.mw-parser-output .navbar a>span,.mw-parser-output .navbar a>abbr{text-decoration:inherit}.mw-parser-output .navbar-mini abbr{font-variant:small-caps;border-bottom:none;text-decoration:none;cursor:inherit}.mw-parser-output .navbar-ct-full{font-size:114%;margin:0 7em}.mw-parser-output .navbar-ct-mini{font-size:114%;margin:0 4em}html.skin-theme-clientpref-night .mw-parser-output .navbar li a abbr{color:var(--color-base)!important}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .navbar li a abbr{color:var(--color-base)!important}}@media print{.mw-parser-output .navbar{display:none!important}}</style><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:Semantics" title="Template:Semantics"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:Semantics" title="Template talk:Semantics"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a href="/wiki/Special:EditPage/Template:Semantics" title="Special:EditPage/Template:Semantics"><abbr title="Edit this template">e</abbr></a></li></ul></div></td></tr></tbody></table>
<p>The <b>Semantic Web</b>, sometimes known as <b>Web 3.0</b> (not to be confused with <a href="/wiki/Web3" title="Web3">Web3</a>), is an extension of the <a href="/wiki/World_Wide_Web" title="World Wide Web">World Wide Web</a> through standards<sup id="cite_ref-1" class="reference"><a href="#cite_note-1"><span class="cite-bracket">[</span>1<span class="cite-bracket">]</span></a></sup> set by the <a href="/wiki/World_Wide_Web_Consortium" title="World Wide Web Consortium">World Wide Web Consortium</a> (W3C). The goal of the Semantic Web is to make <a href="/wiki/Internet" title="Internet">Internet</a> data <a href="/wiki/Machine-readable" class="mw-redirect" title="Machine-readable">machine-readable</a>.
</p><p>To enable the encoding of <a href="/wiki/Semantics" title="Semantics">semantics</a> with the data, technologies such as <a href="/wiki/Resource_Description_Framework" title="Resource Description Framework">Resource Description Framework</a> (RDF)<sup id="cite_ref-2" class="reference"><a href="#cite_note-2"><span class="cite-bracket">[</span>2<span class="cite-bracket">]</span></a></sup> and <a href="/wiki/Web_Ontology_Language" title="Web Ontology Language">Web Ontology Language</a> (OWL)<sup id="cite_ref-3" class="reference"><a href="#cite_note-3"><span class="cite-bracket">[</span>3<span class="cite-bracket">]</span></a></sup> are used. These technologies are used to formally represent <a href="/wiki/Metadata" title="Metadata">metadata</a>. For example, <a href="/wiki/Ontology_(information_science)" title="Ontology (information science)">ontology</a> can describe <a href="/wiki/Concept" title="Concept">concepts</a>, relationships between <a href="/wiki/Entity%E2%80%93relationship_model" title="Entity–relationship model">entities</a>, and categories of things. These embedded semantics offer significant advantages such as <a href="/wiki/Reasoning_engine" class="mw-redirect" title="Reasoning engine">reasoning</a> over data and operating with heterogeneous data sources.<sup id="cite_ref-4" class="reference"><a href="#cite_note-4"><span class="cite-bracket">[</span>4<span class="cite-bracket">]</span></a></sup>
These standards promote common data formats and exchange protocols on the Web, fundamentally the RDF. According to the W3C, "The Semantic Web provides a common framework that allows data to be shared and reused across application, enterprise, and community boundaries."<sup id="cite_ref-W3C-SWA_5-0" class="reference"><a href="#cite_note-W3C-SWA-5"><span class="cite-bracket">[</span>5<span class="cite-bracket">]</span></a></sup> The Semantic Web is therefore regarded as an integrator across different content and information applications and systems.
</p>
<meta property="mw:PageProp/toc">
<div class="mw-heading mw-heading2"><h2 id="History">History</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=1" title="Edit section: History"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>The term was coined by <a href="/wiki/Tim_Berners-Lee" title="Tim Berners-Lee">Tim Berners-Lee</a> for a web of data (or <b>data web</b>)<sup id="cite_ref-6" class="reference"><a href="#cite_note-6"><span class="cite-bracket">[</span>6<span class="cite-bracket">]</span></a></sup> that can be processed by machines<sup id="cite_ref-Berners-Lee_7-0" class="reference"><a href="#cite_note-Berners-Lee-7"><span class="cite-bracket">[</span>7<span class="cite-bracket">]</span></a></sup>—that is, one in which much of the <a href="/wiki/Meaning_(linguistics)" class="mw-redirect" title="Meaning (linguistics)">meaning</a> is <a href="/wiki/Machine-readable_data" class="mw-redirect" title="Machine-readable data">machine-readable</a>. While its critics have questioned its feasibility, proponents argue that applications in <a href="/wiki/Library_science" class="mw-redirect" title="Library science">library</a> and <a href="/wiki/Information_science" title="Information science">information science</a>, industry, <a href="/wiki/Biology" title="Biology">biology</a> and <a href="/wiki/Human_science" title="Human science">human sciences</a> research have already proven the validity of the original concept.<sup id="cite_ref-8" class="reference"><a href="#cite_note-8"><span class="cite-bracket">[</span>8<span class="cite-bracket">]</span></a></sup>
</p><p>Berners-Lee originally expressed his vision of the Semantic Web in 1999 as follows:
</p>
<style data-mw-deduplicate="TemplateStyles:r1244412712">.mw-parser-output .templatequote{overflow:hidden;margin:1em 0;padding:0 32px}.mw-parser-output .templatequotecite{line-height:1.5em;text-align:left;margin-top:0}@media(min-width:500px){.mw-parser-output .templatequotecite{padding-left:1.6em}}</style><blockquote class="templatequote"><p>I have a dream for the Web [in which computers] become capable of analyzing all the data on the Web&nbsp;– the content, links, and transactions between people and computers. A "Semantic Web", which makes this possible, has yet to emerge, but when it does, the day-to-day mechanisms of trade, bureaucracy and our daily lives will be handled by machines talking to machines. The "<a href="/wiki/Intelligent_agent" title="Intelligent agent">intelligent agents</a>" people have touted for ages will finally materialize.<sup id="cite_ref-9" class="reference"><a href="#cite_note-9"><span class="cite-bracket">[</span>9<span class="cite-bracket">]</span></a></sup></p></blockquote>
<p>The 2001 <i><a href="/wiki/Scientific_American" title="Scientific American">Scientific American</a></i> article by Berners-Lee, <a href="/wiki/James_Hendler" title="James Hendler">Hendler</a>, and <a href="/wiki/Ora_Lassila" title="Ora Lassila">Lassila</a> described an expected evolution of the existing Web to a Semantic Web.<sup id="cite_ref-10" class="reference"><a href="#cite_note-10"><span class="cite-bracket">[</span>10<span class="cite-bracket">]</span></a></sup> In 2006, Berners-Lee and colleagues stated that: "This simple idea…remains largely unrealized".<sup id="cite_ref-11" class="reference"><a href="#cite_note-11"><span class="cite-bracket">[</span>11<span class="cite-bracket">]</span></a></sup>
In 2013, more than four million Web domains (out of roughly 250 million total) contained Semantic Web markup.<sup id="cite_ref-12" class="reference"><a href="#cite_note-12"><span class="cite-bracket">[</span>12<span class="cite-bracket">]</span></a></sup>
</p>
<div class="mw-heading mw-heading2"><h2 id="Example">Example</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=2" title="Edit section: Example"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>In the following example, the text "Paul Schuster was born in Dresden" on a website will be annotated, connecting a person with their place of birth. The following <a href="/wiki/HTML" title="HTML">HTML</a> fragment shows how a small graph is being described, in <a href="/wiki/RDFa" title="RDFa">RDFa</a>-syntax using a <a href="/wiki/Schema.org" title="Schema.org">schema.org</a> vocabulary and a <a href="/wiki/Wikidata" title="Wikidata">Wikidata</a> ID:
</p>
<div class="mw-highlight mw-highlight-lang-html mw-content-ltr" dir="ltr"><pre><span></span><span class="p">&lt;</span><span class="nt">div</span> <span class="na">vocab</span><span class="o">=</span><span class="s">"https://schema.org/"</span> <span class="na">typeof</span><span class="o">=</span><span class="s">"Person"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">span</span> <span class="na">property</span><span class="o">=</span><span class="s">"name"</span><span class="p">&gt;</span>Paul Schuster<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span> was born in
  <span class="p">&lt;</span><span class="nt">span</span> <span class="na">property</span><span class="o">=</span><span class="s">"birthPlace"</span> <span class="na">typeof</span><span class="o">=</span><span class="s">"Place"</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://www.wikidata.org/entity/Q1731"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">property</span><span class="o">=</span><span class="s">"name"</span><span class="p">&gt;</span>Dresden<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>.
  <span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</pre></div>
<figure typeof="mw:File/Frame"><a href="/wiki/File:RDF_example.svg" class="mw-file-description"><img src="//upload.wikimedia.org/wikipedia/commons/thumb/0/09/RDF_example.svg/512px-RDF_example.svg.png" decoding="async" width="512" height="241" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/09/RDF_example.svg/768px-RDF_example.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/09/RDF_example.svg/1024px-RDF_example.svg.png 2x" data-file-width="512" data-file-height="241"></a><figcaption><span class="anchor" id="graph1"></span>Graph resulting from the RDFa example</figcaption></figure><div style="clear:both;" class=""></div>
<p>The example defines the following five <a href="/wiki/Semantic_triple" title="Semantic triple">triples</a> (shown in <a href="/wiki/Turtle_(syntax)" title="Turtle (syntax)">Turtle</a> syntax). Each triple represents one edge in the resulting graph: the first element of the triple (the <i>subject</i>) is the name of the node where the edge starts, the second element (the <i>predicate</i>) the type of the edge, and the last and third element (the <i>object</i>) either the name of the node where the edge ends or a literal value (e.g. a text, a number, etc.).
</p>
<div class="mw-highlight mw-highlight-lang-turtle mw-content-ltr" dir="ltr"><pre><span></span> <span class="nn">_</span><span class="p">:</span><span class="nt">a</span> <span class="nv">&lt;https://www.w3.org/1999/02/22-rdf-syntax-ns#type&gt;</span> <span class="nv">&lt;https://schema.org/Person&gt;</span> <span class="p">.</span>
 <span class="nn">_</span><span class="p">:</span><span class="nt">a</span> <span class="nv">&lt;https://schema.org/name&gt;</span> <span class="s">"Paul Schuster"</span> <span class="p">.</span>
 <span class="nn">_</span><span class="p">:</span><span class="nt">a</span> <span class="nv">&lt;https://schema.org/birthPlace&gt;</span> <span class="nv">&lt;https://www.wikidata.org/entity/Q1731&gt;</span> <span class="p">.</span>
 <span class="nv">&lt;https://www.wikidata.org/entity/Q1731&gt;</span> <span class="nv">&lt;https://schema.org/itemtype&gt;</span> <span class="nv">&lt;https://schema.org/Place&gt;</span> <span class="p">.</span>
 <span class="nv">&lt;https://www.wikidata.org/entity/Q1731&gt;</span> <span class="nv">&lt;https://schema.org/name&gt;</span> <span class="s">"Dresden"</span> <span class="p">.</span>
</pre></div>
<p>The triples result in the graph shown in <a href="#graph1">the given figure</a>.
</p>
<figure typeof="mw:File/Frame"><a href="/wiki/File:RDF_example_extended.svg" class="mw-file-description"><img src="//upload.wikimedia.org/wikipedia/commons/thumb/7/7c/RDF_example_extended.svg/512px-RDF_example_extended.svg.png" decoding="async" width="512" height="259" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/7c/RDF_example_extended.svg/768px-RDF_example_extended.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/7c/RDF_example_extended.svg/1024px-RDF_example_extended.svg.png 2x" data-file-width="512" data-file-height="259"></a><figcaption>Graph resulting from the RDFa example, enriched with further data from the Web</figcaption></figure>
<p>One of the advantages of using <a href="/wiki/Uniform_Resource_Identifier" title="Uniform Resource Identifier">Uniform Resource Identifiers (URIs)</a> is that they can be dereferenced using the <a href="/wiki/HTTP" title="HTTP">HTTP</a> protocol. According to the so-called <a href="/wiki/Linked_Open_Data" class="mw-redirect" title="Linked Open Data">Linked Open Data</a> principles, such a dereferenced URI should result in a document that offers further data about the given URI. In this example, all URIs, both for edges and nodes (e.g. <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">http://schema.org/Person</code>, <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">http://schema.org/birthPlace</code>, <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">http://www.wikidata.org/entity/Q1731</code>) can be dereferenced and will result in further RDF graphs, describing the URI, e.g. that Dresden is a city in Germany, or that a person, in the sense of that URI, can be fictional.
</p><p>The second graph shows the previous example, but now enriched with a few of the triples from the documents that result from dereferencing <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">https://schema.org/Person</code> (green edge) and <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">https://www.wikidata.org/entity/Q1731</code> (blue edges).
</p><p>Additionally to the edges given in the involved documents explicitly, edges can be automatically inferred: the triple
</p>
<div class="mw-highlight mw-highlight-lang-turtle mw-content-ltr" dir="ltr"><pre><span></span> <span class="nn">_</span><span class="p">:</span><span class="nt">a</span> <span class="nv">&lt;https://www.w3.org/1999/02/22-rdf-syntax-ns#type&gt;</span> <span class="nv">&lt;http://schema.org/Person&gt;</span> <span class="p">.</span>
</pre></div>
<p>from the original RDFa fragment and the triple
</p>
<div class="mw-highlight mw-highlight-lang-turtle mw-content-ltr" dir="ltr"><pre><span></span> <span class="nv">&lt;https://schema.org/Person&gt;</span> <span class="nv">&lt;http://www.w3.org/2002/07/owl#equivalentClass&gt;</span> <span class="nv">&lt;http://xmlns.com/foaf/0.1/Person&gt;</span> <span class="p">.</span>
</pre></div>
<p>from the document at <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">https://schema.org/Person</code> (green edge in the figure) allow to infer the following triple, given <a href="/wiki/Web_Ontology_Language" title="Web Ontology Language">OWL</a> semantics (red dashed line in the second Figure):
</p>
<div class="mw-highlight mw-highlight-lang-turtle mw-content-ltr" dir="ltr"><pre><span></span> <span class="nn">_</span><span class="p">:</span><span class="nt">a</span> <span class="nv">&lt;https://www.w3.org/1999/02/22-rdf-syntax-ns#type&gt;</span> <span class="nv">&lt;http://xmlns.com/foaf/0.1/Person&gt;</span> <span class="p">.</span>
</pre></div>
<div class="mw-heading mw-heading2"><h2 id="Background">Background</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=3" title="Edit section: Background"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<style data-mw-deduplicate="TemplateStyles:r1236090951">.mw-parser-output .hatnote{font-style:italic}.mw-parser-output div.hatnote{padding-left:1.6em;margin-bottom:0.5em}.mw-parser-output .hatnote i{font-style:normal}.mw-parser-output .hatnote+link+.hatnote{margin-top:-0.5em}@media print{body.ns-0 .mw-parser-output .hatnote{display:none!important}}</style><div role="note" class="hatnote navigation-not-searchable">Further information: <a href="/wiki/Semantic_network#History" title="Semantic network">Semantic network §&nbsp;History</a></div>
<p>The concept of the <a href="/wiki/Semantic_network" title="Semantic network">semantic network</a> model was formed in the early 1960s by researchers such as the <a href="/wiki/Cognitive_science" title="Cognitive science">cognitive scientist</a> <a href="/wiki/Allan_M._Collins" title="Allan M. Collins">Allan M. Collins</a>, <a href="/wiki/Linguistics" title="Linguistics">linguist</a> <a href="/w/index.php?title=Ross_Quillian&amp;action=edit&amp;redlink=1" class="new" title="Ross Quillian (page does not exist)">Ross Quillian</a> and <a href="/wiki/Psychologist" title="Psychologist">psychologist</a> <a href="/wiki/Elizabeth_F._Loftus" class="mw-redirect" title="Elizabeth F. Loftus">Elizabeth F. Loftus</a> as a form to represent semantically structured knowledge. When applied in the context of the modern internet, it extends the network of <a href="/wiki/Hyperlink" title="Hyperlink">hyperlinked</a> human-readable <a href="/wiki/Web_pages" class="mw-redirect" title="Web pages">web pages</a> by inserting machine-readable metadata about pages and how they are related to each other.  This enables <a href="/wiki/Web_crawler" title="Web crawler">automated agents</a> to access the Web more intelligently and perform more tasks on behalf of users. The term "Semantic Web" was coined by <a href="/wiki/Tim_Berners-Lee" title="Tim Berners-Lee">Tim Berners-Lee</a>,<sup id="cite_ref-Berners-Lee_7-1" class="reference"><a href="#cite_note-Berners-Lee-7"><span class="cite-bracket">[</span>7<span class="cite-bracket">]</span></a></sup> the inventor of the World Wide Web and director of the World Wide Web Consortium ("<a href="/wiki/W3C" class="mw-redirect" title="W3C">W3C</a>"), which oversees the development of proposed Semantic Web standards. He defines the Semantic Web as "a web of data that can be processed directly and indirectly by machines".
</p><p>Many of the technologies proposed by the W3C already existed before they were positioned under the W3C umbrella. These are used in various contexts, particularly those dealing with information that encompasses a limited and defined domain, and where sharing data is a common necessity, such as scientific research or data exchange among businesses. In addition, other technologies with similar goals have emerged, such as <a href="/wiki/Microformat" title="Microformat">microformats</a>.
</p>
<div class="mw-heading mw-heading3"><h3 id="Limitations_of_HTML">Limitations of HTML</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=4" title="Edit section: Limitations of HTML"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Many files on a typical computer can also be loosely divided into human-readable documents and machine-readable data. Documents like mail messages, reports, and brochures are read by humans. Data, such as calendars, address books, playlists, and spreadsheets are presented using an application program that lets them be viewed, searched, and combined.
</p><p>Currently, the World Wide Web is based mainly on documents written in <a href="/wiki/Hypertext_Markup_Language" class="mw-redirect" title="Hypertext Markup Language">Hypertext Markup Language</a> (HTML), a markup convention that is used for coding a body of text interspersed with multimedia objects such as images and interactive forms. Metadata tags provide a method by which computers can categorize the content of web pages. In the examples below, the field names "keywords", "description" and "author" are assigned values such as "computing", and "cheap widgets for sale" and "John Doe".
</p>
<div class="mw-highlight mw-highlight-lang-html mw-content-ltr" dir="ltr"><pre><span></span><span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"keywords"</span> <span class="na">content</span><span class="o">=</span><span class="s">"computing, computer studies, computer"</span> <span class="p">/&gt;</span>
<span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"description"</span> <span class="na">content</span><span class="o">=</span><span class="s">"Cheap widgets for sale"</span> <span class="p">/&gt;</span>
<span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"author"</span> <span class="na">content</span><span class="o">=</span><span class="s">"John Doe"</span> <span class="p">/&gt;</span>
</pre></div>
<p>Because of this metadata tagging and categorization, other computer systems that want to access and share this data can easily identify the relevant values.
</p><p>With HTML and a tool to render it (perhaps <a href="/wiki/Web_browser" title="Web browser">web browser</a> software, perhaps another <a href="/wiki/User_agent" title="User agent">user agent</a>), one can create and present a page that lists items for sale. The HTML of this catalog page can make simple, document-level assertions such as "this document's title is 'Widget Superstore<span style="padding-right:.15em;">'</span>", but there is no capability within the HTML itself to assert unambiguously that, for example, item number X586172 is an Acme Gizmo with a retail price of €199, or that it is a consumer product. Rather, HTML can only say that the span of text "X586172" is something that should be positioned near "Acme Gizmo" and "€199", etc. There is no way to say "this is a catalog" or even to establish that "Acme Gizmo" is a kind of title or that "€199" is a price. There is also no way to express that these pieces of information are bound together in describing a discrete item, distinct from other items perhaps listed on the page.
</p><p><a href="/wiki/Semantic_HTML" title="Semantic HTML">Semantic HTML</a> refers to the traditional HTML practice of markup following intention, rather than specifying layout details directly. For example, the use of <code class="nowrap" style="">&lt;em&gt;</code> denoting "emphasis" rather than <code class="nowrap" style="">&lt;i&gt;</code>, which specifies <a href="/wiki/Italics" class="mw-redirect" title="Italics">italics</a>. Layout details are left up to the browser, in combination with <a href="/wiki/Cascading_Style_Sheets" class="mw-redirect" title="Cascading Style Sheets">Cascading Style Sheets</a>. But this practice falls short of specifying the semantics of objects such as items for sale or prices.
</p><p>Microformats extend HTML syntax to create <a href="/wiki/Machine-readable_data" class="mw-redirect" title="Machine-readable data">machine-readable</a> semantic markup about objects including people, organizations, events and products.<sup id="cite_ref-13" class="reference"><a href="#cite_note-13"><span class="cite-bracket">[</span>13<span class="cite-bracket">]</span></a></sup> Similar initiatives include <a href="/wiki/RDFa" title="RDFa">RDFa</a>, <a href="/wiki/Microdata_(HTML)" title="Microdata (HTML)">Microdata</a> and <a href="/wiki/Schema.org" title="Schema.org">Schema.org</a>.
</p>
<div class="mw-heading mw-heading3"><h3 id="Semantic_Web_solutions">Semantic Web solutions</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=5" title="Edit section: Semantic Web solutions"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>The Semantic Web takes the solution further. It involves publishing in languages specifically designed for data: <a href="/wiki/Resource_Description_Framework" title="Resource Description Framework">Resource Description Framework</a> (RDF), <a href="/wiki/Web_Ontology_Language" title="Web Ontology Language">Web Ontology Language</a> (OWL), and Extensible Markup Language (<a href="/wiki/XML" title="XML">XML</a>). HTML describes documents and the links between them. RDF, OWL, and XML, by contrast, can describe arbitrary things such as people, meetings, or airplane parts.
</p><p>These technologies are combined in order to provide descriptions that supplement or replace the content of Web documents. Thus, content may manifest itself as descriptive data stored in Web-accessible <a href="/wiki/Database" title="Database">databases</a>,<sup id="cite_ref-14" class="reference"><a href="#cite_note-14"><span class="cite-bracket">[</span>14<span class="cite-bracket">]</span></a></sup> or as markup within documents (particularly, in Extensible HTML (<a href="/wiki/XHTML" title="XHTML">XHTML</a>) interspersed with XML, or, more often, purely in XML, with layout or rendering cues stored separately). The machine-readable descriptions enable content managers to add meaning to the content, i.e., to describe the structure of the knowledge we have about that content. In this way, a machine can process knowledge itself, instead of text, using processes similar to human <a href="/wiki/Deductive_reasoning" title="Deductive reasoning">deductive reasoning</a> and <a href="/wiki/Inference" title="Inference">inference</a>, thereby obtaining more meaningful results and helping computers to perform automated information gathering and research.
</p><p>An example of a tag that would be used in a non-semantic web page:
</p>
<div class="mw-highlight mw-highlight-lang-xml mw-content-ltr" dir="ltr"><pre><span></span><span class="nt">&lt;item&gt;</span>blog<span class="nt">&lt;/item&gt;</span>
</pre></div>
<p>Encoding similar information in a semantic web page might look like this:
</p>
<div class="mw-highlight mw-highlight-lang-xml mw-content-ltr" dir="ltr"><pre><span></span><span class="nt">&lt;item</span><span class="w"> </span><span class="na">rdf:about=</span><span class="s">"https://example.org/semantic-web/"</span><span class="nt">&gt;</span>Semantic<span class="w"> </span>Web<span class="nt">&lt;/item&gt;</span>
</pre></div>
<p>Tim Berners-Lee calls the resulting network of <a href="/wiki/Linked_Data" class="mw-redirect" title="Linked Data">Linked Data</a> the <a href="/wiki/Giant_Global_Graph" title="Giant Global Graph">Giant Global Graph</a>, in contrast to the HTML-based World Wide Web. Berners-Lee posits that if the past was document sharing, the future is <a href="/wiki/Data_sharing" title="Data sharing">data sharing</a>. His answer to the question of "how" provides three points of instruction. One, a URL should point to the data. Two, anyone accessing the URL should get data back. Three, relationships in the data should point to additional URLs with data.
</p>
<div class="mw-heading mw-heading4"><h4 id="Tags_and_identifiers">Tags and identifiers</h4><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=6" title="Edit section: Tags and identifiers"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p><a href="/wiki/Tag_(metadata)" title="Tag (metadata)">Tags</a>, including hierarchical categories and tags that are collaboratively added and maintained (e.g. with <a href="/wiki/Folksonomy" title="Folksonomy">folksonomies</a>) can be considered part of, of potential use to or a step towards the semantic Web vision.<sup id="cite_ref-15" class="reference"><a href="#cite_note-15"><span class="cite-bracket">[</span>15<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-16" class="reference"><a href="#cite_note-16"><span class="cite-bracket">[</span>16<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-17" class="reference"><a href="#cite_note-17"><span class="cite-bracket">[</span>17<span class="cite-bracket">]</span></a></sup>
</p><p>Unique <a href="/wiki/Identifier" title="Identifier">identifiers</a>, including hierarchical categories and collaboratively added ones, analysis tools (e.g. scite.ai algorithms)<sup id="cite_ref-18" class="reference"><a href="#cite_note-18"><span class="cite-bracket">[</span>18<span class="cite-bracket">]</span></a></sup> and <a href="/wiki/Metadata" title="Metadata">metadata</a>, including tags, can be used to create forms of semantic webs – webs that are to a certain degree semantic. In particular, such has been used for structuring scientific research i.a. by research topics and <a href="/wiki/Branches_of_science" title="Branches of science">scientific fields</a> by the projects <a href="/wiki/OpenAlex" title="OpenAlex">OpenAlex</a>,<sup id="cite_ref-19" class="reference"><a href="#cite_note-19"><span class="cite-bracket">[</span>19<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-20" class="reference"><a href="#cite_note-20"><span class="cite-bracket">[</span>20<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-21" class="reference"><a href="#cite_note-21"><span class="cite-bracket">[</span>21<span class="cite-bracket">]</span></a></sup> <a href="/wiki/Wikidata" title="Wikidata">Wikidata</a> and <a href="/wiki/Scholia" title="Scholia">Scholia</a> which are under development and provide <a href="/wiki/API" title="API">APIs</a>, Web-pages, feeds and graphs for various <a href="/wiki/Semantic_query" title="Semantic query">semantic queries</a>.
</p>
<div class="mw-heading mw-heading3"><h3 id="Web_3.0">Web 3.0</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=7" title="Edit section: Web 3.0"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Tim Berners-Lee has described the Semantic Web as a component of Web 3.0.<sup id="cite_ref-22" class="reference"><a href="#cite_note-22"><span class="cite-bracket">[</span>22<span class="cite-bracket">]</span></a></sup>
</p>
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1244412712"><blockquote class="templatequote"><p>People keep asking what Web 3.0 is. I think maybe when you've got an overlay of <a href="/wiki/Scalable_vector_graphics" class="mw-redirect" title="Scalable vector graphics">scalable vector graphics</a> – everything rippling and folding and looking misty&nbsp;– on <a href="/wiki/Web_2.0" title="Web 2.0">Web 2.0</a> and access to a semantic Web integrated across a huge space of data, you'll have access to an unbelievable data resource …</p><div class="templatequotecite">— <cite>Tim Berners-Lee, 2006</cite></div></blockquote>
<p>"Semantic Web" is sometimes used as a synonym for "Web 3.0",<sup id="cite_ref-23" class="reference"><a href="#cite_note-23"><span class="cite-bracket">[</span>23<span class="cite-bracket">]</span></a></sup> though the definition of each term varies.
</p>
<div class="mw-heading mw-heading3"><h3 id="Beyond_Web_3.0">Beyond Web 3.0</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=8" title="Edit section: Beyond Web 3.0"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>The next generation of the Web is often termed Web 4.0, but its definition is not clear. According to some sources, it is a Web that involves <a href="/wiki/Artificial_intelligence" title="Artificial intelligence">artificial intelligence</a>,<sup id="cite_ref-24" class="reference"><a href="#cite_note-24"><span class="cite-bracket">[</span>24<span class="cite-bracket">]</span></a></sup> the <a href="/wiki/Internet_of_things" title="Internet of things">internet of things</a>, <a href="/wiki/Pervasive_computing" class="mw-redirect" title="Pervasive computing">pervasive computing</a>, <a href="/wiki/Ubiquitous_computing" title="Ubiquitous computing">ubiquitous computing</a> and the <a href="/wiki/Web_of_Things" title="Web of Things">Web of Things</a> among other concepts.<sup id="cite_ref-25" class="reference"><a href="#cite_note-25"><span class="cite-bracket">[</span>25<span class="cite-bracket">]</span></a></sup> According to the European Union, Web 4.0 is "the expected fourth generation of the World Wide Web. Using advanced artificial and ambient intelligence, the internet of things, trusted blockchain transactions, virtual worlds and XR capabilities, digital and real objects and environments are fully integrated and communicate with each other, enabling truly intuitive, immersive experiences, seamlessly blending the physical and digital worlds".<sup id="cite_ref-26" class="reference"><a href="#cite_note-26"><span class="cite-bracket">[</span>26<span class="cite-bracket">]</span></a></sup>
</p>
<div class="mw-heading mw-heading2"><h2 id="Challenges">Challenges</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=9" title="Edit section: Challenges"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Some of the challenges for the Semantic Web include vastness, vagueness, uncertainty, inconsistency, and deceit. <a href="/wiki/Automated_reasoning_system" class="mw-redirect" title="Automated reasoning system">Automated reasoning systems</a> will have to deal with all of these issues in order to deliver on the promise of the Semantic Web.
</p>
<ul><li>Vastness: The World Wide Web contains many billions of pages. The <a href="/wiki/SNOMED_CT" title="SNOMED CT">SNOMED CT</a> <a href="/wiki/Medical_terminology" title="Medical terminology">medical terminology</a> <a href="/wiki/Ontology_(information_science)" title="Ontology (information science)">ontology</a> alone contains 370,000 <a href="/wiki/Class_(computer_programming)" title="Class (computer programming)">class</a> names, and existing technology has not yet been able to eliminate all semantically duplicated terms. Any automated reasoning system will have to deal with truly huge inputs.</li>
<li>Vagueness: These are imprecise concepts like "young" or "tall". This arises from the vagueness of user queries, of concepts represented by content providers, of matching query terms to provider terms and of trying to combine different <a href="/wiki/Knowledge_base" title="Knowledge base">knowledge bases</a> with overlapping but subtly different concepts. <a href="/wiki/Fuzzy_logic" title="Fuzzy logic">Fuzzy logic</a> is the most common technique for dealing with vagueness.</li>
<li>Uncertainty: These are precise concepts with uncertain values. For example, a patient might present a set of symptoms that correspond to a number of different distinct diagnoses each with a different probability. <a href="/wiki/Probabilistic_logic" title="Probabilistic logic">Probabilistic</a> reasoning techniques are generally employed to address uncertainty.</li>
<li>Inconsistency: These are logical contradictions that will inevitably arise during the development of large ontologies, and when ontologies from separate sources are combined. Deductive reasoning fails catastrophically when faced with inconsistency, because <a href="/wiki/Principle_of_explosion" title="Principle of explosion">"anything follows from a contradiction"</a>. <a href="/wiki/Defeasible_reasoning" title="Defeasible reasoning">Defeasible reasoning</a> and <a href="/wiki/Paraconsistent_logic" title="Paraconsistent logic">paraconsistent reasoning</a> are two techniques that can be employed to deal with inconsistency.</li>
<li>Deceit: This is when the producer of the information is intentionally misleading the consumer of the information. <a href="/wiki/Cryptography" title="Cryptography">Cryptography</a> techniques are currently utilized to alleviate this threat. By providing a means to determine the information's integrity, including that which relates to the identity of the entity that produced or published the information, however <a href="/wiki/Credibility" title="Credibility">credibility</a> issues still have to be addressed in cases of potential deceit.</li></ul>
<p>This list of challenges is illustrative rather than exhaustive, and it focuses on the challenges to the "unifying logic" and "proof" layers of the Semantic Web. The World Wide Web Consortium (W3C) Incubator Group for Uncertainty Reasoning for the World Wide Web<sup id="cite_ref-27" class="reference"><a href="#cite_note-27"><span class="cite-bracket">[</span>27<span class="cite-bracket">]</span></a></sup> (URW3-XG) final report lumps these problems together under the single heading of "uncertainty".<sup id="cite_ref-28" class="reference"><a href="#cite_note-28"><span class="cite-bracket">[</span>28<span class="cite-bracket">]</span></a></sup> Many of the techniques mentioned here will require extensions to the Web Ontology Language (OWL) for example to annotate conditional probabilities. This is an area of active research.<sup id="cite_ref-29" class="reference"><a href="#cite_note-29"><span class="cite-bracket">[</span>29<span class="cite-bracket">]</span></a></sup>
</p>
<div class="mw-heading mw-heading2"><h2 id="Standards">Standards</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=10" title="Edit section: Standards"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Standardization for Semantic Web in the context of Web 3.0 is under the care of W3C.<sup id="cite_ref-30" class="reference"><a href="#cite_note-30"><span class="cite-bracket">[</span>30<span class="cite-bracket">]</span></a></sup>
</p>
<div class="mw-heading mw-heading3"><h3 id="Components">Components</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=11" title="Edit section: Components"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>The term "Semantic Web" is often used more specifically to refer to the formats and technologies that enable it.<sup id="cite_ref-W3C-SWA_5-1" class="reference"><a href="#cite_note-W3C-SWA-5"><span class="cite-bracket">[</span>5<span class="cite-bracket">]</span></a></sup> The collection, structuring and recovery of linked data are enabled by technologies that provide a <a href="/wiki/Description_logic" title="Description logic">formal description</a> of concepts, terms, and relationships within a given <a href="/wiki/Knowledge_domain" class="mw-redirect" title="Knowledge domain">knowledge domain</a>. These technologies are specified as W3C standards and include:
</p>
<ul><li><a href="/wiki/Resource_Description_Framework" title="Resource Description Framework">Resource Description Framework</a> (RDF), a general method for describing information</li>
<li><a href="/wiki/RDF_Schema" title="RDF Schema">RDF Schema</a> (RDFS)</li>
<li><a href="/wiki/Simple_Knowledge_Organization_System" title="Simple Knowledge Organization System">Simple Knowledge Organization System</a> (SKOS)</li>
<li><a href="/wiki/SPARQL" title="SPARQL">SPARQL</a>, an RDF query language</li>
<li><a href="/wiki/Notation3" title="Notation3">Notation3</a> (N3), designed with human readability in mind</li>
<li><a href="/wiki/N-Triples" title="N-Triples">N-Triples</a>, a format for storing and transmitting data</li>
<li><a href="/wiki/Turtle_(syntax)" title="Turtle (syntax)">Turtle</a> (Terse RDF Triple Language)</li>
<li><a href="/wiki/Web_Ontology_Language" title="Web Ontology Language">Web Ontology Language</a> (OWL), a family of <a href="/wiki/Knowledge_representation_language" class="mw-redirect" title="Knowledge representation language">knowledge representation languages</a></li>
<li><a href="/wiki/Rule_Interchange_Format" title="Rule Interchange Format">Rule Interchange Format</a> (RIF), a framework of web rule language dialects supporting rule interchange on the Web</li>
<li><a href="/wiki/JSON-LD" title="JSON-LD">JavaScript Object Notation for Linked Data</a> (JSON-LD), a JSON-based method to describe data</li>
<li><a href="/wiki/ActivityPub" title="ActivityPub">ActivityPub</a>, a generic way for client and server to communicate with each other. This is used by the popular decentralized social network <a href="/wiki/Mastodon_(software)" class="mw-redirect" title="Mastodon (software)">Mastodon</a>.</li></ul>
<p>The <a href="/wiki/Semantic_Web_Stack" title="Semantic Web Stack">Semantic Web Stack</a> illustrates the architecture of the Semantic Web. The functions and relationships of the components can be summarized as follows:<sup id="cite_ref-31" class="reference"><a href="#cite_note-31"><span class="cite-bracket">[</span>31<span class="cite-bracket">]</span></a></sup>
</p>
<ul><li>XML provides an elemental syntax for content structure within documents, yet associates no semantics with the meaning of the content contained within. XML is not at present a necessary component of Semantic Web technologies in most cases, as alternative syntaxes exist, such as <a href="/wiki/Turtle_(syntax)" title="Turtle (syntax)">Turtle</a>. Turtle is a de facto standard, but has not been through a formal standardization process.</li>
<li><a href="/wiki/W3C_XML_Schema" class="mw-redirect" title="W3C XML Schema">XML Schema</a> is a language for providing and restricting the structure and content of elements contained within XML documents.</li>
<li>RDF is a simple language for expressing <a href="/wiki/Data_model" title="Data model">data models</a>, which refer to objects ("<a href="/wiki/Web_resource" title="Web resource">web resources</a>") and their relationships. An RDF-based model can be represented in a variety of syntaxes, e.g., <a href="/wiki/RDF/XML" title="RDF/XML">RDF/XML</a>, N3, Turtle, and RDFa. RDF is a fundamental standard of the Semantic Web.<sup id="cite_ref-32" class="reference"><a href="#cite_note-32"><span class="cite-bracket">[</span>32<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-33" class="reference"><a href="#cite_note-33"><span class="cite-bracket">[</span>33<span class="cite-bracket">]</span></a></sup></li>
<li>RDF Schema extends RDF and is a vocabulary for describing properties and classes of RDF-based resources, with semantics for generalized-hierarchies of such properties and classes.</li>
<li>OWL adds more vocabulary for describing properties and classes: among others, relations between classes (e.g. disjointness), cardinality (e.g. "exactly one"), equality, richer typing of properties, characteristics of properties (e.g. symmetry), and enumerated classes.</li>
<li>SPARQL is a protocol and query language for semantic web data sources.</li>
<li>RIF is the W3C Rule Interchange Format. It is an XML language for expressing Web rules that computers can execute. RIF provides multiple versions, called dialects. It includes a RIF Basic Logic Dialect (RIF-BLD) and RIF Production Rules Dialect (RIF PRD).</li></ul>
<div class="mw-heading mw-heading3"><h3 id="Current_state_of_standardization">Current state of standardization</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=12" title="Edit section: Current state of standardization"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Well-established standards:
</p>
<ul><li><a href="/wiki/Resource_Description_Framework" title="Resource Description Framework">RDF - Resource Description Framework</a></li>
<li><a href="/wiki/RDFS" class="mw-redirect" title="RDFS">RDFS - Resource Description Framework Schema</a></li>
<li><a href="/wiki/Rule_Interchange_Format" title="Rule Interchange Format"> RIF - Rule Interchange Format</a></li>
<li><a href="/wiki/SPARQL" title="SPARQL"> SPARQL - 'SPARQL Protocol and RDF Query Language'</a></li>
<li><a href="/wiki/Unicode" title="Unicode">Unicode</a></li>
<li><a href="/wiki/Uniform_Resource_Identifier" title="Uniform Resource Identifier"> URI - Uniform Resource Identifier</a></li>
<li><a href="/wiki/Web_Ontology_Language" title="Web Ontology Language"> OWL - Web Ontology Language</a></li>
<li><a href="/wiki/XML" title="XML"> XML - Extensible Markup Language</a></li></ul>
<p>Not yet fully realized:
</p>
<ul><li>Unifying Logic and Proof layers</li>
<li><a href="/wiki/Semantic_Web_Rule_Language" title="Semantic Web Rule Language"> SWRL - Semantic Web Rule Language</a></li></ul>
<div class="mw-heading mw-heading2"><h2 id="Applications">Applications</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=13" title="Edit section: Applications"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>The intent is to enhance the <a href="/wiki/Usability" title="Usability">usability</a> and usefulness of the Web and its interconnected <a href="/wiki/Resource_(computer_science)" class="mw-redirect" title="Resource (computer science)">resources</a> by creating <a href="/wiki/Semantic_web_service" title="Semantic web service">semantic web services</a>, such as:
</p>
<ul><li>Servers that expose existing data systems using the RDF and SPARQL standards. Many converters to RDF exist from different applications.<sup id="cite_ref-34" class="reference"><a href="#cite_note-34"><span class="cite-bracket">[</span>34<span class="cite-bracket">]</span></a></sup> <a href="/wiki/Relational_database" title="Relational database">Relational databases</a> are an important source. The semantic web server attaches to the existing system without affecting its operation.</li>
<li>Documents "marked up" with semantic information (an <a href="/wiki/Extensibility" title="Extensibility">extension</a> of the HTML <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">&lt;meta&gt;</code> <a href="/wiki/HTML_element" title="HTML element">tags</a> used in today's Web pages to supply information for <a href="/wiki/Web_search_engine" class="mw-redirect" title="Web search engine">Web search engines</a> using <a href="/wiki/Web_crawler" title="Web crawler">web crawlers</a>). This could be <a href="/wiki/Artificial_intelligence" title="Artificial intelligence">machine-understandable</a> information about the human-understandable content of the document (such as the creator, title, description, etc.) or it could be purely metadata representing a set of facts (such as resources and services elsewhere on the site). Note that <i>anything</i> that can be identified with a <i>Uniform Resource Identifier</i> (URI) can be described, so the semantic web can reason about animals, people, places, ideas, etc.  There are four semantic annotation formats that can be used in HTML documents; Microformat, RDFa, Microdata and <a href="/wiki/JSON-LD" title="JSON-LD">JSON-LD</a>.<sup id="cite_ref-35" class="reference"><a href="#cite_note-35"><span class="cite-bracket">[</span>35<span class="cite-bracket">]</span></a></sup> Semantic markup is often generated automatically, rather than manually.</li></ul>
<figure class="mw-default-size" typeof="mw:File/Thumb"><a href="/wiki/File:Revision_histories_of_argumentative_claims_from_the_online_debate_platform_Kialo_(collaborative_refinement_for_optimal_arguments).png" class="mw-file-description"><img src="//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Revision_histories_of_argumentative_claims_from_the_online_debate_platform_Kialo_%28collaborative_refinement_for_optimal_arguments%29.png/220px-Revision_histories_of_argumentative_claims_from_the_online_debate_platform_Kialo_%28collaborative_refinement_for_optimal_arguments%29.png" decoding="async" width="220" height="107" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Revision_histories_of_argumentative_claims_from_the_online_debate_platform_Kialo_%28collaborative_refinement_for_optimal_arguments%29.png/330px-Revision_histories_of_argumentative_claims_from_the_online_debate_platform_Kialo_%28collaborative_refinement_for_optimal_arguments%29.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Revision_histories_of_argumentative_claims_from_the_online_debate_platform_Kialo_%28collaborative_refinement_for_optimal_arguments%29.png/440px-Revision_histories_of_argumentative_claims_from_the_online_debate_platform_Kialo_%28collaborative_refinement_for_optimal_arguments%29.png 2x" data-file-width="2815" data-file-height="1375"></a><figcaption>Arguments as distinct semantic units with specified relations and version control on <a href="/wiki/Kialo" title="Kialo">Kialo</a></figcaption></figure>
<ul><li>Common metadata vocabularies (<a href="/wiki/Ontology_(information_science)" title="Ontology (information science)">ontologies</a>) and maps between vocabularies that allow document creators to know how to mark up their documents so that agents can use the information in the supplied metadata (so that <i>Author</i> in the sense of 'the Author of the page' will not be confused with <i>Author</i> in the sense of a book that is the subject of a book review).</li>
<li>Automated agents to perform tasks for users of the semantic web using this data.</li>
<li><a href="/wiki/Semantic_translation" title="Semantic translation">Semantic translation</a>. An alternative or complementary approach are improvements to contextual and semantic understanding of texts – these could be aided via Semantic Web methods so that only increasingly small numbers of mistranslations need to be corrected <a href="/wiki/Machine_translation#Neural_MT" title="Machine translation">in manual or semi-automated post-editing</a>.</li>
<li>Web-based services (often with agents of their own) to supply information specifically to agents, for example, a <a href="/wiki/Trust_service" class="mw-redirect" title="Trust service">Trust service</a> that an agent could ask if some online store has a history of poor service or <a href="/wiki/Spamming" title="Spamming">spamming</a>.</li>
<li>Semantic Web ideas are implemented in collaborative structured <a href="/wiki/Argument_map" title="Argument map">argument mapping</a> sites where their relations are organized semantically, arguments can be mirrored (linked) to multiple places, reused (copied), rated, and <a href="/wiki/Version_control_software" class="mw-redirect" title="Version control software">changed</a> as semantic distinct units. Ideas for such, or a more widely adopted "World Wide Argument Web", go back to at least 2007<sup id="cite_ref-36" class="reference"><a href="#cite_note-36"><span class="cite-bracket">[</span>36<span class="cite-bracket">]</span></a></sup> and have been implemented to some degree in <a href="/wiki/Arg%C3%BCman" title="Argüman">Argüman</a><sup id="cite_ref-37" class="reference"><a href="#cite_note-37"><span class="cite-bracket">[</span>37<span class="cite-bracket">]</span></a></sup> and <a href="/wiki/Kialo" title="Kialo">Kialo</a>. Further steps towards semantic web services may include enabling "Querying", argument search engines,<sup id="cite_ref-38" class="reference"><a href="#cite_note-38"><span class="cite-bracket">[</span>38<span class="cite-bracket">]</span></a></sup> and "summarizing the contentious and agreed-upon points of a discussion".<sup id="cite_ref-39" class="reference"><a href="#cite_note-39"><span class="cite-bracket">[</span>39<span class="cite-bracket">]</span></a></sup></li></ul>
<p>Such services could be useful to public search engines, or could be used for <a href="/wiki/Knowledge_management" title="Knowledge management">knowledge management</a> within an organization.  Business applications include:
</p>
<ul><li>Facilitating the integration of information from mixed sources<sup id="cite_ref-40" class="reference"><a href="#cite_note-40"><span class="cite-bracket">[</span>40<span class="cite-bracket">]</span></a></sup></li>
<li>Dissolving ambiguities in corporate terminology</li>
<li>Improving <a href="/wiki/Information_retrieval" title="Information retrieval">information retrieval</a> thereby reducing <a href="/wiki/Information_overload" title="Information overload">information overload</a> and increasing the refinement and precision of the data retrieved<sup id="cite_ref-41" class="reference"><a href="#cite_note-41"><span class="cite-bracket">[</span>41<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-42" class="reference"><a href="#cite_note-42"><span class="cite-bracket">[</span>42<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-43" class="reference"><a href="#cite_note-43"><span class="cite-bracket">[</span>43<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-44" class="reference"><a href="#cite_note-44"><span class="cite-bracket">[</span>44<span class="cite-bracket">]</span></a></sup></li>
<li>Identifying relevant information with respect to a given domain<sup id="cite_ref-45" class="reference"><a href="#cite_note-45"><span class="cite-bracket">[</span>45<span class="cite-bracket">]</span></a></sup></li>
<li>Providing decision making support</li></ul>
<p>In a corporation, there is a closed group of users and the management is able to enforce company guidelines like the adoption of specific ontologies and use of <a href="/wiki/Semantic_annotation" class="mw-redirect" title="Semantic annotation">semantic annotation</a>. Compared to the public Semantic Web there are lesser requirements on <a href="/wiki/Scalability" title="Scalability">scalability</a> and the information circulating within a company can be more trusted in general; privacy is less of an issue outside of handling of customer data.
</p>
<div class="mw-heading mw-heading2"><h2 id="Skeptical_reactions">Skeptical reactions</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=14" title="Edit section: Skeptical reactions"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<div class="mw-heading mw-heading3"><h3 id="Practical_feasibility">Practical feasibility</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=15" title="Edit section: Practical feasibility"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Critics question the basic feasibility of a complete or even partial fulfillment of the Semantic Web, pointing out both difficulties in setting it up and a lack of general-purpose usefulness that prevents the required effort from being invested. In a 2003 paper, Marshall and Shipman point out the cognitive overhead inherent in formalizing knowledge, compared to the authoring of traditional web <a href="/wiki/Hypertext" title="Hypertext">hypertext</a>:<sup id="cite_ref-which_46-0" class="reference"><a href="#cite_note-which-46"><span class="cite-bracket">[</span>46<span class="cite-bracket">]</span></a></sup>
</p>
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1244412712"><blockquote class="templatequote"><p>While learning the basics of HTML is relatively straightforward, learning a knowledge representation language or tool requires the author to learn about the representation's methods of abstraction and their effect on reasoning. For example, understanding the class-instance relationship, or the superclass-subclass relationship, is more than understanding that one concept is a "type of" another concept. [...] These abstractions are taught to computer scientists generally and knowledge engineers specifically but do not match the similar natural language meaning of being a "type of" something. Effective use of such a formal representation requires the author to become a skilled knowledge engineer in addition to any other skills required by the domain. [...] Once one has learned a formal representation language, it is still often much more effort to express ideas in that representation than in a less formal representation [...]. Indeed, this is a form of programming based on the declaration of semantic data and requires an understanding of how reasoning algorithms will interpret the authored structures.</p></blockquote>
<p>According to Marshall and Shipman, the <a href="/wiki/Tacit_knowledge" title="Tacit knowledge">tacit</a> and changing nature of much knowledge adds to the <a href="/wiki/Knowledge_engineering" title="Knowledge engineering">knowledge engineering</a> problem, and limits the Semantic Web's applicability to specific domains. A further issue that they point out are domain- or organization-specific ways to express knowledge, which must be solved through community agreement rather than only technical means.<sup id="cite_ref-which_46-1" class="reference"><a href="#cite_note-which-46"><span class="cite-bracket">[</span>46<span class="cite-bracket">]</span></a></sup> As it turns out, specialized communities and organizations for intra-company projects have tended to adopt semantic web technologies greater than peripheral and less-specialized communities.<sup id="cite_ref-Herman000_47-0" class="reference"><a href="#cite_note-Herman000-47"><span class="cite-bracket">[</span>47<span class="cite-bracket">]</span></a></sup> The practical constraints toward adoption have appeared less challenging where domain and scope is more limited than that of the general public and the World-Wide Web.<sup id="cite_ref-Herman000_47-1" class="reference"><a href="#cite_note-Herman000-47"><span class="cite-bracket">[</span>47<span class="cite-bracket">]</span></a></sup>
</p><p>Finally, Marshall and Shipman see pragmatic problems in the idea of (<a href="/wiki/Knowledge_Navigator" title="Knowledge Navigator">Knowledge Navigator</a>-style) intelligent agents working in the largely manually curated Semantic Web:<sup id="cite_ref-which_46-2" class="reference"><a href="#cite_note-which-46"><span class="cite-bracket">[</span>46<span class="cite-bracket">]</span></a></sup>
</p>
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1244412712"><blockquote class="templatequote"><p>In situations in which user needs are known and distributed information resources are well described, this approach can be highly effective; in situations that are not foreseen and that bring together an unanticipated array of information resources, the Google approach is more robust. Furthermore, the Semantic Web relies on inference chains that are more brittle; a missing element of the chain results in a failure to perform the desired action, while the human can supply missing pieces in a more Google-like approach. [...] cost-benefit tradeoffs can work in favor of specially-created Semantic Web metadata directed at weaving together sensible well-structured domain-specific information resources; close attention to user/customer needs will drive these federations if they are to be successful.</p></blockquote>
<p><a href="/wiki/Cory_Doctorow" title="Cory Doctorow">Cory Doctorow</a>'s critique ("<a href="/wiki/Metacrap" class="mw-redirect" title="Metacrap">metacrap</a>")<sup id="cite_ref-48" class="reference"><a href="#cite_note-48"><span class="cite-bracket">[</span>48<span class="cite-bracket">]</span></a></sup> is from the perspective of human behavior and personal preferences. For example, people may include spurious metadata into Web pages in an attempt to mislead Semantic Web engines that naively assume the metadata's veracity. This phenomenon was well known with metatags that fooled the <a href="/wiki/Altavista" class="mw-redirect" title="Altavista">Altavista</a> ranking algorithm into elevating the ranking of certain Web pages: the Google indexing engine specifically looks for such attempts at manipulation. <a href="/wiki/Peter_G%C3%A4rdenfors" title="Peter Gärdenfors">Peter Gärdenfors</a> and <a href="/wiki/Timo_Honkela" title="Timo Honkela">Timo Honkela</a> point out that logic-based semantic web technologies cover only a fraction of the relevant phenomena related to semantics.<sup id="cite_ref-Gardenfors04_49-0" class="reference"><a href="#cite_note-Gardenfors04-49"><span class="cite-bracket">[</span>49<span class="cite-bracket">]</span></a></sup><sup id="cite_ref-Honkela08_50-0" class="reference"><a href="#cite_note-Honkela08-50"><span class="cite-bracket">[</span>50<span class="cite-bracket">]</span></a></sup>
</p>
<div class="mw-heading mw-heading3"><h3 id="Censorship_and_privacy">Censorship and privacy</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=16" title="Edit section: Censorship and privacy"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Enthusiasm about the semantic web could be tempered by concerns regarding <a href="/wiki/Internet_censorship" title="Internet censorship">censorship</a> and <a href="/wiki/Privacy" title="Privacy">privacy</a>. For instance, <a href="/wiki/Intelligent_text_analysis" class="mw-redirect" title="Intelligent text analysis">text-analyzing</a> techniques can now be easily bypassed by using other words, metaphors for instance, or by using images in place of words. An advanced implementation of the semantic web would make it much easier for governments to control the viewing and creation of online information, as this information would be much easier for an automated content-blocking machine to understand. In addition, the issue has also been raised that, with the use of <a href="/wiki/FOAF_(software)" class="mw-redirect" title="FOAF (software)">FOAF</a> files and geolocation <a href="/wiki/Meta-data" class="mw-redirect" title="Meta-data">meta-data</a>, there would be very little anonymity associated with the authorship of articles on things such as a personal blog. Some of these concerns were addressed in the "Policy Aware Web" project<sup id="cite_ref-51" class="reference"><a href="#cite_note-51"><span class="cite-bracket">[</span>51<span class="cite-bracket">]</span></a></sup> and is an active research and development topic.
</p>
<div class="mw-heading mw-heading3"><h3 id="Doubling_output_formats">Doubling output formats</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=17" title="Edit section: Doubling output formats"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Another criticism of the semantic web is that it would be much more time-consuming to create and publish content because there would need to be two formats for one piece of data: one for human viewing and one for machines. However, many web applications in development are addressing this issue by creating a machine-readable format upon the publishing of data or the request of a machine for such data. The development of microformats has been one reaction to this kind of criticism. Another argument in defense of the feasibility of semantic web is the likely falling price of human intelligence tasks in digital labor markets, such as <a href="/wiki/Amazon.com" class="mw-redirect" title="Amazon.com">Amazon</a>'s <a href="/wiki/Amazon_Mechanical_Turk" title="Amazon Mechanical Turk">Mechanical Turk</a>.<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (February 2015)">citation needed</span></a></i>]</sup>
</p><p>Specifications such as <a href="/wiki/ERDF_(data_format)" class="mw-redirect" title="ERDF (data format)">eRDF</a> and RDFa allow arbitrary RDF data to be embedded in HTML pages. The <a href="/wiki/GRDDL" title="GRDDL">GRDDL</a> (Gleaning Resource Descriptions from Dialects of Language) mechanism allows existing material (including microformats) to be automatically interpreted as RDF, so publishers only need to use a single format, such as HTML.
</p>
<div class="mw-heading mw-heading2"><h2 id="Research_activities_on_corporate_applications">Research activities on corporate applications</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=18" title="Edit section: Research activities on corporate applications"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>The first research group explicitly focusing on the Corporate Semantic Web was the ACACIA team at <a href="/wiki/Institut_national_de_recherche_en_informatique_et_en_automatique" class="mw-redirect" title="Institut national de recherche en informatique et en automatique">INRIA-Sophia-Antipolis</a>, founded in 2002. Results of their work include the <a href="/wiki/RDF_Schema" title="RDF Schema">RDF(S)</a> based Corese<sup id="cite_ref-52" class="reference"><a href="#cite_note-52"><span class="cite-bracket">[</span>52<span class="cite-bracket">]</span></a></sup> search engine, and the application of semantic web technology in the realm of <a href="/wiki/Distributed_artificial_intelligence" title="Distributed artificial intelligence">distributed artificial intelligence</a> for knowledge management (e.g. ontologies and <a href="/wiki/Multi-agent_systems" class="mw-redirect" title="Multi-agent systems">multi-agent systems</a> for corporate semantic Web) <sup id="cite_ref-53" class="reference"><a href="#cite_note-53"><span class="cite-bracket">[</span>53<span class="cite-bracket">]</span></a></sup> and <a href="/wiki/E-learning" class="mw-redirect" title="E-learning">E-learning</a>.<sup id="cite_ref-54" class="reference"><a href="#cite_note-54"><span class="cite-bracket">[</span>54<span class="cite-bracket">]</span></a></sup>
</p><p>Since 2008, the Corporate Semantic Web research group, located at the <a href="/wiki/Free_University_of_Berlin" title="Free University of Berlin">Free University of Berlin</a>, focuses on building blocks: Corporate Semantic Search, Corporate Semantic Collaboration, and Corporate Ontology Engineering.<sup id="cite_ref-55" class="reference"><a href="#cite_note-55"><span class="cite-bracket">[</span>55<span class="cite-bracket">]</span></a></sup>
</p><p>Ontology engineering research includes the question of how to involve non-expert users in creating ontologies and semantically annotated content<sup id="cite_ref-56" class="reference"><a href="#cite_note-56"><span class="cite-bracket">[</span>56<span class="cite-bracket">]</span></a></sup> and for extracting explicit knowledge from the interaction of users within enterprises.
</p>
<div class="mw-heading mw-heading3"><h3 id="Future_of_applications">Future of applications</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=19" title="Edit section: Future of applications"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p><a href="/wiki/Tim_O%27Reilly" title="Tim O'Reilly">Tim O'Reilly</a>, who coined the term Web 2.0, proposed a long-term vision of the Semantic Web as a web of data, where sophisticated applications are navigating and manipulating it.<sup id="cite_ref-57" class="reference"><a href="#cite_note-57"><span class="cite-bracket">[</span>57<span class="cite-bracket">]</span></a></sup> The data web transforms the World Wide Web from a <a href="/wiki/Distributed_computing" title="Distributed computing">distributed</a> <a href="/wiki/File_system" title="File system">file system</a> into a <a href="/wiki/Distributed_database" title="Distributed database">distributed database</a>.<sup id="cite_ref-58" class="reference"><a href="#cite_note-58"><span class="cite-bracket">[</span>58<span class="cite-bracket">]</span></a></sup>
</p>
<div class="mw-heading mw-heading2"><h2 id="See_also">See also</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=20" title="Edit section: See also"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<style data-mw-deduplicate="TemplateStyles:r1184024115">.mw-parser-output .div-col{margin-top:0.3em;column-width:30em}.mw-parser-output .div-col-small{font-size:90%}.mw-parser-output .div-col-rules{column-rule:1px solid #aaa}.mw-parser-output .div-col dl,.mw-parser-output .div-col ol,.mw-parser-output .div-col ul{margin-top:0}.mw-parser-output .div-col li,.mw-parser-output .div-col dd{page-break-inside:avoid;break-inside:avoid-column}</style><div class="div-col" style="column-width: 20em;">
<ul><li><a href="/wiki/AGRIS" title="AGRIS">AGRIS</a></li>
<li><a href="/wiki/Business_semantics_management" title="Business semantics management">Business semantics management</a></li>
<li><a href="/wiki/Computational_semantics" title="Computational semantics">Computational semantics</a></li>
<li><a href="/wiki/Calais_(Reuters_product)" title="Calais (Reuters product)">Calais (Reuters product)</a></li>
<li><a href="/wiki/DBpedia" title="DBpedia">DBpedia</a></li>
<li><a href="/wiki/Entity%E2%80%93attribute%E2%80%93value_model" title="Entity–attribute–value model">Entity–attribute–value model</a></li>
<li><a href="/wiki/EU_Open_Data_Portal" title="EU Open Data Portal">EU Open Data Portal</a></li>
<li><a href="/wiki/History_of_the_World_Wide_Web" title="History of the World Wide Web">History of the World Wide Web</a></li>
<li><a href="/wiki/Hyperdata" title="Hyperdata">Hyperdata</a></li>
<li><a href="/wiki/Internet_of_things" title="Internet of things">Internet of things</a></li>
<li><a href="/wiki/Linked_data" title="Linked data">Linked data</a></li>
<li><a href="/wiki/List_of_emerging_technologies" title="List of emerging technologies">List of emerging technologies</a></li>
<li><a href="/wiki/Nextbio" title="Nextbio">Nextbio</a></li>
<li><a href="/wiki/Ontology_alignment" title="Ontology alignment">Ontology alignment</a></li>
<li><a href="/wiki/Ontology_learning" title="Ontology learning">Ontology learning</a></li>
<li><a href="/wiki/Resource_Description_Framework" title="Resource Description Framework">RDF</a> and <a href="/wiki/Web_Ontology_Language" title="Web Ontology Language">OWL</a></li>
<li><a href="/wiki/Semantic_computing" title="Semantic computing">Semantic computing</a></li>
<li><a href="/wiki/Semantic_Geospatial_Web" class="mw-redirect" title="Semantic Geospatial Web">Semantic Geospatial Web</a></li>
<li><a href="/wiki/Semantic_heterogeneity" title="Semantic heterogeneity">Semantic heterogeneity</a></li>
<li><a href="/wiki/Semantic_integration" title="Semantic integration">Semantic integration</a></li>
<li><a href="/wiki/Semantic_matching" title="Semantic matching">Semantic matching</a></li>
<li><a href="/wiki/Semantic_MediaWiki" title="Semantic MediaWiki">Semantic MediaWiki</a></li>
<li><a href="/wiki/Semantic_Sensor_Web" title="Semantic Sensor Web">Semantic Sensor Web</a></li>
<li><a href="/wiki/Semantic_social_network" title="Semantic social network">Semantic social network</a></li>
<li><a href="/wiki/Semantic_technology" title="Semantic technology">Semantic technology</a></li>
<li><i><a href="/wiki/Semantic_Web_(journal)" title="Semantic Web (journal)">Semantic Web</a></i></li>
<li><a href="/wiki/Semantically-Interlinked_Online_Communities" class="mw-redirect" title="Semantically-Interlinked Online Communities">Semantically-Interlinked Online Communities</a></li>
<li><a href="/wiki/Smart-M3" title="Smart-M3">Smart-M3</a></li>
<li><a href="/wiki/Social_Semantic_Web" title="Social Semantic Web">Social Semantic Web</a></li>
<li><a href="/wiki/Web_engineering" title="Web engineering">Web engineering</a></li>
<li><a href="/wiki/Web_resource" title="Web resource">Web resource</a></li>
<li><a href="/wiki/Web_science" title="Web science">Web science</a></li></ul>
</div>
<div class="mw-heading mw-heading2"><h2 id="References">References</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=21" title="Edit section: References"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<style data-mw-deduplicate="TemplateStyles:r1239543626">.mw-parser-output .reflist{margin-bottom:0.5em;list-style-type:decimal}@media screen{.mw-parser-output .reflist{font-size:90%}}.mw-parser-output .reflist .references{font-size:100%;margin-bottom:0;list-style-type:inherit}.mw-parser-output .reflist-columns-2{column-width:30em}.mw-parser-output .reflist-columns-3{column-width:25em}.mw-parser-output .reflist-columns{margin-top:0.3em}.mw-parser-output .reflist-columns ol{margin-top:0}.mw-parser-output .reflist-columns li{page-break-inside:avoid;break-inside:avoid-column}.mw-parser-output .reflist-upper-alpha{list-style-type:upper-alpha}.mw-parser-output .reflist-upper-roman{list-style-type:upper-roman}.mw-parser-output .reflist-lower-alpha{list-style-type:lower-alpha}.mw-parser-output .reflist-lower-greek{list-style-type:lower-greek}.mw-parser-output .reflist-lower-roman{list-style-type:lower-roman}</style><div class="reflist">
<div class="mw-references-wrap mw-references-columns"><ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><b><a href="#cite_ref-1">^</a></b></span> <span class="reference-text">Semantic Web at W3C: <a rel="nofollow" class="external free" href="https://www.w3.org/standards/semanticweb/">https://www.w3.org/standards/semanticweb/</a></span>
</li>
<li id="cite_note-2"><span class="mw-cite-backlink"><b><a href="#cite_ref-2">^</a></b></span> <span class="reference-text"><style data-mw-deduplicate="TemplateStyles:r1238218222">.mw-parser-output cite.citation{font-style:inherit;word-wrap:break-word}.mw-parser-output .citation q{quotes:"\"""\"""'""'"}.mw-parser-output .citation:target{background-color:rgba(0,127,255,0.133)}.mw-parser-output .id-lock-free.id-lock-free a{background:url("//upload.wikimedia.org/wikipedia/commons/6/65/Lock-green.svg")right 0.1em center/9px no-repeat}.mw-parser-output .id-lock-limited.id-lock-limited a,.mw-parser-output .id-lock-registration.id-lock-registration a{background:url("//upload.wikimedia.org/wikipedia/commons/d/d6/Lock-gray-alt-2.svg")right 0.1em center/9px no-repeat}.mw-parser-output .id-lock-subscription.id-lock-subscription a{background:url("//upload.wikimedia.org/wikipedia/commons/a/aa/Lock-red-alt-2.svg")right 0.1em center/9px no-repeat}.mw-parser-output .cs1-ws-icon a{background:url("//upload.wikimedia.org/wikipedia/commons/4/4c/Wikisource-logo.svg")right 0.1em center/12px no-repeat}body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-free a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-limited a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-registration a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-subscription a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .cs1-ws-icon a{background-size:contain;padding:0 1em 0 0}.mw-parser-output .cs1-code{color:inherit;background:inherit;border:none;padding:inherit}.mw-parser-output .cs1-hidden-error{display:none;color:var(--color-error,#d33)}.mw-parser-output .cs1-visible-error{color:var(--color-error,#d33)}.mw-parser-output .cs1-maint{display:none;color:#085;margin-left:0.3em}.mw-parser-output .cs1-kern-left{padding-left:0.2em}.mw-parser-output .cs1-kern-right{padding-right:0.2em}.mw-parser-output .citation .mw-selflink{font-weight:inherit}@media screen{.mw-parser-output .cs1-format{font-size:95%}html.skin-theme-clientpref-night .mw-parser-output .cs1-maint{color:#18911f}}@media screen and (prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .cs1-maint{color:#18911f}}</style><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.w3.org/TR/rdf-syntax-grammar/">"World Wide Web Consortium (W3C), "RDF/XML Syntax Specification (Revised)", 25 Feb. 2014"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=World+Wide+Web+Consortium+%28W3C%29%2C+%22RDF%2FXML+Syntax+Specification+%28Revised%29%22%2C+25+Feb.+2014.&amp;rft_id=http%3A%2F%2Fwww.w3.org%2FTR%2Frdf-syntax-grammar%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-3"><span class="mw-cite-backlink"><b><a href="#cite_ref-3">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.w3.org/TR/owl-features/">"World Wide Web Consortium (W3C), "OWL Web Ontology Language Overview", W3C Recommendation, 10 Feb. 2004"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=World+Wide+Web+Consortium+%28W3C%29%2C+%22OWL+Web+Ontology+Language+Overview%22%2C+W3C+Recommendation%2C+10+Feb.+2004.&amp;rft_id=http%3A%2F%2Fwww.w3.org%2FTR%2Fowl-features%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-4"><span class="mw-cite-backlink"><b><a href="#cite_ref-4">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFChung2018" class="citation journal cs1">Chung, Seung-Hwa (2018). <a rel="nofollow" class="external text" href="https://purkh.com/index.php/tocomp/article/view/33">"The MOUSE approach: Mapping Ontologies using UML for System Engineers"</a>. <i>Computer Reviews Journal</i>: 8–29. <a href="/wiki/ISSN_(identifier)" class="mw-redirect" title="ISSN (identifier)">ISSN</a>&nbsp;<a rel="nofollow" class="external text" href="https://search.worldcat.org/issn/2581-6640">2581-6640</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Computer+Reviews+Journal&amp;rft.atitle=The+MOUSE+approach%3A+Mapping+Ontologies+using+UML+for+System+Engineers&amp;rft.pages=8-29&amp;rft.date=2018&amp;rft.issn=2581-6640&amp;rft.aulast=Chung&amp;rft.aufirst=Seung-Hwa&amp;rft_id=https%3A%2F%2Fpurkh.com%2Findex.php%2Ftocomp%2Farticle%2Fview%2F33&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-W3C-SWA-5"><span class="mw-cite-backlink">^ <a href="#cite_ref-W3C-SWA_5-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-W3C-SWA_5-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.w3.org/2001/sw/">"W3C Semantic Web Activity"</a>. <a href="/wiki/World_Wide_Web_Consortium" title="World Wide Web Consortium">World Wide Web Consortium</a> (W3C). November 7, 2011<span class="reference-accessdate">. Retrieved <span class="nowrap">November 26,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=W3C+Semantic+Web+Activity&amp;rft.pub=World+Wide+Web+Consortium+%28W3C%29&amp;rft.date=2011-11-07&amp;rft_id=http%3A%2F%2Fwww.w3.org%2F2001%2Fsw%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-6"><span class="mw-cite-backlink"><b><a href="#cite_ref-6">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation news cs1"><a rel="nofollow" class="external text" href="https://www.bloomberg.com/news/articles/2007-04-09/q-and-a-with-tim-berners-leebusinessweek-business-news-stock-market-and-financial-advice">"Q&amp;A with Tim Berners-Lee, Special Report"</a>. <i>Bloomberg</i><span class="reference-accessdate">. Retrieved <span class="nowrap">14 April</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Bloomberg&amp;rft.atitle=Q%26A+with+Tim+Berners-Lee%2C+Special+Report&amp;rft_id=https%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2007-04-09%2Fq-and-a-with-tim-berners-leebusinessweek-business-news-stock-market-and-financial-advice&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-Berners-Lee-7"><span class="mw-cite-backlink">^ <a href="#cite_ref-Berners-Lee_7-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-Berners-Lee_7-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFBerners-LeeJames_HendlerOra_Lassila2001" class="citation magazine cs1">Berners-Lee, Tim; James Hendler; Ora Lassila (May 17, 2001). <a rel="nofollow" class="external text" href="https://www.scientificamerican.com/article/the-semantic-web/">"The Semantic Web"</a>. <i>Scientific American</i><span class="reference-accessdate">. Retrieved <span class="nowrap">July 2,</span> 2019</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Scientific+American&amp;rft.atitle=The+Semantic+Web&amp;rft.date=2001-05-17&amp;rft.aulast=Berners-Lee&amp;rft.aufirst=Tim&amp;rft.au=James+Hendler&amp;rft.au=Ora+Lassila&amp;rft_id=https%3A%2F%2Fwww.scientificamerican.com%2Farticle%2Fthe-semantic-web%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-8"><span class="mw-cite-backlink"><b><a href="#cite_ref-8">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFLee_Feigenbaum2007" class="citation magazine cs1">Lee Feigenbaum (May 1, 2007). <a rel="nofollow" class="external text" href="http://www.thefigtrees.net/lee/sw/sciam/semantic-web-in-action">"The Semantic Web in Action"</a>. <i>Scientific American</i><span class="reference-accessdate">. Retrieved <span class="nowrap">February 24,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Scientific+American&amp;rft.atitle=The+Semantic+Web+in+Action&amp;rft.date=2007-05-01&amp;rft.au=Lee+Feigenbaum&amp;rft_id=http%3A%2F%2Fwww.thefigtrees.net%2Flee%2Fsw%2Fsciam%2Fsemantic-web-in-action&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-9"><span class="mw-cite-backlink"><b><a href="#cite_ref-9">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFBerners-LeeFischetti,_Mark1999" class="citation book cs1"><a href="/wiki/Tim_Berners-Lee" title="Tim Berners-Lee">Berners-Lee, Tim</a>; Fischetti, Mark (1999). <a href="/wiki/Tim_Berners_Lee#Weaving_the_Web" class="mw-redirect" title="Tim Berners Lee"><i>Weaving the Web</i></a>. <a href="/wiki/HarperSanFrancisco" class="mw-redirect" title="HarperSanFrancisco">HarperSanFrancisco</a>. <a rel="nofollow" class="external text" href="https://archive.org/details/isbn_9780062515872/page/">chapter 12</a>. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-0-06-251587-2" title="Special:BookSources/978-0-06-251587-2"><bdi>978-0-06-251587-2</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Weaving+the+Web&amp;rft.pages=chapter+12&amp;rft.pub=HarperSanFrancisco&amp;rft.date=1999&amp;rft.isbn=978-0-06-251587-2&amp;rft.aulast=Berners-Lee&amp;rft.aufirst=Tim&amp;rft.au=Fischetti%2C+Mark&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-10"><span class="mw-cite-backlink"><b><a href="#cite_ref-10">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFBerners-LeeHendlerLassila2001" class="citation magazine cs1">Berners-Lee, Tim; Hendler, James; Lassila, Ora (May 17, 2001). <a rel="nofollow" class="external text" href="https://web.archive.org/web/20171010210556/https://pdfs.semanticscholar.org/566c/1c6bd366b4c9e07fc37eb372771690d5ba31.pdf">"The Semantic Web"</a> <span class="cs1-format">(PDF)</span>. <i>Scientific American</i>. Vol.&nbsp;284, no.&nbsp;5. pp.&nbsp;34–43. <a href="/wiki/JSTOR_(identifier)" class="mw-redirect" title="JSTOR (identifier)">JSTOR</a>&nbsp;<a rel="nofollow" class="external text" href="https://www.jstor.org/stable/26059207">26059207</a>. <a href="/wiki/S2CID_(identifier)" class="mw-redirect" title="S2CID (identifier)">S2CID</a>&nbsp;<a rel="nofollow" class="external text" href="https://api.semanticscholar.org/CorpusID:56818714">56818714</a>. Archived from <a rel="nofollow" class="external text" href="https://pdfs.semanticscholar.org/566c/1c6bd366b4c9e07fc37eb372771690d5ba31.pdf">the original</a> <span class="cs1-format">(PDF)</span> on October 10, 2017<span class="reference-accessdate">. Retrieved <span class="nowrap">March 13,</span> 2008</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Scientific+American&amp;rft.atitle=The+Semantic+Web&amp;rft.volume=284&amp;rft.issue=5&amp;rft.pages=34-43&amp;rft.date=2001-05-17&amp;rft_id=https%3A%2F%2Fwww.jstor.org%2Fstable%2F26059207%23id-name%3DJSTOR&amp;rft_id=https%3A%2F%2Fapi.semanticscholar.org%2FCorpusID%3A56818714%23id-name%3DS2CID&amp;rft.aulast=Berners-Lee&amp;rft.aufirst=Tim&amp;rft.au=Hendler%2C+James&amp;rft.au=Lassila%2C+Ora&amp;rft_id=https%3A%2F%2Fpdfs.semanticscholar.org%2F566c%2F1c6bd366b4c9e07fc37eb372771690d5ba31.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-11"><span class="mw-cite-backlink"><b><a href="#cite_ref-11">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFNigel_ShadboltWendy_HallTim_Berners-Lee2006" class="citation web cs1">Nigel Shadbolt; Wendy Hall; Tim Berners-Lee (2006). <a rel="nofollow" class="external text" href="https://web.archive.org/web/20130320130521/http://eprints.soton.ac.uk/262614/1/Semantic_Web_Revisted.pdf">"The Semantic Web Revisited"</a> <span class="cs1-format">(PDF)</span>. <i><a href="/wiki/IEEE_Intelligent_Systems" title="IEEE Intelligent Systems">IEEE Intelligent Systems</a></i>. Archived from <a rel="nofollow" class="external text" href="http://eprints.ecs.soton.ac.uk/12614/1/Semantic_Web_Revisted.pdf">the original</a> <span class="cs1-format">(PDF)</span> on March 20, 2013<span class="reference-accessdate">. Retrieved <span class="nowrap">April 13,</span> 2007</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=IEEE+Intelligent+Systems&amp;rft.atitle=The+Semantic+Web+Revisited&amp;rft.date=2006&amp;rft.au=Nigel+Shadbolt&amp;rft.au=Wendy+Hall&amp;rft.au=Tim+Berners-Lee&amp;rft_id=http%3A%2F%2Feprints.ecs.soton.ac.uk%2F12614%2F1%2FSemantic_Web_Revisted.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-12"><span class="mw-cite-backlink"><b><a href="#cite_ref-12">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFRamanathan_V._Guha2013" class="citation web cs1">Ramanathan V. Guha (2013). <a rel="nofollow" class="external text" href="http://iswc2013.semanticweb.org/content/keynote-ramanathan-v-guha.html">"Light at the End of the Tunnel"</a>. <i><a href="/wiki/International_Semantic_Web_Conference" title="International Semantic Web Conference">International Semantic Web Conference</a> 2013 Keynote</i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 8,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=International+Semantic+Web+Conference+2013+Keynote&amp;rft.atitle=Light+at+the+End+of+the+Tunnel&amp;rft.date=2013&amp;rft.au=Ramanathan+V.+Guha&amp;rft_id=http%3A%2F%2Fiswc2013.semanticweb.org%2Fcontent%2Fkeynote-ramanathan-v-guha.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-13"><span class="mw-cite-backlink"><b><a href="#cite_ref-13">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFAllsopp2007" class="citation book cs1">Allsopp, John (March 2007). <span class="id-lock-registration" title="Free registration required"><a rel="nofollow" class="external text" href="https://archive.org/details/isbn_9781590598146/page/368"><i>Microformats: Empowering Your Markup for Web 2.0</i></a></span>. <a href="/wiki/Apress" class="mw-redirect" title="Apress">Friends of ED</a>. p.&nbsp;<a rel="nofollow" class="external text" href="https://archive.org/details/isbn_9781590598146/page/368">368</a>. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-1-59059-814-6" title="Special:BookSources/978-1-59059-814-6"><bdi>978-1-59059-814-6</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Microformats%3A+Empowering+Your+Markup+for+Web+2.0&amp;rft.pages=368&amp;rft.pub=Friends+of+ED&amp;rft.date=2007-03&amp;rft.isbn=978-1-59059-814-6&amp;rft.aulast=Allsopp&amp;rft.aufirst=John&amp;rft_id=https%3A%2F%2Farchive.org%2Fdetails%2Fisbn_9781590598146%2Fpage%2F368&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-14"><span class="mw-cite-backlink"><b><a href="#cite_ref-14">^</a></b></span> <span class="reference-text">Artem Chebotko and Shiyong Lu, "Querying the Semantic Web: An Efficient Approach Using Relational Databases", <a href="/wiki/LAP_Lambert_Academic_Publishing" class="mw-redirect" title="LAP Lambert Academic Publishing">LAP Lambert Academic Publishing</a>, <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-3-8383-0264-5" title="Special:BookSources/978-3-8383-0264-5">978-3-8383-0264-5</a>, 2009.</span>
</li>
<li id="cite_note-15"><span class="mw-cite-backlink"><b><a href="#cite_ref-15">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://www.ambuehler.ethz.ch/CDstore/www2006/www.rawsugar.com/www2006/13.pdf">"Towards the Semantic Web: Collaborative Tag Suggestions"</a> <span class="cs1-format">(PDF)</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Towards+the+Semantic+Web%3A+Collaborative+Tag+Suggestions&amp;rft_id=https%3A%2F%2Fwww.ambuehler.ethz.ch%2FCDstore%2Fwww2006%2Fwww.rawsugar.com%2Fwww2006%2F13.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-16"><span class="mw-cite-backlink"><b><a href="#cite_ref-16">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFSpeciaMotta2007" class="citation book cs1">Specia, Lucia; Motta, Enrico (2007). "Integrating Folksonomies with the Semantic Web". <i>The Semantic Web: Research and Applications</i>. Lecture Notes in Computer Science. Vol.&nbsp;4519. Springer. pp.&nbsp;624–639. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<span class="id-lock-free" title="Freely accessible"><a rel="nofollow" class="external text" href="https://doi.org/10.1007%2F978-3-540-72667-8_44">10.1007/978-3-540-72667-8_44</a></span>. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-3-540-72666-1" title="Special:BookSources/978-3-540-72666-1"><bdi>978-3-540-72666-1</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Integrating+Folksonomies+with+the+Semantic+Web&amp;rft.btitle=The+Semantic+Web%3A+Research+and+Applications&amp;rft.series=Lecture+Notes+in+Computer+Science&amp;rft.pages=624-639&amp;rft.pub=Springer&amp;rft.date=2007&amp;rft_id=info%3Adoi%2F10.1007%2F978-3-540-72667-8_44&amp;rft.isbn=978-3-540-72666-1&amp;rft.aulast=Specia&amp;rft.aufirst=Lucia&amp;rft.au=Motta%2C+Enrico&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-17"><span class="mw-cite-backlink"><b><a href="#cite_ref-17">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://oro.open.ac.uk/23608/4/semnet2007.pdf">"Bridging the gap between folksonomies and the semantic web: an experience report"</a> <span class="cs1-format">(PDF)</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Bridging+the+gap+between+folksonomies+and+the+semantic+web%3A+an+experience+report&amp;rft_id=http%3A%2F%2Foro.open.ac.uk%2F23608%2F4%2Fsemnet2007.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-18"><span class="mw-cite-backlink"><b><a href="#cite_ref-18">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFNicholsonMordauntLopezUppala2021" class="citation journal cs1">Nicholson, Josh M.; Mordaunt, Milo; Lopez, Patrice; Uppala, Ashish; Rosati, Domenic; Rodrigues, Neves P.; Grabitz, Peter; Rife, Sean C. (5 November 2021). <a rel="nofollow" class="external text" href="https://doi.org/10.1162%2Fqss_a_00146">"scite: A smart citation index that displays the context of citations and classifies their intent using deep learning"</a>. <i>Quantitative Science Studies</i>. <b>2</b> (3): 882–898. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<span class="id-lock-free" title="Freely accessible"><a rel="nofollow" class="external text" href="https://doi.org/10.1162%2Fqss_a_00146">10.1162/qss_a_00146</a></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Quantitative+Science+Studies&amp;rft.atitle=scite%3A+A+smart+citation+index+that+displays+the+context+of+citations+and+classifies+their+intent+using+deep+learning&amp;rft.volume=2&amp;rft.issue=3&amp;rft.pages=882-898&amp;rft.date=2021-11-05&amp;rft_id=info%3Adoi%2F10.1162%2Fqss_a_00146&amp;rft.aulast=Nicholson&amp;rft.aufirst=Josh+M.&amp;rft.au=Mordaunt%2C+Milo&amp;rft.au=Lopez%2C+Patrice&amp;rft.au=Uppala%2C+Ashish&amp;rft.au=Rosati%2C+Domenic&amp;rft.au=Rodrigues%2C+Neves+P.&amp;rft.au=Grabitz%2C+Peter&amp;rft.au=Rife%2C+Sean+C.&amp;rft_id=https%3A%2F%2Fdoi.org%2F10.1162%252Fqss_a_00146&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-19"><span class="mw-cite-backlink"><b><a href="#cite_ref-19">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFSingh_Chawla2022" class="citation news cs1">Singh Chawla, Dalmeet (24 January 2022). <a rel="nofollow" class="external text" href="https://www.nature.com/articles/d41586-022-00138-y">"Massive open index of scholarly papers launches"</a>. <i><a href="/wiki/Nature_(journal)" title="Nature (journal)">Nature</a></i>. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1038%2Fd41586-022-00138-y">10.1038/d41586-022-00138-y</a><span class="reference-accessdate">. Retrieved <span class="nowrap">14 February</span> 2022</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Nature&amp;rft.atitle=Massive+open+index+of+scholarly+papers+launches&amp;rft.date=2022-01-24&amp;rft_id=info%3Adoi%2F10.1038%2Fd41586-022-00138-y&amp;rft.aulast=Singh+Chawla&amp;rft.aufirst=Dalmeet&amp;rft_id=https%3A%2F%2Fwww.nature.com%2Farticles%2Fd41586-022-00138-y&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-20"><span class="mw-cite-backlink"><b><a href="#cite_ref-20">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation news cs1"><a rel="nofollow" class="external text" href="https://library.smu.edu.sg/topics-insights/openalex-promising-alternative-microsoft-academic-graph">"OpenAlex: The Promising Alternative to Microsoft Academic Graph"</a>. <i>Singapore Management University (SMU)</i><span class="reference-accessdate">. Retrieved <span class="nowrap">14 February</span> 2022</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Singapore+Management+University+%28SMU%29&amp;rft.atitle=OpenAlex%3A+The+Promising+Alternative+to+Microsoft+Academic+Graph&amp;rft_id=https%3A%2F%2Flibrary.smu.edu.sg%2Ftopics-insights%2Fopenalex-promising-alternative-microsoft-academic-graph&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-21"><span class="mw-cite-backlink"><b><a href="#cite_ref-21">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://docs.openalex.org/">"OpenAlex Documentation"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">18 February</span> 2022</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=OpenAlex+Documentation&amp;rft_id=https%3A%2F%2Fdocs.openalex.org%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-22"><span class="mw-cite-backlink"><b><a href="#cite_ref-22">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFShannon2006" class="citation news cs1">Shannon, Victoria (23 May 2006). <a rel="nofollow" class="external text" href="https://www.nytimes.com/2006/05/23/technology/23iht-web.html">"A 'more revolutionary' Web"</a>. <i><a href="/wiki/International_Herald_Tribune" title="International Herald Tribune">International Herald Tribune</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">26 June</span> 2006</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=International+Herald+Tribune&amp;rft.atitle=A+%27more+revolutionary%27+Web&amp;rft.date=2006-05-23&amp;rft.aulast=Shannon&amp;rft.aufirst=Victoria&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F2006%2F05%2F23%2Ftechnology%2F23iht-web.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-23"><span class="mw-cite-backlink"><b><a href="#cite_ref-23">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://www.investopedia.com/web-20-web-30-5208698">"Web 3.0 Explained, Plus the History of Web 1.0 and 2.0"</a>. <i>Investopedia</i><span class="reference-accessdate">. Retrieved <span class="nowrap">2022-10-21</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Investopedia&amp;rft.atitle=Web+3.0+Explained%2C+Plus+the+History+of+Web+1.0+and+2.0&amp;rft_id=https%3A%2F%2Fwww.investopedia.com%2Fweb-20-web-30-5208698&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-24"><span class="mw-cite-backlink"><b><a href="#cite_ref-24">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external free" href="https://www.rsisinternational.org/IJRSI/Issue31/75-78.pdf">https://www.rsisinternational.org/IJRSI/Issue31/75-78.pdf</a></span>
</li>
<li id="cite_note-25"><span class="mw-cite-backlink"><b><a href="#cite_ref-25">^</a></b></span> <span class="reference-text">Almeida, F. (2017). Concept and dimensions of web 4.0. International journal of computers and technology, 16(7).</span>
</li>
<li id="cite_note-26"><span class="mw-cite-backlink"><b><a href="#cite_ref-26">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://www.politico.eu/article/the-commission-wants-the-eu-to-lead-in-web-4-0-come-again/">"The Commission wants the EU to lead on 'Web 4.0' — whatever that is"</a>. 11 July 2023.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=The+Commission+wants+the+EU+to+lead+on+%27Web+4.0%27+%E2%80%94+whatever+that+is&amp;rft.date=2023-07-11&amp;rft_id=https%3A%2F%2Fwww.politico.eu%2Farticle%2Fthe-commission-wants-the-eu-to-lead-in-web-4-0-come-again%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-27"><span class="mw-cite-backlink"><b><a href="#cite_ref-27">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://www.w3.org/2005/Incubator/urw3/Overview.html">"W3C Uncertainty Reasoning for the World Wide Web"</a>. <i>www.w3.org</i><span class="reference-accessdate">. Retrieved <span class="nowrap">2021-05-14</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=www.w3.org&amp;rft.atitle=W3C+Uncertainty+Reasoning+for+the+World+Wide+Web&amp;rft_id=https%3A%2F%2Fwww.w3.org%2F2005%2FIncubator%2Furw3%2FOverview.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-28"><span class="mw-cite-backlink"><b><a href="#cite_ref-28">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.w3.org/2005/Incubator/urw3/XGR-urw3-20080331/Overview.html">"Uncertainty Reasoning for the World Wide Web"</a>. <i>W3.org</i><span class="reference-accessdate">. Retrieved <span class="nowrap">20 December</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=W3.org&amp;rft.atitle=Uncertainty+Reasoning+for+the+World+Wide+Web&amp;rft_id=http%3A%2F%2Fwww.w3.org%2F2005%2FIncubator%2Furw3%2FXGR-urw3-20080331%2FOverview.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-29"><span class="mw-cite-backlink"><b><a href="#cite_ref-29">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFLukasiewiczUmberto_Straccia2008" class="citation journal cs1">Lukasiewicz, Thomas; Umberto Straccia (2008). <a rel="nofollow" class="external text" href="http://faure.isti.cnr.it/~straccia/download/papers/JWS08/JWS08.pdf">"Managing uncertainty and vagueness in description logics for the Semantic Web"</a> <span class="cs1-format">(PDF)</span>. <i>Web Semantics: Science, Services and Agents on the World Wide Web</i>. <b>6</b> (4): 291–308. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1016%2Fj.websem.2008.04.001">10.1016/j.websem.2008.04.001</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Web+Semantics%3A+Science%2C+Services+and+Agents+on+the+World+Wide+Web&amp;rft.atitle=Managing+uncertainty+and+vagueness+in+description+logics+for+the+Semantic+Web&amp;rft.volume=6&amp;rft.issue=4&amp;rft.pages=291-308&amp;rft.date=2008&amp;rft_id=info%3Adoi%2F10.1016%2Fj.websem.2008.04.001&amp;rft.aulast=Lukasiewicz&amp;rft.aufirst=Thomas&amp;rft.au=Umberto+Straccia&amp;rft_id=http%3A%2F%2Ffaure.isti.cnr.it%2F~straccia%2Fdownload%2Fpapers%2FJWS08%2FJWS08.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-30"><span class="mw-cite-backlink"><b><a href="#cite_ref-30">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.w3.org/2001/sw/wiki/Main_Page">"Semantic Web Standards"</a>. <i>W3.org</i><span class="reference-accessdate">. Retrieved <span class="nowrap">14 April</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=W3.org&amp;rft.atitle=Semantic+Web+Standards&amp;rft_id=http%3A%2F%2Fwww.w3.org%2F2001%2Fsw%2Fwiki%2FMain_Page&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-31"><span class="mw-cite-backlink"><b><a href="#cite_ref-31">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.w3.org/TR/owl-features/">"OWL Web Ontology Language Overview"</a>. World Wide Web Consortium (W3C). February 10, 2004<span class="reference-accessdate">. Retrieved <span class="nowrap">November 26,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=OWL+Web+Ontology+Language+Overview&amp;rft.pub=World+Wide+Web+Consortium+%28W3C%29&amp;rft.date=2004-02-10&amp;rft_id=http%3A%2F%2Fwww.w3.org%2FTR%2Fowl-features%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-32"><span class="mw-cite-backlink"><b><a href="#cite_ref-32">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.w3.org/RDF/">"Resource Description Framework (RDF)"</a>. <a href="/wiki/World_Wide_Web_Consortium" title="World Wide Web Consortium">World Wide Web Consortium</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Resource+Description+Framework+%28RDF%29&amp;rft.pub=World+Wide+Web+Consortium&amp;rft_id=http%3A%2F%2Fwww.w3.org%2FRDF%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-33"><span class="mw-cite-backlink"><b><a href="#cite_ref-33">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFAllemangHendlerGandon2020" class="citation book cs1">Allemang, Dean; Hendler, James; Gandon, Fabien (August 3, 2020). <i>Semantic Web for the Working Ontologist&nbsp;: Effective Modeling for Linked Data, RDFS, and OWL</i> (Third&nbsp;ed.). [New York, NY, USA]: ACM Books; 3rd edition. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-1450376143" title="Special:BookSources/978-1450376143"><bdi>978-1450376143</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Semantic+Web+for+the+Working+Ontologist+%3A+Effective+Modeling+for+Linked+Data%2C+RDFS%2C+and+OWL&amp;rft.place=%5BNew+York%2C+NY%2C+USA%5D&amp;rft.edition=Third&amp;rft.pub=ACM+Books%3B+3rd+edition&amp;rft.date=2020-08-03&amp;rft.isbn=978-1450376143&amp;rft.aulast=Allemang&amp;rft.aufirst=Dean&amp;rft.au=Hendler%2C+James&amp;rft.au=Gandon%2C+Fabien&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-34"><span class="mw-cite-backlink"><b><a href="#cite_ref-34">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://www.w3.org/wiki/ConverterToRdf">"ConverterToRdf - W3C Wiki"</a>. <i>W3.org</i><span class="reference-accessdate">. Retrieved <span class="nowrap">20 December</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=W3.org&amp;rft.atitle=ConverterToRdf+-+W3C+Wiki&amp;rft_id=https%3A%2F%2Fwww.w3.org%2Fwiki%2FConverterToRdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-35"><span class="mw-cite-backlink"><b><a href="#cite_ref-35">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFSikos2015" class="citation book cs1">Sikos, Leslie F. (2015). <i>Mastering Structured Data on the Semantic Web: From HTML5 Microdata to Linked Open Data</i>. Apress. p.&nbsp;23. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-1-4842-1049-9" title="Special:BookSources/978-1-4842-1049-9"><bdi>978-1-4842-1049-9</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Mastering+Structured+Data+on+the+Semantic+Web%3A+From+HTML5+Microdata+to+Linked+Open+Data&amp;rft.pages=23&amp;rft.pub=Apress&amp;rft.date=2015&amp;rft.isbn=978-1-4842-1049-9&amp;rft.aulast=Sikos&amp;rft.aufirst=Leslie+F.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-36"><span class="mw-cite-backlink"><b><a href="#cite_ref-36">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFKieselLangWachsmuthHornecker2020" class="citation book cs1">Kiesel, Johannes; Lang, Kevin; Wachsmuth, Henning; Hornecker, Eva; Stein, Benno (14 March 2020). "Investigating Expectations for Voice-based and Conversational Argument Search on the Web". <i>Proceedings of the 2020 Conference on Human Information Interaction and Retrieval</i>. ACM. pp.&nbsp;53–62. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1145%2F3343413.3377978">10.1145/3343413.3377978</a>. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/9781450368926" title="Special:BookSources/9781450368926"><bdi>9781450368926</bdi></a>. <a href="/wiki/S2CID_(identifier)" class="mw-redirect" title="S2CID (identifier)">S2CID</a>&nbsp;<a rel="nofollow" class="external text" href="https://api.semanticscholar.org/CorpusID:212676751">212676751</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Investigating+Expectations+for+Voice-based+and+Conversational+Argument+Search+on+the+Web&amp;rft.btitle=Proceedings+of+the+2020+Conference+on+Human+Information+Interaction+and+Retrieval&amp;rft.pages=53-62&amp;rft.pub=ACM&amp;rft.date=2020-03-14&amp;rft_id=https%3A%2F%2Fapi.semanticscholar.org%2FCorpusID%3A212676751%23id-name%3DS2CID&amp;rft_id=info%3Adoi%2F10.1145%2F3343413.3377978&amp;rft.isbn=9781450368926&amp;rft.aulast=Kiesel&amp;rft.aufirst=Johannes&amp;rft.au=Lang%2C+Kevin&amp;rft.au=Wachsmuth%2C+Henning&amp;rft.au=Hornecker%2C+Eva&amp;rft.au=Stein%2C+Benno&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-37"><span class="mw-cite-backlink"><b><a href="#cite_ref-37">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFVetere2018" class="citation journal cs1">Vetere, Guido (30 June 2018). "L'impossibile necessità delle piattaforme sociali decentralizzate". <i>DigitCult - Scientific Journal on Digital Cultures</i>. <b>3</b> (1): 41–50. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.4399%2F97888255159096">10.4399/97888255159096</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=DigitCult+-+Scientific+Journal+on+Digital+Cultures&amp;rft.atitle=L%27impossibile+necessit%C3%A0+delle+piattaforme+sociali+decentralizzate&amp;rft.volume=3&amp;rft.issue=1&amp;rft.pages=41-50&amp;rft.date=2018-06-30&amp;rft_id=info%3Adoi%2F10.4399%2F97888255159096&amp;rft.aulast=Vetere&amp;rft.aufirst=Guido&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-38"><span class="mw-cite-backlink"><b><a href="#cite_ref-38">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFBikakisFlourisPatkosPlexousakis2023" class="citation journal cs1">Bikakis, Antonis; Flouris, Giorgos; Patkos, Theodore; Plexousakis, Dimitris (2023). <a rel="nofollow" class="external text" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10313200">"Sketching the vision of the Web of Debates"</a>. <i>Frontiers in Artificial Intelligence</i>. <b>6</b>. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<span class="id-lock-free" title="Freely accessible"><a rel="nofollow" class="external text" href="https://doi.org/10.3389%2Ffrai.2023.1124045">10.3389/frai.2023.1124045</a></span>. <a href="/wiki/ISSN_(identifier)" class="mw-redirect" title="ISSN (identifier)">ISSN</a>&nbsp;<a rel="nofollow" class="external text" href="https://search.worldcat.org/issn/2624-8212">2624-8212</a>. <a href="/wiki/PMC_(identifier)" class="mw-redirect" title="PMC (identifier)">PMC</a>&nbsp;<span class="id-lock-free" title="Freely accessible"><a rel="nofollow" class="external text" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10313200">10313200</a></span>. <a href="/wiki/PMID_(identifier)" class="mw-redirect" title="PMID (identifier)">PMID</a>&nbsp;<a rel="nofollow" class="external text" href="https://pubmed.ncbi.nlm.nih.gov/37396970">37396970</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Frontiers+in+Artificial+Intelligence&amp;rft.atitle=Sketching+the+vision+of+the+Web+of+Debates&amp;rft.volume=6&amp;rft.date=2023&amp;rft_id=https%3A%2F%2Fwww.ncbi.nlm.nih.gov%2Fpmc%2Farticles%2FPMC10313200%23id-name%3DPMC&amp;rft.issn=2624-8212&amp;rft_id=info%3Apmid%2F37396970&amp;rft_id=info%3Adoi%2F10.3389%2Ffrai.2023.1124045&amp;rft.aulast=Bikakis&amp;rft.aufirst=Antonis&amp;rft.au=Flouris%2C+Giorgos&amp;rft.au=Patkos%2C+Theodore&amp;rft.au=Plexousakis%2C+Dimitris&amp;rft_id=https%3A%2F%2Fwww.ncbi.nlm.nih.gov%2Fpmc%2Farticles%2FPMC10313200&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-39"><span class="mw-cite-backlink"><b><a href="#cite_ref-39">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFSchneiderGrozaPassant" class="citation journal cs1">Schneider, Jodi; Groza, Tudor; Passant, Alexandre. <a rel="nofollow" class="external text" href="https://www.semantic-web-journal.net/sites/default/files/swj138_2.pdf">"A Review of Argumentation for the Social Semantic Web"</a> <span class="cs1-format">(PDF)</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=A+Review+of+Argumentation+for+the+Social+Semantic+Web&amp;rft.aulast=Schneider&amp;rft.aufirst=Jodi&amp;rft.au=Groza%2C+Tudor&amp;rft.au=Passant%2C+Alexandre&amp;rft_id=https%3A%2F%2Fwww.semantic-web-journal.net%2Fsites%2Fdefault%2Ffiles%2Fswj138_2.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span> <span class="cs1-visible-error citation-comment"><code class="cs1-code">{{<a href="/wiki/Template:Cite_journal" title="Template:Cite journal">cite journal</a>}}</code>: </span><span class="cs1-visible-error citation-comment">Cite journal requires <code class="cs1-code">|journal=</code> (<a href="/wiki/Help:CS1_errors#missing_periodical" title="Help:CS1 errors">help</a>)</span></span>
</li>
<li id="cite_note-40"><span class="mw-cite-backlink"><b><a href="#cite_ref-40">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFZhangZhaoLi2015" class="citation book cs1">Zhang, Chuanrong; Zhao, Tian; Li, Weidong (2015). <i>Geospatial Semantic Web</i>. Springer International Publishing&nbsp;: Imprint: Springer. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-3-319-17801-1" title="Special:BookSources/978-3-319-17801-1"><bdi>978-3-319-17801-1</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Geospatial+Semantic+Web&amp;rft.pub=Springer+International+Publishing+%3A+Imprint%3A+Springer&amp;rft.date=2015&amp;rft.isbn=978-3-319-17801-1&amp;rft.aulast=Zhang&amp;rft.aufirst=Chuanrong&amp;rft.au=Zhao%2C+Tian&amp;rft.au=Li%2C+Weidong&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-41"><span class="mw-cite-backlink"><b><a href="#cite_ref-41">^</a></b></span> <span class="reference-text">Omar Alonso and Hugo Zaragoza. 2008. Exploiting semantic annotations in information retrieval: ESAIR '08. SIGIR Forum 42, 1 (June 2008), 55–58. <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1145%2F1394251.1394262">10.1145/1394251.1394262</a></span>
</li>
<li id="cite_note-42"><span class="mw-cite-backlink"><b><a href="#cite_ref-42">^</a></b></span> <span class="reference-text">Jaap Kamps, <a href="/wiki/Jussi_Karlgren" title="Jussi Karlgren">Jussi Karlgren</a>, and Ralf Schenkel. 2011. Report on the third workshop on exploiting semantic annotations in information retrieval (ESAIR). SIGIR Forum 45, 1 (May 2011), 33–41. <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1145%2F1988852.1988858">10.1145/1988852.1988858</a></span>
</li>
<li id="cite_note-43"><span class="mw-cite-backlink"><b><a href="#cite_ref-43">^</a></b></span> <span class="reference-text">Jaap Kamps, <a href="/wiki/Jussi_Karlgren" title="Jussi Karlgren">Jussi Karlgren</a>, Peter Mika, and Vanessa Murdock. 2012. Fifth workshop on exploiting semantic annotations in information retrieval: ESAIR '12). In Proceedings of the 21st ACM international conference on information and knowledge management (CIKM '12). ACM, New York, NY, USA, 2772–2773. <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1145%2F2396761.2398761">10.1145/2396761.2398761</a></span>
</li>
<li id="cite_note-44"><span class="mw-cite-backlink"><b><a href="#cite_ref-44">^</a></b></span> <span class="reference-text">Omar Alonso, Jaap Kamps, and <a href="/wiki/Jussi_Karlgren" title="Jussi Karlgren">Jussi Karlgren</a>. 2015. Report on the Seventh Workshop on Exploiting Semantic Annotations in Information Retrieval (ESAIR '14). SIGIR Forum 49, 1 (June 2015), 27–34. <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1145%2F2795403.2795412">10.1145/2795403.2795412</a></span>
</li>
<li id="cite_note-45"><span class="mw-cite-backlink"><b><a href="#cite_ref-45">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="Kuriakose2009" class="citation journal cs1">Kuriakose, John (September 2009). <a rel="nofollow" class="external text" href="http://www.cutter.com/itjournal/fulltext/2009/09/itj0909b.html">"Understanding and Adopting Semantic Web Technology"</a>. <i>Cutter IT Journal</i>. <b>22</b> (9). CUTTER INFORMATION CORP.: 10–18.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Cutter+IT+Journal&amp;rft.atitle=Understanding+and+Adopting+Semantic+Web+Technology&amp;rft.volume=22&amp;rft.issue=9&amp;rft.pages=10-18&amp;rft.date=2009-09&amp;rft.aulast=Kuriakose&amp;rft.aufirst=John&amp;rft_id=http%3A%2F%2Fwww.cutter.com%2Fitjournal%2Ffulltext%2F2009%2F09%2Fitj0909b.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-which-46"><span class="mw-cite-backlink">^ <a href="#cite_ref-which_46-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-which_46-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-which_46-2"><sup><i><b>c</b></i></sup></a></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFMarshallShipman2003" class="citation conference cs1">Marshall, Catherine C.; Shipman, Frank M. (2003). <a rel="nofollow" class="external text" href="https://web.archive.org/web/20150923211553/http://www.csdl.tamu.edu/~marshall/ht03-sw-4.pdf"><i>Which semantic web?</i></a> <span class="cs1-format">(PDF)</span>. Proc. ACM Conf. on Hypertext and Hypermedia. pp.&nbsp;57–66. Archived from <a rel="nofollow" class="external text" href="http://www.csdl.tamu.edu/~marshall/ht03-sw-4.pdf">the original</a> <span class="cs1-format">(PDF)</span> on 2015-09-23<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-04-17</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=conference&amp;rft.btitle=Which+semantic+web%3F&amp;rft.pages=57-66&amp;rft.date=2003&amp;rft.aulast=Marshall&amp;rft.aufirst=Catherine+C.&amp;rft.au=Shipman%2C+Frank+M.&amp;rft_id=http%3A%2F%2Fwww.csdl.tamu.edu%2F~marshall%2Fht03-sw-4.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-Herman000-47"><span class="mw-cite-backlink">^ <a href="#cite_ref-Herman000_47-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-Herman000_47-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFIvan_Herman2007" class="citation conference cs1">Ivan Herman (2007). <a rel="nofollow" class="external text" href="http://www.w3.org/2007/Talks/0424-Stavanger-IH/Slides.pdf"><i>State of the Semantic Web</i></a> <span class="cs1-format">(PDF)</span>. Semantic Days 2007<span class="reference-accessdate">. Retrieved <span class="nowrap">July 26,</span> 2007</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=conference&amp;rft.btitle=State+of+the+Semantic+Web&amp;rft.date=2007&amp;rft.au=Ivan+Herman&amp;rft_id=http%3A%2F%2Fwww.w3.org%2F2007%2FTalks%2F0424-Stavanger-IH%2FSlides.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-48"><span class="mw-cite-backlink"><b><a href="#cite_ref-48">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFDoctorow" class="citation web cs1">Doctorow, Cory. <a rel="nofollow" class="external text" href="https://people.well.com/user/doctorow/metacrap.htm">"Metacrap: Putting the torch to seven straw-men of the meta-utopia"</a>. <i>www.well.com/</i><span class="reference-accessdate">. Retrieved <span class="nowrap">11 September</span> 2023</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=www.well.com%2F&amp;rft.atitle=Metacrap%3A+Putting+the+torch+to+seven+straw-men+of+the+meta-utopia&amp;rft.aulast=Doctorow&amp;rft.aufirst=Cory&amp;rft_id=https%3A%2F%2Fpeople.well.com%2Fuser%2Fdoctorow%2Fmetacrap.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-Gardenfors04-49"><span class="mw-cite-backlink"><b><a href="#cite_ref-Gardenfors04_49-0">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFGärdenfors2004" class="citation book cs1">Gärdenfors, Peter (2004). <i>How to make the Semantic Web more semantic</i>. IOS Press. pp.&nbsp;17–34.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=How+to+make+the+Semantic+Web+more+semantic&amp;rft.pages=17-34&amp;rft.pub=IOS+Press&amp;rft.date=2004&amp;rft.aulast=G%C3%A4rdenfors&amp;rft.aufirst=Peter&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span> <span class="cs1-visible-error citation-comment"><code class="cs1-code">{{<a href="/wiki/Template:Cite_book" title="Template:Cite book">cite book</a>}}</code>: </span><span class="cs1-visible-error citation-comment"><code class="cs1-code">|work=</code> ignored (<a href="/wiki/Help:CS1_errors#periodical_ignored" title="Help:CS1 errors">help</a>)</span></span>
</li>
<li id="cite_note-Honkela08-50"><span class="mw-cite-backlink"><b><a href="#cite_ref-Honkela08_50-0">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFHonkelaKönönenLindh-KnuutilaPaukkeri2008" class="citation journal cs1">Honkela, Timo; Könönen, Ville; Lindh-Knuutila, Tiina; Paukkeri, Mari-Sanna (2008). "Simulating processes of concept formation and communication". <i>Journal of Economic Methodology</i>. <b>15</b> (3): 245–259. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1080%2F13501780802321350">10.1080/13501780802321350</a>. <a href="/wiki/S2CID_(identifier)" class="mw-redirect" title="S2CID (identifier)">S2CID</a>&nbsp;<a rel="nofollow" class="external text" href="https://api.semanticscholar.org/CorpusID:16994027">16994027</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Journal+of+Economic+Methodology&amp;rft.atitle=Simulating+processes+of+concept+formation+and+communication&amp;rft.volume=15&amp;rft.issue=3&amp;rft.pages=245-259&amp;rft.date=2008&amp;rft_id=info%3Adoi%2F10.1080%2F13501780802321350&amp;rft_id=https%3A%2F%2Fapi.semanticscholar.org%2FCorpusID%3A16994027%23id-name%3DS2CID&amp;rft.aulast=Honkela&amp;rft.aufirst=Timo&amp;rft.au=K%C3%B6n%C3%B6nen%2C+Ville&amp;rft.au=Lindh-Knuutila%2C+Tiina&amp;rft.au=Paukkeri%2C+Mari-Sanna&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-51"><span class="mw-cite-backlink"><b><a href="#cite_ref-51">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.policyawareweb.org/">"Policy Aware Web Project"</a>. Policyawareweb.org<span class="reference-accessdate">. Retrieved <span class="nowrap">2013-06-14</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Policy+Aware+Web+Project&amp;rft.pub=Policyawareweb.org&amp;rft_id=http%3A%2F%2Fwww.policyawareweb.org%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-52"><span class="mw-cite-backlink"><b><a href="#cite_ref-52">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFCorbyDieng-KuntzZuckerGandon2006" class="citation journal cs1">Corby, Olivier; Dieng-Kuntz, Rose; Zucker, Catherine Faron; Gandon, Fabien (2006). <a rel="nofollow" class="external text" href="https://hal.inria.fr/hal-01150215">"Searching the Semantic Web: Approximate Query Processing based on Ontologies"</a>. <i>IEEE Intelligent Systems</i>. <b>21</b>: 20–27. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1109%2FMIS.2006.16">10.1109/MIS.2006.16</a>. <a href="/wiki/S2CID_(identifier)" class="mw-redirect" title="S2CID (identifier)">S2CID</a>&nbsp;<a rel="nofollow" class="external text" href="https://api.semanticscholar.org/CorpusID:11488848">11488848</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=IEEE+Intelligent+Systems&amp;rft.atitle=Searching+the+Semantic+Web%3A+Approximate+Query+Processing+based+on+Ontologies&amp;rft.volume=21&amp;rft.pages=20-27&amp;rft.date=2006&amp;rft_id=info%3Adoi%2F10.1109%2FMIS.2006.16&amp;rft_id=https%3A%2F%2Fapi.semanticscholar.org%2FCorpusID%3A11488848%23id-name%3DS2CID&amp;rft.aulast=Corby&amp;rft.aufirst=Olivier&amp;rft.au=Dieng-Kuntz%2C+Rose&amp;rft.au=Zucker%2C+Catherine+Faron&amp;rft.au=Gandon%2C+Fabien&amp;rft_id=https%3A%2F%2Fhal.inria.fr%2Fhal-01150215&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-53"><span class="mw-cite-backlink"><b><a href="#cite_ref-53">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFGandon2002" class="citation thesis cs1">Gandon, Fabien (7 November 2002). <a rel="nofollow" class="external text" href="https://tel.archives-ouvertes.fr/tel-00378201"><i>Distributed Artificial Intelligence And Knowledge Management: Ontologies And Multi-Agent Systems For A Corporate Semantic Web</i></a> (phdthesis). Université Nice Sophia Antipolis.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adissertation&amp;rft.title=Distributed+Artificial+Intelligence+And+Knowledge+Management%3A+Ontologies+And+Multi-Agent+Systems+For+A+Corporate+Semantic+Web&amp;rft.inst=Universit%C3%A9+Nice+Sophia+Antipolis&amp;rft.date=2002-11-07&amp;rft.aulast=Gandon&amp;rft.aufirst=Fabien&amp;rft_id=https%3A%2F%2Ftel.archives-ouvertes.fr%2Ftel-00378201&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-54"><span class="mw-cite-backlink"><b><a href="#cite_ref-54">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFBuffaDehorsFaron-ZuckerSander2005" class="citation conference cs1">Buffa, Michel; Dehors, Sylvain; Faron-Zucker, Catherine; Sander, Peter (2005). <a rel="nofollow" class="external text" href="http://www-sop.inria.fr/acacia/personnel/Sylvain.Dehors/SW-EL@AIED-BuffaDehorsFaronSander_short.pdf">"Towards a Corporate Semantic Web Approach in Designing Learning Systems: Review of the Trial Solutioins Project"</a> <span class="cs1-format">(PDF)</span>. <i>International Workshop on Applications of Semantic Web Technologies for E-Learning</i>. Amsterdam, Holland. pp.&nbsp;73–76.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=conference&amp;rft.atitle=Towards+a+Corporate+Semantic+Web+Approach+in+Designing+Learning+Systems%3A+Review+of+the+Trial+Solutioins+Project&amp;rft.btitle=International+Workshop+on+Applications+of+Semantic+Web+Technologies+for+E-Learning&amp;rft.place=Amsterdam%2C+Holland&amp;rft.pages=73-76&amp;rft.date=2005&amp;rft.aulast=Buffa&amp;rft.aufirst=Michel&amp;rft.au=Dehors%2C+Sylvain&amp;rft.au=Faron-Zucker%2C+Catherine&amp;rft.au=Sander%2C+Peter&amp;rft_id=http%3A%2F%2Fwww-sop.inria.fr%2Facacia%2Fpersonnel%2FSylvain.Dehors%2FSW-EL%40AIED-BuffaDehorsFaronSander_short.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-55"><span class="mw-cite-backlink"><b><a href="#cite_ref-55">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.corporate-semantic-web.de">"Corporate Semantic Web - Home"</a>. <i>Corporate-semantic-web.de</i><span class="reference-accessdate">. Retrieved <span class="nowrap">14 April</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Corporate-semantic-web.de&amp;rft.atitle=Corporate+Semantic+Web+-+Home&amp;rft_id=http%3A%2F%2Fwww.corporate-semantic-web.de&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-56"><span class="mw-cite-backlink"><b><a href="#cite_ref-56">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFHinzeHeeseLuczak-RöschPaschke2012" class="citation conference cs1">Hinze, Annika; Heese, Ralf; Luczak-Rösch, Markus; Paschke, Adrian (2012). <a rel="nofollow" class="external text" href="http://iswc2012.semanticweb.org/sites/default/files/76490161.pdf">"Semantic Enrichment by Non-Experts: Usability of Manual Annotation Tools"</a> <span class="cs1-format">(PDF)</span>. <i>ISWC'12 - Proceedings of the 11th international conference on The Semantic Web</i>. Boston, USA. pp.&nbsp;165–181.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=conference&amp;rft.atitle=Semantic+Enrichment+by+Non-Experts%3A+Usability+of+Manual+Annotation+Tools&amp;rft.btitle=ISWC%2712+-+Proceedings+of+the+11th+international+conference+on+The+Semantic+Web&amp;rft.place=Boston%2C+USA&amp;rft.pages=165-181&amp;rft.date=2012&amp;rft.aulast=Hinze&amp;rft.aufirst=Annika&amp;rft.au=Heese%2C+Ralf&amp;rft.au=Luczak-R%C3%B6sch%2C+Markus&amp;rft.au=Paschke%2C+Adrian&amp;rft_id=http%3A%2F%2Fiswc2012.semanticweb.org%2Fsites%2Fdefault%2Ffiles%2F76490161.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-57"><span class="mw-cite-backlink"><b><a href="#cite_ref-57">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFMathieson2006" class="citation news cs1">Mathieson, S. A. (6 April 2006). <a rel="nofollow" class="external text" href="https://www.theguardian.com/technology/2006/apr/06/guardianweeklytechnologysection.timbernerslee">"Spread the word, and join it up"</a>. <i><a href="/wiki/The_Guardian" title="The Guardian">The Guardian</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">14 April</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Guardian&amp;rft.atitle=Spread+the+word%2C+and+join+it+up&amp;rft.date=2006-04-06&amp;rft.aulast=Mathieson&amp;rft.aufirst=S.+A.&amp;rft_id=https%3A%2F%2Fwww.theguardian.com%2Ftechnology%2F2006%2Fapr%2F06%2Fguardianweeklytechnologysection.timbernerslee&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
<li id="cite_note-58"><span class="mw-cite-backlink"><b><a href="#cite_ref-58">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFSpivack2007" class="citation web cs1">Spivack, Nova (18 September 2007). <a rel="nofollow" class="external text" href="https://novaspivack.typepad.com/nova_spivacks_weblog/2007/09/hyperdata.html">"The Semantic Web, Collective Intelligence and Hyperdata"</a>. <i>novaspivack.typepad.com/nova_spivacks_weblog [This Blog has Moved to NovaSpivack.com]</i><span class="reference-accessdate">. Retrieved <span class="nowrap">14 April</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=novaspivack.typepad.com%2Fnova_spivacks_weblog+%5BThis+Blog+has+Moved+to+NovaSpivack.com%5D&amp;rft.atitle=The+Semantic+Web%2C+Collective+Intelligence+and+Hyperdata&amp;rft.date=2007-09-18&amp;rft.aulast=Spivack&amp;rft.aufirst=Nova&amp;rft_id=https%3A%2F%2Fnovaspivack.typepad.com%2Fnova_spivacks_weblog%2F2007%2F09%2Fhyperdata.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></span>
</li>
</ol></div></div>
<div class="mw-heading mw-heading2"><h2 id="Further_reading">Further reading</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=22" title="Edit section: Further reading"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFLiyang_Yu2014" class="citation book cs1">Liyang Yu (December 14, 2014). <a rel="nofollow" class="external text" href="https://www.springer.com/computer/database+management+%26+information+retrieval/book/978-3-662-43795-7"><i>A Developer's Guide to the Semantic Web, 2nd ed</i></a>. Springer. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-3-662-43796-4" title="Special:BookSources/978-3-662-43796-4"><bdi>978-3-662-43796-4</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=A+Developer%27s+Guide+to+the+Semantic+Web%2C+2nd+ed.&amp;rft.pub=Springer&amp;rft.date=2014-12-14&amp;rft.isbn=978-3-662-43796-4&amp;rft.au=Liyang+Yu&amp;rft_id=https%3A%2F%2Fwww.springer.com%2Fcomputer%2Fdatabase%2Bmanagement%2B%2526%2Binformation%2Bretrieval%2Fbook%2F978-3-662-43795-7&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li>
<li><a href="https://commons.wikimedia.org/wiki/File:Aaron_Swartz_s_A_Programmable_Web_An_Unfinished_Work.pdf" class="extiw" title="commons:File:Aaron Swartz s A Programmable Web An Unfinished Work.pdf">Aaron Swartz's A Programmable Web: An unfinished Work</a> donated by Morgan &amp; Claypool Publishers after <a href="/wiki/Aaron_Swartz" title="Aaron Swartz">Aaron Swartz</a>'s death in January 2013.</li>
<li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFGrigoris_Antoniou,_Frank_van_Harmelen2008" class="citation book cs1">Grigoris Antoniou, <a href="/wiki/Frank_van_Harmelen" title="Frank van Harmelen">Frank van Harmelen</a> (March 31, 2008). <i>A Semantic Web Primer, 2nd Edition</i>. The <a href="/wiki/MIT_Press" title="MIT Press">MIT Press</a>. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-0-262-01242-3" title="Special:BookSources/978-0-262-01242-3"><bdi>978-0-262-01242-3</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=A+Semantic+Web+Primer%2C+2nd+Edition&amp;rft.pub=The+MIT+Press&amp;rft.date=2008-03-31&amp;rft.isbn=978-0-262-01242-3&amp;rft.au=Grigoris+Antoniou%2C+Frank+van+Harmelen&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li>
<li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFAllemangHendlerGandon2020" class="citation book cs1">Allemang, Dean; Hendler, James; Gandon, Fabien (August 3, 2020). <i>Semantic Web for the Working Ontologist&nbsp;: Effective Modeling for Linked Data, RDFS, and OWL</i> (Third&nbsp;ed.). [New York, NY, USA]: ACM Books; 3rd edition. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-1450376143" title="Special:BookSources/978-1450376143"><bdi>978-1450376143</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Semantic+Web+for+the+Working+Ontologist+%3A+Effective+Modeling+for+Linked+Data%2C+RDFS%2C+and+OWL&amp;rft.place=%5BNew+York%2C+NY%2C+USA%5D&amp;rft.edition=Third&amp;rft.pub=ACM+Books%3B+3rd+edition&amp;rft.date=2020-08-03&amp;rft.isbn=978-1450376143&amp;rft.aulast=Allemang&amp;rft.aufirst=Dean&amp;rft.au=Hendler%2C+James&amp;rft.au=Gandon%2C+Fabien&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li>
<li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFPascal_HitzlerMarkus_KrötzschSebastian_Rudolph2009" class="citation book cs1"><a href="/wiki/Pascal_Hitzler" title="Pascal Hitzler">Pascal Hitzler</a>; Markus Krötzsch; Sebastian Rudolph (August 25, 2009). <a rel="nofollow" class="external text" href="http://www.semantic-web-book.org"><i>Foundations of Semantic Web Technologies</i></a>. CRCPress. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-1-4200-9050-5" title="Special:BookSources/978-1-4200-9050-5"><bdi>978-1-4200-9050-5</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Foundations+of+Semantic+Web+Technologies&amp;rft.pub=CRCPress&amp;rft.date=2009-08-25&amp;rft.isbn=978-1-4200-9050-5&amp;rft.au=Pascal+Hitzler&amp;rft.au=Markus+Kr%C3%B6tzsch&amp;rft.au=Sebastian+Rudolph&amp;rft_id=http%3A%2F%2Fwww.semantic-web-book.org&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li>
<li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFThomas_B._Passin2004" class="citation book cs1">Thomas B. Passin (March 1, 2004). <i>Explorer's Guide to the Semantic Web</i>. Manning Publications. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-1-932394-20-7" title="Special:BookSources/978-1-932394-20-7"><bdi>978-1-932394-20-7</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Explorer%27s+Guide+to+the+Semantic+Web&amp;rft.pub=Manning+Publications&amp;rft.date=2004-03-01&amp;rft.isbn=978-1-932394-20-7&amp;rft.au=Thomas+B.+Passin&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li>
<li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFJeffrey_T._Pollock2009" class="citation book cs1">Jeffrey T. Pollock (March 23, 2009). <span class="id-lock-registration" title="Free registration required"><a rel="nofollow" class="external text" href="https://archive.org/details/isbn_9780470396797"><i>Semantic Web For Dummies</i></a></span>. For Dummies. <a href="/wiki/ISBN_(identifier)" class="mw-redirect" title="ISBN (identifier)">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-0-470-39679-7" title="Special:BookSources/978-0-470-39679-7"><bdi>978-0-470-39679-7</bdi></a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Semantic+Web+For+Dummies&amp;rft.pub=For+Dummies&amp;rft.date=2009-03-23&amp;rft.isbn=978-0-470-39679-7&amp;rft.au=Jeffrey+T.+Pollock&amp;rft_id=https%3A%2F%2Farchive.org%2Fdetails%2Fisbn_9780470396797&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li>
<li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFHitzler2021" class="citation journal cs1">Hitzler, Pascal (February 2021). <a rel="nofollow" class="external text" href="https://doi.org/10.1145%2F3397512">"A Review of the Semantic Web Field"</a>. <i>Communications of the ACM</i>. <b>64</b> (2): 76–83. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<span class="id-lock-free" title="Freely accessible"><a rel="nofollow" class="external text" href="https://doi.org/10.1145%2F3397512">10.1145/3397512</a></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Communications+of+the+ACM&amp;rft.atitle=A+Review+of+the+Semantic+Web+Field&amp;rft.volume=64&amp;rft.issue=2&amp;rft.pages=76-83&amp;rft.date=2021-02&amp;rft_id=info%3Adoi%2F10.1145%2F3397512&amp;rft.aulast=Hitzler&amp;rft.aufirst=Pascal&amp;rft_id=https%3A%2F%2Fdoi.org%2F10.1145%252F3397512&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li>
<li><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFUnni2023" class="citation journal cs1">Unni, Deepak (March 2023). <a rel="nofollow" class="external text" href="https://rdcu.be/c7ogw">"FAIRification of health-related data using semantic web technologies in the Swiss Personalized Health Network"</a>. <i>Scientific Data</i>. <b>10</b> (1): 127. <a href="/wiki/Bibcode_(identifier)" class="mw-redirect" title="Bibcode (identifier)">Bibcode</a>:<a rel="nofollow" class="external text" href="https://ui.adsabs.harvard.edu/abs/2023NatSD..10..127T">2023NatSD..10..127T</a>. <a href="/wiki/Doi_(identifier)" class="mw-redirect" title="Doi (identifier)">doi</a>:<a rel="nofollow" class="external text" href="https://doi.org/10.1038%2Fs41597-023-02028-y">10.1038/s41597-023-02028-y</a>. <a href="/wiki/PMC_(identifier)" class="mw-redirect" title="PMC (identifier)">PMC</a>&nbsp;<span class="id-lock-free" title="Freely accessible"><a rel="nofollow" class="external text" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10006404">10006404</a></span>. <a href="/wiki/PMID_(identifier)" class="mw-redirect" title="PMID (identifier)">PMID</a>&nbsp;<a rel="nofollow" class="external text" href="https://pubmed.ncbi.nlm.nih.gov/36899064">36899064</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Scientific+Data&amp;rft.atitle=FAIRification+of+health-related+data+using+semantic+web+technologies+in+the+Swiss+Personalized+Health+Network&amp;rft.volume=10&amp;rft.issue=1&amp;rft.pages=127&amp;rft.date=2023-03&amp;rft_id=https%3A%2F%2Fwww.ncbi.nlm.nih.gov%2Fpmc%2Farticles%2FPMC10006404%23id-name%3DPMC&amp;rft_id=info%3Apmid%2F36899064&amp;rft_id=info%3Adoi%2F10.1038%2Fs41597-023-02028-y&amp;rft_id=info%3Abibcode%2F2023NatSD..10..127T&amp;rft.aulast=Unni&amp;rft.aufirst=Deepak&amp;rft_id=https%3A%2F%2Frdcu.be%2Fc7ogw&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ASemantic+Web" class="Z3988"></span></li></ul>
<div class="mw-heading mw-heading2"><h2 id="External_links">External links</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Semantic_Web&amp;action=edit&amp;section=23" title="Edit section: External links"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<style data-mw-deduplicate="TemplateStyles:r1235681985">.mw-parser-output .side-box{margin:4px 0;box-sizing:border-box;border:1px solid #aaa;font-size:88%;line-height:1.25em;background-color:var(--background-color-interactive-subtle,#f8f9fa);display:flow-root}.mw-parser-output .side-box-abovebelow,.mw-parser-output .side-box-text{padding:0.25em 0.9em}.mw-parser-output .side-box-image{padding:2px 0 2px 0.9em;text-align:center}.mw-parser-output .side-box-imageright{padding:2px 0.9em 2px 0;text-align:center}@media(min-width:500px){.mw-parser-output .side-box-flex{display:flex;align-items:center}.mw-parser-output .side-box-text{flex:1;min-width:0}}@media(min-width:720px){.mw-parser-output .side-box{width:238px}.mw-parser-output .side-box-right{clear:right;float:right;margin-left:1em}.mw-parser-output .side-box-left{margin-right:1em}}</style><style data-mw-deduplicate="TemplateStyles:r1250146164">.mw-parser-output .sister-box .side-box-abovebelow{padding:0.75em 0;text-align:center}.mw-parser-output .sister-box .side-box-abovebelow>b{display:block}.mw-parser-output .sister-box .side-box-text>ul{border-top:1px solid #aaa;padding:0.75em 0;width:217px;margin:0 auto}.mw-parser-output .sister-box .side-box-text>ul>li{min-height:31px}.mw-parser-output .sister-logo{display:inline-block;width:31px;line-height:31px;vertical-align:middle;text-align:center}.mw-parser-output .sister-link{display:inline-block;margin-left:4px;width:182px;vertical-align:middle}@media print{body.ns-0 .mw-parser-output .sistersitebox{display:none!important}}@media screen{html.skin-theme-clientpref-night .mw-parser-output .sistersitebox img[src*="Wiktionary-logo-v2.svg"]{background-color:white}}@media screen and (prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .sistersitebox img[src*="Wiktionary-logo-v2.svg"]{background-color:white}}</style><div role="navigation" aria-labelledby="sister-projects" class="side-box metadata side-box-right sister-box sistersitebox plainlinks"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1126788409">
<div class="side-box-abovebelow">
<b>Semantic Web</b>  at Wikipedia's <a href="/wiki/Wikipedia:Wikimedia_sister_projects" title="Wikipedia:Wikimedia sister projects"><span id="sister-projects">sister projects</span></a></div>
<div class="side-box-flex">
<div class="side-box-text plainlist"><ul><li><span class="sister-logo"><span class="mw-valign-middle" typeof="mw:File"><span><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/20px-Commons-logo.svg.png" decoding="async" width="20" height="27" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/40px-Commons-logo.svg.png 2x" data-file-width="1024" data-file-height="1376"></span></span></span><span class="sister-link"><a href="https://commons.wikimedia.org/wiki/Category:Semantic_Web" class="extiw" title="c:Category:Semantic Web">Media</a> from Commons</span></li><li><span class="sister-logo"><span class="mw-valign-middle" typeof="mw:File"><span><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/27px-Wikibooks-logo.svg.png" decoding="async" width="27" height="27" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/41px-Wikibooks-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/54px-Wikibooks-logo.svg.png 2x" data-file-width="300" data-file-height="300"></span></span></span><span class="sister-link"><a href="https://en.wikibooks.org/wiki/Semantic_Web" class="extiw" title="b:Semantic Web">Textbooks</a> from Wikibooks</span></li><li><span class="sister-logo"><span class="mw-valign-middle" typeof="mw:File"><span><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wikidata-logo.svg/27px-Wikidata-logo.svg.png" decoding="async" width="27" height="15" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wikidata-logo.svg/41px-Wikidata-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wikidata-logo.svg/54px-Wikidata-logo.svg.png 2x" data-file-width="1050" data-file-height="590"></span></span></span><span class="sister-link"><a href="https://www.wikidata.org/wiki/Q54837" class="extiw" title="d:Q54837">Data</a> from Wikidata</span></li></ul></div></div>
</div>
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1235681985"><div class="side-box metadata side-box-right"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1126788409">
<div class="side-box-flex">
<div class="side-box-image"><span class="noviewer" typeof="mw:File"><span><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Scholia_logo.svg/40px-Scholia_logo.svg.png" decoding="async" width="40" height="39" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Scholia_logo.svg/60px-Scholia_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/32/Scholia_logo.svg/80px-Scholia_logo.svg.png 2x" data-file-width="107" data-file-height="104"></span></span></div>
<div class="side-box-text plainlist"><a href="https://www.wikidata.org/wiki/Wikidata:Scholia" class="extiw" title="d:Wikidata:Scholia">Scholia</a> has a <i>topic</i> profile for <i><b><a href="https://iw.toolforge.org/scholia/topic/Q54837" class="extiw" title="toolforge:scholia/topic/Q54837">Semantic Web</a></b></i>.</div></div>
</div>
<ul><li><span class="official-website"><span class="url"><a rel="nofollow" class="external text" href="http://www.w3.org/standards/semanticweb/">Official website</a></span></span></li></ul>
<div class="navbox-styles"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><style data-mw-deduplicate="TemplateStyles:r1236075235">.mw-parser-output .navbox{box-sizing:border-box;border:1px solid #a2a9b1;width:100%;clear:both;font-size:88%;text-align:center;padding:1px;margin:1em auto 0}.mw-parser-output .navbox .navbox{margin-top:0}.mw-parser-output .navbox+.navbox,.mw-parser-output .navbox+.navbox-styles+.navbox{margin-top:-1px}.mw-parser-output .navbox-inner,.mw-parser-output .navbox-subgroup{width:100%}.mw-parser-output .navbox-group,.mw-parser-output .navbox-title,.mw-parser-output .navbox-abovebelow{padding:0.25em 1em;line-height:1.5em;text-align:center}.mw-parser-output .navbox-group{white-space:nowrap;text-align:right}.mw-parser-output .navbox,.mw-parser-output .navbox-subgroup{background-color:#fdfdfd}.mw-parser-output .navbox-list{line-height:1.5em;border-color:#fdfdfd}.mw-parser-output .navbox-list-with-group{text-align:left;border-left-width:2px;border-left-style:solid}.mw-parser-output tr+tr>.navbox-abovebelow,.mw-parser-output tr+tr>.navbox-group,.mw-parser-output tr+tr>.navbox-image,.mw-parser-output tr+tr>.navbox-list{border-top:2px solid #fdfdfd}.mw-parser-output .navbox-title{background-color:#ccf}.mw-parser-output .navbox-abovebelow,.mw-parser-output .navbox-group,.mw-parser-output .navbox-subgroup .navbox-title{background-color:#ddf}.mw-parser-output .navbox-subgroup .navbox-group,.mw-parser-output .navbox-subgroup .navbox-abovebelow{background-color:#e6e6ff}.mw-parser-output .navbox-even{background-color:#f7f7f7}.mw-parser-output .navbox-odd{background-color:transparent}.mw-parser-output .navbox .hlist td dl,.mw-parser-output .navbox .hlist td ol,.mw-parser-output .navbox .hlist td ul,.mw-parser-output .navbox td.hlist dl,.mw-parser-output .navbox td.hlist ol,.mw-parser-output .navbox td.hlist ul{padding:0.125em 0}.mw-parser-output .navbox .navbar{display:block;font-size:100%}.mw-parser-output .navbox-title .navbar{float:left;text-align:left;margin-right:0.5em}body.skin--responsive .mw-parser-output .navbox-image img{max-width:none!important}@media print{body.ns-0 .mw-parser-output .navbox{display:none!important}}</style></div><div role="navigation" class="navbox" aria-labelledby="Semantic_Web" style="padding:3px"><table class="nowraplinks mw-collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1239400231"><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:Semantic_Web" title="Template:Semantic Web"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:Semantic_Web" title="Template talk:Semantic Web"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a href="/wiki/Special:EditPage/Template:Semantic_Web" title="Special:EditPage/Template:Semantic Web"><abbr title="Edit this template">e</abbr></a></li></ul></div><div id="Semantic_Web" style="font-size:114%;margin:0 4em"><a class="mw-selflink selflink">Semantic Web</a></div></th></tr><tr><th scope="row" class="navbox-group" style="width:1%">Background</th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Database" title="Database">Databases</a></li>
<li><a href="/wiki/Hypertext" title="Hypertext">Hypertext</a></li>
<li><a href="/wiki/Internet" title="Internet">Internet</a></li>
<li><a href="/wiki/Ontology_(computer_science)" class="mw-redirect" title="Ontology (computer science)">Ontologies</a></li>
<li><a href="/wiki/Semantics_(computer_science)" title="Semantics (computer science)">Semantics</a></li>
<li><a href="/wiki/Semantic_network" title="Semantic network">Semantic networks</a></li>
<li><a href="/wiki/World_Wide_Web" title="World Wide Web">World Wide Web</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Sub-topics</th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Dataspaces" class="mw-redirect" title="Dataspaces">Dataspaces</a></li>
<li><a href="/wiki/Hyperdata" title="Hyperdata">Hyperdata</a></li>
<li><a href="/wiki/Linked_data" title="Linked data">Linked data</a></li>
<li><a href="/wiki/Rule-based_system" title="Rule-based system">Rule-based systems</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Applications</th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Semantic_analytics" title="Semantic analytics">Semantic analytics</a></li>
<li><a href="/wiki/Semantic_broker" title="Semantic broker">Semantic broker</a></li>
<li><a href="/wiki/Semantic_computing" title="Semantic computing">Semantic computing</a></li>
<li><a href="/wiki/Semantic_mapper" title="Semantic mapper">Semantic mapper</a></li>
<li><a href="/wiki/Semantic_matching" title="Semantic matching">Semantic matching</a></li>
<li><a href="/wiki/Semantic_publishing" title="Semantic publishing">Semantic publishing</a></li>
<li><a href="/wiki/Semantic_reasoner" title="Semantic reasoner">Semantic reasoner</a></li>
<li><a href="/wiki/Semantic_search" title="Semantic search">Semantic search</a></li>
<li><a href="/wiki/Semantic_service-oriented_architecture" title="Semantic service-oriented architecture">Semantic service-oriented architecture</a></li>
<li><a href="/wiki/Semantic_wiki" title="Semantic wiki">Semantic wiki</a></li>
<li><a href="/wiki/Solid_(web_decentralization_project)" title="Solid (web decentralization project)">Solid</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Related topics</th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Collective_intelligence" title="Collective intelligence">Collective intelligence</a></li>
<li><a href="/wiki/Description_logic" title="Description logic">Description logic</a></li>
<li><a href="/wiki/Folksonomy" title="Folksonomy">Folksonomy</a></li>
<li><a href="/wiki/Geotagging" title="Geotagging">Geotagging</a></li>
<li><a href="/wiki/Information_architecture" title="Information architecture">Information architecture</a></li>
<li><a href="/wiki/IXBRL" class="mw-redirect" title="IXBRL">iXBRL</a></li>
<li><a href="/wiki/Knowledge_extraction" title="Knowledge extraction">Knowledge extraction</a></li>
<li><a href="/wiki/Knowledge_management" title="Knowledge management">Knowledge management</a></li>
<li><a href="/wiki/Knowledge_representation_and_reasoning" title="Knowledge representation and reasoning">Knowledge representation and reasoning</a></li>
<li><a href="/wiki/Library_2.0" title="Library 2.0">Library 2.0</a></li>
<li><a href="/wiki/Digital_library" title="Digital library">Digital library</a></li>
<li><a href="/wiki/Digital_humanities" title="Digital humanities">Digital humanities</a></li>
<li><a href="/wiki/Metadata" title="Metadata">Metadata</a></li>
<li><a href="/wiki/Reference_(computer_science)" title="Reference (computer science)">References</a></li>
<li><a href="/wiki/Topic_map" title="Topic map">Topic map</a></li>
<li><a href="/wiki/Web_2.0" title="Web 2.0">Web 2.0</a></li>
<li><a href="/wiki/Web_engineering" title="Web engineering">Web engineering</a></li>
<li><a href="/wiki/Web_Science_Trust" title="Web Science Trust">Web Science Trust</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Standards</th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="width:1%">Syntax and supporting technologies</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/HTTP" title="HTTP">HTTP</a></li>
<li><a href="/wiki/Internationalized_Resource_Identifier" title="Internationalized Resource Identifier">IRI</a>
<ul><li><small><a href="/wiki/Uniform_Resource_Identifier" title="Uniform Resource Identifier">URI</a></small></li></ul></li>
<li><a href="/wiki/Resource_Description_Framework" title="Resource Description Framework">RDF</a>
<ul><li><small><a href="/wiki/Semantic_triple" title="Semantic triple">triples</a></small></li>
<li><small><a href="/wiki/RDF/XML" title="RDF/XML">RDF/XML</a></small></li>
<li><small><a href="/wiki/JSON-LD" title="JSON-LD">JSON-LD</a></small></li>
<li><small><a href="/wiki/Turtle_(syntax)" title="Turtle (syntax)">Turtle</a></small></li>
<li><small><a href="/wiki/TriG_(syntax)" title="TriG (syntax)">TriG</a></small></li>
<li><small><a href="/wiki/Notation3" title="Notation3">Notation3</a></small></li>
<li><small><a href="/wiki/N-Triples" title="N-Triples">N-Triples</a></small></li>
<li><small><a href="/wiki/TriX_(serialization_format)" title="TriX (serialization format)">TriX</a> (no W3C standard)</small></li></ul></li>
<li><a href="/wiki/Research_Resource_Identifier" class="mw-redirect" title="Research Resource Identifier">RRID</a></li>
<li><a href="/wiki/SPARQL" title="SPARQL">SPARQL</a></li>
<li><a href="/wiki/XML" title="XML">XML</a></li>
<li><a href="/wiki/Semantic_HTML" title="Semantic HTML">Semantic HTML</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Schemas, ontologies and rules</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Common_Logic" title="Common Logic">Common Logic</a></li>
<li><a href="/wiki/Web_Ontology_Language" title="Web Ontology Language">OWL</a></li>
<li><a href="/wiki/RDF_Schema" title="RDF Schema">RDFS</a></li>
<li><a href="/wiki/Rule_Interchange_Format" title="Rule Interchange Format">Rule Interchange Format</a></li>
<li><a href="/wiki/Semantic_Web_Rule_Language" title="Semantic Web Rule Language">Semantic Web Rule Language</a></li>
<li><a href="/w/index.php?title=Application-Level_Profile_Semantics_(ALPS)&amp;action=edit&amp;redlink=1" class="new" title="Application-Level Profile Semantics (ALPS) (page does not exist)">ALPS</a></li>
<li><a href="/wiki/SHACL" title="SHACL">SHACL</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Semantic annotation</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Embedded_RDF" title="Embedded RDF">eRDF</a></li>
<li><a href="/wiki/GRDDL" title="GRDDL">GRDDL</a></li>
<li><a href="/wiki/Microdata_(HTML)" title="Microdata (HTML)">Microdata</a></li>
<li><a href="/wiki/Microformat" title="Microformat">Microformats</a></li>
<li><a href="/wiki/RDFa" title="RDFa">RDFa</a></li>
<li><a href="/wiki/SAWSDL" title="SAWSDL">SAWSDL</a></li>
<li><a href="/wiki/Facebook_Platform" title="Facebook Platform">Facebook Platform</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Common vocabularies</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/DOAP" title="DOAP">DOAP</a></li>
<li><a href="/wiki/Dublin_Core" title="Dublin Core">Dublin Core</a></li>
<li><a href="/wiki/FOAF" title="FOAF">FOAF</a></li>
<li><a href="/wiki/Schema.org" title="Schema.org">Schema.org</a></li>
<li><a href="/wiki/Semantically_Interlinked_Online_Communities" title="Semantically Interlinked Online Communities">SIOC</a></li>
<li><a href="/wiki/Simple_Knowledge_Organization_System" title="Simple Knowledge Organization System">SKOS</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Microformat vocabularies</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/HAtom" title="HAtom">hAtom</a></li>
<li><a href="/wiki/HCalendar" title="HCalendar">hCalendar</a></li>
<li><a href="/wiki/HCard" title="HCard">hCard</a></li>
<li><a href="/wiki/HProduct" title="HProduct">hProduct</a></li>
<li><a href="/wiki/HRecipe" title="HRecipe">hRecipe</a></li>
<li><a href="/wiki/HReview" title="HReview">hReview</a></li></ul>
</div></td></tr></tbody></table><div></div></td></tr></tbody></table></div>
<div class="navbox-styles"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1236075235"></div><div role="navigation" class="navbox" aria-labelledby="Emerging_technologies" style="padding:3px"><table class="nowraplinks hlist mw-collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2" style="text-align: center;"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1239400231"><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:Emerging_technologies" title="Template:Emerging technologies"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:Emerging_technologies" title="Template talk:Emerging technologies"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a href="/wiki/Special:EditPage/Template:Emerging_technologies" title="Special:EditPage/Template:Emerging technologies"><abbr title="Edit this template">e</abbr></a></li></ul></div><div id="Emerging_technologies" style="font-size:114%;margin:0 4em"><a href="/wiki/Emerging_technologies" title="Emerging technologies">Emerging technologies</a></div></th></tr><tr><th scope="row" class="navbox-group" style="text-align: center;;width:1%">Fields</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="width:1%;text-align: center;"><div style="display: inline-block; line-height: 1.2em; padding: .1em 0;"><a href="/wiki/Information_and_communications_technology" title="Information and communications technology">Information and<br>communications</a></div></th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Ambient_intelligence" title="Ambient intelligence">Ambient intelligence</a>
<ul><li><a href="/wiki/Internet_of_things" title="Internet of things">Internet of things</a></li></ul></li>
<li><a href="/wiki/Artificial_intelligence" title="Artificial intelligence">Artificial intelligence</a>
<ul><li><a href="/wiki/Applications_of_artificial_intelligence" title="Applications of artificial intelligence">Applications of artificial intelligence</a></li>
<li><a href="/wiki/Machine_translation" title="Machine translation">Machine translation</a></li>
<li><a href="/wiki/Machine_vision" title="Machine vision">Machine vision</a></li>
<li><a href="/wiki/Mobile_translation" title="Mobile translation">Mobile translation</a></li>
<li><a href="/wiki/Progress_in_artificial_intelligence" title="Progress in artificial intelligence">Progress in artificial intelligence</a></li>
<li><a class="mw-selflink selflink">Semantic Web</a></li>
<li><a href="/wiki/Speech_recognition" title="Speech recognition">Speech recognition</a></li></ul></li>
<li><a href="/wiki/Atomtronics" title="Atomtronics">Atomtronics</a></li>
<li><a href="/wiki/Carbon_nanotube_field-effect_transistor" title="Carbon nanotube field-effect transistor">Carbon nanotube field-effect transistor</a></li>
<li><a href="/wiki/Cybermethodology" title="Cybermethodology">Cybermethodology</a></li>
<li><a href="/wiki/Extended_reality" title="Extended reality">Extended reality</a></li>
<li><a href="/wiki/Optical_disc#Fourth-generation" title="Optical disc">Fourth-generation optical discs</a>
<ul><li><a href="/wiki/3D_optical_data_storage" title="3D optical data storage">3D optical data storage</a></li>
<li><a href="/wiki/Holographic_data_storage" title="Holographic data storage">Holographic data storage</a></li></ul></li>
<li><a href="/wiki/General-purpose_computing_on_graphics_processing_units" title="General-purpose computing on graphics processing units">GPGPU</a></li>
<li>Memory
<ul><li><a href="/wiki/Programmable_metallization_cell" title="Programmable metallization cell">CBRAM</a></li>
<li><a href="/wiki/Electrochemical_RAM" title="Electrochemical RAM">ECRAM</a></li>
<li><a href="/wiki/Ferroelectric_RAM" title="Ferroelectric RAM">FRAM</a></li>
<li><a href="/wiki/Millipede_memory" title="Millipede memory">Millipede</a></li>
<li><a href="/wiki/Magnetoresistive_RAM" title="Magnetoresistive RAM">MRAM</a></li>
<li><a href="/wiki/Nano-RAM" title="Nano-RAM">NRAM</a></li>
<li><a href="/wiki/Phase-change_memory" title="Phase-change memory">PRAM</a></li>
<li><a href="/wiki/Racetrack_memory" title="Racetrack memory">Racetrack memory</a></li>
<li><a href="/wiki/Resistive_random-access_memory" title="Resistive random-access memory">RRAM</a></li>
<li><a href="/wiki/SONOS" title="SONOS">SONOS</a></li>
<li><a href="/wiki/UltraRAM" title="UltraRAM">UltraRAM</a></li></ul></li>
<li><a href="/wiki/Optical_computing" title="Optical computing">Optical computing</a></li>
<li><a href="/wiki/Radio-frequency_identification" title="Radio-frequency identification">RFID</a>
<ul><li><a href="/wiki/Chipless_RFID" title="Chipless RFID">Chipless RFID</a></li></ul></li>
<li><a href="/wiki/Software-defined_radio" title="Software-defined radio">Software-defined radio</a></li>
<li><a href="/wiki/Three-dimensional_integrated_circuit" title="Three-dimensional integrated circuit">Three-dimensional integrated circuit</a></li></ul>
</div></td></tr></tbody></table><div></div></td></tr><tr><th scope="row" class="navbox-group" style="text-align: center;;width:1%">Topics</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Automation" title="Automation">Automation</a></li>
<li><a href="/wiki/Collingridge_dilemma" title="Collingridge dilemma">Collingridge dilemma</a></li>
<li><a href="/wiki/Differential_technological_development" title="Differential technological development">Differential technological development</a></li>
<li><a href="/wiki/Disruptive_innovation" title="Disruptive innovation">Disruptive innovation</a></li>
<li><a href="/wiki/Ephemeralization" title="Ephemeralization">Ephemeralization</a></li>
<li><a href="/wiki/Ethics_of_technology" title="Ethics of technology">Ethics</a>
<ul><li><a href="/wiki/Bioethics" title="Bioethics">Bioethics</a></li>
<li><a href="/wiki/Cyberethics" title="Cyberethics">Cyberethics</a></li>
<li><a href="/wiki/Neuroethics" title="Neuroethics">Neuroethics</a></li>
<li><a href="/wiki/Robot_ethics" title="Robot ethics">Robot ethics</a></li></ul></li>
<li><a href="/wiki/Exploratory_engineering" title="Exploratory engineering">Exploratory engineering</a></li>
<li><a href="/wiki/Proactionary_principle" title="Proactionary principle">Proactionary principle</a></li>
<li><a href="/wiki/Technological_change" title="Technological change">Technological change</a>
<ul><li><a href="/wiki/Technological_unemployment" title="Technological unemployment">Technological unemployment</a></li></ul></li>
<li><a href="/wiki/Technological_convergence" title="Technological convergence">Technological convergence</a></li>
<li><a href="/wiki/Technological_evolution" title="Technological evolution">Technological evolution</a></li>
<li><a href="/wiki/Technological_paradigm" title="Technological paradigm">Technological paradigm</a></li>
<li><a href="/wiki/Technology_forecasting" title="Technology forecasting">Technology forecasting</a>
<ul><li><a href="/wiki/Accelerating_change" title="Accelerating change">Accelerating change</a></li>
<li><a href="/wiki/Future-oriented_technology_analysis" title="Future-oriented technology analysis">Future-oriented technology analysis</a></li>
<li><a href="/wiki/Horizon_scanning" title="Horizon scanning">Horizon scanning</a></li>
<li><a href="/wiki/Moore%27s_law" title="Moore's law">Moore's law</a></li>
<li><a href="/wiki/Technological_singularity" title="Technological singularity">Technological singularity</a></li>
<li><a href="/wiki/Technology_scouting" title="Technology scouting">Technology scouting</a></li></ul></li>
<li><a href="/wiki/Technology_in_science_fiction" title="Technology in science fiction">Technology in science fiction</a></li>
<li><a href="/wiki/Technology_readiness_level" title="Technology readiness level">Technology readiness level</a></li>
<li><a href="/wiki/Technology_roadmap" title="Technology roadmap">Technology roadmap</a></li>
<li><a href="/wiki/Transhumanism" title="Transhumanism">Transhumanism</a></li></ul>
</div></td></tr><tr><td class="navbox-abovebelow" colspan="2" style="text-align: center;"><div>
<ul><li><span class="noviewer" typeof="mw:File"><span title="List-Class article"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/16px-Symbol_list_class.svg.png" decoding="async" width="16" height="16" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/23px-Symbol_list_class.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/31px-Symbol_list_class.svg.png 2x" data-file-width="180" data-file-height="185"></span></span> <b><a href="/wiki/List_of_emerging_technologies" title="List of emerging technologies">List</a></b></li></ul>
</div></td></tr></tbody></table></div>
<div class="navbox-styles"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1236075235"></div><div role="navigation" class="navbox" aria-labelledby="Digital_humanities" style="padding:3px"><table class="nowraplinks mw-collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1239400231"><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:Digital_humanities" title="Template:Digital humanities"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/w/index.php?title=Template_talk:Digital_humanities&amp;action=edit&amp;redlink=1" class="new" title="Template talk:Digital humanities (page does not exist)"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a href="/wiki/Special:EditPage/Template:Digital_humanities" title="Special:EditPage/Template:Digital humanities"><abbr title="Edit this template">e</abbr></a></li></ul></div><div id="Digital_humanities" style="font-size:114%;margin:0 4em"><a href="/wiki/Digital_humanities" title="Digital humanities">Digital humanities</a></div></th></tr><tr><td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Computational_archaeology" title="Computational archaeology">Computational archaeology</a></li>
<li><a href="/wiki/Computational_philosophy" title="Computational philosophy">Computational philosophy</a></li>
<li><a href="/wiki/Computational_theory_of_mind" title="Computational theory of mind">Computational theory of mind</a></li>
<li><a href="/wiki/Computers_and_writing" title="Computers and writing">Computers and writing</a></li>
<li><a href="/wiki/Cultural_analytics" title="Cultural analytics">Cultural analytics</a></li>
<li><a href="/wiki/Cybertext" title="Cybertext">Cybertext</a></li>
<li><a href="/wiki/Digital_classics" title="Digital classics">Digital classics</a></li>
<li><a href="/wiki/Digital_history" title="Digital history">Digital history</a></li>
<li><a href="/wiki/Digital_library" title="Digital library">Digital library</a></li>
<li><a href="/wiki/Digital_Medievalist" title="Digital Medievalist">Digital Medievalist</a></li>
<li><a href="/wiki/Digital_ontology" class="mw-redirect" title="Digital ontology">Digital ontology</a></li>
<li><a href="/wiki/Digital_physics" title="Digital physics">Digital physics</a></li>
<li><a href="/wiki/Digital_religion" title="Digital religion">Digital religion</a></li>
<li><a href="/wiki/Digital_rhetoric" title="Digital rhetoric">Digital rhetoric</a></li>
<li><a href="/wiki/Digital_scholarship" title="Digital scholarship">Digital scholarship</a></li>
<li><a href="/wiki/Digital_theology" title="Digital theology">Digital theology</a></li>
<li><a href="/wiki/Digitization" title="Digitization">Digitization</a></li>
<li><a href="/wiki/E-research" title="E-research">E-research</a></li>
<li><a href="/wiki/Electronic_literature" title="Electronic literature">Electronic literature</a></li>
<li><a href="/wiki/Humanistic_informatics" title="Humanistic informatics">Humanistic informatics</a></li>
<li><a href="/wiki/New_media" title="New media">New media</a></li>
<li><a href="/wiki/Philosophy_of_computer_science" title="Philosophy of computer science">Philosophy of computer science</a></li>
<li><a class="mw-selflink selflink">Semantic Web</a></li>
<li><a href="/wiki/Systems_theory" title="Systems theory">Systems theory</a></li>
<li><a href="/wiki/Text_Encoding_Initiative" title="Text Encoding Initiative">Text Encoding Initiative</a></li>
<li><a href="/wiki/Transliteracy" title="Transliteracy">Transliteracy</a></li></ul>
</div></td></tr></tbody></table></div>
<div class="navbox-styles"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1236075235"><style data-mw-deduplicate="TemplateStyles:r1038841319">.mw-parser-output .tooltip-dotted{border-bottom:1px dotted;cursor:help}</style><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1038841319"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1038841319"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1038841319"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1038841319"></div><div role="navigation" class="navbox authority-control" aria-labelledby="Authority_control_databases_frameless&amp;#124;text-top&amp;#124;10px&amp;#124;alt=Edit_this_at_Wikidata&amp;#124;link=https&amp;#58;//www.wikidata.org/wiki/Q54837#identifiers&amp;#124;class=noprint&amp;#124;Edit_this_at_Wikidata" style="padding:3px"><table class="nowraplinks hlist mw-collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div id="Authority_control_databases_frameless&amp;#124;text-top&amp;#124;10px&amp;#124;alt=Edit_this_at_Wikidata&amp;#124;link=https&amp;#58;//www.wikidata.org/wiki/Q54837#identifiers&amp;#124;class=noprint&amp;#124;Edit_this_at_Wikidata" style="font-size:114%;margin:0 4em"><a href="/wiki/Help:Authority_control" title="Help:Authority control">Authority control databases</a> <span class="mw-valign-text-top noprint" typeof="mw:File/Frameless"><a href="https://www.wikidata.org/wiki/Q54837#identifiers" title="Edit this at Wikidata"><img alt="Edit this at Wikidata" src="//upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" decoding="async" width="10" height="10" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/15px-OOjs_UI_icon_edit-ltr-progressive.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/20px-OOjs_UI_icon_edit-ltr-progressive.svg.png 2x" data-file-width="20" data-file-height="20"></a></span></div></th></tr><tr><th scope="row" class="navbox-group" style="width:1%">International</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"><ul><li><span class="uid"><a rel="nofollow" class="external text" href="http://id.worldcat.org/fast/1112076/">FAST</a></span></li></ul></div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">National</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em"><ul><li><span class="uid"><span class="rt-commentedText tooltip tooltip-dotted" title="Semantic Web"><a rel="nofollow" class="external text" href="https://d-nb.info/gnd/4688372-1">Germany</a></span></span></li><li><span class="uid"><span class="rt-commentedText tooltip tooltip-dotted" title="Semantic Web"><a rel="nofollow" class="external text" href="https://id.loc.gov/authorities/sh2002000569">United States</a></span></span></li><li><span class="uid"><span class="rt-commentedText tooltip tooltip-dotted" title="Web sémantique"><a rel="nofollow" class="external text" href="https://catalogue.bnf.fr/ark:/12148/cb14521343b">France</a></span></span></li><li><span class="uid"><span class="rt-commentedText tooltip tooltip-dotted" title="Web sémantique"><a rel="nofollow" class="external text" href="https://data.bnf.fr/ark:/12148/cb14521343b">BnF data</a></span></span></li><li><span class="uid"><a rel="nofollow" class="external text" href="https://id.ndl.go.jp/auth/ndlna/01017771">Japan</a></span></li><li><span class="uid"><span class="rt-commentedText tooltip tooltip-dotted" title="sémantický web"><a rel="nofollow" class="external text" href="https://aleph.nkp.cz/F/?func=find-c&amp;local_base=aut&amp;ccl_term=ica=ph222863&amp;CON_LNG=ENG">Czech Republic</a></span></span></li><li><span class="uid"><a rel="nofollow" class="external text" href="http://catalogo.bne.es/uhtbin/authoritybrowse.cgi?action=display&amp;authority_id=XX553987">Spain</a></span></li><li><span class="uid"><a rel="nofollow" class="external text" href="https://kopkatalogs.lv/F?func=direct&amp;local_base=lnc10&amp;doc_number=000076707&amp;P_CON_LNG=ENG">Latvia</a></span></li><li><span class="uid"><a rel="nofollow" class="external text" href="https://www.nli.org.il/en/authorities/987007566353105171">Israel</a></span></li></ul></div></td></tr></tbody></table></div>
<!-- 
NewPP limit report
Parsed by mw‐api‐ext.codfw.main‐66589d5d8‐5fzz6
Cached time: 20241204113946
Cache expiry: 2592000
Reduced expiry: false
Complications: [vary‐revision‐sha1, show‐toc]
CPU time usage: 0.966 seconds
Real time usage: 1.875 seconds
Preprocessor visited node count: 6506/1000000
Post‐expand include size: 191263/2097152 bytes
Template argument size: 6806/2097152 bytes
Highest expansion depth: 16/100
Expensive parser function count: 19/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 282068/5000000 bytes
Lua time usage: 0.564/10.000 seconds
Lua memory usage: 7648696/52428800 bytes
Number of Wikibase entities loaded: 1/400
-->
<!--
Transclusion expansion time report (%,ms,calls,template)
100.00% 1712.428      1 -total
 22.53%  385.857      1 Template:Reflist
 21.37%  366.003      7 Template:Code
  8.40%  143.803     20 Template:Cite_web
  8.30%  142.148      3 Template:Sidebar
  6.24%  106.909      1 Template:Semantics
  5.95%  101.906      1 Template:Sister_project_links
  3.94%   67.451     14 Template:Cite_book
  3.81%   65.275      1 Template:Short_description
  3.76%   64.399     11 Template:Cite_journal
-->

<!-- Saved in parser cache with key enwiki:pcache:29123:|#|:idhash:canonical and timestamp 20241204113946 and revision id 1250635812. Rendering was triggered because: unknown
 -->
</div>`
  );
  
  const sidebar5_1 = new SidebarItem(generateId('sidebar'), 'Semantic web');
  sidebar5_1.addContent(content5_1_1);

  let menuId5 = generateId('top-menu');
  const topMenu5 = new TopMenuItem(menuId5, 'Semantic web', getLinkFromId(menuId5));
  topMenu5.addSidebar(sidebar5_1);

  appData.addTopMenu(topMenu5);

  // Tham khảo Wikipedia | Menu 6
  const content6_1_1 = new ContentItem(
    generateId('content'),
    'Wiki link',
    1, 12, { row: 1, column: 1}, "wikiSearch",
    `<article>
  <a target="_blank" href="https://en.wikipedia.org/?curid=33139">
    <h3>World Wide Web</h3>
  </a>
  <div><span class="searchmatch">web</span> pages and <span class="searchmatch">web</span> applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone <span class="searchmatch">technologies</span> for the World Wide <span class="searchmatch">Web</span>...</div>
</article>
<article>
  <a target="_blank" href="https://en.wikipedia.org/?curid=29123">
    <h3>Semantic Web</h3>
  </a>
  <div>goal of the Semantic <span class="searchmatch">Web</span> is to make Internet data machine-readable. To enable the encoding of semantics with the data, <span class="searchmatch">technologies</span> such as Resource Description...</div>
</article>
<article>
  <a target="_blank" href="https://en.wikipedia.org/?curid=288311">
    <h3>Web application</h3>
  </a>
  <div>A <span class="searchmatch">web</span> application (or <span class="searchmatch">web</span> app) is application software that is created with <span class="searchmatch">web</span> <span class="searchmatch">technologies</span> and runs via a <span class="searchmatch">web</span> browser. <span class="searchmatch">Web</span> applications emerged during...</div>
</article>
<article>
  <a target="_blank" href="https://en.wikipedia.org/?curid=20172027">
    <h3>Web Technology Group</h3>
  </a>
  <div><span class="searchmatch">Web</span> <span class="searchmatch">Technology</span> Group was a <span class="searchmatch">technology</span> consultancy and solutions provider to the UK Public Sector, specialising in the design, build and management of...</div>
</article>
<article>
  <a target="_blank" href="https://en.wikipedia.org/?curid=611714">
    <h3>Web development</h3>
  </a>
  <div>learning integration (2010s - present) <span class="searchmatch">Web</span> development in future will be driven by advances in browser <span class="searchmatch">technology</span>, <span class="searchmatch">Web</span> internet infrastructure, protocol standards...</div>
</article>`
  );

  const sidebar6_1 = new SidebarItem(generateId('sidebar'), 'Tham khảo');
  sidebar6_1.addContent(content6_1_1);

  let menuId6 = generateId('top-menu');
  const topMenu6 = new TopMenuItem(menuId6, 'Tham khảo Wikipedia', getLinkFromId(menuId6));
  topMenu6.addSidebar(sidebar6_1);

  appData.addTopMenu(topMenu6);

  // Thông tin cá nhân | Menu 4
  content4_1_1 = new ContentItem(
    generateId('content'),
    'Information',
    1, 7, { row: 1, column: 1 }, 'text',
    `<h3>Nguyễn Hùng Cường | <strong>Front-end Developer/Fresher</strong></h3>
      <ul>
        <li>Based in Hanoi, Vietnam</li>
        <li>Contact: <a href="mailto:cuong.ng.23@gmail.com">cuong.ng.23@gmail.com</a> | 0838356357</li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>Programming Languages: C#, C++, Java, JavaScript, PHP</li>
        <li>DB: MSSQL</li>
        <li>Frameworks/Tools: ASP.NET core, VueJS</li>
      </ul>`
  );

  content4_1_2 = new ContentItem(
    generateId('content'),
    'Objective',
    1, 7, { row: 2, column: 1 }, 'text',
    `<h2>Objective</h2>
      <p>My name is Cuong, and I am a fourth-year IT student with a foundation in software development. I am passionate about technology and continuously seek to enhance my skills through academic projects, internships, and personal learning.</p>`
  );

  content4_1_3 = new ContentItem(
    generateId('content'),
    'Avatar',
    2, 5, { row: 1, column: 8 }, 'text',
    `<img src="./assets/ava.jpg" alt="avatar" style="width: 100%"/>`
  );

  const sidebar4_1 = new SidebarItem(generateId('sidebar'), 'Information');
  sidebar4_1.addContent(content4_1_1);
  sidebar4_1.addContent(content4_1_2);
  sidebar4_1.addContent(content4_1_3);

  let menuId4 = generateId('top-menu');
  const topMenu4 = new TopMenuItem(menuId4, 'Thông tin sinh viên', getLinkFromId(menuId4), '', false);
  topMenu4.addSidebar(sidebar4_1);

  const content4_2_1 = new ContentItem(
    generateId('content'),
    'education',
    1, 12, { row: 1, column: 1 }, 'text',
    `<p>2017 - 2020: <strong>Le Quy Don Gifted High School</strong></p>
      <ul>
        <li>Informatics major</li>
      </ul>
      <p>2021 - present: <strong>Hanoi University of Science and Technology</strong></p>
      <ul>
        <li>Information and Technology</li>
      </ul>`
  );

  const sidebar4_2 = new SidebarItem(generateId('sidebar'), 'Education');
  sidebar4_2.addContent(content4_2_1);
  topMenu4.addSidebar(sidebar4_2);

  const content4_3_1 = new ContentItem(
    generateId('content'),
    '1',
    1, 12, { row: 1, column: 1 }, 'text',
    `<h4><strong>Online Latex Editor Using VueJS on Front-end and ASP.NET core on Back-end </strong>| Personal Project</h4>
      <p>Build online Latex editing tool, compiler, login and authorization in Project II</p>
      <ul>
        <li>Build a simple structure to add, edit, delete, compile and display data added to MSSQL using ASP.NET</li>
        <li>At the same time, build a simple interface displayed to users using VueJS</li>
      </ul>
      <p>Github: <a href="https://github.com/cuong23ng/LatexEditor-Client-side.git">https://github.com/cuong23ng/LatexEditor-Client-side.git</a></p>`
  );

  const content4_3_2 = new ContentItem(
    generateId('content'),
    '2',
    1, 12, { row: 2, column: 1 }, 'text',
    `<h4><strong>Battleship Game Programmed in Java </strong>|<strong> </strong>Personal Project</h4>
      <p>Build a ship shooting game using Java language in Project I</p>
      <ul>
        <li>Design simple interface design, capture mouse events</li>
        <li>Apply simple Object-oriented programming knowledge</li>
      </ul>
      <p>Github: <a href="https://github.com/cuong23ng/BattleShip.git">https://github.com/cuong23ng/BattleShip.git</a></p>`
  );

  const content4_3_3 = new ContentItem(
    generateId('content'),
    '3',
    1, 12, { row: 3, column: 1}, 'text',
    `<h4><strong>Milktea store management software </strong>| Personal Project</h4>
      <p>Build Milktea store software including displaying menu of store using data bending, filter by item, sort by price/name ... using VueJS</p>
      <ul>
        <li>Design simple interface design, capture mouse events</li><li>Apply simple Object-oriented programming knowledge</li>
      </ul>
      <p>Github: <a href="https://github.com/cuong23ng/BattleShip.git">https://github.com/cuong23ng/milk-tea-store.git</a></p>`
  );

  const sidebar4_3 = new SidebarItem(generateId('sidebar'), 'Projects');
  sidebar4_3.addContent(content4_3_1);
  sidebar4_3.addContent(content4_3_2);
  sidebar4_3.addContent(content4_3_3);
  topMenu4.addSidebar(sidebar4_3);

  const content4_4_1 = new ContentItem(
    generateId('content'),
    '1',
    1, 12, { row: 1, column: 1}, 'text',
    `<h4><strong>HUST Innovation &amp; Entrepreneurship Club </strong>|<strong> </strong>2021 - 2023</h4>
      <p>Member of communications team.</p>
      <p>Participated in organizing workshops, seminars and many events in conjunction with the school, especially the TechStart competition.</p>`
  );

  const sidebar4_4 = new SidebarItem(generateId('sidebar'), 'Extracurricular Activities');
  sidebar4_4.addContent(content4_4_1);
  topMenu4.addSidebar(sidebar4_4);

  appData.addTopMenu(topMenu4);
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

