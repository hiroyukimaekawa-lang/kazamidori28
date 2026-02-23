/* Minimal Modernizr stub for overlay effects */
var Modernizr = window.Modernizr || {};
Modernizr.csstransitions = (function() {
  var style = document.createElement('div').style;
  return 'transition' in style || 'WebkitTransition' in style;
})();
