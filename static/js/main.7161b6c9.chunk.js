(this["webpackJsonpnew-todo-app-with-hooks"]=this["webpackJsonpnew-todo-app-with-hooks"]||[]).push([[0],{74:function(e,t,o){},75:function(e,t,o){},81:function(e,t,o){},82:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),r=o(10),i=o.n(r),a=(o(74),o(75),o(43)),d=o(84),l=o(123),s=o(124),j=o(24),u=o(117),b=o(122),g=o(14),O=o(126),h=function(e){var t=Object(n.useState)(e),o=Object(g.a)(t,2),c=o[0],r=o[1];return[c,function(e){r(e.target.value)},function(){r("")}]},m=o(6);var f=function(e){var t=e.id,o=e.editTodo,n=e.task,c=e.toggleIsEditingForm,r=h(n),i=Object(g.a)(r,3),a=i[0],d=i[1],l=i[2];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),o(t,a),c(),l()},style:{margin:"1rem",width:"75%"},children:Object(m.jsx)(O.a,{margin:"normal",value:a,onChange:d,fullWidth:!0,autoFocus:!0})})};var x=function(e){var t=Object(n.useState)(e),o=Object(g.a)(t,2),c=o[0],r=o[1];return[c,function(){r(!c)}]},v=o(118),p=o(128),T=o(120),k=o(121),w=o(119),y=o(59),S=o.n(y),C=o(60),F=o.n(C);var I=function(e){var t=e.id,o=e.task,n=e.completed,c=e.removeTodo,r=e.toggleTodo,i=e.editTodo,a=x(!1),d=Object(g.a)(a,2),l=d[0],s=d[1];return Object(m.jsx)(v.a,{style:{height:"64px"},children:l?Object(m.jsx)(f,{editTodo:i,id:t,task:o,toggleIsEditingForm:s}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{tabIndex:-1,checked:n,onClick:function(){return r(t)}}),Object(m.jsx)(T.a,{style:{textDecorationLine:n?"line-through":"none"},children:o}),Object(m.jsxs)(k.a,{children:[Object(m.jsx)(w.a,{"aria-label":"Delete",onClick:function(){return c(t)},children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(w.a,{"aria-label":"Edit",onClick:s,children:Object(m.jsx)(F.a,{})})]})]})})};var E=function(e){var t=e.todos,o=e.removeTodo,r=e.toggleTodo,i=e.editTodo;return console.log(t),t.length?Object(m.jsx)(d.a,{style:{margin:"1rem 0"},children:Object(m.jsx)(u.a,{children:t.map((function(e,a){return Object(m.jsxs)(c.a.Fragment,{children:[Object(n.createElement)(I,Object(j.a)(Object(j.a)({},e),{},{key:e.id,completed:e.completed,removeTodo:o,toggleTodo:r,editTodo:i})),a<t.length-1&&Object(m.jsx)(b.a,{})]},a)}))})}):null};var D=function(e){var t=e.addTodo,o=h(""),n=Object(g.a)(o,3),c=n[0],r=n[1],i=n[2];return Object(m.jsx)(d.a,{style:{margin:"1rem 0",padding:"0 1rem"},children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(c),i()},children:Object(m.jsx)(O.a,{value:c,onChange:r,margin:"normal",label:"Add new todo",fullWidth:!0})})})},J=o(125),L=o(61),B=o(127),N=function(e){var t=Object(n.useState)(e),o=Object(g.a)(t,2),c=o[0],r=o[1];return{todos:c,addTodo:function(e){r([].concat(Object(L.a)(c),[{id:Object(B.a)(),task:e,completed:!1}]))},removeTodo:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)},toggleTodo:function(e){var t=c.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t}));r(t)},editTodo:function(e,t){var o=c.map((function(o){return o.id===e?Object(j.a)(Object(j.a)({},o),{},{task:t}):o}));r(o)}}};o(81);var P=function(){var e=JSON.parse(window.localStorage.getItem("todos")||"[]"),t=N(e),o=t.todos,c=t.addTodo,r=t.removeTodo,i=t.toggleTodo,j=t.editTodo;return Object(n.useEffect)((function(){window.localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(m.jsxs)(d.a,{style:{padding:0,margin:0,minHeight:"100vh",backgroundColor:"#dddddd"},elevation:0,children:[Object(m.jsx)(l.a,{color:"primary",position:"static",style:{height:"64px"},children:Object(m.jsx)(s.a,{children:Object(m.jsx)(a.a,{color:"inherit",children:"Todos with hooks"})})}),Object(m.jsx)(J.a,{container:!0,justify:"center",style:{marginTop:"1rem"},children:Object(m.jsxs)(J.a,{item:!0,xs:11,md:8,lg:4,children:[Object(m.jsx)(D,{addTodo:c}),Object(m.jsx)(E,{todos:o,removeTodo:r,toggleTodo:i,editTodo:j})]})})]})};var W=function(){return Object(m.jsx)(P,{})},A=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,130)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root")),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.7161b6c9.chunk.js.map