let currentDay = moment().format('dddd, MMMM Do');
let timeBlocks = [
  {hour: "9AM", time: 9},
  {hour: "10AM", time: 10},
  {hour: "11AM", time: 11},
  {hour: "12PM", time: 12},
  {hour: "1PM", time: 13},
  {hour: "2PM", time: 14},
  {hour: "3PM", time: 15},
  {hour: "4PM", time: 16},
  {hour: "5PM", time: 17}
];
let tasks = [];

// Put today's date in the header.
$("#currentDay").append(currentDay);

function renderTimeBlocks() {
  // Clear time blocks element
  $(".container").empty();

  // Render a new time block for each time.
  for (let i = 0; i < timeBlocks.length; i++) {
    let taskContent = tasks[i];
    let hourName = timeBlocks[i].hour;
    let presentHour = parseInt(moment().format("HH"));
    let thisHour = timeBlocks[i].time;
    let inputElStyle = "";

    if (thisHour < presentHour) {
      // Assign past style to textarea
      inputElStyle = "past";
    } else {
      // Assign future style to textarea
      inputElStyle = "future";
    }

    if (thisHour === presentHour) {
      inputElStyle = "present";
    }

    let timeBlockEl = $("<div>").attr("class", "input-group row");
    let hourEl = $("<div>").attr("class", "hour").text(hourName);
    let inputEl = $("<textarea>").attr("class", `form-control textarea ${inputElStyle}`).attr("type", "text").text(taskContent);
    let buttonEl = $("<div>").attr("class", "input-group-append");
    let button = $("<button>").attr("class", "saveBtn").attr("type", "button").text("save");

    // Put a time block in the container
    $(".container").append(timeBlockEl);

    // Put the button in the button div.
    buttonEl.append(button);

    // Put the time block elements in a row.
    timeBlockEl.append(hourEl).append(inputEl).append(buttonEl);
  }
}

// function init() {
  // Get stored timeBlocks from localStorage
  // Parse the JSON string to an object
//   let storedtimeBlocks = JSON.parse(localStorage.getItem("timeBlocks"));
// }

function storeTasks() {
  // Stringify and set "tasks" key in localStorage to todos array
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

renderTimeBlocks();

// Automatically update time blocks
setInterval(function(){
  presentHour = parseInt(moment().format("HH"));
  renderTimeBlocks();
}, 60000);