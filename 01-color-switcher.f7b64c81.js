function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;function l(){t.disabled?(t.disabled=!1,d.disabled=!0):(t.disabled=!0,d.disabled=!1)}t.addEventListener("click",(()=>{l(),console.log(t.disabled),a=setInterval((()=>{const t=e();document.body.style.backgroundColor=`${t}`}),1e3)})),d.addEventListener("click",(()=>{clearInterval(a),l()}));const n=document.querySelector("body"),o=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}r.disabled=!0;let c=null;o.addEventListener("click",(()=>{o.disabled=!0,r.disabled=!1,c=setInterval((()=>{n.style.background=e()}),1e3)})),r.addEventListener("click",(()=>{o.disabled=!1,r.disabled=!0,clearInterval(c)}));
//# sourceMappingURL=01-color-switcher.f7b64c81.js.map
