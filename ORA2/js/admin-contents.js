let tmpHtmlContent = null;
let editorInstance = null; // To keep track of the CKEditor instance

function renderContentPreviewLayout() {
  const previewContainer = document.getElementById('previewLayout');
  previewContainer.innerHTML = ""; // Xoá nội dung cũ

  // Lấy contentId từ URL
  const contentId = getQueryParam('content');
  if (!contentId) {
    alert("Không có Content được chọn");
    return;
  }

  // Tìm ContentItem dựa trên contentId
  let selectedSidebar = null;
  let selectedContent = null;


  appData.topMenus.forEach(topMenu => {
    topMenu.sidebars.forEach(sidebar => {
      const content = sidebar.getContentById(contentId);
      if (content) {
        selectedContent = content;
        selectedSidebar = sidebar;
      }
    });
  });

  selectedSidebar.contents.forEach(content => {
    const box = document.createElement('div');
    if (content.id === selectedContent.id) {
      box.className = "preview-box highlight";
      box.innerHTML = tmpHtmlContent;
    } else {
      box.className = "preview-box";
      box.innerHTML = content.htmlContent;
    }
    box.style.gridArea = `${content.position.row} / ${content.position.column} / span ${content.rowSpan} / span ${content.columnSpan}`;
    previewContainer.appendChild(box);
  });
}

/**
 * Hàm để tải nội dung Content vào trình soạn thảo CKEditor 5
 */
function loadContent() {
  const contentId = getQueryParam('content');
  if (!contentId) {
    alert("Không có Content được chọn");
    return;
  }

  // Tìm ContentItem dựa trên contentId
  let selectedContent = null;
  let selectedSidebar = null;
  let selectedTopMenu = null;
  appData.topMenus.forEach(topMenu => {
    topMenu.sidebars.forEach(sidebar => {
      const content = sidebar.getContentById(contentId);
      if (content) {
        selectedContent = content;
        selectedSidebar = sidebar;
        selectedTopMenu = topMenu;
      }
    });
  });

  renderSidebarForSelectedTopMenu(selectedTopMenu.id);

  const contentNameElement = document.getElementById('content-name');
  if (contentNameElement) {
    contentNameElement.innerHTML = `${selectedTopMenu.name} <i class="fa fa-angle-right"></i> ${selectedSidebar.name} <i class="fa fa-angle-right"></i> ${selectedContent.name}`;
  }

  if (!selectedContent) {
    alert("Không tìm thấy Content với ID này");
    return;
  }

  tmpHtmlContent = selectedContent.htmlContent;

  // Khởi tạo CKEditor 5
  ClassicEditor.create(document.querySelector('#editor'), {
    toolbar: {
      items: [
        'undo', 'redo',
        '|',
        'heading', '|',
        'bold', 'italic', 'underline',
        'link', 'bulletedList', 'numberedList',
        'blockQuote', 'insertTable', 'mediaEmbed'
      ]
    },
    language: 'vi', // // Set language to Vietnamese if available
    // Additional configuration can go here
  }).then(editor => {
    editorInstance = editor;
    editor.setData(selectedContent.htmlContent);

    // Listen to changes
    editor.model.document.on('change:data', () => {
      tmpHtmlContent = editor.getData();
      renderContentPreviewLayout();
    });
  }).catch(error => {
    console.error(error);
  });

  // Render Preview Layout
  renderContentPreviewLayout();

  // Xử lý nút lưu
  document.getElementById('saveContentButton').addEventListener('click', function () {
    // Lưu dữ liệu đã cập nhật
    selectedContent.htmlContent = tmpHtmlContent;
    saveAppData();
    alert("Nội dung đã được lưu");
  });
}