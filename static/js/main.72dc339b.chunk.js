(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),r=n.n(l),i=(n(17),n(6)),u=n(1),o=n(5),s=n(4),d=n.n(s),m=function(e){var t={backgroundColor:e.isHeld?"#59E391":"#FFFFFF"};return c.a.createElement("div",{className:"die"},c.a.createElement("div",{style:t,onClick:e.holdDie,className:"dice"},c.a.createElement("h2",null,e.value)))},f=function(){var e=function(){return{value:Math.ceil(6*Math.random()),isHeld:!1,id:Object(o.a)()}},t=function(){for(var t=[],n=0;n<10;n++)t.push(e());return t},n=Object(a.useState)(t()),l=Object(u.a)(n,2),r=l[0],s=l[1],f=Object(a.useState)(!1),v=Object(u.a)(f,2),E=v[0],b=v[1],h=r.every(function(e){return e.isHeld});Object(a.useEffect)(function(){var e=r[0].value,t=r.every(function(t){return t.value===e});h&&t&&b(!0)},[r]);return c.a.createElement("main",{className:"main-container"},E&&c.a.createElement(d.a,null),c.a.createElement("div",{className:"inner-box"},c.a.createElement("h1",{className:"head-text tc"},"Tenzies"),E?c.a.createElement("h2",{className:"won-text"},"YOU WON!!!"):c.a.createElement("p",{className:"text tc"},"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."),c.a.createElement("div",{className:"dices"},r.map(function(e){return c.a.createElement(m,{key:e.id,value:e.value,isHeld:e.isHeld,holdDie:function(){return t=e.id,void s(function(e){return e.map(function(e){return e.id===t?Object(i.a)({},e,{isHeld:!e.isHeld}):e})});var t}})})),c.a.createElement("button",{className:"dice-button",onClick:function(){E?(b(!1),s(t)):s(function(t){return t.map(function(t){return t.isHeld?t:e()})})}},E?"NEW GAME":"ROLL")))},v=(n(19),function(){return c.a.createElement("div",null,c.a.createElement(f,null))}),E=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,24)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)})};n(21);r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null))),E()},8:function(e,t,n){e.exports=n(23)}},[[8,3,2]]]);
//# sourceMappingURL=main.72dc339b.chunk.js.map