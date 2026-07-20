/*
 *   File    : jquery.imgctl-1.0.0.js
 *   Author  : Haozhe Xie <cshzxie@gmail.com>
 *   Desc    : The jQuery-based plugin used to display image sequences.
 *   Example : https://shangchenzhou.com/projects/CodeFormer/
 */
(function ($) {
    $.fn.imgctl = function (options) {
      var options = $.extend(
        {
            loadingImg: "./assets/img/loading.gif",
            loadingLeft: "48%",
            loadingTop: "48%",
            min: 0,
            max: 100,
            val: 0,
            step: 1
        },
        options
      );
      
      return this.each(function () {
        let container = $(this),
            nFrames = (options.max - options.min + 1) / options.step,
            nFramesLoaded = 0;
        // Set up the user inferface
        container.append("<div class='form-group'></div>");
        let imgCover = container.find("img");
        // Set up loading
        container.prepend("<img src='" + options.loadingImg + 
                             "' class='loading' style='top:" +
                             options.loadingTop + "; left:" +
                             options.loadingLeft + "'>");
        container.addClass("loading");
        // Preload images
        for (let i = options.min; i <= options.max; ++ i) {
            let imgSeq = i.toString().padStart(2, "0"),
                imgUrl = imgCover.attr("src").replace(/[0-9]+\.jpg/i, imgSeq + ".jpg"),
                img = $("<img>", {class: "frame", src: imgUrl});
    
            img.on("load", function() {
                if (++ nFramesLoaded == nFrames) {
                    let images = container.find("img.frame"),
                        imgIdx = Math.round(options.val / options.step),
                        formGroup = container.find(".form-group");

                    imgCover.remove();
                    $(images[imgIdx]).addClass("active");
                    container.removeClass("loading");
                    formGroup.append("<input type='range' class='form-control-range'" + 
                        "min='" + options.min + "' " +
                        "max='" + options.max + "' " +
                        "value='" + options.val + "' " +
                        "step='" + options.step + "'>"
                    );
                    // Set up the event handler
                    container.on("input", "input[type=range]", function() {
                        let value = $(this).val(),
                            imgIdx = Math.round(value / options.step);
                        $("img", container).removeClass("active");
                        $(images[imgIdx]).addClass("active");
                    });
                }
          });
          container.append(img);
        }
      });
    };
  })(jQuery);