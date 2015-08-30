(function ($) {
    $.fn.svg_datalayer = function (opt) {
        var $mainContainer = '';

        function generate_title() {
            var self = this;
            if (!opt.title) {
                return;
            }
         var foo = $("<div/>", {
             'class': 'svg-datalayer-title',
             text: opt.title
         });   
         return foo;
        }
        
        function load_image(){
            if(!opt.svg_file){
                return;
            }
            
            return $.load(opt.svg_file);
            
        }
        
        
        var t = generate_title();
        var img = load_image();
        console.log(img);
        
            $(this).html(t);
    };
}(jQuery));
