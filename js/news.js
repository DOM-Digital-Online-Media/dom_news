/**
 * @file
 * Add template images.
 */

(function ($) {

  Drupal.behaviors.websiteNewsTemplateImages = {
    attach: function (context, settings) {
      var images = drupalSettings.newsImages;
      $('form.node-form .field--name-template input').once().each(function (i) {
        var name = $(this).attr('value');
        if (images[name]) {
          $(this).before('<img class="template-news-images" src="' + images[name] + '" />');
        }
      });
    }
  };

})(jQuery);