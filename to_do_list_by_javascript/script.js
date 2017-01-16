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
var divInputs = $(".todo");

/*addEventHandler(todoList, "click", function(e) {
  if (e.target.nodeName === "DIV") {
    e.target.blur();
    return false; //event.preventDefault();
  }
});*/
addEventHandler(todoList, "dblclick", function(e) {
    var divTar = e.target;
    if (divTar.nodeName === "DIV") {
        console.log("dblclicked!~")
        divTar.contentEditable = "true";
        var originValue = divTar.innerText;
        // divTar.innerText = '';
        divTar.focus();
        // divTar.innerText = originValue;
        var range = document.createRange();

        /* Way 1.  */
        // var caret = 1;
        // range.setStart(divTar, caret);
        // range.setEnd(divTar, caret);

        /* Way 2.  */
        range.selectNodeContents(divTar);
        range.collapse(false);

        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
    e.preventDefault();
});
/*addEventHandler(todoList, "blur", function(e) {
    console.log("blur happened!");
});*/
for (var i = 0; i < divInputs.length; i++) {
    var div = divInputs[i];
    addEventHandler(div, "blur", function(e) {
        this.contentEditable = false;
    });
}
/*for (var i = 0; i < divInputs.length; i++) {
    var div = divInputs[i];
    addEventHandler(div, "focus", function(e) {
        setTimeout(function(div) {
            var strLen = div.innerText.length;
            return function() {
                console.log(div.setSelectionRange);
                if (div.setSelectionRange) {
                    div.setSelectionRange(strLength, strLength);
                } else {
                    var originValue = div.innerText;
                    div.innerText = '';
                    // div.focus();
                    div.innerText = originValue;
                }
            };
        }(this), 0);
    });
}
*/
/*divInputs.forEach(function() {
    var self = this;
    addEventHandler(self, "focus", function(e) {
        setTimeout(function(div) {
            var strLen = div.innerText.length;
            return function() {
                if (div.setSelectionRange) {
                    div.setSelectionRange(strLength, strLength);
                } else {
                    var originValue = div.innerText;
                    div.innerText = '';
                    // div.focus();
                    div.innerText = originValue;
                }
            };
        }(self), 0);
    });
});
*/
