/**
 * Toggle between showing and hiding the sidebar, and add overlay effect
 */
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

/**
 * Close the sidebar with the close button
 */
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

/**
 * Khởi tạo và render toàn bộ dữ liệu khi trang được tải
 */
document.addEventListener("DOMContentLoaded", function () {
  loadAppData();
  renderTopMenu();

  loadUser();
  
  if (window.location.href.includes('admin_page')) {
    renderAdminMenuTable();
    return;
  } else if (window.location.href.includes('admin_menu_left')) {
    renderAdminSidebarTable();
    return;
  } else if (window.location.href.includes('admin_contents_layout')) {
    renderAdminContentsTable();
    return;
  } else if (window.location.href.includes('admin_contents')) {
    loadContent();
    return;
  } else if (window.location.href.includes('gmail')) {
    renderEmailTable();
    return;
  } else if (window.location.href.includes('maildetail')) {
    renderMessageDetails();
    return;
  }

  // Đọc 'page' parameter từ URL
  const pageId = getQueryParam('page');
  if (pageId && appData.getTopMenuById(pageId)) {
    renderSidebarAndContentForSelectedTopMenu(pageId);
  } else if (appData.topMenus.length > 0) {
    const defaultMenuId = appData.topMenus[0].id;
    renderSidebarAndContentForSelectedTopMenu(defaultMenuId);
  }
});

