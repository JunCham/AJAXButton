console.log("你好");
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成但不确定成功与否
    if (request.readyState === 4) {
      //判断是否成功
      if (request.status >= 200 && request.status < 300) {
        //创建style
        const style = document.createElement("style");
        //填写style的内容
        style.innerHTML = request.response;
        //插到相应的位置
        document.head.appendChild(style);
        console.log("成功了");
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    //创建script
    const script = document.createElement("script");
    //填写script的内容
    script.innerHTML = request.response;
    //插到相应的位置
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    //创建div
    const div = document.createElement("div");
    //填写div的内容
    div.innerHTML = request.response;
    //插到相应的位置
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //判断是否成功
      if (request.status >= 200 && request.status < 300) {
        //创建style
        const dom = request.responseXML;
        //填写style的内容
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载XML失败");
      }
    }
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成但不确定成功与否
    if (request.readyState === 4) {
      //判断是否成功
      if (request.status >= 200 && request.status < 300) {
        //创建object
        const object = JSON.parse(request.response);
        myName.textContent = object.User;
      } else {
        alert("加载XML失败");
      }
    }
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
let n = 1;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  n += 1;
  request.open("GET", `/page${n}`);
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成但不确定成功与否
    if ((request.status = 200 && request.readyState === 4)) {
      //创建object
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
    }
    console.log("n=" + n);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
