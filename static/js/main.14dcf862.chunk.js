(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{32:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),r=a(16),l=a(10),i=a(22),s=a.n(i),d=a(15),m=Object(n.createContext)({todos:[],todo:"",createNewTodo:function(){},todoInput:function(){},changeTodo:function(){},completedTodo:function(){},deleteTodo:function(){}}),u=a(53),p=a(51),f=a(54),E=function(e){var t=e.text,a=e.isCompleted,o=e.deleted,r=e.completed,i=e.changed,s=Object(n.useState)(!1),d=Object(l.a)(s,2),m=d[0],E=d[1],b=function(){return E(!1)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"todo-indicator ".concat(a?"bg-success":"bg-warning")}),c.a.createElement("div",{className:"widget-content p-0"},c.a.createElement("div",{className:"widget-content-wrapper"},c.a.createElement("div",{className:"widget-content-right flex1"},c.a.createElement("div",{className:"widget-heading"},a?c.a.createElement("del",null,t):t)),c.a.createElement("div",{className:"widget-content-left"}," ",c.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-success",onClick:r}," ",c.a.createElement("i",{className:"fa fa-check"}))," ",c.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-danger",onClick:o}," ",c.a.createElement("i",{className:"fa fa-trash"})," ")," ",c.a.createElement(u.a,{variant:"outline-primary",className:"border-0 btn-transition",onClick:function(){return E(!0)}},c.a.createElement("i",{className:"fa fa-edit"})),c.a.createElement(p.a,{show:m,onHide:b},c.a.createElement(p.a.Header,{closeButton:!0}),c.a.createElement(p.a.Body,null,c.a.createElement(f.a,{placeholder:"\u062a\u063a\u06cc\u06cc\u0631 ".concat(t),onChange:i,"aria-label":"Username","aria-describedby":"basic-addon1"})),c.a.createElement(p.a.Footer,null,c.a.createElement(u.a,{variant:"success",onClick:b},"\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a")))))))},b=function(){var e=Object(n.useContext)(m),t=e.todos,a=e.deleteTodo,o=e.completedTodo,r=e.changeTodo;return c.a.createElement("ul",{className:"list-group list-group-flush p-xs"},t.length>0?t.map((function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement(E,{text:e.text,isCompleted:e.completed,deleted:function(){return a(e.id)},completed:function(){return o(e.id)},changed:function(t){return r(t,e.id)}}))})):c.a.createElement("div",{className:"alert alert-light mt-3 w-75 mx-auto"},c.a.createElement("p",{className:"text-center"},"\u0647\u06cc\u0686 \u06a9\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u0645\u0631\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 !")))},v=function(){var e=Object(n.useContext)(m),t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],r=a[1],i=function(){return r(!1)};return c.a.createElement("div",{className:"w-50 mx-auto fixed-bottom mb-5 p-3 wrapper"},c.a.createElement("form",{className:"form-inline justify-content-center",onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"input-group w-100 hidden-xs hidden-sm"},c.a.createElement("input",{type:"text",className:"form-control rounded",placeholder:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f",value:e.todo,onChange:e.todoInput}),c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("button",{type:"submit",className:"btn bg-transparent fa fa-plus-square text-light",onClick:e.createNewTodo}))),c.a.createElement("div",{className:"input-group-prepend hidden-md hidden-lg"},c.a.createElement("button",{type:"submit",className:"btn bg-transparent fa fa-plus-square text-light",onClick:function(){return r(!0)}})),c.a.createElement(p.a,{show:o,onHide:i},c.a.createElement(p.a.Header,{closeButton:!0}),c.a.createElement(p.a.Body,null,c.a.createElement("input",{type:"text",className:"form-control rounded",placeholder:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f",value:e.todo,onChange:e.todoInput})),c.a.createElement(p.a.Footer,null,c.a.createElement(u.a,{variant:"secondary",onClick:i},"\u0628\u0633\u062a\u0646"),c.a.createElement(u.a,{variant:"primary",onClick:e.createNewTodo,className:"mr-4"},"\u062b\u0628\u062a \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f")))))},g=a(52),h=function(){return c.a.createElement("div",{className:"m-3"},c.a.createElement("ul",{className:"nav nav-pills justify-content-center"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link active",style:{fontFamily:"'Lato', sans-serif"}},"Change To English"))))},N=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),p=u[0],f=u[1],E=Object(g.a)();E.t,E.i18n;return c.a.createElement(m.Provider,{value:{todos:a,todo:p,createNewTodo:function(){var e=Object(r.a)(a),t={id:s()(),text:p,completed:!1};""!==t.text&&" "!==t.text?(e.push(t),o(e),f(""),d.b.success("".concat(t.text," \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u0634\u062f."),{position:"top-right"})):d.b.error("\u0641\u06cc\u0644\u062f \u062e\u0627\u0644\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f!",{position:"top-right"})},todoInput:function(e){f(e.target.value)},changeTodo:function(e,t){var n=a,c=n.findIndex((function(e){return e.id===t})),l=n[c];l.text=e.target.value;var i=Object(r.a)(n);i[c]=l,o(i)},completedTodo:function(e){var t=Object(r.a)(a),n=t.findIndex((function(t){return t.id===e})),c=t[n];c.completed=!c.completed,t[n]=c,o(t)},deleteTodo:function(e){var t=Object(r.a)(a),n=t.filter((function(t){return t.id!==e}));o(n);var c=t.findIndex((function(e){return e!==e.id})),l=t[c];d.b.info("".concat(l.text," \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u067e\u0627\u06a9 \u0634\u062f."),{position:"top-right"})}}},c.a.createElement(h,null),c.a.createElement("div",{className:"d-flex rtl justify-content-center container"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"card-hover-shadow-2x mb-3 card"},c.a.createElement(b,null)))),c.a.createElement(v,null),c.a.createElement(d.a,null))};Object(o.render)(c.a.createElement(N,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.14dcf862.chunk.js.map