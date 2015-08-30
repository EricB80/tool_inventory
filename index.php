<!DOCTYPE html>
<html>
    <head>
        <title>Press Tool Inventory</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <link rel="stylesheet" href="css/tools.css"/>
        <link rel="stylesheet" href="css/bootstrap.css"/>
        <link rel="stylesheet" href="css/bootstrap-theme.min.css"/>
    <body>
        <div id='title_bar'>
            <h1>Press #1 - <span id="box_number">Toolbox 1</span></h1>
            <button type="button" id="checklist">Checklist Version</button>
        </div>
        <div id="popup"></div>
        <div id="wrapper">
            <div class="ctrl right" id="right_ctl"><img src="images/right.png" alt="right" id="right_button"></div>
            <div id="image_box">
            </div>
            <div id='miss_list' >foo</div>
            <div class="ctrl left" id="left_ctl"><img src="images/left.png" alt="left" id="left_button"></div>
        </div>
        <script type='text/javascript' src="js/tools.js"></script>
        <script type='text/javascript'>
            $(document).ready(function () {
                add_image_boxes($slides);
                $('#left_button').click(function () {
                    left();
                });
                $('#right_button').click(function () {
                    right();
                });
                $('#checklist').click(function () {
                    full_list();
                });
            });
        </script>
    </body>
</html>
