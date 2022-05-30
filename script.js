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

    let pm13 = localStorage.getItem("pm13");
    $("#pm13 .description").val(pm13);

    let pm14 = localStorage.getItem("pm14");
    $("#pm14 .description").val(pm14);

    let pm15 = localStorage.getItem("pm15");
    $("#pm15 .description").val(pm15);

    let pm16 = localStorage.getItem("pm16");
    $("#pm16 .description").val(pm16);

    let pm17 = localStorage.getItem("pm17");
    $("#pm17 .description").val(pm17);

    let pm18 = localStorage.getItem("pm18");
    $("#pm18 .description").val(pm18);

    let pm19 = localStorage.getItem("pm19");
    $("#pm19 .description").val(pm19);

    let pm20 = localStorage.getItem("pm20");
    $("#pm20 .description").val(pm20);

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    let time = (moment().format("HH:mm"));
    $("#time").text(time);
    

    //function to update the time
    function timeUpdater() {

        let currentTime = parseInt(moment().format("HH"));
        console.log(currentTime);

        $(".time-block").each(function() {
            let currentTimeBlock = $(this).children().attr("id");
            //let currentTimeBlock = parseInt($(this).attr("id").split("-")[1]);


            if (currentTimeBlock < currentTime) {
                //hour rows before the current hour will have the class of "past"
                $(this).removeClass("present future").addClass("past");
                //if the current hour is the same as that of calendar, the hour row will have the class of "present"
            } else if (currentTimeBlock == currentTime) {
                $(this).removeClass("past future").addClass("present");
            } else {
                $(this).removeClass("past present").addClass("future");
            }
        });
    }

    //call the timeUpdater function
    timeUpdater();

    setInterval(function() {
        timeUpdater();
    }, 15000);

});
