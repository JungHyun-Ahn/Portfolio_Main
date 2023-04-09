// load Design Items List
// $(function() {
//   $('.works-item').load('/includes/work-items.html');
// })

// Design Menu List
const worksBtnContainer = document.querySelector(".works-items-menu"); 
const items = document.querySelectorAll(".item");

worksBtnContainer.addEventListener('click', function(e) {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const active = document.querySelector('.works-items-menu-list.active');
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
