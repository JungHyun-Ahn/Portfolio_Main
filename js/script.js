// load Design Items List
// $(function() {
//   $('.works-item').load('/includes/work-items.html');
// })

// == Main Navigation Scroll Event ==
const winHeight = window.innerHeight;
const mainNav = document.querySelector(".main-nav");
const mainNavList = document.querySelectorAll(".main-nav ul li");
const articles = document.querySelectorAll("article");
const articlesTitle = document.querySelectorAll("article .sub-title");

window.addEventListener("scroll", () => {
  if(scrollY > 0) {
    mainNav.classList.add("active");
  } else {
    mainNav.classList.remove("active");
  }
  for(let i = 0; i < mainNavList.length; i++) {
    if(scrollY >= articles[i].offsetTop - 80 ) {
      for(let j = 0; j < mainNavList.length; j++) {
        mainNavList[j].classList.remove("active");
      }
      mainNavList[i].classList.add("active");
    }
    // articlesTitle[i].classList.add("active");
  }
  // if(scrollY > articles[1].offsetTop - winHeight + 500) {
  //   console.log(scrollY);
  //   console.log(articles[1].offsetTop);
  //   console.log(winHeight);
  // }
});

// == Scroll Animation ==
// const winHeight = window.innerHeight;
// console.log(winHeight);
// window.addEventListener("scroll", () => {
  
// });

// == Design Menu List ==
const worksBtnContainer = document.querySelector(".works-items-menu.design"); 
const items = document.querySelectorAll(".item");

worksBtnContainer.addEventListener('click', function(e) {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const active = document.querySelector('.design .works-items-menu-list.active');
  active.classList.remove('active');
  const target = e.target.nodeName === 'li' ? e.target : e.target.parentNode;
  target.classList.add('active');

  items.forEach((item) => {
    if(filter === '*' || filter === item.dataset.type) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  })
});
