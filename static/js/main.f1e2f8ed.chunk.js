(this.webpackJsonpmemory_card=this.webpackJsonpmemory_card||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var r=t(1),a=t.n(r),n=t(6),s=t.n(n),o=t(7),i=t(3),d=t(0);var l=function(e){return Object(d.jsxs)("div",{className:"scoreboard-container",children:[Object(d.jsxs)("div",{className:"current-score",children:["Score ",e.currentScore]}),Object(d.jsxs)("div",{className:"best-score",children:["Best score ",e.bestScore]})]})};var u=function(e){return Object(d.jsxs)("div",{className:"card",onClick:e.onClick,children:[Object(d.jsx)("h1",{className:"card-text ".concat(e.textColour),children:e.text}),Object(d.jsx)("div",{className:"".concat(e.shape)})]})};t(13);var j=function(){var e=["red","green","blue","yellow","purple"],c=["square","circle","rectangle","triangle"],t=Object(r.useState)(0),a=Object(i.a)(t,2),n=a[0],s=a[1],j=Object(r.useState)(0),b=Object(i.a)(j,2),O=b[0],h=b[1],f=Object(r.useState)([]),x=Object(i.a)(f,2),v=x[0],m=x[1],p=Object(r.useState)({card1:[],card2:[],card3:[]}),S=Object(i.a)(p,2),N=S[0],g=S[1],C=function(){for(var t=[],r=function(e){var c=JSON.stringify(t),r=JSON.stringify(e);return!!c.includes(r)},a=0;a<3;a++){var n=Math.floor(Math.random()*e.length),s=Math.floor(Math.random()*e.length),o=Math.floor(Math.random()*c.length),i=[e[n],e[s],c[o]];r(i)?a--:t.push(i)}g({card1:t[0],card2:t[1],card3:t[2]})};Object(r.useEffect)((function(){C()}),[]);var y=function(e){var c=N[e];!function(e){var c=JSON.stringify(v),t=JSON.stringify(e);return c.includes(t)}(c)?(s(n+1),m([].concat(Object(o.a)(v),[c]))):(O<n&&h(n),s(0)),C()};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{currentScore:n,bestScore:O}),Object(d.jsxs)("div",{className:"cards-container",children:[Object(d.jsx)(u,{onClick:function(){y("card1")},textColour:N.card1[0],text:N.card1[1],shape:N.card1[2]}),Object(d.jsx)(u,{onClick:function(){y("card2")},textColour:N.card2[0],text:N.card2[1],shape:N.card2[2]}),Object(d.jsx)(u,{onClick:function(){y("card3")},textColour:N.card3[0],text:N.card3[1],shape:N.card3[2]})]})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f1e2f8ed.chunk.js.map