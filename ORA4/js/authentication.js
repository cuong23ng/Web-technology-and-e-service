//#region Authentication
/**
 * Hàm lấy token
 * @param {String} code - code để lấy token
 * @returns token
 */
async function getTokens(code) {
  const url = 'https://oauth2.googleapis.com/token';
  const params = {
      code: code,
      client_id: '477392257340-8uqgrnqegn2j8ej06iqbb3vj2vn7f6ip.apps.googleusercontent.com',
      client_secret: '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',
      redirect_uri: 'https://cuong23ng.github.io/Web-technology-and-e-service/ORA4/login_process.html',
      grant_type: 'authorization_code',
  };

  const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(params),
  });

  const token = await response.json();
  console.log("Token:", token);
  return token;
}

/**
 * Hàm lấy User Information
 * @param {String} accessToken 
 * @returns userInfo
 */
async function getUserInfo(accessToken) {
  const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}`, },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  return null;
}

/**
 * Hàm lưu dữ liệu user đang đăng nhập vào local storage
 */
function saveUser(user) {
  const userData = {
    accessToken: user.accessToken,
    email: user.email,
    id: user.id,
    picture: user.picture
  };
  localStorage.setItem('user', JSON.stringify(userData));
}
//#endregion Authentication

//#region Gmail
async function getEmails(parsed) {
  console.log(parsed.accessToken)
  const response = await fetch(`https://www.googleapis.com/gmail/v1/users/${parsed.id}/messages`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${parsed.accessToken}`, },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error('Invalid or expired token');
  }

  return null;
}

function renderEmailTable() {
  const user = localStorage.getItem('user');
  const parsed = JSON.parse(user);

  const mailList = document.getElementById('mailList');
  mailList.innerHTML = '';

  getEmails(parsed).then(data => {
    const mails = data.messages;
    mails.forEach(mail => {
      fetch(`https://www.googleapis.com/gmail/v1/users/${parsed.id}/messages/${mail.id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${parsed.accessToken}`, },
      }).then(response => response.json())
      .then(data => {
        console.log(data);

        const mailEle = document.createElement('tr');

        const senderEle = document.createElement('td');
        const sender = data.payload.headers.find(header => header.name === 'From').value.split('<')[0].trim();
        senderEle.innerHTML = `${sender}`;

        const mailTitleEle = document.createElement('td');
        const title = data.payload.headers.find(header => header.name === 'Subject').value;
        mailTitleEle.innerHTML = `<strong style="width: 60%;">${title}</strong>`;
        
        const mailSnippetEle = document.createElement('td');
        mailSnippetEle.innerHTML = `<p style="width: 60%; word-wrap: break-word; overflow-wrap: break-word;">${data.snippet}...</p>`;

        mailEle.appendChild(senderEle);
        mailEle.appendChild(mailTitleEle);
        mailEle.appendChild(mailSnippetEle);

        mailEle.onclick = () => {
          window.location.href = `https://cuong23ng.github.io/Web-technology-and-e-service/ORA4/maildetail.html?id=${mail.id}&accessToken=${parsed.accessToken}&userId=${parsed.id}`;
        };

        mailList.appendChild(mailEle);
      })
    });
  });
}

function renderMessageDetails() {
  const mailId = getQueryParam('id');
  const accessToken = getQueryParam('accessToken');
  const userId = getQueryParam('userId');
  fetch(`https://www.googleapis.com/gmail/v1/users/${userId}/messages/${mailId}`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}`, },
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    if (data && data.payload) {
      let emailBody = '';
      if (data.payload.parts) {
        // Duyệt qua các phần của email
        for (const part of data.payload.parts) {
          if (part.mimeType === 'text/plain' || part.mimeType === 'text/html') {
            emailBody = decodeBase64Url(part.body.data);
            break;
          }
        }
        document.getElementById('content-container').innerText = `${emailBody}`;
      } else if (data.payload.body && data.payload.body.data) {
        // Trường hợp email không có nhiều phần
        emailBody = decodeBase64Url(data.payload.body.data);
        document.getElementById('content-container').innerHTML = `${emailBody}`;
      }
      console.log('Email Content:', emailBody);
      
    }
  });
}

function decodeBase64Url(data) {
  return decodeURIComponent(
    atob(data.replace(/_/g, '/').replace(/-/g, '+'))
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
}