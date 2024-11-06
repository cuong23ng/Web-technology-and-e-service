// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
// Function to show content and update button style
function showContent(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.w3-container');
  sections.forEach(section => section.classList.add('hidden'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.w3-bar-item');
  buttons.forEach(button => button.classList.remove('active'));

  // Show selected section
  document.getElementById(sectionId).classList.remove('hidden');

  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = '';

  if (sectionId === 'admin-page') {
    showAdminPage()
  } else {
    sidebar.innerHTML = menu[`item_${sectionId[sectionId.length - 1]}`].sidebar;
    sidebar.firstElementChild.innerHTML = `<b>${menu[`item_${sectionId[sectionId.length - 1]}`].name}</b>`
  }

  // Add active class to clicked button
  event.target.classList.add('active');
}

function showAdminPage() {
  const menuTable = document.getElementById("admin-page").firstElementChild
  menuTable.innerHTML = ''

  const title = document.createElement('h3')
  title.setAttribute('style', "margin-left: 25%")
  title.innerText = "Admin menu top: Chỉnh sửa menu top"
  menuTable.appendChild(title)

  const editTable = document.createElement('div')
  editTable.classList = "menu"

  for (let key = 0; key < menu.itemCount; key++) {
    const editItem = document.createElement('div')
    editItem.setAttribute('id', `item-${key+1}`)
    editItem.setAttribute('class', "item-menu")
    if (key === 0) {
      editItem.innerHTML = `
        <div class="item-menu-name">${menu[`item_${key+1}`].name}</div>
        <div class="item-buttons">
          <img src="assets/eye.png" alt="eye-icon" onclick="viewMenuLeft(${key+1})"/>
          <img src="assets/add.png" alt="add-icon" onclick="addMenuItem(${key+1})"/>
        </div>
      `
    } else {
      editItem.innerHTML = `
        <div class="item-menu-name">${menu[`item_${key+1}`].name}</div>
        <div class="item-buttons">
          <img src="assets/eye.png" alt="eye-icon" onclick="viewMenuLeft(${key+1})"/>
          <img src="assets/edit.png" alt="edit-icon" onclick="renameMenuItem(${key+1})"/>
          <img src="assets/close.png" alt="close-icon" onclick="deleteMenuItem(${key+1})"/>
          <img src="assets/add.png" alt="add-icon" onclick="addMenuItem(${key+1})"/>
        </div>
      `
    }
    editTable.appendChild(editItem)

    const newLine = document.createElement('hr')
    editTable.appendChild(newLine)
  }
  menuTable.appendChild(editTable)
}

window.onload = function () {
  showContent('site-1');
};


