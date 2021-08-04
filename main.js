(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>o});var a=t(645),r=t.n(a)()((function(n){return n[1]}));r.push([n.id,"/* Reset */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\n\nbutton:hover {\n  opacity: 0.9;\n}\n\nbutton:active {\n  opacity: 0.6;\n}\n\n.primary-button {\n  height: 48px;\n  background-color: #d57d1f;\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n}\n\n/* Default Layout */\n#root {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-bar {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 120px;\n  z-index: 400;\n}\n\n.app-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin-top: 120px;\n  align-items: center;\n}\n\n.app-footer {\n  padding: 16px;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 16px;\n  height: 100%;\n  gap: 20px;\n}\n\n.nav {\n  display: flex;\n  gap: 20px;\n}\n\n.logo {\n  height: 40px;\n}\n\n/* Colors */\n.bg-primary {\n  background-color: #2d2013;\n}\n\n.bg-primary-dark {\n  background-color: #23180d;\n}\n\n.text-white {\n  color: white;\n}\n\n.text-secondary {\n  color: #d57d1f;\n}\n\n/* Meals */\n\n.grid {\n  display: grid;\n  grid-template-columns: auto;\n  grid-auto-rows: 1fr;\n  grid-column-gap: 40px;\n  grid-row-gap: 80px;\n  width: 100%;\n  justify-items: center;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.card-image {\n  width: 100%;\n  height: 100%;\n  transition: transform 1000ms;\n}\n\n.card-image:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n.card-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.like-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: max-content;\n}\n\n/* Modal */\n.modal,\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background-color: transparent;\n}\n\n.modal {\n  overflow: auto;\n}\n\n.overlay {\n  background-color: #2d2013;\n  mix-blend-mode: multiply;\n}\n\n#modal-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: auto;\n  gap: 40px;\n}\n\n.modal-close-button {\n  position: fixed;\n  right: 0;\n  top: 0;\n  margin: 16px;\n}\n\n.scroll-off {\n  overflow: hidden;\n}\n\n.fs-large {\n  font-size: 54px;\n}\n\n.blur {\n  filter: blur(24px);\n}\n\n/* Comments */\n.involvement-container {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  align-items: flex-start;\n  margin: 24px;\n}\n\n.involvement-container section,\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n}\n\n.meal-image {\n  width: 100%;\n}\n\n.meal-info {\n  display: grid;\n  grid-template-columns: auto;\n  grid-auto-rows: 1fr;\n  gap: 15px;\n}\n\n.meal-info a {\n  text-decoration: underline;\n}\n\n.involvement-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.label {\n  color: #d57d1f;\n}\n\n.section-title {\n  text-align: left;\n}\n\ninput,\ntextarea {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  resize: none;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border: 1px solid #d57d1f;\n}\n\n/* Large screen devices */\n@media screen and (min-width: 992px) {\n  .navbar {\n    flex-direction: row;\n    justify-content: flex-start;\n    gap: 40px;\n  }\n\n  .app-bar {\n    height: 80px;\n  }\n\n  .app-body {\n    margin-top: 80px;\n  }\n\n  .grid {\n    width: 80%;\n    grid-template-columns: auto auto auto;\n  }\n\n  #modal-content {\n    width: 50%;\n    padding: 40px;\n  }\n\n  .section-title {\n    text-align: center;\n  }\n\n  .meal-image {\n    height: 400px;\n  }\n\n  .meal-info {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .fs-large {\n    font-size: 72px;\n  }\n\n  .modal-close-button {\n    margin: 48px;\n  }\n\n  form {\n    width: 50%;\n  }\n}\n",""]);const o=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var l=n[s],c=a.base?l[0]+a.base:l[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var m=t(p),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==m?(e[m].references++,e[m].updater(u)):e.push({identifier:p,updater:r(u,a),references:1}),i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var l=a(n,r),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a=t.css,r=t.media,o=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},610:(n,e,t)=>{n.exports=t.p+"7d243edf052a9de2a6d2.png"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{const n="https://www.themealdb.com/api/json/v1/1",e="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/",a=(n,t={})=>fetch(`${e}${n}`,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}),r=({meals:n=[],likes:e=[]})=>{const t=n.map((({idMeal:n,strMeal:e,strMealThumb:t})=>({id:n,name:e,src:t})));return e.forEach((n=>{const e=t.find((e=>`${e.id}`===n.item_id));e&&(e.likes=n.likes)})),t},o=async()=>{const t=await(async()=>{let n=localStorage.getItem("appId");if(!n){const e=await a("apps/");n=await e.text(),localStorage.setItem("appId",n)}return n})(),o=await(async()=>{const e=await fetch(`${n}/search.php?f=b`),{meals:t}=await e.json();return t})(),i=await(async n=>{const t=await fetch(`${e}apps/${n}/likes`);try{return await t.json()}catch(n){return[]}})(t);(({meals:n=[],onPressLikeButton:e,onPressCommentsButton:t})=>{const a=document.querySelector("main");document.getElementById("meal-counter").innerText=n.length;const r=document.createElement("div");r.classList.add("grid"),n.forEach((({id:n,name:a,src:o,likes:i=0})=>{const s=document.createElement("div");s.classList.add("card"),s.innerHTML=`\n      <img src=${o} alt="" class="card-image" />\n      <div class="card-body">\n          <div class="card-header">\n              <h4>${a}</h4>\n              <div class="like-button">\n                  <button data-id="like-meal">\n                      <span class="material-icons">favorite_border</span>\n                  </button>\n                  <p><span data-id="likes">${i}</span> Likes</p>\n              </div>\n          </div>\n          <div class="card-buttons">\n              <button data-id="comments" class="primary-button">Comments</button>\n              <button data-id="reservations" class="primary-button">Reservations</button>\n          </div>\n      </div>\n    `;const l=s.querySelector('[data-id="comments"]'),c=s.querySelector('[data-id="like-meal"]'),d=s.querySelector('[data-id="likes"]');l.addEventListener("click",(()=>{(()=>{const n=document.createElement("div");n.classList.add("text-white"),n.innerHTML='\n    <div class="overlay"></div>\n    <div class="modal">\n      <div id="modal-content"></div>\n      <button data-id="close" class="modal-close-button">\n        <span class="material-icons text-secondary fs-large">close</span>\n      </button>\n    </div>\n  ';const e=document.getElementById("root");e.classList.add("blur"),n.querySelector('[data-id="close"]').addEventListener("click",(()=>{document.body.removeChild(n),e.classList.remove("blur"),document.body.classList.remove("scroll-off")})),document.body.classList.add("scroll-off"),document.body.appendChild(n)})(),t(n)})),c.addEventListener("click",(async()=>{await e(n)&&(d.innerText=Number.parseInt(d.innerText,10)+1)})),r.appendChild(s)})),a.appendChild(r)})({meals:r({meals:o,likes:i}),onPressLikeButton:n=>(async({appId:n,mealId:e})=>201===(await a(`apps/${n}/likes`,{item_id:e})).status)({appId:t,mealId:n}),onPressCommentsButton:r=>(async({mealId:t,appId:r})=>{const o=await(async e=>{const t=await fetch(`${n}/lookup.php?i=${e}`),{meals:a}=await t.json();return a[0]})(t),i=document.querySelector("#modal-content");i.innerHTML=`\n    <div class="involvement-container">\n      <section>\n        <img src='${o.strMealThumb}' class="meal-image" />\n        <h2 class="section-title">${o.strMeal}</h2>\n        <ul class="meal-info">\n          <li><span class="label">Category:</span> ${o.strCategory}</li>\n          <li><span class="label">Area:</span> ${o.strArea}</li>\n          <li><span class="label">Recipe:</span> <a href='${o.strSource}' target="blank">Recipe Link</a></li>\n          <li><span class="label">Video Instruction:</span> <a href='${o.strYoutube}' target="blank">YouTube Link</a></li>\n        </ul>\n      </section>\n      <section>\n        <h3 class="section-title">Comments (<span id="comment-count">0</span>)</h3>\n        <ul class="involvement-list" id='comment-list'></ul>\n      </section>\n      <section>\n        <h3 class="section-title">Add a comment</h3>\n        <form>\n          <input type="text" name="username" placeholder='Your name' required />\n          <textarea name="comment" rows="4" placeholder="Your insights" required></textarea>\n          <button type="submit" class="primary-button">Comment</button>\n        </form>\n      </section>\n    </div>\n   `;const s=async()=>{const n=await(async(n,t)=>{const a=await fetch(`${e}apps/${n}/comments?item_id=${t}`),{status:r}=a;return 400===r||500===r?[]:a.json()})(r,t);i.querySelector("#comment-count").innerText=((n=[])=>n.length)(n);const a=i.querySelector("#comment-list");a.innerHTML="",n.forEach((n=>{const e=document.createElement("li");e.innerHTML=`${n.creation_date} ${n.username}: ${n.comment}`,a.appendChild(e)}))},l=document.querySelector("form");l.addEventListener("submit",(async n=>{n.preventDefault();const e={item_id:t,username:l.elements.username.value,comment:l.elements.comment.value};await(async({appId:n,mealId:e,data:t})=>{const r=`apps/${n}/comments?item_id=${e}`;return 201===(await a(r,t)).status})({appId:r,mealId:t,data:e})&&(await s(),l.reset(),n.target.children[1].focus())})),await s()})({mealId:r,appId:t})})};var i=t(379),s=t.n(i),l=t(795),c=t.n(l),d=t(695),p=t.n(d),m=t(216),u=t.n(m),f=t(426),h={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=p()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};h.domAPI=c(),h.insertStyleElement=u(),s()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=`\n<header class="app-bar bg-primary-dark text-white">\n  <nav class="navbar">\n    <a href="./"><img src=${t(610)} alt="" class="logo" /></a>\n    <ul class="nav">\n      <li><a href="#meals">Meals (<span id="meal-counter">0</span>)</a></li>\n      <li><a href="#categories">Categories</a></li>\n      <li><a href="#areas">Areas</a></li>\n    </ul>\n  </nav>\n</header>\n<main class="app-body bg-primary text-white">\n</main>\n<footer class="app-footer bg-primary-dark text-white">\n  Created by Microverse under CC license\n</footer>\n`;document.getElementById("root").innerHTML=g,window.addEventListener("load",(()=>o()))})()})();