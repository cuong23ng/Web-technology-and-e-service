// SECTION EDIT

function addSectionItem(itemId, sectionId) {
  const itemString = `item_${itemId}`
  const prevSecId = `item_${itemId}_${sectionId}`
  // Similar to addMenuItem()
  const newSectionId = ++menu[itemString].itemCount
  const prevSec = document.getElementById(`item-${itemId}-${sectionId}`)

  // Add section attributes and oparations
  let section = document.createElement('div')
  section.innerHTML = `
    <div class="item-menu-name">New Section</div>
    <div class="item-buttons">
      <img src="assets/eye.png" alt="eye-icon" onclick="editContentLayout(${itemId}, ${newSectionId})"/>
      <img src="assets/edit.png" alt="edit-icon" onclick="renameSectionItem(${itemId}, ${newSectionId})"/>
      <img src="assets/close.png" alt="close-icon" onclick="deleteSectionItem(${itemId}, ${newSectionId})"/>
      <img src="assets/add.png" alt="add-icon" onclick="addSectionItem(${itemId}, ${newSectionId})"/>
    </div>`
  section.classList.add('item-menu')
  section.setAttribute('id', `item-${itemId}-${newSectionId}`) // item_{sectionid}_{id} (id_1_1)
  prevSec.nextElementSibling.insertAdjacentElement("afterend", section)

  // ADD A NEW LINE AFTER NEW ITEM
  let newLine = document.createElement("hr")
  section.insertAdjacentElement("afterend", newLine)

  // ADD NEW ITEM IN SIDE BAR
  // Get Item just before new side bar item
  const prevSbarItem = document.getElementById(`sbar-${itemId}-${sectionId}`)
  let sbarItem = document.createElement('a')
  sbarItem.setAttribute('id', `sbar-${itemId}-${newSectionId}`)
  sbarItem.setAttribute("href", `#item-${itemId}-${newSectionId}`)
  sbarItem.classList = "w3-bar-item w3-button w3-hover-black"
  sbarItem.innerText = "New Item"
  prevSbarItem.insertAdjacentElement("afterend", sbarItem)

  // ADD NEW DATA TO OBJECT "menu"
  menu[`item_${itemId}`].sidebar = document.getElementById('mySidebar').innerHTML
}

function deleteSectionItem(itemId, sectionId) {
  // Delete in the Admin page menu
  const section = document.getElementById(`item-${itemId}-${sectionId}`)
  section.nextElementSibling.remove()
  section.remove()

  // Delete in the side bar
  const sbarItem = document.getElementById(`sbar-${itemId}-${sectionId}`)
  sbarItem.remove()

  // Delete data in Object "menu"
  menu[`item_${itemId}`].sidebar = document.getElementById('mySidebar').innerHTML
}

function renameSectionItem(itemId, sectionId) {
  const section = document.getElementById(`item-${itemId}-${sectionId}`) // Get item in the Admin page menu
  const sbarItem = document.getElementById(`sbar-${itemId}-${sectionId}`) // Get item in the nav bar
  console.log(section)
  const sectionName = section.firstElementChild
  sectionName.innerHTML = `<input type="text" id="input-${section.id}" value="${sectionName.innerText}" autofocus autocomplete="off">`

  // Change to new name if press enter
  sectionName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const newName = document.getElementById(`input-${section.id}`).value
      sectionName.innerText = newName // Change name in the Admin page menu
      sbarItem.innerText = newName // Change name in the side bar
      menu[`item_${itemId}`].sidebar = document.getElementById('mySidebar').innerHTML // Change name data in Object "menu"
    }
  })

  // Change to new name if click outside the input box
  sectionName.addEventListener("change", () => {
    const newName = document.getElementById(`input-${section.id}`).value
    sectionName.innerText = newName // Change name in the Admin page menu
    sbarItem.innerText = newName // Change name in the side bar
    menu[`item_${itemId}`].sidebar = document.getElementById('mySidebar').innerHTML // Change name data in Object "menu"
  })
}

function editContentLayout(itemId, sectionId) {
  const idString = `item_${itemId}` // Id in object "menu"
  const sbarItem = document.getElementById(`sbar-${itemId}-${sectionId}`) // Get item in the nav bar

  // Change edit table
  const menuTable = document.getElementById("admin-page").firstElementChild
  menuTable.innerHTML = ''

  const editTable = document.createElement('div')
  editTable.classList = "menu"

  const title = document.createElement('div')
  const titleId = `item-${itemId}-${sectionId}-0`
  title.setAttribute('id', titleId)
  title.setAttribute('class', "item-menu")
  title.innerHTML = `
    <div class="item-menu-name"><h3>Admin contents layout: "${menu[idString].name}/${sbarItem.innerText}"</h3></div>
    <div class="item-buttons" style="justify-content: end">
      <img src="assets/add.png" alt="add-icon" onclick="addContent(${itemId}, ${sectionId}, 0)"/>
    </div>
  `
  editTable.appendChild(title)
  const nothing = document.createElement("hr") // Create 1 sibling to be similar to each item which has one hr element below
  nothing.setAttribute("style", "width: 0")
  editTable.appendChild(nothing)

  for (let key = 0; key < menu[`item_${itemId}`].sections.contentCount; key++) {
    const content = document.createElement('div')
    const contentId = `item-${itemId}-${sectionId}-${key + 1}` // item-1-1-1
    content.setAttribute('id', contentId) 
    content.setAttribute('class', "item-menu")
    content.innerHTML = `
      <div class="item-menu-name">${menu[`item_${itemId}`].sections[`item_${itemId}_${sectionId}_${key + 1}`].name}</div>
      <div class="item-buttons">
        <img src="assets/eye.png" alt="eye-icon" onclick=""/>
        <img src="assets/edit.png" alt="edit-icon" onclick=""/>
        <img src="assets/close.png" alt="close-icon" onclick="deleteContent(${itemId}, ${sectionId}, ${key + 1})"/>
        <img src="assets/add.png" alt="add-icon" onclick="addContent(${itemId}, ${sectionId}, ${key + 1})"/>
      </div>`
    editTable.appendChild(content)

    const newLine = document.createElement('hr')
    editTable.appendChild(newLine)
  }

  menuTable.appendChild(editTable)
}