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
                alert("Bad");
            }
            console.log(day);
        });
        $("#check").click(function (e) {
            function ValidateEmail(inputText) {
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (inputText.value.match(mailformat)) {
                    alert("Valid email address!");
                    document.form1.text1.focus();
                    return true;
                } else {
                    alert("You have entered an invalid email address!");
                    document.form1.text1.focus();
                    return false;
                }
            }
            var elm = $("#inputPerson3").val();
            var email = $("#inputEmail3").val();
            var checkEmail = ValidateEmail(email);
            if (elm < 1 ) {
                alert("you should add person");
                e.preventDefault();
                window.location.replace("./circus_booking.html");

            } else if( checkEmail == false){
                e.preventDefault();
                window.location.replace("./circus_booking.html");
                
            }






        });

    })
)