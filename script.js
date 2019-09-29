let currentDay = moment().format('dddd, MMMM Do');
let tasks = [
  {hour: "9AM", task: ""},
  {hour: "10AM", task: ""},
  {hour: "11AM", task: ""},
  {hour: "12PM", task: ""},
  {hour: "1PM", task: ""},
  {hour: "2PM", task: ""},
  {hour: "3PM", task: ""},
  {hour: "4PM", task: ""},
  {hour: "5PM", task: ""}
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

    let timeBlockEl = $("<div>").attr("class", "input-group row");
    let hourEl = $("<div>").attr("class", "hour").text(hourName);
    let inputEl = $("<textarea>").attr("class", "form-control textarea past").attr("type", "text").text(taskContent);;
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



// let presentTime = moment().format("hA");