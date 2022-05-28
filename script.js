$(document).ready(function() { 
    //save buttons save text input into local storage with their time id
    $(".saveBtn").on("click", function () {

        let value = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        console.log('value:', value);
        console.log('time:', time);

        localStorage.setItem(time, value);
    });

    //putting saved input into the associated hour row
    let am6 = localStorage.getItem("am6");
    $("#am6 .description").val(am6);

    let am7 = localStorage.getItem("am7");
    $("#am7 .description").val(am7);

    let am8 = localStorage.getItem("am8");
    $("#am8 .description").val(am8);

    let am9 = localStorage.getItem("am9");
    $("#am9 .description").val(am9);

    let am10 = localStorage.getItem("am10");
    $("#am10 .description").val(am10);

    let am11 = localStorage.getItem("am11");
    $("#am11 .description").val(am11);
    
    let pm12 = localStorage.getItem("pm12");
    $("#pm12 .description").val(pm12);

    let pm1 = localStorage.getItem("pm1");
    $("#pm1 .description").val(pm1);

    let pm2 = localStorage.getItem("pm2");
    $("#pm2 .description").val(pm2);

    let pm3 = localStorage.getItem("pm3");
    $("#pm3 .description").val(pm3);

    let pm4 = localStorage.getItem("pm4");
    $("#pm4 .description").val(pm4);

    let pm5 = localStorage.getItem("pm5");
    $("#pm5 .description").val(pm5);

    let pm6 = localStorage.getItem("pm6");
    $("#pm6 .description").val(pm6);

    let pm7 = localStorage.getItem("pm7");
    $("#pm7 .description").val(pm7);

    let pm8 = localStorage.getItem("pm8");
    $("#pm8 .description").val(pm8);
});
