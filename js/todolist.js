$(document).ready(function() {
    var arraythingsdone = [];
    var i = 0;

    $("#add").click(function(e) {
        if ($("#writetodo").val() != '') {
            var arraythingsdone = $('input:text').map(function() {
                return $("#writetodo").val();
            });
            $.each(arraythingsdone, function(index, value) {
                    $("#donethings").prepend('<li>' + value +
                        '</li>');
                })
                /*
                            $("#donethings").prepend('<li>',
                                $("#writetodo").val(), '</li>');

                                 < input type='button' class = 'fa fa-check-circle'
                                    style = 'font-size:48px;color:red'
                                    id = 'done' /> < /i>
                */
        }
    });
})