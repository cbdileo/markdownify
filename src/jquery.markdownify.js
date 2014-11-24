(function($){
  "use strict";

  $.fn.markdownify = function(options) {
    return this.each(function() {
      var workspace = $(this),
      hasRequiredLibraries,
      settings;

      settings = $.extend({
        input: workspace.find('textarea'),
        submit: workspace.find('button'),
        wrapper: $('<div class="markdownify">')
      }, options);

      hasRequiredLibraries = function () {
        return typeof marked !== 'undefined' && $.isFunction(marked);
      };

      settings.submit.click(function() {
        var newChild,
        html;

        if (hasRequiredLibraries()) {
          html = marked(settings.input.val());
        }
        else {
          throw new Error("The JS library 'marked' is required by this plugin");
        }

        newChild = settings.wrapper.clone().html(html);
        newChild.hide();
        workspace.fadeOut('fast', function(){
          workspace.replaceWith(newChild);
          newChild.fadeIn();
        });
      });
    });
  };
}(jQuery));
