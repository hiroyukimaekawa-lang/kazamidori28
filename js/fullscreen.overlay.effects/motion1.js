/**
 * Overlay open/close (motion1)
 */
(function() {
  'use strict';
  var trigger = document.getElementById('trigger-overlay');
  var overlay = document.querySelector('.overlay-scale');
  var header = document.querySelector('header');

  function toggleOverlay() {
    if (classie.hasClass(overlay, 'open')) {
      classie.removeClass(overlay, 'open');
      classie.removeClass(header, 'open');
      document.body.style.overflow = '';
    } else {
      classie.addClass(overlay, 'open');
      classie.addClass(header, 'open');
      document.body.style.overflow = 'hidden';
    }
  }

  if (trigger && overlay && header && typeof classie !== 'undefined') {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      toggleOverlay();
    });
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        toggleOverlay();
      }
    });
  }
})();
