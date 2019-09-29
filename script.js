let currentDay = moment().format('dddd, MMMM Do');
let tasks = [
  {hour: "9AM", task: "", time: 9},
  {hour: "10AM", task: "", time: 10},
  {hour: "11AM", task: "", time: 11},
  {hour: "12PM", task: "", time: 12},
  {hour: "1PM", task: "", time: 13},
  {hour: "2PM", task: "", time: 14},
  {hour: "3PM", task: "", time: 15},
  {hour: "4PM", task: "", time: 16},
  {hour: "5PM", task: "", time: 17}
];

// Put today's date in the header.
$("#currentDay").append(currentDay);

function renderTimeBlocks() {
  // Clear time blocks element
  $(".container").empty();

  // Render a new time block for each time.
  for (let i = 0; i < tasks.length; i++) {
    let taskContent = tasks[i].task;
    let hourName = tasks[i].hour;
    let presentHour = parseInt(moment().format("HH"));
    let thisHour = tasks[i].time;
    let inputElStyle = "";

    if (thisHour < presentHour) {
      // Assign past style to textarea
      inputElStyle = "past";
    } else {
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

renderTimeBlocks();

// Automatically update time blocks
setInterval(function(){
  presentHour = parseInt(moment().format("HH"));
  renderTimeBlocks();
  console.log("time blocks rendered");
}, 60000);