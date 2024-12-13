/**
 * Hàm mở modal để thêm hoặc sửa Content Layout
 * @param {string} mode - 'add' hoặc 'edit'
 * @param {ContentItem|null} content - Đối tượng ContentItem (cho mode 'edit')
 * @param {string} parentSidebarId - ID của SidebarItem hiện tại
 * @param {number} insertAfterIndex - Chỉ số để thêm mới content sau một index cụ thể
 */
function openContentModal(mode, content = null, parentSidebarId, insertAfterIndex = null) {
  const modal = document.getElementById('contentModal');
  const form = document.getElementById('contentForm');
  const modalTitle = document.getElementById('contentModalTitle');
  const submitButton = document.getElementById('contentModalSubmitButton');

  if (mode === 'add') {
    modalTitle.textContent = "Add Content Layout";
    submitButton.textContent = "Add";
    document.getElementById('contentName').value = "";
    document.getElementById('contentType').value = "text";
    document.getElementById('layoutRow').value = 1;
    document.getElementById('layoutColumn').value = 1;
    document.getElementById('layoutRowSpan').value = 1;
    document.getElementById('layoutColumnSpan').value = 12;
  } else if (mode === 'edit') {
    modalTitle.textContent = "Edit Content Layout";
    submitButton.textContent = "Save";
    document.getElementById('contentName').value = content.name;
    document.getElementById('contentType').value = (content.contentType === "text") ? "text" : (content.contentType === "wikiSearch") ? "wikiSearch" : "wikiPage";
    document.getElementById('layoutRow').value = content.position.row;
    document.getElementById('layoutColumn').value = content.position.column;
    document.getElementById('layoutRowSpan').value = content.rowSpan;
    document.getElementById('layoutColumnSpan').value = content.columnSpan;
  }

  modal.style.display = "block";

  // Hàm kiểm tra sự chồng lấn
  function isOverlapping(newContent, contents) {
    for (const content of contents) {
      const isRowOverlap = newContent.position.row < content.position.row + content.rowSpan && 
        newContent.position.row + newContent.rowSpan > content.position.row;
      const isColumnOverlap = newContent.position.column < content.position.column + content.columnSpan &&
        newContent.position.column + newContent.columnSpan > content.position.column;
      if (isRowOverlap && isColumnOverlap) {
        return true;
      } 
    }
    return false;
  }

  // Xử lý submit form
  form.onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById('contentName').value.trim();
    const contentType = document.getElementById('contentType').value.trim();
    const layoutRow = parseInt(document.getElementById('layoutRow').value);
    const layoutColumn = parseInt(document.getElementById('layoutColumn').value);
    const layoutRowSpan = parseInt(document.getElementById('layoutRowSpan').value);
    const layoutColumnSpan = parseInt(document.getElementById('layoutColumnSpan').value);

    const topMenu = appData.topMenus.find(tm => tm.sidebars.some(sb => sb.id === parentSidebarId));
    if (!topMenu) {
      alert("Parent Sidebar not found");
      return;
    }

    const sidebar = topMenu.getSidebarById(parentSidebarId);
    if (!sidebar) {
      alert("Parent Sidebar not found");
      return;
    }

    const newContent = new ContentItem(generateId('content'), name, layoutRowSpan, layoutColumnSpan, { row: layoutRow, column: layoutColumn }, contentType);

    if (isOverlapping(newContent, sidebar.contents)) {
      alert("Bố cục của Content này đang chồng lấn với một Content khác, vui lòng chọn lại.");
      return;
    }

    if (mode === 'add') {
      if (insertAfterIndex !== null && insertAfterIndex >= 0 && insertAfterIndex <= sidebar.contents.length) {
        sidebar.contents.splice(insertAfterIndex, 0, newContent);
      } else {
        sidebar.contents.push(newContent);
      }
    } else if (mode === 'edit') {
      const contentToEdit = content;
      if (contentToEdit) {
        contentToEdit.name = name;
        contentToEdit.contentType = (contentType === "text") ? "text" : (contentType === "wikiSearch") ? "wikiSearch" : "wikiPage";
        contentToEdit.position = { row: layoutRow, column: layoutColumn };
        contentToEdit.rowSpan = layoutRowSpan;
        contentToEdit.columnSpan = layoutColumnSpan;
      }
    }

    // Lưu dữ liệu và render lại bảng và preview
    saveAppData();
    renderAdminContentsTable();
    renderPreviewLayout();

    // Đóng modal
    modal.style.display = "none";
  };
}

/**
* Hàm đóng modal Content
*/
function closeContentModal() {
  const modal = document.getElementById('contentModal');
  modal.style.display = "none";
}

/**
* Hàm mở modal xác nhận xoá Content Item
* @param {string} contentId - ID của ContentItem cần xoá
*/
function openConfirmContentDeleteModal(contentId) {
  const modal = document.getElementById('confirmContentDeleteModal');
  modal.style.display = "block";

  const deleteButton = document.getElementById('confirmDeleteContentButton');
  deleteButton.onclick = () => {
    deleteContentItem(contentId);
    closeConfirmContentDeleteModal();
  };
}

/**
* Hàm để xóa một ContentItem
* @param {string} contentId - ID của ContentItem cần xoá
*/
function deleteContentItem(contentId) {
  // Tìm Sidebar chứa ContentItem này
  appData.topMenus.forEach(topMenu => {
    topMenu.sidebars.forEach(sidebar => {
      const content = sidebar.getContentById(contentId);
      if (content) {
        sidebar.deleteContent(contentId);
      }
    });
  });

  // Lưu dữ liệu và render lại bảng và preview
  saveAppData();
  renderAdminContentsTable();
  renderPreviewLayout();
}

/**
* Hàm đóng modal xác nhận xoá Content Item
*/
function closeConfirmContentDeleteModal() {
  const modal = document.getElementById('confirmContentDeleteModal');
  modal.style.display = "none";
}

/**
 * Hàm để render Preview Layout
 */
function renderPreviewLayout() {
  const previewContainer = document.getElementById('previewLayout');
  previewContainer.innerHTML = ""; // Xóa nội dung cũ

  // Lấy sidebarId từ URL
  const sidebarId = getQueryParam('sidebar');
  if (!sidebarId) {
    previewContainer.innerHTML = "<p>No sidebar selected</p>";
    return;
  }

  const topMenu = appData.topMenus.find(tm => tm.sidebars.some(sb => sb.id === sidebarId));
  if (!topMenu) {
    previewContainer.innerHTML = `<p>Top menu chứa Sidebar với ID "${sidebarId}" không tìm thấy.</p>`;
    return;
  }

  const sidebarItem = topMenu.sidebars.find(sb => sb.id === sidebarId);
  if (!sidebarItem) {
    previewContainer.innerHTML = `<p>Sidebar với ID "${sidebarId}" không tìm thấy.</p>`;
    return;
  }

  sidebarItem.contents.forEach(content => {
    const box = document.createElement('div');
    box.className = 'preview-box';
    box.textContent = content.name;
    box.style.gridRow = `${content.position.row} / span ${content.rowSpan}`;
    box.style.gridColumn = `${content.position.column} / span ${content.columnSpan}`;
    previewContainer.appendChild(box);
  });
}

/**
 * Hàm để render bảng danh sách Contents Layout trên Admin Contents Layout
 */
function renderAdminContentsTable() {
  const tableBody = document.getElementById('admin-contents-table-body');
  tableBody.innerHTML = ""; // Xóa nội dung cũ

  // Lấy sidebarId từ URL
  const sidebarId = getQueryParam('sidebar');
  if (!sidebarId) {
    tableBody.innerHTML = "<tr><td colspan='5'>No sidebar selected</td></tr>";
    return;
  }

  const topMenu = appData.topMenus.find(tm => tm.sidebars.some(sb => sb.id === sidebarId));
  if (!topMenu) {
    tableBody.innerHTML = `<tr><td colspan='5'>Top menu chứa Sidebar với ID "${sidebarId}</td></tr>`;
    return;
  }

  const sidebarItem = topMenu.sidebars.find(sb => sb.id === sidebarId);
  if (!sidebarItem) {
    tableBody.innerHTML = `<tr><td colspan='5'>Sidebar với ID "${sidebarId}" không tìm thấy</td></tr>`;
    return;
  }

  renderSidebarForSelectedTopMenu(topMenu.id);

  const contentNameElement = document.getElementById('content-name');
  if (contentNameElement) {
    contentNameElement.innerHTML = `${topMenu.name} <i class="fa fa-angle-right"></i> ${sidebarItem.name}`;
  }

  renderPreviewLayout();

  // Thêm hàng đầu tiên với các ô trống và nút thêm
  const trAddNew = document.createElement('tr');

  // Name
  const tdNameAddNew = document.createElement('td');
  tdNameAddNew.textContent = '...';
  trAddNew.appendChild(tdNameAddNew);

  // Content type
  const tdContentTypeAddNew = document.createElement('td');
  tdContentTypeAddNew.textContent = '...';
  trAddNew.appendChild(tdContentTypeAddNew);

  // Layout Parameters
  const tdLayoutAddNew = document.createElement('td');
  tdLayoutAddNew.textContent = '...';
  trAddNew.appendChild(tdLayoutAddNew);

  // Actions
  const tdActionsAddNew = document.createElement('td');

  // Add Button
  const addBtnNew = document.createElement('button');
  addBtnNew.className = "w3-button w3-hover-white w3-green w3-margin-right";
  addBtnNew.innerHTML = '<i class="fa fa-plus"></i>';
  addBtnNew.title = "Thêm";
  addBtnNew.onclick = () => {
    openContentModal('add', null, sidebarId, 0);
  };
  tdActionsAddNew.appendChild(addBtnNew);

  trAddNew.appendChild(tdActionsAddNew);
  tableBody.appendChild(trAddNew);

  sidebarItem.contents.forEach((content, index) => {
    const tr = document.createElement('tr');

    // Name
    const tdName = document.createElement('td');
    tdName.textContent = content.name;
    tr.appendChild(tdName);

    // Content type
    const tdContentType = document.createElement('td');
    tdContentType.textContent = (content.contentType === "text") ? "Text docs" : (content.contentType === "wikiSearch") ? "Wikipedia search" : "Wikipedia page";
    tr.appendChild(tdContentType);

    // Layout Parameters
    const tdLayout = document.createElement('td');
    tdLayout.textContent = `Row: ${content.position.row}, Column: ${content.position.column}, Row Span: ${content.rowSpan}, Column Span: ${content.columnSpan}`;
    tr.appendChild(tdLayout);

    // Actions
    const tdActions = document.createElement('td');

    // View Button
    const viewBtn = document.createElement('button');
    viewBtn.className = "w3-button w3-hover-white w3-blue w3-margin-right";
    viewBtn.innerHTML = '<i class="fa fa-eye"></i>';
    viewBtn.title = "Xem";
    viewBtn.onclick = () => {
      window.location.href = `admin_contents.html?content=${content.id}`;
    };
    tdActions.appendChild(viewBtn);

    // Add Button (nút thêm sẽ được thêm vào mỗi hàng)
    const addBtn = document.createElement('button');
    addBtn.className = "w3-button w3-hover-white w3-green w3-margin-right";
    addBtn.innerHTML = '<i class="fa fa-plus"></i>';
    addBtn.title = "Thêm";
    addBtn.onclick = () => {
      openContentModal('add', null, sidebarId, index + 1);
    };
    tdActions.appendChild(addBtn);

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.className = "w3-button w3-hover-white w3-yellow w3-margin-right";
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';
    editBtn.title = "Sửa";
    editBtn.onclick = () => {
      openContentModal('edit', content, sidebarId, index + 1);
    };
    tdActions.appendChild(editBtn);

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "w3-button w3-hover-white w3-red";
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.title = "Xoá";
    deleteBtn.onclick = () => {
      openConfirmContentDeleteModal(content.id);
    };
    tdActions.appendChild(deleteBtn);

    tr.appendChild(tdActions);
    tableBody.appendChild(tr);
  });
}