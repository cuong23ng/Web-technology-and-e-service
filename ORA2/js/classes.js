class ContentItem {
  constructor(id, name, rowSpan = 1, columnSpan = 1, position = { row: 1, column: 1}, contentType = "text", htmlContent = "") {
    this.id = id;
    this.name = name;
    this.rowSpan = rowSpan;
    this.columnSpan = columnSpan;
    this.position = position;
    this.contentType = contentType;
    this.htmlContent = htmlContent;
  }

  updateLayout(rowSpan, columnSpan, position) {
    this.rowSpan = rowSpan;
    this.columnSpan = columnSpan;
    this.position = position;
  }
}

class SidebarItem {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.contents = []; // ContentItem list
  }

  addContent(contentItem) {
    this.contents.push(contentItem);
  }

  updateContent(contentId, newName, newLayoutAttributes, newHtmlContent) {
    const content = this.contents.find(c => c.id === contentId);
    if (content) {
      content.name = newName;
      content.layoutAttributes = newLayoutAttributes;
      content.htmlContent = newHtmlContent;
    }
  }

  deleteContent(contentId) {
    this.contents = this.contents.filter(c => c.id !== contentId);
  }

  getContentById(contentId) {
    return this.contents.find(c => c.id === contentId);
  }
}

class TopMenuItem {
  constructor(id, name, link = "#", icon = "", editable = true) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.icon = icon;
    this.editable = editable;
    this.sidebars = [];
  }

  addSidebar(sidebarItem) {
    this.sidebars.push(sidebarItem);
  }

  updateSidebar(sidebarId, newName, newLink) {
    const sidebar = this.sidebars.find(s => s.id === sidebarId);
    if (sidebar) {
      sidebar.name = newName;
      sidebar.link = newLink;
    }
  }

  deleteSidebar(sidebarId) {
    this.sidebars = this.sidebars.filter(s => s.id !== sidebarId);
  }

  getSidebarById(sidebarId) {
    return this.sidebars.find(s => s.id === sidebarId);
  }
}

class AppData {
  constructor() {
    this.topMenus = [];
  }

  addTopMenu(topMenuItem, index = -1) {
    if (index >= 0) {
      this.topMenus.splice(index, 0, topMenuItem);
    } else {
      this.topMenus.push(topMenuItem);
    }
  }

  updateTopMenu(topMenuId, newName, newLink) {
    const topMenu = this.topMenus.find(t => t.id === topMenuId);
    if (topMenu) {
      topMenu.name = newName;
      topMenu.link = newLink;
    }
  }

  deleteTopMenu(topMenuId) {
    this.topMenus = this.topMenus.filter(t => t.id !== topMenuId);
  }

  getTopMenuById(topMenuId) {
    return this.topMenus.find(t => t.id === topMenuId);
  }
}