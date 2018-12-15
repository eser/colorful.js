let a = {};

a.changeColor = function() {
  document.body.style.backgroundColor = "red";
};
a.changeBgColor = function() {
  return 5;
};

export { a as default };
