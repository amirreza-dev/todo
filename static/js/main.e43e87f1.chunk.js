(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a(16),l=a(10),i=a(21),d=a.n(i),s=a(15),u=Object(n.createContext)({todos:[],todo:"",createNewTodo:function(){},todoInput:function(){},changeTodo:function(){},completedTodo:function(){},deleteTodo:function(){}}),m=a(44),p=a(43),f=a(45),b=function(e){var t=e.text,a=e.isCompleted,c=e.deleted,r=e.completed,i=e.changed,d=Object(n.useState)(!1),s=Object(l.a)(d,2),u=s[0],b=s[1],E=function(){return b(!1)};return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"todo-indicator ".concat(a?"bg-success":"bg-warning")}),o.a.createElement("div",{className:"widget-content p-0"},o.a.createElement("div",{className:"widget-content-wrapper"},o.a.createElement("div",{className:"widget-content-right flex1"},o.a.createElement("div",{className:"widget-heading"},a?o.a.createElement("del",null,t):t)),o.a.createElement("div",{className:"widget-content-left"}," ",o.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-success",onClick:r}," ",o.a.createElement("i",{className:"fa fa-check"}))," ",o.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-danger",onClick:c}," ",o.a.createElement("i",{className:"fa fa-trash"})," ")," ",o.a.createElement(m.a,{variant:"outline-primary",className:"border-0 btn-transition",onClick:function(){return b(!0)}},o.a.createElement("i",{className:"fa fa-edit"})),o.a.createElement(p.a,{show:u,onHide:E},o.a.createElement(p.a.Header,{closeButton:!0}),o.a.createElement(p.a.Body,null,o.a.createElement(f.a,{placeholder:"\u062a\u063a\u06cc\u06cc\u0631 ".concat(t),onChange:i,"aria-label":"Username","aria-describedby":"basic-addon1"})),o.a.createElement(p.a.Footer,null,o.a.createElement(m.a,{variant:"success",onClick:E},"\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a")))))))},E=function(){var e=Object(n.useContext)(u),t=e.todos,a=e.deleteTodo,c=e.completedTodo,r=e.changeTodo;return o.a.createElement("ul",{className:"list-group list-group-flush p-xs"},t.length>0?t.map((function(e){return o.a.createElement("li",{key:e.id,className:"list-group-item"},o.a.createElement(b,{text:e.text,isCompleted:e.completed,deleted:function(){return a(e.id)},completed:function(){return c(e.id)},changed:function(t){return r(t,e.id)}}))})):o.a.createElement("div",{className:"alert alert-light mt-3 w-75 mx-auto"},o.a.createElement("p",{className:"text-center"},"\u0647\u06cc\u0686 \u06a9\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u0645\u0631\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 !")))},g=function(){var e=Object(n.useContext)(u),t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],r=a[1],i=function(){return r(!1)};return o.a.createElement("div",{className:"w-50 mx-auto fixed-bottom mb-5 p-3 wrapper"},o.a.createElement("form",{className:"form-inline justify-content-center",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"input-group w-100 hidden-xs hidden-sm"},o.a.createElement("input",{type:"text",className:"form-control rounded",placeholder:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f",value:e.todo,onChange:e.todoInput}),o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("button",{type:"submit",className:"btn bg-transparent fa fa-plus-square text-light",onClick:e.createNewTodo}))),o.a.createElement("div",{className:"input-group-prepend hidden-md hidden-lg"},o.a.createElement("button",{type:"submit",className:"btn bg-transparent fa fa-plus-square text-light",onClick:function(){return r(!0)}})),o.a.createElement(p.a,{show:c,onHide:i},o.a.createElement(p.a.Header,{closeButton:!0}),o.a.createElement(p.a.Body,null,o.a.createElement("input",{type:"text",className:"form-control rounded",placeholder:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f",value:e.todo,onChange:e.todoInput})),o.a.createElement(p.a.Footer,null,o.a.createElement(m.a,{variant:"secondary",onClick:i},"\u0628\u0633\u062a\u0646"),o.a.createElement(m.a,{variant:"primary",onClick:e.createNewTodo,className:"mr-4"},"\u062b\u0628\u062a \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f")))))},v=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),p=m[0],f=m[1];return o.a.createElement(u.Provider,{value:{todos:a,todo:p,createNewTodo:function(){var e=Object(r.a)(a),t={id:d()(),text:p,completed:!1};""!==t.text&&" "!==t.text?(e.push(t),c(e),f(""),s.b.success("".concat(t.text," \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u0634\u062f."),{position:"top-right"})):s.b.error("\u0641\u06cc\u0644\u062f \u062e\u0627\u0644\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f!",{position:"top-right"})},todoInput:function(e){f(e.target.value)},changeTodo:function(e,t){var n=a,o=n.findIndex((function(e){return e.id===t})),l=n[o];l.text=e.target.value;var i=Object(r.a)(n);i[o]=l,c(i)},completedTodo:function(e){var t=Object(r.a)(a),n=t.findIndex((function(t){return t.id===e})),o=t[n];o.completed=!o.completed,t[n]=o,c(t)},deleteTodo:function(e){var t=Object(r.a)(a),n=t.filter((function(t){return t.id!==e}));c(n);var o=t.findIndex((function(e){return e!==e.id})),l=t[o];s.b.info("".concat(l.getTodos," \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u067e\u0627\u06a9 \u0634\u062f."),{position:"top-right"})}}},o.a.createElement("div",{className:"d-flex rtl justify-content-center container"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card-hover-shadow-2x mb-3 card"},o.a.createElement(E,null)))),o.a.createElement(g,null),o.a.createElement(s.a,null))};Object(c.render)(o.a.createElement(v,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e43e87f1.chunk.js.map