

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
    console.log("hi")
//when the save button is clicked, the text is stored to local storage
var storedText = $(this).siblings(".description").val()
localStorage.setItem("storedText", storedText)
})

//get item from local storage when page is refreshed
var getText = localStorage.getItem("storedText")
console.log(getText)
