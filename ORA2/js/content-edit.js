function addContent(itemId, sectionId, prevId) {
  // Get previous Content
  const prevCon = document.getElementById(`item-${itemId}-${sectionId}-${prevId}`)
  // Get current Id
  const currentId = ++menu[`item_${itemId}`].sections.contentCount
  // Add to Edit table
  const newContent = document.createElement('div')
  const contentId = `item-${itemId}-${sectionId}-${currentId}` // item-1-1-1
  newContent.setAttribute("id", contentId)
  newContent.setAttribute("class", "item-menu")
  newContent.innerHTML = `
    <div class="item-menu-name">New Content #${currentId}</div>
    <div class="item-buttons">
      <img src="assets/eye.png" alt="eye-icon" onclick=""/>
      <img src="assets/edit.png" alt="edit-icon" onclick=""/>
      <img src="assets/close.png" alt="close-icon" onclick="deleteContent(${itemId}, ${sectionId}, ${currentId})"/>
      <img src="assets/add.png" alt="add-icon" onclick="addContent(${itemId}, ${sectionId}, ${currentId})"/>
    </div>
  `
  prevCon.nextElementSibling.insertAdjacentElement("afterend", newContent)

  // ADD A NEW LINE AFTER NEW ITEM
  let newLine = document.createElement("hr")
  newContent.insertAdjacentElement("afterend", newLine)

  // Save to object "menu"
  menu[`item_${itemId}`].sections[`item_${itemId}_${sectionId}_${currentId}`] = {
    name: `New Content #${currentId}`
  }
}

function deleteContent(itemId, sectionId, currentId) {
  // Delete in Edit table
  const content = document.getElementById(`item-${itemId}-${sectionId}-${currentId}`)
  content.nextElementSibling.remove()
  content.remove()

  // Delete data in Object "menu"
  delete menu[`item_${itemId}`].sections[`item-${itemId}-${sectionId}-${currentId}`]
}