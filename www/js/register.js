var loginWrapper = document.getElementsByTagName("body")[0];
var Height = window.innerHeight;

loginWrapper.style.height = Height + "px";

let loginBtn = document.getElementsByClassName("register-btn")[0];
let HomeBtn = document.getElementsByClassName("to-home")[0];
let wrapper = document.getElementsByClassName("register-success")[0];
loginBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  let data = new FormData(document.querySelector("form"));
  let dataNew = `username=${data.get("username")}&password=${data.get(
    "password"
  )}`;
  Ajax.post("http://localhost:3001/user/register", dataNew, (response) => {
    let response_json = JSON.parse(response);
    if (response_json.success) {
      wrapper.style.display = "flex";
    } else {
      alert(response_json.msg);
    }
  });
});

HomeBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  window.location.replace("./main.html");
});
