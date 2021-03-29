let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/3.html")
  request.onload = () => {
    const div = document.createElement("div")
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => { }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/4.xml")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName("warning")[0].textContent
      //getElementsByTagName()函数返回的是个伪数组，所以要用[0]获取第一个，再进行后续操作
      console.log(text.trim())//删除两端的空字符串，并打印
    }
  }
  request.send()
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/5.json")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(typeof request.response)
      console.log(request.response)
      const bool = JSON.parse(request.response)
      //JSON.parse可以把符合JSON语法的字符串变成JS对应的数据
      console.log(typeof bool)
      console.log(bool)
    }
  }
  request.send()
}
getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/2.js")
  request.onload = () => {
    const script = document.createElement("script")
    script.innerHTML = request.response
    document.body.appendChild(script)
  }
  request.onerror = () => { }
  request.send()
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/style.css") // readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState)
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {//http状态码2开头的都是成功的情况
        const style = document.createElement("style")
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        alert("加载 CSS 失败")
      }
    }
  }
  request.send() // readyState = 2
}
