// JavaScript source code
"use strict";

const info = document.getElementById('info')

info.innerHTML +=
    '<a href="Page-1.html">Page 1</a> |'
info.innerHTML +=
    '<a href="Page-2.html">Page 2</a> |'
info.innerHTML +=
    '<a href="Page-3.html">Page 3</a>'
info.innerHTML +=
    '<br>History Length: ' + history.length
info.innerHTML +=
    '<br>Current Location: ' + location.pathname + '<br>'

info.innerHTML +=
    '<button onclick="history.back()">Back</button>'
info.innerHTML +=
    '<button onclick="history.forward()">Forward</button>'

console.log(info.innerHTML);