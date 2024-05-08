(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var r=t(601),i=t.n(r),a=t(314),o=t.n(a),c=t(417),s=t.n(c),l=new URL(t(128),t.b),d=o()(i());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;1,300;1,400&display=swap);"]);var u=s()(l);d.push([n.id,`/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody, h1, h2, h3, h4, p,\nfigure, blockquote, dl, dd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1, h2, h3, h4,\nbutton, input, label {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1, h2,\nh3, h4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n/* CUSTOM CSS HERE */\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: "Kanit", sans-serif;\n  font-weight: 300;\n}\n\n#city {\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n}\n\n#getWeather {\n  margin-left: 10px;\n  padding: 5px;\n  background: none;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n#getWeather:hover {\n  box-shadow: 0 0 11px rgba(37, 137, 204, 0.541);\n}\n\n.container {\n  border: 1px solid black;\n  padding: 2%;\n  border-radius: 20px;\n  background: rgb(82,126,147);\n  background: linear-gradient(180deg, rgba(82,126,147,1) 0%, rgba(88,163,198,1) 35%, rgba(0,191,255,1) 100%);\n  \n  display: flex;\n  flex-direction: column;\n  height: 25vh;\n  max-width: 30vw;\n  min-width: 600px;\n  min-height: 250px;  \n  margin: 20px;\n}\n\n.current, .forecast {\n  flex: 1;  \n}\n\n.current {\n  display: grid;\n  grid-template-columns: 1fr 0.5fr 0.2fr 4fr;\n  grid-template-rows: 1fr 1fr 0.5fr;\n}\n\n.currentIcon {\n  grid-area: 1 / 1 / 4 / 2;  \n}\n\n.imgIcon {\n  object-fit: contain;\n  width: 100%;\n  min-width: 88px;\n}\n\n.currentTemp {\n  grid-area: 1 / 2 /4 / 3;\n  font-size: 4rem;\n}\n\n.unit {\n  display: flex;\n  padding: 5px;\n}\n\n.unit button {\n  padding: 0;\n  margin: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.idleUnit {\n  color: rgb(90, 90, 90);\n}\n\n.currentIcon, .currentTemp {\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  align-items: center;\n}\n\n.currentCity {\n  grid-area: 1 / 4 / 2 / 5;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n.currentText {\n  grid-area: 2 / 4 / 3 / 5;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 1.2em;\n}\n\n.forecast {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n\n.first, .second, .third {\n  width: 15%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 2.8fr;\n}\n\n.forecastTemp {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10% 0 10%;\n}\n\n.minTemp {\n  color: rgb(78, 78, 78);\n}\n\n.forecastDay {\n  display: flex;\n  justify-content: center;\n}\n\n.forecastIcon {\n  display: flex;\n  justify-content: center;\n}\n\n.loading {\n  position: absolute;\n  width: 8vw;\n  height: 10vh;\n  visibility: hidden;\n  animation: spin 1s infinite linear;\n  background-image: url(${u});\n  background-size: cover;\n  left: 45vw;\n}\n\n.loading.display {\n  visibility: visible;\n}\n\n.errorMsg {\n  visibility: hidden;\n}\n\n.errorMsg.display {\n  visibility: visible;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}`,""]);const p=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=i(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var c=t(a[o]);e[c].references--}for(var s=r(n,i),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},128:(n,e,t)=>{n.exports=t.p+"84a5d81905bdfc4973e4.webp"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),i=t.n(r),a=t(659),o=t.n(a),c=t(56),s=t.n(c),l=t(540),d=t.n(l),u=t(113),p=t.n(u),f=t(208),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;const m=document.querySelector(".celsius"),y=document.querySelector(".fahrenheit"),g={current:"celsius"},v={},x=document.querySelector(".loading");function b(){x.classList.remove("display")}const w=document.querySelector(".currentIcon"),T=document.querySelector(".currentTemp"),S=document.querySelector(".currentCity"),k=document.querySelector(".currentText"),L=document.querySelector(".first"),C=document.querySelector(".second"),M=document.querySelector(".third"),j=document.querySelector(".errorMsg"),I=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];async function q(n){try{const e=await async function(n){x.classList.add("display"),setTimeout((()=>{x.classList.remove("display")}),5e3);const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?days=3&key=9ebd06ffaada483cb89191451242404&q=${n}`,{mode:"cors"});if(e.ok){const t=await e.json();b();let r="celsius";v.current=n,r="celsius"===g.current?t.current.temp_c:t.current.temp_f;const i={currentWeatherText:t.current.condition.text,currentIcon:t.current.condition.icon,currentWeatherTemp:r,currentFeelsLike:t.current.feelslike_c,currentIsDay:t.current.is_day,currentLocation:t.location.name},a={};for(let n=0;n<3;n+=1){let e,r;"celsius"===g.current?(e=t.forecast.forecastday[n].day.mintemp_c,r=t.forecast.forecastday[n].day.maxtemp_c):(e=t.forecast.forecastday[n].day.mintemp_f,r=t.forecast.forecastday[n].day.maxtemp_f),a[`day${n}`]={date:t.forecast.forecastday[n].date,minTemp:e,maxTemp:r,icon:t.forecast.forecastday[n].day.condition.icon}}return{currentData:i,forecastData:a}}{const n=await e.json();throw b(),new Error(n.error.message)}}(n);!function(n){const e=n.currentIcon,t=document.createElement("img");t.src=e,t.classList.add("imgIcon"),w.replaceChildren(),w.appendChild(t)}(e.currentData),t=e.currentData,T.innerText=`${t.currentWeatherTemp}°`,function(n){S.innerText=n.currentLocation}(e.currentData),function(n){k.innerText=n.currentWeatherText}(e.currentData),function(n){let e=new Date(n.day0.date);L.children[0].innerText=I[e.getDay()],L.children[1].children[0].innerText=Math.round(n.day0.maxTemp),L.children[1].children[1].innerText=Math.round(n.day0.minTemp);let t=new Image;t.src=n.day0.icon,L.children[2].replaceChildren(),L.children[2].appendChild(t),e=new Date(n.day1.date),C.children[0].innerText=I[e.getDay()],C.children[1].children[0].innerText=Math.round(n.day1.maxTemp),C.children[1].children[1].innerText=Math.round(n.day1.minTemp),t=new Image,t.src=n.day1.icon,C.children[2].replaceChildren(),C.children[2].appendChild(t),e=new Date(n.day2.date),M.children[0].innerText=I[e.getDay()],M.children[1].children[0].innerText=Math.round(n.day2.maxTemp),M.children[1].children[1].innerText=Math.round(n.day2.minTemp),t=new Image,t.src=n.day2.icon,M.children[2].replaceChildren(),M.children[2].appendChild(t)}(e.forecastData)}catch(n){console.log(n),e=n,j.innerText=e,j.classList.add("display"),setTimeout((()=>{j.classList.remove("display"),j.innerText=""}),5e3)}var e,t}const D=document.querySelector("#city"),E=document.querySelector("#getWeather"),A=document.querySelector("#query"),z=document.querySelector(".fahrenheit");function _(){q(D.value),v.current=D.value,A.reset()}q("Bratislava"),E.addEventListener("click",_),D.addEventListener("keypress",(n=>{13===n.keyCode&&_()})),z.classList.add("idleUnit"),m.addEventListener("click",(()=>{"fahrenheit"===g.current&&(g.current="celsius",y.classList.add("idleUnit"),m.classList.remove("idleUnit"),console.log(v.current),q(v.current),console.log(m.classList))})),y.addEventListener("click",(()=>{"celsius"===g.current&&(g.current="fahrenheit",m.classList.add("idleUnit"),y.classList.remove("idleUnit"),console.log(v.current),q(v.current),console.log(m.classList))}))})()})();