$(document).ready(function() {
    var arraythingsdone = [];
    var i = 0;
    var regex = [0 - 9];

    $("#add").click(function(e) {
        if ($("#writetodo").val() != '') {
            console.log($("#writetodo").val().charAt(0));

            var arraythingsdone = $('input:text').map(function() {
                return $("#writetodo").val();
            });
            if ($("#writetodo").val().charAt(0).match("[0-9]")) {
                console.log("empieza por numero");
                console.log($("#writetodo").val().charAt(0).match(regex));

                alert('En la lista no pueden haber elementos que empiezen por numero');

            } else {
                $.each(arraythingsdone, function(index, value) {
                    $("#donethings").prepend('<li>' + value +
                        '</li>');
                    $("#writetodo").val('');
                });

            }

            /*
                            $("#donethings").prepend('<li>',
                                $("#writetodo").val(), '</li>');

                                 < input type='button' class = 'fa fa-check-circle'
                                    style = 'font-size:48px;color:red'
                                    id = 'done' /> < /i>
                                    if ($("#writetodo").val().charAt(0).test(regex)) {
                console.log($("#writetodo").val().charAt(0));
                alert('En la lista no pueden haber elementos que empiezen por numero');

            }
                */

        } else if ($("#writetodo").val() == '') {
            alert('En la lista no puede haber un elemento en blanco');

        }

    });
})