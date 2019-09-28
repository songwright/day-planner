// Create rows of task hours

let taskRow = $("<div>").attr("class", "input-group row");
let hour = $("<div>").attr("class", "hour").text("9AM");
let input = $("<input>").attr("class", "form-control past");;
let buttonDiv = $("<div>").attr("class", "input-group-append");
let button = $("<button>").attr("class", "saveBtn").attr("type", "button").text("save");
let currentDay = moment().format('dddd, MMMM Do');

$("#currentDay").append(currentDay);
buttonDiv.append(button);
taskRow.append(hour).append(input).append(buttonDiv);
$(".container").append(taskRow);
