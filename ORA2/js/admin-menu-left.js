/**
 * Hàm render nội dung của TopMenuItem
 * @param {string} selectedTopMenuId - ID của Top Menu Item
 */
function renderSidebarForSelectedTopMenu(selectedTopMenuId) {
  console.log(selectedTopMenuId);
  const selectedTopMenu = appData.getTopMenuById(selectedTopMenuId);
  if (!selectedTopMenu) {
    console.error(`TopMenu với ID "${selectedTopMenuId}" không tồn tại.`);
    return;
  }

  const sidebarTitle = document.getElementById('sidebar-title');
  sidebarTitle.innerHTML = `<strong>${selectedTopMenu.name}</strong>`;

  const sidebarContent = document.getElementById('sidebar-content');
  sidebarContent.innerHTML = "";

  selectedTopMenu.sidebars.forEach(sidebar => {
    const a = document.createElement('a');
    a.href = `#${sidebar.id}`;
    a.className = "w3-bar-item w3-button w3-hover-theme";
    a.textContent = sidebar.name;
    sidebarContent.appendChild(a);
  });
}

/**
 * Hàm mở modal để thêm hoặc sửa Sidebar Item
 * @param {string} mode - 'add hoặc 'edit'
 * @param {SidebarItem|null} sidebar - Đối tượng SidebarItem (cho mode 'edit')
 * @param {string} parentMenuId - ID của TopMenuItem hiện tại
 * @param {number} insertAtIndex - Chỉ số để thêm mới sidebar sau một index cụ thể
 */
function openSidebarModal(mode, sidebar = null, parentMenuId, insertAtIndex = null) {
  const modal = document.getElementById('sidebarModal');
  const form = document.getElementById('sidebarForm');
  const modalTitle = document.getElementById('sidebarModalTitle');
  const submitButton = document.getElementById('sidebarModalSubmitButton');

  if (mode === 'add') {
    modalTitle.textContent = "Thêm Menu Left";
    submitButton.textContent = "Add";
    document.getElementById('sidebarName').value = "";
  } else if (mode === 'edit') {
    modalTitle.textContent = "Sửa Menu Left";
    submitButton.textContent = "Save";
    document.getElementById('sidebarName').value = sidebar.name;
  }

  modal.style.display = "block";

  // Xử lý submit form
  form.onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById('sidebarName').value;
    const topMenu = appData.getTopMenuById(parentMenuId);
    if (!topMenu) {
      alert("Top Menu not found.");
      return;
    }

    if (mode === 'add') {
      const newSidebar = new SidebarItem(generateId('sidebar'), name, true);
      if (insertAtIndex !== null && insertAtIndex >= 0 && insertAtIndex <= topMenu.sidebars.length) {
        topMenu.sidebars.splice(insertAtIndex, 0, newSidebar);
      } else {
        topMenu.sidebars.push(newSidebar);
      }
    } else if (mode === 'edit') {
      const sidebarToEdit = topMenu.sidebars.find(sb => sb.id === sidebar.id);
      if (sidebarToEdit) {
        sidebarToEdit.name = name;
      }
    }

    // Lưu dữ liệu và render lại bảng
    saveAppData();
    renderAdminSidebarTable();

    // Đóng Modal
    modal.style.display = "none";
  }
}

/**
 * Hàm đóng modal Sidebar
 */
function closeSidebarModal() {
  const modal = document.getElementById('sidebarModal');
  modal.style.display = "none";
}

/**
 * Hàm xóa một SidebarItem
 * @param {string} sidebarId - ID của SidebarItem cần xóa 
 */
function deleteSidebarItem(sidebarId) {
  // Tìm TopMenu chứa SidebarItem này
  appData.topMenus.forEach(topMenu => {
    const sidebar = topMenu.getSidebarById(sidebarId);
    if (sidebar) {
      topMenu.deleteSidebar(sidebarId);
    }
  });

  // Lưu dữ liệu và render lại bảng
  saveAppData();
  renderAdminSidebarTable();
}

/**
 * Hàm đóng modal xác nhận xóa Sidebar Item
 */
function closeConfirmSidebarDeleteModal() {
  const modal = document.getElementById('confirmSidebarDeleteModal');
  modal.style.display = "none";
}

/**
 * Hàm để render bảng danh sách Sidebar Items trên Admin Menu Left
 */
function renderAdminSidebarTable() {
  const tableBody = document.getElementById('admin-sidebar-table-body');
  tableBody.innerHTML = ""; // Xóa nội dung cũ

  // Lấy menuId từ URL
  const menuId = getQueryParam('top-menu');
  if (!menuId) {
    tableBody.innerHTML = "<tr><td colspan='5'>No top menu selected.</td></tr>";
    return;
  }

  const topMenu = appData.getTopMenuById(menuId);
  if (!topMenu) {
    tableBody.innerHTML = `<tr><td colspan='5'>Top menu with ID "${menuId}" not found</td></tr>`;
    return;
  }

  const sidebarName = document.getElementById('sidebar-item-name');
  sidebarName.textContent = topMenu.name;
  if (topMenu.name === 'Thông tin sinh viên') {
    const resetButton = document.getElementById('reset-button');
    resetButton.classList.remove('hidden');

    resetButton.addEventListener('click', () => {
      const topMenu = appData.topMenus.find(menu => menu.name === 'Thông tin sinh viên');
      if (topMenu) {
        topMenu.sidebars = topMenu.sidebars.filter(sidebar =>
          ['Information', 'Education', 'Projects', 'Extracurricular Activities'].includes(sidebar.name)
        );
        saveAppData();
        renderAdminSidebarTable();
      }
    });
  } else {
    const resetButton = document.getElementById('reset-button');
    resetButton.classList.add('hidden');
  }

  renderSidebarForSelectedTopMenu(menuId);

  // Thêm hàng đầu tiên với các ô trống và nút thêm
  const trAddNew = document.createElement('tr');

  // Name
  const tdNameAddNew = document.createElement('td');
  tdNameAddNew.textContent = "...";
  trAddNew.appendChild(tdNameAddNew);

  // Actions
  const tdActionsAddNew = document.createElement('td');

  // Add Button
  const addBtnNew = document.createElement('button');
  addBtnNew.className = "w3-button w3-hover-white w3-green w3-margin-right";
  addBtnNew.innerHTML = '<i class="fa fa-plus"></i>';
  addBtnNew.title = "Thêm";
  addBtnNew.onclick = () => {
    openSidebarModal('add', null, menuId, 0);
  };
  tdActionsAddNew.appendChild(addBtnNew);

  trAddNew.appendChild(tdActionsAddNew);
  tableBody.appendChild(trAddNew);

  topMenu.sidebars.forEach((sidebar, index) => {
    // Thêm hàng đầu tiên với các ô trống và nút Thêm
    const tr = document.createElement('tr');

    // Name
    const tdName = document.createElement('td');
    tdName.textContent = sidebar.name;
    tr.appendChild(tdName);

    // Actions
    const tdActions = document.createElement('td');

    // View Button
    const viewBtn = document.createElement('button');
    viewBtn.className = "w3-button w3-hover-white w3-blue w3-margin-right";
    viewBtn.innerHTML = '<i class="fa fa-eye"></i>';
    viewBtn.title = "Xem";
    viewBtn.onclick = () => {
      window.location.href = `admin_contents_layout.html?sidebar=${sidebar.id}`;
    };
    tdActions.appendChild(viewBtn);

    // Add Button
    const addBtn = document.createElement('button');
    addBtn.className = "w3-button w3-hover-white w3-green w3-margin-right";
    addBtn.innerHTML = '<i class="fa fa-plus"></i>';
    addBtn.title = "Thêm";
    addBtn.onclick = () => {
      openSidebarModal('add', null, menuId, index + 1);
    };
    tdActions.appendChild(addBtn);

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.className = "w3-button w3-hover-white w3-yellow w3-margin-right";
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';
    editBtn.title = "Sửa";
    editBtn.onclick = () => {
      openSidebarModal('edit', sidebar, menuId, index + 1);
    };
    tdActions.appendChild(editBtn);

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "w3-button w3-hover-white w3-red";
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.title = "Xoá";
    deleteBtn.onclick = () => {
      const modal = document.getElementById('confirmSidebarDeleteModal');
      modal.style.display = "block";

      const deleteButton = document.getElementById('confirmDeleteSidebarButton');
      deleteButton.onclick = () => {
        deleteSidebarItem(sidebar.id);
        closeConfirmSidebarDeleteModal();
      };
    };
    tdActions.appendChild(deleteBtn);

    tr.appendChild(tdActions);
    tableBody.appendChild(tr);
  });
}