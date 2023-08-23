const option = {
  root: null, //viewport
  rootMargin: '0px 0px -250px',
  threadhold: 0.5
}
const observer = new IntersectionObserver((e) => {
  e.forEach((item) => {
    if(item.isIntersecting) {
      item.target.classList.add('scrollUp');
    }
  })
}, option);

const profileSubTitle = document.querySelector('#profile-content .sub-title');
const profileSubTitleDesc = document.querySelector('#profile-content .sub-title-desc');
const profileInner = document.querySelector('#profile-content .profile-inner');
const developProjectSubTitle = document.querySelector('#develop-project-content .sub-title');
const developProjectSubTitleDesc = document.querySelector('#develop-project-content .sub-title-desc');
const developProjectInner = document.querySelector('#develop-project-content .development-inner');
const developPracticeSubTitle = document.querySelector('#develop-practice-content .sub-title');
const developPracticeSubTitleDesc = document.querySelector('#develop-practice-content .sub-title-desc');
const developPracticeInner = document.querySelector('#develop-practice-content .practice-inner');
const designSubTitle = document.querySelector('#design-content .sub-title');
const designSubTitleDesc = document.querySelector('#design-content .sub-title-desc');
const designInner = document.querySelector('#design-content .works-inner');


observer.observe(profileSubTitle);
observer.observe(profileSubTitleDesc);
observer.observe(profileInner);
observer.observe(developProjectSubTitle);
observer.observe(developProjectSubTitleDesc);
observer.observe(developProjectInner);
observer.observe(developPracticeSubTitle);
observer.observe(developPracticeSubTitleDesc);
observer.observe(developPracticeInner);
observer.observe(designSubTitle);
observer.observe(designSubTitleDesc);
observer.observe(designInner);