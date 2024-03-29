const pageWrapper = document.querySelector(".page-wrapper");
const signUpBtn = document.querySelector(".signup-btn");
const closeIcon = document.querySelector(".close-icon");
const registrationPage = document.querySelector(".registration-page");

closeIcon.addEventListener("click", () => {
  registrationPage.style.display = "none";
  pageWrapper.style.backgroundColor = "white";
});

signUpBtn.addEventListener("click", () => {
  registrationPage.style.display = "block";
  pageWrapper.style.backgroundColor = "rgb(188, 157, 157)";
  pageWrapper.stlye.height = "100vh";
  pageWrapper.style.cursor = "none";
});
