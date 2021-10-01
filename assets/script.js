

//display the current day at the top of the page
var currentDay = moment().format("dddd[,] MMMM Do");
$("#currentDay").text(currentDay);

//this sets the current hour
var currentHour = moment().format("k"); //k sets to military time
console.log(currentHour);
//var for the texArea
var textArea = $(".description")
// grabing each text area with class description box, looping through them, and console logging "this.id" which refers to each item that is being looped through
$.each(textArea, function() {
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

//add variable for the save button
var saveBtn = $(".saveBtn")
//add an event listener for the save button
saveBtn.on("click", function() {
//save items into local storage   
var storedHour = $(this).siblings(".description").attr("id")
console.log(storedHour)
    var storedText = $(this).siblings(".description").val()
    localStorage.setItem(storedHour, storedText)
})

//get items from local storage on page refresh
//text area 9
console.log(localStorage.getItem(9))
var val9 = localStorage.getItem(9)
$("#9").val(val9) 
//text area 10, 11, 12...
var val10 = localStorage.getItem(10)
$("#10").val(val10) 

var val11 = localStorage.getItem(11)
$("#11").val(val11) 

var val12 = localStorage.getItem(12)
$("#12").val(val12) 

var val13 = localStorage.getItem(13)
$("#13").val(val13) 

var val14 = localStorage.getItem(14)
$("#14").val(val14) 

var val15 = localStorage.getItem(15)
$("#15").val(val15) 

var val16 = localStorage.getItem(16)
$("#16").val(val16) 

var val17 = localStorage.getItem(17)
$("#17").val(val17) 

