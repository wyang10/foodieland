var Ajax = {
  get: (url, callback) => {
    // XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status == 200 || xhr.status == 304) {
          callback(xhr.responseText);
        }
      }
    };
    xhr.send();
  },

  post: (url, data, callback) => {
    console.log(data);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status == 200 || xhr.status == 304) {
          callback(xhr.responseText);
        }
      }
    };
    xhr.send(data);
  },
};
