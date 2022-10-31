var loginWrapper = document.getElementsByTagName("body")[0];
var Height = window.innerHeight;

loginWrapper.style.height = Height + "px";

let loginBtn = document.getElementsByClassName("login-btn")[0];

loginBtn.addEventListener("touchstart", (e) => {
  let data = new FormData(document.querySelector("form"));
  let dataNew = `username=${data.get("username")}&password=${data.get(
    "password"
  )}`;
  Ajax.post("http://127.0.0.1:3001/user/login", dataNew, (response) => {
    let response_json = JSON.parse(response);
    if (response_json.success) {
      sessionStorage.setItem("username", response_json.username);
      sessionStorage.setItem("token", response_json.token);
      window.location.replace("./main.html");
    } else {
      alert(response_json.msg);
    }
  });
});
