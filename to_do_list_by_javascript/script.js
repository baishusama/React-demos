// 解决 IE 和非 IE 浏览器在事件绑定方面的兼容性
function addEventHandler(elem, event, handler) {
  if (elem.addEventHandler) {
    elem.addEventHandler(event, handler, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + event, handler);
  } else {
    elem["on" + event] = handler;
  }
}

// 用于偷懒的 $ 方法
function $(selector) {
  var elem = null;
  if (selector.indexOf('#') === 0) {
    elem = document.getElementById(selector.slice(1));
  } else if (selector.indexOf('.') === 0) {
    elem = document.getElementsByClassName(selector.slice(1));
  }
  return elem;
}

// DOM
var todoList = $("#todo-list");
var divInput = $(".todo");

/*addEventHandler(todoList, "click", function(e) {
  if (e.target.nodeName === "DIV") {
    e.target.blur();
    return false; //event.preventDefault();
  }
});*/
addEventHandler(todoList, "dblclick", function(e) {
  if (e.target.nodeName === "DIV") {
    console.log("dblclicked!~")
    e.target.contentEditable = "true";
    e.target.focus();
  }
});
addEventHandler(todoList, "blur", function(e) {
  /*  if (e.target.nodeName === "DIV") {
      console.log("dblclicked!~")
      e.target.contentEditable = "true";
      e.target.focus();
    }*/
  console.log("blur happened!");
});