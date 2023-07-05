// load Design Items List
// $(function() {
//   $('.works-item').load('/includes/work-items.html');
// })

// Scroll Up
const scrollUpBtn = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  if(scrollY > 0) {
    scrollUpBtn.classList.add("active");
  } else {
    scrollUpBtn.classList.remove("active");
  }
});

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
  }
});


// ====== [Design] ======

// == Input Design Items ==
// get Data
import { designData } from "./design_data.js";
setDesignItems(designData);

// set Design Items 
function setDesignItems(arr) {
  const worksItemContainer = document.querySelector("#design-content .works-item");

  worksItemContainer.innerHTML = "";
  for(let i = 0; i < designData.length; i++) {
    worksItemContainer.innerHTML += `
      <div class="item" data-type=${arr[i].dataType}>
        <img src=${arr[i].thumImg} alt="">
        <div class="item-detail">
          <h4>${arr[i].name}</h4>
          <p>${arr[i].type}</p>
          <button data-id=${arr[i].id}>MORE VIEW</button>
        </div>
        <!-- Modal 내용 -->
        <div class="item-desc">
          <span class="item-desc-tit">${arr[i].name}</span>
          <span class="item-desc-sort">${arr[i].type}</span>
          <span class="item-desc-detail">${arr[i].detail}</span>
          <span class="item-desc-link">
            <a target="_blank" href=${arr[i].link}>${arr[i].link}</a>
          </span>
          <span class="item-desc-img">
          </span>
        </div>
      </div>
    `;
  }
}

// get Desc Images
function setDesignItems__DescImg(arr, id) {
  const arrIdx = id-1;
  const arrLeng = arr[arrIdx].images.length;
  let string = "";
  for(let j = 0; j < arrLeng; j++) {
    const imgSrc = arr[arrIdx].images[j];
    string += `<img src="${imgSrc}" alt="${id}-${j} img">`
  }
  return string;
}

// more view click event
const designMoreViewBtn = document.querySelectorAll(".item-detail button");
designMoreViewBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.dataset.id);
    let itemId = e.target.dataset.id;
    let idx = itemId - 1;

    let string = setDesignItems__DescImg(designData, itemId);
    // console.log(string);
    document.querySelectorAll('.item-desc-img')[idx].innerHTML = string;
  });
});

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
