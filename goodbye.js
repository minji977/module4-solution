(function (window) {
var bye = {};
var word = "Goodbye";
bye.speak = function(name) {
  console.log(word + " " + name);
}
window.bye = bye;
})(window);
