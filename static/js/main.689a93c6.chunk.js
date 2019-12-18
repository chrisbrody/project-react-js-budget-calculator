(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(13),a(6)),m=a(7),u=a(2),s=(a(14),function(e){var t=e.type,a=e.text;return l.a.createElement("div",{className:"alert alert-".concat(t)},a)}),i=a(1),d=function(e){var t=e.charge,a=e.amount,n=e.handleCharge,r=e.handleAmount,c=e.handleSubmit,o=e.edit;return l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"form-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"charge"},"charge"),l.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"e.g. rent",value:t,onChange:n})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"amount"},"amount"),l.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"e.g. 100",value:a,onChange:r}))),l.a.createElement("button",{className:"btn",type:"submit"},o?"edit":"submit",l.a.createElement(i.c,null)))},h=function(e){var t=e.expense,a=e.handleEdit,n=e.handleDelete,r=t.id,c=t.charge,o=t.amount;return l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"expense"},c),l.a.createElement("span",{className:""},"$",o)),l.a.createElement("div",null,l.a.createElement("button",{className:"edit-btn","aria-label":"edit button",onClick:function(){return a(r)}},l.a.createElement(i.b,null)),l.a.createElement("button",{className:"delete-btn","aria-label":"delete button",onClick:function(){return n(r)}},l.a.createElement(i.a,null))))},p=function(e){var t=e.expenses,a=e.handleEdit,n=e.handleDelete,r=e.clearItems;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"list"},t.map((function(e){return l.a.createElement(h,{key:e.id,expense:e,handleEdit:a,handleDelete:n})}))),t.length>0&&l.a.createElement("button",{className:"btn",onClick:r},"clear all expenses",l.a.createElement(i.a,{className:"btn-icon"})))},g=a(5),b=a.n(g),f=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[];var E=function(){var e=Object(n.useState)(f),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),h=i[0],g=i[1],E=Object(n.useState)(""),v=Object(u.a)(E,2),x=v[0],y=v[1],N=Object(n.useState)({show:!1}),O=Object(u.a)(N,2),j=O[0],S=O[1],w=Object(n.useState)(!1),k=Object(u.a)(w,2),C=k[0],I=k[1],D=Object(n.useState)(0),A=Object(u.a)(D,2),F=A[0],J=A[1];Object(n.useEffect)((function(){localStorage.setItem("expenses",JSON.stringify(a))}),[a]);var $=function(e){var t=e.type,a=e.text;S({show:!0,type:t,text:a}),setTimeout((function(){S({show:!1})}),3e3)};return l.a.createElement(l.a.Fragment,null,j.show&&l.a.createElement(s,{type:j.type,text:j.text}),l.a.createElement(s,null),l.a.createElement("h1",null,"budget calculator"),l.a.createElement("main",{className:"App"},l.a.createElement(d,{charge:h,amount:x,handleAmount:function(e){y(e.target.value)},handleCharge:function(e){g(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),""!==h&&x>0){if(C){var t=a.map((function(e){return e.id===F?Object(m.a)({},e,{charge:h,amount:x}):e}));r(t),I(!1),$({type:"success",text:"item edited"})}else{var n={id:b()(),charge:h,amount:x};r([].concat(Object(o.a)(a),[n])),$({type:"success",text:"item added"})}g(""),y("")}else""===h?$({type:"danger",text:"Charge is empty, please try again"}):x<=0&&$({type:"danger",text:"Amount should be greater than zero, please try again"})},edit:C}),l.a.createElement(p,{expenses:a,clearItems:function(){r([]),$({type:"danger",text:"all items deleted"})},handleEdit:function(e){var t=a.find((function(t){return t.id===e})),n=t.charge,l=t.amount;g(n),y(l),I(!0),J(e)},handleDelete:function(e){var t=a.filter((function(t){return t.id!==e}));r(t),$({type:"danger",text:"item deleted"})}})),l.a.createElement("h1",null,"total spending : ",l.a.createElement("span",null,"$",a.reduce((function(e,t){return e+parseInt(t.amount)}),0))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.689a93c6.chunk.js.map