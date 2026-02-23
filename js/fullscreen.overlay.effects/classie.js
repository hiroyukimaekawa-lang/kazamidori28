/**
 * classList helper (classie.js)
 */
(function() {
  'use strict';
  function classReg(c) {
    return new RegExp('(^|\\s)' + c + '(\\s|$)');
  }
  var hasClass, addClass, removeClass, toggleClass;
  if ('classList' in document.documentElement) {
    hasClass = function(elem, c) { return elem.classList.contains(c); };
    addClass = function(elem, c) { elem.classList.add(c); };
    removeClass = function(elem, c) { elem.classList.remove(c); };
    toggleClass = function(elem, c) { elem.classList.toggle(c); };
  } else {
    hasClass = function(elem, c) { return classReg(c).test(elem.className); };
    addClass = function(elem, c) { if (!hasClass(elem, c)) { elem.className = elem.className + ' ' + c; } };
    removeClass = function(elem, c) { elem.className = elem.className.replace(classReg(c), ' '); };
    toggleClass = function(elem, c) { var fn = hasClass(elem, c) ? removeClass : addClass; fn(elem, c); };
  }
  window.classie = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass
  };
})();
