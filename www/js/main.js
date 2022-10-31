(function () {
  let loginWrapper = document.getElementsByTagName("body")[0];
  let logoutBtn = document.getElementsByClassName("logout")[0];
  let myAccount = document.getElementsByClassName("upload")[0];

  let Height = window.innerHeight;
  loginWrapper.style.height = Height + "px";
  logoutBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    window.location.replace("/");
  });

  myAccount.addEventListener("touchstart", (e) => {
    e.preventDefault();
    window.location.replace("/mine.html");
  });
})();
