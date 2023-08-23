
// To Top Button
const toTopBtn = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
  if(scrollY > 0) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});
toTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// ====== [Main Navigation] ======
// == Main Navigation Scroll Event ==
const winHeight = window.innerHeight;
const mainNav = document.querySelector(".main-nav");
const mainNavList = document.querySelectorAll(".main-nav ul li");
const articles = document.querySelectorAll("article");
const mainLi = document.querySelector(".mainLi");

mainLi.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", () => {
  if(scrollY > winHeight - 40) {
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
// == Main Navigation - Mobile ==
const mobileMenuBtn = document.querySelector(".menu-btn-mo");
const mobileMenu = document.querySelector(".menu-box");
const mobileCloseMenuBtn = document.querySelector(".close__btn_mo");
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.style.transition = `all 0.3s`;
  mobileMenu.classList.add('active');
});
mobileCloseMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// ====== [Develop_Project] ======
const developMenuLists = document.querySelectorAll(".development .works-items-menu-list");
const developItems = document.querySelectorAll(".development-item");
const devSlideLeftBtn = document.querySelector(".dev-left-btn");
const devSlideRightBtn = document.querySelector(".dev-right-btn");
// variables
let devSlideIdx = 0; // slide index
let devSlideLen = developItems.length; // number of slides

// == slide Development Project Items(menu) ==
developMenuLists[devSlideIdx].classList.add("active");
// menu click change
developMenuLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    setDevMenu(idx);
    setDevSlide(idx);
    devSlideIdx = idx;
  });
});

// == slide Development Project Items(btn) ==
developItems[devSlideIdx].classList.add("active");
// prev(left btn)
devSlideLeftBtn.addEventListener("click", () => {
  devSlideIdx = devSlideIdx <= 0 ? devSlideLen - 1 : devSlideIdx - 1;
  setDevSlide(devSlideIdx);
  setDevMenu(devSlideIdx);
});
devSlideRightBtn.addEventListener("click", () => {
  devSlideIdx = devSlideIdx >= devSlideLen - 1 ? 0 : devSlideIdx + 1;
  setDevSlide(devSlideIdx);
  setDevMenu(devSlideIdx);
});

// set Function
function setDevMenu(idx) {
  developMenuLists.forEach((item) => {
    item.classList.remove("active");
  });
  developMenuLists[idx].classList.add("active");
}
function setDevSlide(idx) {
  developItems.forEach((item) => {
    item.classList.remove("active");
  });
  developItems[idx].classList.add("active");
}


// ====== [Design] ======
// == Input Design Items ==
// get Data
import { designData } from "./design_data.js";
setDesignItems(designData);

// more view click event
let designWorksItmes = document.querySelector(".works-item");
designWorksItmes.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    let itemId = event.target.dataset.id;
    let string = setDesignItems__DescImg(designData, itemId);
    event.target.closest('.design-item').querySelector(".item-desc-img").innerHTML = string;
  }
});

// set Design Items 
function setDesignItems(arr) {
  const worksItemContainer = document.querySelector("#design-content .works-inner .works-item");

  worksItemContainer.innerHTML = "";
  for(let i = 0; i < designData.length; i++) {
    worksItemContainer.innerHTML += `
      <div class="design-item" data-type=${arr[i].dataType}>
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
    string += `<img src="${imgSrc}" alt="design item img">`
  }
  return string;
}


// == Design Menu List ==
const designWorksMenu = document.querySelector(".works-items-menu.design"); 
const items = document.querySelectorAll(".design-item");

designWorksMenu.addEventListener('click', function(e) {
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