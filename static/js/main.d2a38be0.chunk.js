(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),o=(n(14),n(8)),l=n(2),i=n(9),d=n(0),j=function(e){var t=e.handleAddNote,n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],r=a[1];return Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)("textarea",{rows:"8",cols:"10",value:s,placeholder:"Enter the note.....",onChange:function(e){200-e.target.value.length>=0&&r(e.target.value)}}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsxs)("small",{children:[200-s.length," Remaining.."]}),Object(d.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),r(""))},children:"Save"})]})]})},u=n(5),h=function(e){var t=e.id,n=e.text,c=e.date,a=e.handleDeleteNote;return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("span",{children:n}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("small",{children:c}),Object(d.jsx)(u.a,{onClick:function(){return a(t)},className:"delete-icon",size:"1.3em"})]})]})},b=function(e){var t=e.notes,n=e.handleAddNote,c=e.handleDeleteNote;return Object(d.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(d.jsx)(h,{id:e.id,text:e.text,date:e.date,handleDeleteNote:c})})),Object(d.jsx)(j,{handleAddNote:n})]})},O=function(e){var t=e.handleSearchNote;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(u.b,{className:"search-icon",size:"1.3em"}),Object(d.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search..."})]})},x=function(e){var t=e.handleDarkMode;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Notes"}),Object(d.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"save",children:"Toggle Mode"})]})},f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),j=r[0],u=r[1],h=Object(c.useState)(!1),f=Object(l.a)(h,2),v=f[0],N=f[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-app-notes-app"));e&&a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("react-app-notes-app",JSON.stringify(n))}),[n]);return Object(d.jsx)("div",{className:"".concat(v&&"dark-mode"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(x,{handleDarkMode:N}),Object(d.jsx)(O,{handleSearchNote:u}),Object(d.jsx)(b,{notes:n.filter((function(e){return e.text.toLocaleLowerCase().includes(j)})),handleAddNote:function(e){var t=new Date,c={id:Object(i.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[c]);a(s)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})]})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d2a38be0.chunk.js.map