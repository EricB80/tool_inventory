$('g').on('click', function () {
    var i = document.getElementById('toolboard');
    var svgDOM = i.contentDocument;

    alert('clicky');
});

$('#blah').click(function () {
    console.log('ok???');
    $('#toolboard > svg[id]').each(function () {
        var id = $(this).attr('id');
        console.log(id);
    });
});
