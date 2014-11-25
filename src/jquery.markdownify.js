(function($){
  "use strict";

  $.fn.markdownify = function(options) {
    return this.each(function() {
      var $workspace = $(this),
          $input,
          $submit,
          hasRequiredLibraries,
          settings;

      settings = $.extend({
        input: 'textarea',
        submit: 'button',
        wrapper: $('<div class="markdownify">')
      }, options);

      $input = $workspace.find(settings.input);
      if($input.length === 0) {
        throw new Error("Unable to find '" + settings.input + "' in '" + settings.wrapper.attr('class') + "'");
      }

      $submit = $workspace.find(settings.submit);
      if($submit.length === 0) {
        throw new Error("Unable to find '" + settings.submit + "' in '" + settings.wrapper.attr('class') + "'");
      }

      hasRequiredLibraries = function () {
        return typeof marked !== 'undefined' && $.isFunction(marked);
      };

      $submit.click(function() {
        var newChild,
            html;

        if (hasRequiredLibraries()) {
          html = marked($input.val());
        } else {
          throw new Error("The JS library 'marked' is required by this plugin");
        }

        newChild = settings.wrapper.clone().html(html);
        newChild.hide();

        $workspace.fadeOut('fast', function(){
          $workspace.replaceWith(newChild);
          newChild.fadeIn();
        });
      });
    });
  };
}(jQuery));
