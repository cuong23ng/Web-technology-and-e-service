// const infoReset = { 
//   name: "Thông tin sinh viên", 
//   itemCount: 4,
//   sidebar: `<h4 id="sbar-4-0" class="w3-bar-item"></h4>
//     <a id="sbar-4-1" class="w3-bar-item w3-button w3-hover-black" href="#section-4-1">Thông tin học tập</a>
//     <a id="sbar-4-2" class="w3-bar-item w3-button w3-hover-black" href="#section-4-2">Kĩ năng</a>
//     <a id="sbar-4-3" class="w3-bar-item w3-button w3-hover-black" href="#section-4-3">Dự án</a>
//     <a id="sbar-4-4" class="w3-bar-item w3-button w3-hover-black" href="#section-4-4"">Sở thích</a>`,
//   'section_1': {
//     name: "",
//     contentCount: 2,
//     layout: `<div class="row">
//           <div id="left" class="col-sm-5">
            
//           </div>
//           <div id="right" class="col-sm-7">
            
//           </div>
//         </div>`,
//     'content_1': {
//       name: "",
//       layoutId: "left",
//       body: `<img src="./assets/ava.jpg" alt="Student Photo" class="profile-photo" >`
//     },
//     'content_2': {
//       name: "",
//       layoutId: "right",
//       body: `<div class="details"><span>Họ và tên:</span> Nguyễn Hùng Cường</div>
//             <div class="details"><span>Năm vào trường:</span> 2021</div>
//             <div class="details"><span>Bậc đào tạo:</span> KSCLC-TN-TT-VNVP-ICT</div>
//             <div class="details"><span>Chương trình:</span> Công nghệ thông tin Việt-Pháp 2021</div>
//             <div class="details"><span>MSSV:</span> 20215264</div>
//             <div class="details"><span>Giới tính:</span> Nam</div>
//             <div class="details"><span>Lớp:</span> Việt-Pháp 01-K66</div>
//             <div class="details"><span>Khóa học:</span> 66</div>
//             <div class="details"><span>Email:</span> Cuong.NH215264@sis.hust.edu.vn</div>`
//     }
//   },
//   'section_2': {
//     name: "Thông tin học tập",
//     contentCount: 1,
//     layout: `<div class="row">
//           <div id="academic-info" class="col-sm-12">
            
//           </div>
//         </div>`,
//     'content_1': {
//       name: "",
//       layoutId: "academic-info",
//       body: `<table class="table-info">
//               <tr>
//                 <th>Tổng kết học kỳ</th>
//                 <td>20232</td>
//                 <th>Số TC tích lũy</th>
//                 <td>103</td>
//               </tr>
//               <tr>
//                 <th>Trung bình tích lũy</th>
//                 <td>3.05</td>
//                 <th>Trình độ sinh viên</th>
//                 <td>4</td>
//               </tr>
//               <tr>
//                 <th>Số TC nợ đăng ký</th>
//                 <td>0</td>
//                 <th>Mức cảnh báo</th>
//                 <td>M0</td>
//               </tr>
//             </table>`
//     }
//   },
//   'section_3': {
//     name: "Kĩ năng",
//     contentCount: 1,
//     layout: `<div class="row">
//           <div id="skills-info" class="col-sm-12">
            
//           </div>
//         </div>`,
//     'content_1': {
//       name: "",
//       layoutId: "skills-info",
//       body: `<div class="skills">
//               <table class="table-info">
//                 <tr>
//                   <th>Ngôn ngữ</th>
//                   <td>HTML, CSS, JavaScript, C#, Java</td>
//                 </tr>
//                 <tr>
//                   <th>Frameworks</th>
//                   <td>ReactJS, NodeJS, VueJS</td>
//                 </tr>
//                 <tr>
//                   <th>Công cụ</th>
//                   <td>Git, Visual Studio Code, Postman</td>
//                 </tr>
//                 <tr>
//                   <th>Cơ sở dữ liệu</th>
//                   <td>MySQL, SQL Server, MongoDB</td>
//                 </tr>
//               </table>
//             </div>`
//     }
//   },
//   'section_4': {
//     name: "Dự án",
//     contentCount: 1,
//     layout: `<div class="row">
//           <div id="projects-info" class="col-sm-12">
            
//           </div>
//         </div>`,
//     'content_1': {
//       name: "",
//       layoutId: "projects-info",
//       body: `<div class="project">
//               <table class="table-info">
//                 <tr>
//                   <th>Online Latex Editor</th>
//                   <td>Cá nhân <br>
//                     Build online Latex editing tool, compiler, login and authorization in Project II <br>
//                     Công nghệ sử dụng: C#, VueJS, MS SQL Server <br>
//                     Mục tiêu: Online Latex Editor Using VueJS on Front-end and ASP.NET core on Back-end</td>
//                 </tr>
//                 <tr>
//                   <th>Battleship Game</th>
//                   <td>Nhóm 4 người <br>
//                     Nhiệm vụ: Build a ship shooting game using Java language in Project I <br>
//                     Công nghệ sử dụng: Java <br>
//                     Mục tiêu: Apply simple Object-oriented programming knowledge</td>
//                 </tr>
//                 <tr>
//                   <th>Milktea store management software</th>
//                   <td>Cá nhân <br>
//                     Build Milktea store software including displaying menu of store using data bending, filter by item, sort by price/name ... <br>
//                     Công nghệ sử dụng: VueJS <br> </td>
//                   </td>
//                 </tr>
//               </table>
//             </div>`
//     }
//   },
//   'section_5': {
//     name: "Sở thích",
//     contentCount: 1,
//     layout: `<div class="row">
//           <div id="hobbies-info" class="col-sm-12">
            
//           </div>
//         </div>`,
//     'content_1': {
//       name: "",
//       layoutId: "hobbies-info",
//       body: `<ul>
//               <li>Reading</li>
//               <li>Listening</li>
//               <li>Jogging</li>
//             </ul>`
//     }
//   }
// }