// let: khai báo
// const: hằng số
// var:
// document.addEventListener("DOMContentLoaded", function(){
//     // DOMContentLoaded: hành động đọc toàn bộ HTML rồi mới thực hiện JS
//     // ý nghĩa: có thể đẩy script lên đầu body, nhưng vẫn nên để cuối
//     let title = document.getElementById("title");
//     let description = document.getElementById("description");
//     //-> lấy cái id title và gán vào biến title
//     // console.log(title);
//     //-> in ra biến ở bên console trên F12
//     // title.innerHTML = "Hello Mỹ Xuân nèeee"
//     //-> thay đi thẳng nội dung của HTML
//     // event: sự kiện xảy ra khi ta click vô cái gì đó
//     description.addEventListener("click",function(){
//         description.innerHTML = "Còn hơi yếu nghề";
//     });
// });
//->addEventListener(hành động, chức năng cần thực hiện)
// cách 2: tạo một function riêng ở ngoài và gán vào mục func trong addEventListen

document.addEventListener("DOMContentLoaded", function(){
 let menuToggle = document.getElementById("menu-toggle");
 let mobileNav = document.getElementById("mobile-nav");
 let openNav = document.getElementById("open-nav");
 let closeNav = document.getElementById("close-nav");

 menuToggle.addEventListener("click", function(){
   mobileNav.classList.toggle("active");
//  toggle: công cụ bật tắt -> thêm class active vào mobileNav, nếu đã có active thì tự động remove
  if(mobileNav.classList.contains("active")){
    openNav.style.display = "none";
    closeNav.style.display = "block";
  }else{
    openNav.style.display = "block";
    closeNav.style.display = "none";    
  }
//   NẾU mobileNav đang chứa active thì sẽ hiện closeNav và tắt openNav, else thì ngược lại
 
 });


});

