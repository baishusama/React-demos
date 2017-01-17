/* This file contains some failed js... */

/*--------------------
  try to move the contentEditable div's caret to the end...
--------------------*/

/* Way 1. seem not work...(copy from SO) */

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

/* Way 2. seem not work...(copy from SO) */

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

/*--------------------
  try to 以事件委托方式 添加 blur 函数
--------------------*/

/* Way 1. seem blur is limited to some specific doms (???) && maybe can not bubbling (???) */

/*addEventHandler(todoList, "blur", function(e) {
    console.log("blur happened!");
});*/

/* Way 2. 一开始的时候我还以为 blur 可以进行事件委托，但是 window.onblur 完全是自己的另一回事 */

/*addEventHandler(window, "blur", function(e) {
  console.log("meet window.blur event")
  var target = e.target;
  if (target.nodeName === "DIV") { //&& target.className === "todo"
    console.log("I heard DIV's blur!!")
    this.contentEditable = false;
  } else {
    console.log("At least, I heard!!")
  }
});
window.onblur = function(e) {
  console.log("Happens when (for example) the mouse click in Chrome's Console.");
};*/