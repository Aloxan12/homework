(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{12:function(e,t,n){e.exports={button:"Affairs_button__3nTtZ",content:"Affairs_content__1ltZU"}},15:function(e,t,n){e.exports={greeting:"Greeting_greeting__2pUpw",someClass:"Greeting_someClass__2PYUa",input:"Greeting_input__FGjFi",inputError:"Greeting_inputError__VZLo0",error:"Greeting_error__17SOt"}},17:function(e,t,n){e.exports={message:"Message_message__2HwuI",wrapperMassgae:"Message_wrapperMassgae__i2pnE",angle:"Message_angle__9a3s-"}},18:function(e,t,n){e.exports={message:"Header_message__AuLKz",wrapperMassgae:"Header_wrapperMassgae__FAZm1",angle:"Header_angle__2PrdR"}},21:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3J-3o",errorInput:"SuperInputText_errorInput__2Q3ou",error:"SuperInputText_error__2pK0j"}},22:function(e,t,n){e.exports={default:"SuperButton_default__3Il8g",red:"SuperButton_red__2zJlc"}},23:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2FR9N",spanClassName:"SuperCheckbox_spanClassName__1UPFT"}},31:function(e,t,n){e.exports={blue:"HW4_blue__-Rv-Y",column:"HW4_column__2fVsJ"}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(29),s=n.n(c),i=(n(38),n(8)),o=n(17),j=n.n(o),l=n(0);var u=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:j.a.message,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.avatar,alt:"#"})}),Object(l.jsxs)("div",{className:j.a.wrapperMassgae,children:[Object(l.jsx)("h4",{children:e.name}),Object(l.jsx)("p",{children:e.message}),Object(l.jsx)("time",{children:e.time}),Object(l.jsx)("div",{className:j.a.angle})]})]})})};var b=function(){return Object(l.jsx)("div",{})},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Mike Ma",x="some textsome textsome textsome textsome textsome textsome textangleangleangleangle",O="22:00",m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Mike Ma",f="some textsome",_="22:03";var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(l.jsx)(u,{avatar:d,name:h,message:x,time:O}),Object(l.jsx)(u,{avatar:m,name:p,message:f,time:_}),Object(l.jsx)("hr",{}),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",Object(l.jsx)(b,{}),Object(l.jsx)("hr",{})]})},v=n(7);var k=function(e){return Object(l.jsxs)("div",{children:[e.affair.name,Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},C=n(12),N=n.n(C);var w=function(e){var t=e.data.map((function(t){return Object(l.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{className:N.a.content,children:[t,Object(l.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(r.useState)(S),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(w,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},M=n(33),A=n(15),F=n.n(A),T=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?F.a.inputError:F.a.input;return Object(l.jsxs)("div",{className:F.a.greeting,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:t,onChange:n,className:s,onBlur:n}),Object(l.jsx)("div",{className:F.a.error,children:a})]}),Object(l.jsx)("button",{onClick:r,disabled:!t,children:"add"}),Object(l.jsx)("span",{children:c})]})},E=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),u=j[0],b=j[1],d=t.length;return Object(l.jsx)(T,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(i(""),b("name is required"))},addUser:function(){n(s),alert("Hello ".concat(s," !")),i("")},error:u,totalUsers:d})},I=n(30);var H=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(E,{users:n,addUserCallback:function(e){var t={_id:Object(I.v1)(),name:e};a([].concat(Object(M.a)(n),[t]))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},P=n(10),U=n(11),J=n(21),G=n.n(J),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(G.a.error," ").concat(i||""),u="".concat(G.a.errorInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&a&&a()},className:u},o)),c&&Object(l.jsx)("span",{className:j,children:c})]})},B=n(31),R=n.n(B),Z=n(22),K=n.n(Z),L=function(e){var t=e.red,n=e.className,r=Object(U.a)(e,["red","className"]),a="".concat(t?K.a.red:K.a.default," ").concat(n);return Object(l.jsx)("button",Object(P.a)({className:a},r))},Y=n(23),q=n.n(Y),X=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),r=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),a="".concat(q.a.checkbox," ").concat(t||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){},className:a},r)),n&&Object(l.jsx)("span",{className:q.a.spanClassName,children:n})]})};var z=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:R.a.column,children:[Object(l.jsx)(W,{value:n,onChangeText:a,onEnter:s,error:c}),Object(l.jsx)(L,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(X,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(X,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var V=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(y,{}),Object(l.jsx)(H,{}),Object(l.jsx)(z,{})]})},Q=n(2);var $=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var D=function(){return Object(l.jsx)("div",{children:"Junior"})};var ee=function(){return Object(l.jsx)("div",{children:"JuniorPlus"})},te="/pre-junior",ne="/junior",re="/junior-plus";var ae=function(){return Object(l.jsxs)("div",{children:["Switch \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0440\u043e\u0443\u0442",Object(l.jsxs)(Q.d,{children:['\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "/" \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 "/" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)',Object(l.jsx)(Q.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(Q.a,{to:te})}}),Object(l.jsx)(Q.b,{path:te,render:function(){return Object(l.jsx)(V,{})}}),Object(l.jsx)(Q.b,{path:ne,render:function(){return Object(l.jsx)(D,{})}}),Object(l.jsx)(Q.b,{path:re,render:function(){return Object(l.jsx)(ee,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(l.jsx)(Q.b,{render:function(){return Object(l.jsx)($,{})}})]})]})},ce=n(18),se=n.n(ce);var ie=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{to:te,className:se.a.link}),Object(l.jsx)(i.b,{to:ne,className:se.a.link}),Object(l.jsx)(i.b,{to:re,className:se.a.link}),"// add NavLinks"]})};var oe=function(){return Object(l.jsxs)("div",{children:["\u0432 gh-pages \u043b\u0443\u0447\u0448\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 HashRouter",Object(l.jsxs)(i.a,{children:[Object(l.jsx)(ie,{}),Object(l.jsx)(ae,{})]})]})};var je=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.961e1422.chunk.js.map