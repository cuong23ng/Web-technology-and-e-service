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

  if (selectedContent.contentType === "text") {
    // Đóng công cụ tìm kiếm Wikipedia
    const searchTool = document.getElementById('wiki-search-tool');
    searchTool.classList.add('hidden');

    // Khởi tạo CKEditor 5
    ClassicEditor.create(document.querySelector('#editor'), {
      toolbar: {
        items: [
          'undo', 'redo',
          '|',
          'heading', '|',
          'bold', 'italic', 'underline',
          'link', 'bulletedList', 'numberedList',
          'blockQuote', 'insertTable', 'mediaEmbed',
          'insertImage'
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
  } else if (selectedContent.contentType === "wikiSearch") {
      // Mở công cụ tìm kiếm Wikipedia
      const searchTool = document.getElementById('wiki-search-tool');
      searchTool.classList.remove('hidden');

      const searchTermElem = document.querySelector('#search-term');
      const searchResultElem = document.querySelector('#search-result');

      // Reset dữ liệu
      searchResultElem.innerHTML = "";

      // Kiểm tra event nhập vào input
      searchTermElem.addEventListener('input', function (event) {
        search(event.target.value);
      });

      const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
            fn.apply(null, args);
          }, delay);
        };
      };

      const search = debounce(async (searchTerm) => {
        if (!searchTerm) {
          // Reset the search result
          searchResultElem.innerHTML = "";
          return;
        }

        try {
          // Make an API request
          const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
          const response = await fetch(url);
          const searchResults = await response.json();
          
          // Tạo table header
          searchResultElem.innerHTML = `<thead>
                <th>Search result:</th>
                <th>Choose</th>
              </thead>`;

          const searchResultBody = document.createElement('tbody');
          const results = searchResults.query.search;
          results.map(result => {
            const title = highlight(stripHtml(result.title), searchTerm);
            const snippet = highlight(stripHtml(result.snippet), searchTerm);

            // Tạo hàng
            const articleRow = document.createElement('tr'); 
            articleRow.className = "w3-left-align";

            // Tạo brief article
            const articleWiki = document.createElement('td');

            // Tạo tiêu đề
            const titleWiki = document.createElement('a');
            titleWiki.href = `https://en.wikipedia.org/?curid=${result.pageid}`;
            titleWiki.target = "_blank";
            titleWiki.innerHTML = `<h2>${title}</h2>`;
            articleWiki.appendChild(titleWiki);

            // Tạo snippet body
            const snippetWiki = document.createElement('div');
            snippetWiki.innerHTML = `${snippet}..`;
            articleWiki.appendChild(snippetWiki);

            // Tạo ô chọn
            const chooseSec = document.createElement('td');
            chooseSec.className = "w3-center";
            chooseSec.innerHTML = `<input class="w3-check" type="checkbox" name="articles[]" value="${result.pageid}"/>`;

            articleRow.appendChild(articleWiki);
            articleRow.appendChild(chooseSec);

            searchResultBody.appendChild(articleRow);
          });

          searchResultElem.appendChild(searchResultBody);

          // Lấy các article được tick
          const articles = document.querySelectorAll('input[name="articles[]"]');
          articles.forEach( article => {
            article.addEventListener('change', function () {
              const tmpResults = [];
              articles.forEach(article => {
                  if (article.checked) {
                    tmpResults.push(results.filter(result => result.pageid.toString() === article.value.toString()));
                  }
              });
              console.log(tmpResults);
              
              tmpHtmlContent = tmpResults.map(tmpResult => `<article>
                  <a target="_blank" href="https://en.wikipedia.org/?curid=${tmpResult[0].pageid}">
                    <h3>${tmpResult[0].title}</h3>
                  </a>
                  <div>${tmpResult[0].snippet}...</div>
                </article>`).join('');
              renderContentPreviewLayout();
            });
          });

        } catch (error) {
          console.error(error);
        }
      });

      const stripHtml = (html) => {
        let div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent;
      };

      const highlight = (str, keyword, className = "w3-light-gray") => {
        const hl = `<span class="${className}">${keyword}</span>`;
        return str.replace(new RegExp(keyword, 'gi'), hl);
      };  
  } else if (selectedContent.contentType === "wikiPage") {
      // Mở công cụ tìm kiếm Wikipedia
      const searchTool = document.getElementById('wiki-search-tool');
      searchTool.classList.remove('hidden');

      const searchTermElem = document.querySelector('#search-term');
      const searchResultElem = document.querySelector('#search-result');

      // Reset dữ liệu
      searchResultElem.innerHTML = "";

      // Kiểm tra event nhập vào input
      searchTermElem.addEventListener('input', function (event) {
        search(event.target.value);
      });

      const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
            fn.apply(null, args);
          }, delay);
        };
      };

      const search = debounce(async (searchTerm) => {
        if (!searchTerm) {
          // Reset the search result
          searchResultElem.innerHTML = "";
          return;
        }

        try {
          // Make an API request
          const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
          const response = await fetch(url);
          const searchResults = await response.json();
          
          // Tạo table header
          searchResultElem.innerHTML = `<thead>
                <th>Search result:</th>
                <th>Choose</th>
              </thead>`;

          const searchResultBody = document.createElement('tbody');
          const results = searchResults.query.search;
          results.map(result => {
            const title = highlight(stripHtml(result.title), searchTerm);
            const snippet = highlight(stripHtml(result.snippet), searchTerm);

            // Tạo hàng
            const articleRow = document.createElement('tr'); 
            articleRow.className = "w3-left-align";

            // Tạo brief article
            const articleWiki = document.createElement('td');

            // Tạo tiêu đề
            const titleWiki = document.createElement('a');
            titleWiki.href = `https://en.wikipedia.org/?curid=${result.pageid}`;
            titleWiki.target = "_blank";
            titleWiki.innerHTML = `<h2>${title}</h2>`;
            articleWiki.appendChild(titleWiki);

            // Tạo snippet body
            const snippetWiki = document.createElement('div');
            snippetWiki.innerHTML = `${snippet}..`;
            articleWiki.appendChild(snippetWiki);

            // Tạo ô chọn
            const chooseSec = document.createElement('td');
            chooseSec.className = "w3-center";
            chooseSec.innerHTML = `<input class="w3-check" type="radio" name="wikiArticle" value="${result.pageid}"/>`;

            articleRow.appendChild(articleWiki);
            articleRow.appendChild(chooseSec);

            searchResultBody.appendChild(articleRow);
          });

          searchResultElem.appendChild(searchResultBody);

          // Lấy article được tick
          const wikiArticles = document.getElementsByName('wikiArticle');
          wikiArticles.forEach( wikiArticle => {
            wikiArticle.addEventListener('change', async function () {
              const wikiCheckedArticle = document.querySelector('input[name="wikiArticle"]:checked');
    
              const wikiPageResult = results.filter(result => result.pageid.toString() === wikiCheckedArticle.value.toString())[0];
              console.log(wikiPageResult.pageid);
            
              // Lấy Page Content
              const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&pageid=${wikiPageResult.pageid}&prop=text&formatversion=2&origin=*`;
              const response = await fetch(url);
              const result = await response.json();
              tmpHtmlContent = result.parse.text;
              
              renderContentPreviewLayout();
            });
          });

        } catch (error) {
          console.error(error);
        }
      });

      const stripHtml = (html) => {
        let div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent;
      };

      const highlight = (str, keyword, className = "w3-light-gray") => {
        const hl = `<span class="${className}">${keyword}</span>`;
        return str.replace(new RegExp(keyword, 'gi'), hl);
      };  
  }

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