/**
 * Hàm render top menu với việc xử lý sự kiện click và cập nhật URL
 */
function renderTopMenu() {
  const menuContainer = document.getElementById("top-menu");
  menuContainer.innerHTML = "";

  // Static link for mobile
  const staticLink = document.createElement("a");
  staticLink.className = "w3-bar-item w3-button w3-theme-d2 w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1";
  staticLink.href = "javascript:void(0)";
  staticLink.onclick = w3_open;

  const icon = document.createElement("i");
  icon.className = "fa fa-bars";
  staticLink.appendChild(icon);

  menuContainer.appendChild(staticLink);

  // Render Menu Items
  appData.topMenus.forEach((menu) => {
    const a = document.createElement("a");
    a.href = getLinkFromId(menu.id);
    if (menu.icon) {
      const icon = document.createElement("i");
      icon.className = `fa ${menu.icon}`;
      a.appendChild(icon);
    } else {
      a.textContent = menu.name;
    }
    a.className = "w3-bar-item w3-theme-d1 w3-button w3-hover-white";
    a.id = `link_${menu.id}`; // Đặt ID cho thẻ a để dễ xử lý sự kiện click

    // Thêm sự kiện click để gọi hàm renderContent và cập nhật URL
    a.addEventListener('click', (event) => {
      if (window.location.href.includes('admin')) {
        return;
      }
      event.preventDefault();
      const menuId = menu.id;
      renderSidebarAndContentForSelectedTopMenu(menuId);
    });

    menuContainer.appendChild(a);
  });

  // Tạo liên kết Gmail Page
  const gmailPage = document.createElement('a');
  gmailPage.href = "gmail.html";
  gmailPage.textContent = "Gmail";
  gmailPage.className = "w3-bar-item w3-theme-d1 w3-button w3-hover-white";
  menuContainer.appendChild(gmailPage);

  // Tạo liên kết Admin Page
  const adminPage = document.createElement('a');
  adminPage.href = "admin_page.html";
  adminPage.textContent = "Admin Page";
  adminPage.className = "w3-bar-item w3-theme-d1 w3-button w3-hover-white";
  menuContainer.appendChild(adminPage);
}

/**
 * Hàm render trang chính với người dùng đã đăng nhập
 * @param {Object} userData - Thông tin user
 */
function renderMenuWithUser(userData) {
  const menuContainer = document.getElementById("top-menu");
  const userProfile = document.createElement("img");
  userProfile.src = userData.picture;
  userProfile.className = "user-profile"

  const profileMenu = document.createElement('div');
  profileMenu.id = "user-menu";
  profileMenu.className = "user-menu";
  profileMenu.style = "z-index: 100";
  profileMenu.innerHTML = `<p class="menu-item">Thông tin tài khoản</p>
            <p id="signOut" class="menu-item">Đăng xuất</p>`;
  menuContainer.appendChild(profileMenu);
  
  userProfile.addEventListener('click', () => {
    const menu = document.getElementById("user-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Ẩn menu nếu đang hiển thị
    } else {
        menu.style.display = "block"; // Hiển thị menu nếu đang ẩn
    }
  });

  // Đóng menu khi bấm bên ngoài
  window.onclick = function(event) {
    const menu = document.getElementById("user-menu");
    const profileImage = document.querySelector(".user-profile");
    if (!profileImage.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
  };

  menuContainer.appendChild(userProfile);

  // Bắt sự kiện sign out
  const signOutBtn = document.getElementById('signOut');
  signOutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = "https://cuong23ng.github.io/Web-technology-and-e-service/ORA4";
  });
}

function renderMenuWithoutUser() {
  const menuContainer = document.getElementById("top-menu");

  const loginPage = document.createElement('a');
  loginPage.href = "login.html";
  loginPage.textContent = "Log in";
  loginPage.className = "w3-theme-d1 w3-button w3-hover-white";
  loginPage.style = "margin-left: auto; margin-right: 0; display: block; text-align: right; padding-left: 8px; width: 80px;";
  menuContainer.appendChild(loginPage);
}

/**
 * Hàm render sidebars động dựa vào top menu id
 * @param {String} selectedTopMenuId - Id của Top Menu Item
 * @returns 
 */
function renderSidebarForSelectedTopMenu(selectedTopMenuId) {
  const selectedTopMenu = appData.getTopMenuById(selectedTopMenuId);
  if (!selectedTopMenu) {
    console.error(`TopMenu với ID "${selectedTopMenuId}" không tồn tại.`);
    return;
  }

  const sidebarTitle = document.getElementById("sidebar-title");
  sidebarTitle.innerHTML = `<strong>${selectedTopMenu.name}</strong>`;

  const sidebarContent = document.getElementById("sidebar-content");
  sidebarContent.innerHTML = "";

  selectedTopMenu.sidebars.forEach(sidebar => {
    const a = document.createElement("a");
    a.href = `#${sidebar.id}`;
    a.className = "w3-bar-item w3-button w3-hover-theme";
    a.textContent = sidebar.name;
    sidebarContent.appendChild(a);
  });
}

/**
 * Hàm render nội dung của một TopMenuItem vào containẻ HTML sử dụng Grid Layout
 * @param {TopMenuItem} topMenu - Đối tượng TopMenuItem cần render
 * @param {String} containerId - ID của container HTML nơi nội dung sẽ được render
 * @returns 
 */
function renderContent(topMenu, containerId = 'content-container') {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container với ID "${containerId}" không tồn tại.`);
    return;
  }

  // Xóa nội dung cũ
  container.innerHTML = "";

  // Duyệt qua từng SidebarItem trong TopMenuItem
  topMenu.sidebars.forEach(sidebar => {
    // Tạo tiêu đề cho sidebar
    const sidebarHeader = document.createElement('h1');
    sidebarHeader.className = "w3-text-theme";
    sidebarHeader.textContent = sidebar.name;
    sidebarHeader.id = sidebar.id;
    container.appendChild(sidebarHeader);

    // Tạo container chứa các content Item của sidebarItem
    const contentsContainer = document.createElement('div');
    contentsContainer.className = "grid-container";

    // Thu thập tất cả các ContentItem trong Sidebar
    let contents = sidebar.contents;

    // Render từng ContentItem theo vị trí và kích thước
    contents.forEach(content => {
      const gridItem = document.createElement('div');
      gridItem.className = "grid-item";
      gridItem.innerHTML = content.htmlContent || `<strong>${content.name}</strong>`;

      // Tính toán vị trí trong lưới
      const startRow = content.position.row;
      const startColumn = content.position.column;
      const spanRows = content.rowSpan || 1;
      const spanColumns = content.columnSpan || 1;

      // Áp dụng vị trí lưới
      gridItem.style.gridArea = `${startRow} / ${startColumn} / span ${spanRows} / span ${spanColumns}`;

      contentsContainer.appendChild(gridItem);
    });
    container.appendChild(contentsContainer);
  });
}

/**
 * Hàm render nội dung của TopMenuItem
 * @param {String} selectedTopMenuId - Id của Top Menu Item
 */
function renderSidebarAndContentForSelectedTopMenu(selectedTopMenuId) {
  renderSidebarForSelectedTopMenu(selectedTopMenuId);

  const selectedTopMenu = appData.getTopMenuById(selectedTopMenuId);

  renderContent(selectedTopMenu);
}