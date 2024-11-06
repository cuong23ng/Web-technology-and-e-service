
// Add menu item
function addMenuItem(itemId) {
  // ADD NEW ITEM IN ADMIN PAGE MENU
  const newItemId = ++menu.itemCount; // Add items counter by 1 and get current id
  const item = document.getElementById(`item-${itemId}`) // Get item element just before new item Element

  // Add item attributes and oparations
  let newItem = document.createElement('div')
  newItem.innerHTML = `
    <div class="item-menu-name">New Item</div>
    <div class="item-buttons">
      <img src="assets/eye.png" alt="eye-icon" onclick="viewMenuLeft(${newItemId})"/>
      <img src="assets/edit.png" alt="edit-icon" onclick="renameMenuItem(${newItemId})"/>
      <img src="assets/close.png" alt="close-icon" onclick="deleteMenuItem(${newItemId})"/>
      <img src="assets/add.png" alt="add-icon" onclick="addMenuItem(${newItemId})"/>
    </div>`
  newItem.classList.add('item-menu')
  newItem.setAttribute('id', `item-${newItemId}`)
  item.nextElementSibling.insertAdjacentElement("afterend", newItem)

  // ADD A NEW LINE AFTER NEW ITEM
  let newLine = document.createElement("hr")
  newItem.insertAdjacentElement("afterend", newLine)

  // ADD NEW DATA TO OBJECT "menu"
  menu[`item_${newItemId}`] = {
    name: "New Item",
    itemCount: 0,
    sidebar: ''
  }

  // ADD NEW ITEM IN NAVIGATION BAR
  // Get Item just before new nav item
  const navItem = document.getElementById(`nav-${itemId}`)
  let newNavItem = document.createElement('a')
  newNavItem.setAttribute('id', `nav-${newItemId}`)
  newNavItem.setAttribute("href", "javascript:void(0)")
  newNavItem.setAttribute("onclick", `showContent('site-${newItemId}')`)
  newNavItem.setAttribute("class", "w3-bar-item w3-button")
  newNavItem.innerText = "New Item"
  navItem.insertAdjacentElement("afterend", newNavItem)

  // CREATE NEW SITE
  const prevSite = document.getElementById(`site-${itemId}`)
  const newSite = document.createElement('div')
  newSite.setAttribute("id", `site-${newItemId}`)
  newSite.classList = "w3-container w3-padding-64 hidden"
  newSite.innerHTML = `<div class="container"></div>`
  prevSite.insertAdjacentElement("afterend", newSite)

  // SET TITLE IN SIDEBAR
  menu[`item_${newItemId}`].sidebar += `<h4 id="sbar-${newItemId}-0" class="w3-bar-item"></h4>`
}

// Delete menu item
function deleteMenuItem(itemId) {
  // Delete in the Admin page menu
  const item = document.getElementById(`item-${itemId}`)
  item.nextElementSibling.remove()
  item.remove()

  // Delete in the navigation bar
  const navItem = document.getElementById(`nav-${itemId}`)
  navItem.remove()

  // Delete data in Object "menu"
  delete menu[`item_${itemId}`]
}

// Rename menu item
function renameMenuItem(itemId) {
  const item = document.getElementById(`item-${itemId}`) // Get item in the Admin page menu
  const navItem = document.getElementById(`nav-${itemId}`) // Get item in the nav bar
  const itemName = item.firstElementChild
  itemName.innerHTML = `<input type="text" id="input-${item.id}" value="${itemName.innerText}" autofocus autocomplete="off">`

  // Change to new name if press enter
  itemName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const newName = document.getElementById(`input-${item.id}`).value
      itemName.innerText = newName // Change name in the Admin page menu
      navItem.innerText = newName // Change name in the nav bar
      menu[`item_${itemId}`].name = newName // Change name data in Object "menu"
    }
  })

  // Change to new name if click outside the input box
  itemName.addEventListener("change", () => {
    const newName = document.getElementById(`input-${item.id}`).value
    itemName.innerText = newName // Change name in the Admin page menu
    navItem.innerText = newName // Change name in the nav bar
    menu[`item_${itemId}`].name = newName // Change name data in Object "menu"
  })
}

// Admin contents layout
function viewMenuLeft(itemId) {
  const idString = `item_${itemId}` // Id in object "menu"
  // Get sidebar content
  const sidebar = document.getElementById("mySidebar")
  sidebar.innerHTML = ''
  sidebar.innerHTML = menu[idString].sidebar
  sidebar.firstElementChild.innerHTML = `<b>${menu[idString].name}</b>`

  // Change edit table
  const menuTable = document.getElementById("admin-page").firstElementChild
  menuTable.innerHTML = ''

  const editTable = document.createElement('div')
  editTable.classList = "menu"

  const title = document.createElement('div')
  const titleId = `item-${itemId}-0`
  title.setAttribute('id', titleId)
  title.setAttribute('class', "item-menu")
  title.innerHTML = `
    <div class="item-menu-name"><h3>Admin menu left: "${menu[idString].name}"</h3></div>
    <div class="item-buttons" style="justify-content: end">
      <img src="assets/add.png" alt="add-icon" onclick="addSectionItem(${itemId}, 0)"/>
    </div>
  `
  editTable.appendChild(title)
  const nothing = document.createElement("hr") // Create 1 sibling to be similar to each item which has one hr element below
  nothing.setAttribute("style", "width: 0")
  editTable.appendChild(nothing)

  const sectionList = sidebar.getElementsByTagName("a")
  for (let key = 0; key < sectionList.length; key++) {
    const editSection = document.createElement('div')
    const sectionId = `item-${itemId}-${key + 1}` // item_{sectionid}_{id} (id_1_1)
    editSection.setAttribute('id', sectionId) 
    editSection.setAttribute('class', "item-menu")
    editSection.innerHTML = `
      <div class="item-menu-name">${sectionList[key].innerText}</div>
      <div class="item-buttons">
        <img src="assets/eye.png" alt="eye-icon" onclick="editContentLayout(${itemId}, ${key + 1})"/>
        <img src="assets/edit.png" alt="edit-icon" onclick="renameSectionItem(${itemId}, ${key + 1})"/>
        <img src="assets/close.png" alt="close-icon" onclick="deleteSectionItem(${itemId}, ${key + 1})"/>
        <img src="assets/add.png" alt="add-icon" onclick="addSectionItem(${itemId}, ${key + 1})"/>
      </div>`
    editTable.appendChild(editSection)

    const newLine = document.createElement('hr')
    editTable.appendChild(newLine)
  }
  menuTable.appendChild(editTable)
}