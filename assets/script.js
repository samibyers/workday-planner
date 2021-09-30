//display the current day at the top of the page
var currentDay = moment().format("dddd[,] MMMM Do");
$("#currentDay").text(currentDay);

//this sets the current hour
var currentHour = moment().format("k"); //k sets to military time
console.log(currentHour);
//there is already a class for each row
var row = $(".row")

// grabing each text area with class description box looping through them and console logging "this" which refers ti each item that is being looped through
$.each($(".description"), function() {
    console.log(this.id)
    if (parseInt(this.id) < currentHour) {
        //make the description area .past
        $("#" + this.id).addClass("past")
    } else if (parseInt(this.id)  == currentHour) {
        //make the description area .present
        $("#" + this.id).addClass("present")
    } else {
        //make the description area .future
        $("#" + this.id).addClass("future")
    }
})




