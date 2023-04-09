// ==== Design Modal Page ====
let moreViewBtns = document.querySelectorAll(".item .item-detail button");
let modalPage = document.querySelector(".modal");
let modalPageBox = document.querySelector(".modal-box");
let closeBtn = document.querySelector(".close-btn");

let modalTit = document.querySelector(".modal-desc-tit");
let modalSort = document.querySelector(".modal-desc-sort");
let modalDetail = document.querySelector(".modal-desc-detail");
let modalLinkTxt = document.querySelector(".modal-desc-link");
let modalImg = document.querySelector(".modal-img");

moreViewBtns.forEach((moreViewBtn) => {
  moreViewBtn.addEventListener('click', (event)=> {
    openModal();
    changeDesc(event);
  })
})

closeBtn.addEventListener('click', function() {
  modalPage.style.display = "none";
});

function openModal() {
  modalPage.style.display = "block";
  modalPageBox.scrollTo(0, 0);
}

function changeDesc(event) {
  let itemTit = event.target.parentNode.nextElementSibling.querySelector(".item-desc-tit").innerText;
    let itemSort = event.target.parentNode.nextElementSibling.querySelector(".item-desc-sort").innerText;
    let itemDetail = event.target.parentNode.nextElementSibling.querySelector(".item-desc-detail").innerText;
    let itemLinkTxt = event.target.parentNode.nextElementSibling.querySelector(".item-desc-link").innerHTML;
    let itemImg = event.target.parentNode.nextElementSibling.querySelector(".item-desc-img").innerHTML;
    console.log(itemImg);

    modalTit.innerText = itemTit;
    modalSort.innerText = itemSort;
    modalDetail.innerText = itemDetail;
    modalLinkTxt.innerHTML = itemLinkTxt;
    modalImg.innerHTML = itemImg;
}




