(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"6a12e2b62b0ff90b5ecc.jpeg";console.log("started"),document.body.appendChild(function(){const e=document.querySelector("body > div"),n=document.createElement("h1");n.classList="center logo",n.innerText="Pizza",e.appendChild(n);const c=document.createElement("div");c.classList="navbar",e.appendChild(c);const r=document.createElement("h3");r.innerText="Home",c.appendChild(r);const i=document.createElement("h3");i.innerText="Menu",c.appendChild(i);const o=document.createElement("h3");o.innerText="Contact",c.appendChild(o);const a=document.createElement("h3");a.innerText="We sell pizza",e.appendChild(a);const s=document.createElement("h1");s.innerText="This is what they look like:",e.appendChild(s);const l=new Image;l.src=t,l.classList="pizza-img",e.appendChild(l);const d=document.createElement("h2");d.innerText="You want it?",d.classList="center",e.appendChild(d);const p=document.createElement("h1");return p.innerText="It's yours my friend!",p.classList="center",e.appendChild(p),e}())})();