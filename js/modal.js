// ==== Design Modal Page ====
const designWorksItmes = document.querySelector(".works-item");
const modalPage = document.querySelector(".modal");
const modalPageBox = document.querySelector(".modal-box");
const closeBtn = document.querySelector(".close-btn");

const modalTit = document.querySelector(".modal-desc-tit");
const modalSort = document.querySelector(".modal-desc-sort");
const modalDetail = document.querySelector(".modal-desc-detail");
const modalLinkTxt = document.querySelector(".modal-desc-link");
const modalImg = document.querySelector(".modal-img");

designWorksItmes.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    openModal();
    changeDesc(event);
  }
});

closeBtn.addEventListener('click', function() {
  modalPage.style.display = "none";
  document.body.style.overflow = "unset";
});

function openModal() {
  modalPage.style.display = "block";
  modalPageBox.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
}

function changeDesc(event) {
  const modal = event.target.closest('.design-item').querySelector(".item-desc");

  let itemTit = modal.querySelector(".item-desc-tit").innerText;
  let itemSort = modal.querySelector(".item-desc-sort").innerText;
  let itemDetail = modal.querySelector(".item-desc-detail").innerText;
  let itemLinkTxt = modal.querySelector(".item-desc-link").innerHTML;
  let itemImg = modal.querySelector(".item-desc-img").innerHTML;

  modalTit.innerText = itemTit;
  modalSort.innerText = itemSort;
  modalDetail.innerText = itemDetail;
  modalLinkTxt.innerHTML = itemLinkTxt;
  modalImg.innerHTML = itemImg;
}




