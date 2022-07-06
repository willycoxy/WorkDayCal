// var currentTime = document.querySelector('#currentDay')

// displays date above calendar

window.onload = function() {
    document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY");
}

// row colour based on current hour

function setBlockColor() {
    var hour = moment().hours();
    
    $('.time-block').each(function(){       
        var blockHour = parseInt($(this).attr('id'));
        if (blockHour > hour) {
            $(this).addClass("future");
        } else if (blockHour === hour) {
            $(this).addClass("present"); 
        } else{
            $(this).addClass("past");
        }
    })
};
// saves the content from local storage
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
});
// loads the content from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

setBlockColor();

