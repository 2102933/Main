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
       

    })
)