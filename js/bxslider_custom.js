/**
 * BxSlider initialization
 */
(function() {
  'use strict';
  if (typeof jQuery === 'undefined' || !jQuery.fn.bxSlider) return;
  jQuery(document).ready(function() {
    var $slider = jQuery('#slider');
    if ($slider.length) {
      $slider.bxSlider({
        mode: 'fade',
        auto: true,
        pause: 5000,
        speed: 800,
        pager: true,
        controls: false,
        infiniteLoop: true,
        adaptiveHeight: false
      });
    }
  });
})();
