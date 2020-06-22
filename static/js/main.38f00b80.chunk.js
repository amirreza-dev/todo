(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),r=a(16),l=a(15),i=a(21),s=a.n(i),d=a(9),u=Object(n.createContext)({todos:[],todo:"",createNewTodo:function(){},todoInput:function(){},changeTodo:function(){},completedTodo:function(){},deleteTodo:function(){}}),m=a(44),p=a(43),f=a(45),b=function(e){var t=e.text,a=e.isCompleted,o=e.deleted,r=e.completed,i=e.changed,s=Object(n.useState)(!1),u=Object(l.a)(s,2),b=u[0],E=u[1];return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"todo-indicator ".concat(a?"bg-success":"bg-warning")}),c.a.createElement("div",{className:"widget-content p-0"},c.a.createElement("div",{className:"widget-content-wrapper"},c.a.createElement("div",{className:"widget-content-right flex1"},c.a.createElement("div",{className:"widget-heading"},a?c.a.createElement("del",null,t):t)),c.a.createElement("div",{className:"widget-content-left"}," ",c.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-success",onClick:r}," ",c.a.createElement("i",{className:"fa fa-check"}))," ",c.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-danger",onClick:o}," ",c.a.createElement("i",{className:"fa fa-trash"})," ")," ",c.a.createElement(m.a,{variant:"outline-primary",className:"border-0 btn-transition",onClick:function(){return E(!0)}},c.a.createElement("i",{className:"fa fa-edit"})),c.a.createElement(p.a,{show:b,onHide:function(){return E(!1)}},c.a.createElement(p.a.Header,{closeButton:!0}),c.a.createElement(p.a.Body,null,c.a.createElement(f.a,{placeholder:"\u062a\u063a\u06cc\u06cc\u0631 ".concat(t),onChange:i,"aria-label":"Username","aria-describedby":"basic-addon1"})),c.a.createElement(p.a.Footer,null,c.a.createElement(m.a,{variant:"success",type:"submit",onClick:function(){d.b.success("yes",{position:"top-right"})}},"\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a")))))),c.a.createElement(d.a,null))},E=function(){var e=Object(n.useContext)(u),t=e.todos,a=e.deleteTodo,o=e.completedTodo,r=e.changeTodo;return c.a.createElement("ul",{className:"list-group list-group-flush"},t.length>0?t.map((function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement(b,{text:e.text,isCompleted:e.completed,deleted:function(){return a(e.id)},completed:function(){return o(e.id)},changed:function(t){return r(t,e.id)}}))})):c.a.createElement("div",{className:"alert alert-light mt-3 w-75 mx-auto"},c.a.createElement("p",{className:"text-center"},"\u0647\u06cc\u0686 \u06a9\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u0645\u0631\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 !")))},g=function(){var e=Object(n.useContext)(u);return c.a.createElement("div",{className:"w-50 mx-auto fixed-bottom mb-5 p-3 wrapper"},c.a.createElement("form",{className:"form-inline justify-content-center",onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"input-group w-100"},c.a.createElement("input",{type:"text",className:"form-control rounded",placeholder:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f",value:e.todo,onChange:e.todoInput}),c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("button",{type:"submit",className:"btn bg-transparent fa fa-plus-square text-light",onClick:e.createNewTodo})))))},v=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),p=m[0],f=m[1];return c.a.createElement(u.Provider,{value:{todos:a,todo:p,createNewTodo:function(){var e=Object(r.a)(a),t={id:s()(),text:p,completed:!1};""!==t.text&&" "!==t.text?(e.push(t),o(e),f(""),d.b.success("".concat(t.text," \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u0634\u062f."),{position:"top-right"})):d.b.error("\u0641\u06cc\u0644\u062f \u062e\u0627\u0644\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f!",{position:"top-right"})},todoInput:function(e){f(e.target.value)},changeTodo:function(e,t){var n=a,c=n.findIndex((function(e){return e.id===t})),l=n[c];l.text=e.target.value;var i=Object(r.a)(n);i[c]=l,o(i)},completedTodo:function(e){var t=Object(r.a)(a),n=t.findIndex((function(t){return t.id===e})),c=t[n];c.completed=!c.completed,t[n]=c,o(t)},deleteTodo:function(e){var t=Object(r.a)(a),n=t.filter((function(t){return t.id!==e}));o(n);var c=t.findIndex((function(e){return e!==e.id})),l=t[c];d.b.info("".concat(l.text," \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u067e\u0627\u06a9 \u0634\u062f."),{position:"top-right"})}}},c.a.createElement("div",{className:"d-flex rtl justify-content-center container"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"card-hover-shadow-2x mb-3 card"},c.a.createElement(E,null)))),c.a.createElement(g,null),c.a.createElement(d.a,null))};Object(o.render)(c.a.createElement(v,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.38f00b80.chunk.js.map