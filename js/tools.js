/*******************************************************************************
 * Configuration Options
 * This should be adaptable for most SVG files from Adobe Illustrator
 * You can specify the path tag type to make clickable and highlight
 * 
 * 
 *******************************************************************************/
var slides = ['toolboard.svg', 'toolboard2.svg'];
var image_path = '../images/';
var file_ext = 'svg';
var highlight_class = 'missing';
var image_holder_id = '#image_box';
var path_type = 'g';
var highlight_color = '#C00000';
var nohighlight_color = '#000000';


//replace with ajax call to DB
var missed = ['wrench_5', 'wrench_11', 'needle_nosed'];

/*
 * Checks to see if the path ID is in the array
 * @param {svg path} svg_obj
 * @para {JSON Object} JSON array
 * @boolean
 */

function missing(svg_obj, arr) {
    if ($.inArray(svg_obj, arr) >= 0) {
        return true;
    } else {
        return false;
    }
}

/*
 * Compiles visual list of highlighted objects
 * @param {type} JSON Array
 * @string (HTML)
 */
function missing_list(list) {
    var l = "<ul class = 'missing'></ul>";
    $(list).each(function (index, val) {
        l += ('<li>' + val + '</li>');
    });
    console.log(l);
    return l;
}

var ml = missing_list(missed);
/*
 * Load the image into the object listed above
 * @param {type} image_name
 * @returns {undefined} Loads the SVG image into specified object
 */

function add_image_boxes(list) {
    $(list).each(function (idx, el) {
        var box_name = 'img_box_' + idx;
        $(image_holder_id).append("<div id='" + box_name + "' class='slider_box'></div>");
        load_image(el, box_name);
        if (idx > 0) {
            var prev = idx - 1;
            var prev_slide = '#img_box_' + prev;
            var prev_posit = $(prev_slide).position();
            var next_place = prev_posit.left + (prev_posit.left * 2);
//            console.log(next_place);
            $('#' + box_name).css({left: next_place});
        }
    });
}

function load_image(image_name, box_name) {
    $.ajax({
        url: image_name,
        type: 'GET',
        dataType: 'text',
        success: function (svg) {
            $('#' + box_name).append(svg);
            $(path_type).each(function () {
                var obj = $(this).attr('id');
                if (missing(obj, missed)) {
                    $(this).css({fill: '#C00000'});
                    $(this).addClass(highlight_class);
                }
            });
            //make paths clickable and change colors. attr inherits from SVG, so null if not changed in DOM. force upper for IE
            $(path_type).click(function (e) {
                e.stopImmediatePropagation();
                console.log($(this).attr('fill'));
                $(this).attr('fill', function (index, attr) {
                    if (!attr) {
                        return attr == highlight_color.toUpperCase() ? nohighlight_color : highlight_color;
                    } else {
                        return attr.toUpperCase() == highlight_color.toUpperCase() ? nohighlight_color : highlight_color;
                    }
                });
            });
        },
        error: function (jqxhr, status, error) {
            console.log('error: ' + jqhxr + ' ' + status + ' ' + error);
            return false;
        }
    });
}


/*******************************************************************************
 * Animation Settings
 * Requires JQuery UI position utility. Based on the image cycler demo from the
 * Position Utility demo page.
 *******************************************************************************/

//function left(element, using) {
//    element.position({
//        my: "right middle",
//        at: "left+25 middle",
//        of: image_holder_id,
//        collision: "none",
//        using: using
//    });
//}
//
//function right(element, using) {
//    element.position({
//        my: "left middle",
//        at: "right-25 middle",
//        of: image_holder_id,
//        collision: "none",
//        using: using
//    });
//}
//
//function center(element, using) {
//    element.position({
//        my: "center middle",
//        at: "center middle",
//        of: image_holder_id,
//        using: using
//    });
//}
//
//function slide(to) {
//    $(this).stop(true, false).animate(to);
//}
//
//function next(event) {
//    event.preventDefault();
//    center($("svg"), slide);
//    left($("svg)"), slide);
//    right($("svg").appendTo(image_holder_id));
//}
//function previous(event) {
//    event.preventDefault();
//    console.log('prev');
//    center($("svg"), slide);
//    right($("svg"), slide);
//    left($("svg").prependTo(image_holder_id));
//}
//
//$('#right_button').click(next);
//$('#left_button').click(previous);
