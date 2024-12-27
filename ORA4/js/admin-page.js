/**
 * Hàm để mở modal cho việc thêm hoặc sửa menu
 * @param {string} mode - 'add' hoặc 'edit'
 * @param {TopMenuItem} menu - Đối tượng TopMenuItem (cho mode 'edit')
 * @param {number} index - Vị trí của menu trong mảng (cho mode 'add')
 */
function openModal(mode, menu = null, index = -1) {
  const modal = document.getElementById('menuModal');
  const form = document.getElementById('menuForm');
  const modalTitle = document.getElementById('modalTitle');
  const submitButton = document.getElementById('modalSubmitButton');

  if (mode === 'add') {
    modalTitle.textContent = "Thêm Top Menu";
    submitButton.textContent = "Thêm";
    document.getElementById('menuName').value = "";
    document.getElementById('menuEditable').value = "true";
  } else if (mode === 'edit') {
    modalTitle.textContent = "Sửa Top Menu";
    submitButton.textContent = "Lưu";
    document.getElementById('menuName').value = menu.name;
    document.getElementById('menuEditable').value = menu.editable? "true" : "false";
  }

  modal.style.display = "block";

  // Xử lý submit form
  form.onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById('menuName').value.trim();
    const editable = document.getElementById('menuEditable').value === "true";

  if (mode === "add") {
    // Tạo một TopMenuItem mới
    let menuId = generateId('top-menu');
    console.log(getLinkFromId(menuId));
    const newMenu = new TopMenuItem(menuId, name, getLinkFromId(menuId), '', editable);
    appData.addTopMenu(newMenu, index);
  } else if (mode === "edit") {
    // Tìm và cập nhật TopMenuItem
    const menuToEdit = appData.getTopMenuById(menu.id);
    if (menuToEdit) {
      menuToEdit.name = name;
      menuToEdit.editable = editable;
    }
  }
  
  // Lưu dữ liệu và render lại bảng
  saveAppData();
  renderAdminMenuTable();

  // Render lại top menu trên trang chính
  renderTopMenu();

  // Đóng modal
  modal.style.display = "none";
  };
}

/**
 * Hàm đóng modal
 */
function closeModal() {
  const modal = document.getElementById('menuModal');
  modal.style.display = "none";
  const confirmMenuDeleteModal = document.getElementById('confirmMenuDeleteModal');
  confirmMenuDeleteModal.style.display = "none"; 
}

/**
 * Hàm để xóa một TopMenuItem
 * @param {string} menuId - ID của menu cần xóa
 */
function deleteTopMenu(menuId) {
  appData.deleteTopMenu(menuId);
  saveAppData();
  renderAdminMenuTable();
  renderTopMenu();
}

/**
 * Hàm để render bảng danh sách Top Menus trên Admin Page
 */
function renderAdminMenuTable() {
  const tableBody = document.getElementById('admin-menu-table-body');
  tableBody.innerHTML = "";

  // Thêm hàng đầu tiên với các ô trống và nút Thêm
  const trAddNew = document.createElement('tr');

  // Name
  const tdNameAddNew = document.createElement('td');
  tdNameAddNew.textContent = "...";
  trAddNew.appendChild(tdNameAddNew);

  // Editable
  const tdEditableAddNew = document.createElement('td');
  tdEditableAddNew.textContent = "...";
  trAddNew.appendChild(tdEditableAddNew);

  // Actions
  const tdActionsAddNew = document.createElement('td');

  // Add Button
  const addBtnNew = document.createElement('button');
  addBtnNew.className = "w3-button w3-hover-white w3-green w3-margin-right";
  addBtnNew.innerHTML = '<i class="fa fa-plus"></i>';
  addBtnNew.title = "Thêm";
  addBtnNew.onclick = () => {
    openModal('add', null, 0);
  };
  tdActionsAddNew.appendChild(addBtnNew);

  trAddNew.appendChild(tdActionsAddNew);
  tableBody.appendChild(trAddNew);

  appData.topMenus.forEach((menu, index) => {
    // Thêm hàng đầu tiên với các ô trống và nút Thêm
    const tr = document.createElement('tr');

    // Name
    const tdName = document.createElement('td');
    tdName.textContent = menu.name;
    tr.appendChild(tdName);

    // Editable
    const tdEditable = document.createElement('td');
    tdEditable.textContent = menu.editable ? "Yes" : "No";
    tr.appendChild(tdEditable);

    // Actions
    const tdActions = document.createElement('td');

    // View Button
    const viewBtn = document.createElement('button');
    viewBtn.className = "w3-button w3-hover-white w3-blue w3-margin-right";
    viewBtn.innerHTML = '<i class="fa fa-eye"></i>';
    viewBtn.title = "Xem";
    viewBtn.onclick = () => {
      window.location.href = `admin_menu_left.html?top-menu=${menu.id}`;
    };
    tdActions.appendChild(viewBtn);

    // Add Button
    const addBtn = document.createElement('button');
    addBtn.className = "w3-button w3-hover-white w3-green w3-margin-right";
    addBtn.innerHTML = '<i class="fa fa-plus"></i>';
    addBtn.title = "Thêm";
    addBtn.onclick = () => {
      openModal('add', menu, index + 1);
    };
    tdActions.appendChild(addBtn);

    // Edit Button
    if (menu.editable) {
      const editBtn = document.createElement('button');
      editBtn.className = "w3-button w3-hover-white w3-yellow w3-margin-right";
      editBtn.innerHTML = '<i class="fa fa-edit"></i>';
      editBtn.title = "Sửa";
      editBtn.onclick = () => {
        openModal('edit', menu);
      };
      tdActions.appendChild(editBtn);
    } else {
      // Nếu không editable, hiển thị icon không hoạt động
      const editBtnDisabled = document.createElement('button');
      editBtnDisabled.className = "w3-button w3-disabled w3-margin-right";
      editBtnDisabled.innerHTML = '<i class="fa fa-edit"></i>';
      editBtnDisabled.title = "Không thể sửa";
      tdActions.appendChild(editBtnDisabled);
    }

    // Delete Button
    if (menu.editable) {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = "w3-button w3-hover-white w3-red";
      deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
      deleteBtn.title = "Xoá";
      deleteBtn.onclick = () => {
        const confirmMenuDeleteModal = document.getElementById('confirmMenuDeleteModal');
        confirmMenuDeleteModal.style.display = "block";
        const deleteButton = document.getElementById('deleteButton');
        deleteButton.onclick = () => {
          deleteTopMenu(menu.id);
          closeModal();
        };
      };
      tdActions.appendChild(deleteBtn);
    } else {
      // Nếu không editable, hiển thị icon không hoạt động
      const deleteBtnDisabled = document.createElement('button');
      deleteBtnDisabled.className = "w3-button w3-disabled";
      deleteBtnDisabled.innerHTML = '<i class="fa fa-trash"></i>';
      deleteBtnDisabled.title = "Không thể xoá";
      tdActions.appendChild(deleteBtnDisabled);
    }

    tr.appendChild(tdActions);
    tableBody.appendChild(tr);
  });
}