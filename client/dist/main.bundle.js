(()=>{"use strict";try{self["workbox:window:6.5.4"]&&_()}catch(e){}function e(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.4"]&&_()}catch(e){}var r=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function o(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var i=function(e,t){this.type=e,Object.assign(this,t)};function a(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function s(){}var c={type:"SKIP_WAITING"};function u(e,t){if(!t)return e&&e.then?e.then(s):Promise.resolve()}var d=function(t){var n,s;function d(e,n){var s,c;return void 0===n&&(n={}),(s=t.call(this)||this).nn={},s.tn=0,s.rn=new r,s.en=new r,s.on=new r,s.un=0,s.an=new Set,s.cn=function(){var e=s.fn,t=e.installing;s.tn>0||!o(t.scriptURL,s.sn.toString())||performance.now()>s.un+6e4?(s.vn=t,e.removeEventListener("updatefound",s.cn)):(s.hn=t,s.an.add(t),s.rn.resolve(t)),++s.tn,t.addEventListener("statechange",s.ln)},s.ln=function(e){var t=s.fn,n=e.target,r=n.state,o=n===s.vn,a={sw:n,isExternal:o,originalEvent:e};!o&&s.mn&&(a.isUpdate=!0),s.dispatchEvent(new i(r,a)),"installed"===r?s.wn=self.setTimeout((function(){"installed"===r&&t.waiting===n&&s.dispatchEvent(new i("waiting",a))}),200):"activating"===r&&(clearTimeout(s.wn),o||s.en.resolve(n))},s.dn=function(e){var t=s.hn,n=t!==navigator.serviceWorker.controller;s.dispatchEvent(new i("controlling",{isExternal:n,originalEvent:e,sw:t,isUpdate:s.mn})),n||s.on.resolve(t)},s.gn=(c=function(e){var t=e.data,n=e.ports,r=e.source;return a(s.getSW(),(function(){s.an.has(r)&&s.dispatchEvent(new i("message",{data:t,originalEvent:e,ports:n,sw:r}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(c.apply(this,e))}catch(e){return Promise.reject(e)}}),s.sn=e,s.nn=n,navigator.serviceWorker.addEventListener("message",s.gn),s}s=t,(n=d).prototype=Object.create(s.prototype),n.prototype.constructor=n,n.__proto__=s;var l,f=d.prototype;return f.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return u(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),a(r.bn(),(function(e){r.fn=e,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&o(t.scriptURL,r.sn.toString())&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(e){return Promise.reject(e)}},f.update=function(){try{return this.fn?u(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(t){try{return a(this.getSW(),(function(n){return e(n,t)}))}catch(e){return Promise.reject(e)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&e(this.fn.waiting,c)},f.pn=function(){var e=navigator.serviceWorker.controller;return e&&o(e.scriptURL,this.sn.toString())?e:void 0},f.bn=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return a(navigator.serviceWorker.register(e.sn,e.nn),(function(t){return e.un=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(d.prototype,l),d}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.Sn(e).add(t)},t.removeEventListener=function(e,t){this.Sn(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,r=n(this.Sn(e.type));!(t=r()).done;)(0,t.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());const l=(e,t)=>t.some((t=>e instanceof t));let f,v;const h=new WeakMap,p=new WeakMap,g=new WeakMap,m=new WeakMap,y=new WeakMap;let w={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return p.get(e);if("objectStoreNames"===t)return e.objectStoreNames||g.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function b(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(v||(v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(E(this),e),S(h.get(this))}:function(...e){return S(t.apply(E(this),e))}:function(e,...n){const r=t.call(E(this),e,...n);return g.set(r,e.sort?e.sort():[e]),S(r)}:(e instanceof IDBTransaction&&function(e){if(p.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));p.set(e,t)}(e),l(e,f||(f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,w):e);var t}function S(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(S(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),y.set(t,e),t}(e);if(m.has(e))return m.get(e);const t=b(e);return t!==e&&(m.set(e,t),y.set(t,e)),t}const E=e=>y.get(e);function j(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=S(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(S(a.result),e.oldVersion,e.newVersion,S(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const I=["get","getKey","getAll","getAllKeys","count"],L=["put","add","delete","clear"],D=new Map;function P(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(D.get(t))return D.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=L.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!I.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return D.set(t,i),i}var k;k=w,w={...k,get:(e,t,n)=>P(e,t)||k.get(e,t,n),has:(e,t)=>!!P(e,t)||k.has(e,t)},(async()=>{j("jate",1,{upgrade(e){e.objectStoreNames.contains("jate")?console.log("jate database already exists"):(e.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}})})();const B=document.querySelector("#main");B.innerHTML="",void 0===new class{constructor(){const e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(async()=>{const e=(await j("jate",1)).transaction("jate","readonly").objectStore("jate").getAll();return(await e).value})().then((t=>{console.info("Loaded data from IndexedDB, injecting into editor"),this.editor.setValue(t||e||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(()=>{localStorage.setItem("content",this.editor.getValue())})),this.editor.on("blur",(()=>{console.log("The editor has lost focus"),(async e=>{const t=(await j("jate",1)).transaction("jate","readwrite").objectStore("jate").put({id:1,value:e}),n=await t;console.log("Data saved",n)})(localStorage.getItem("content"))}))}}&&(()=>{const e=document.createElement("div");e.classList.add("spinner"),e.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',B.appendChild(e)})(),"serviceWorker"in navigator?new d("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})();