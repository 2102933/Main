// const dataInput = document.querySelector('#datepicker');
$(document).ready(
    $(function () {
        $('#datepicker').datepicker();

        $("#button1").click(function (e) {

            var my_date = $("#datepicker").datepicker("getDate");
            var day = moment(my_date).format("ddd");
            var numDay = moment(my_date).format("DD");
            if (day == 'Sat' || day == 'Fri') {
                $("#dayYouChoose").text("");
                $("#dayYouChoose").append(day + '_' + numDay);
            } else {
                alert("No Circus Show in this day");
                e.preventDefault();
                window.location.replace("./circus_booking.html");

            }
            console.log(day);
        });

        $("form").submit(function (e) {
            var em = $("#dayYouChoose").text();
            var email = $("#inputEmail3").val();
            var phone = $("#inputPhone3").val();
            var name = $("#nputName3").val();
            var person = $("#inputPerson3").val();


            if (!em) {
                e.stopPropagation();
                e.preventDefault();
                alert("You Not choose any day ");
                // window.location.replace("./circus_booking.html");
            }
            if (!email) {
                e.stopPropagation();
                e.preventDefault();
                alert("You Not write any email ");
                
            }
            if (!phone) {
                e.stopPropagation();
                e.preventDefault();
                alert("You Not write any phone number ");
                
            }
            if (!name) {
                e.stopPropagation();
                e.preventDefault();
                alert("You Not write any name ");
                
            }
            if (!person) {
                e.stopPropagation();
                e.preventDefault();
                alert("You Not write number for person ");
                
            }
        });


    })

)