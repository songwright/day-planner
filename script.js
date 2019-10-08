const currentDay = moment().format('dddd, MMMM Do');
const timeBlocks = [
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

let tasks = ["", "", "", "", "", "", "", "", ""];

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

    let timeBlockEl = $("<form>").attr("class", "input-group row");
    let hourContainer = $("<div>").attr("class", "col-2");
    let hourEl = $("<div>").attr("class", "hour").text(hourName).css("text-align", "right");
    let inputEl = $("<textarea>").attr("class", `form-control textarea ${inputElStyle}`).attr("type", "text").attr("id", "input" + i).val(taskContent);
    let buttonEl = $("<div>").attr("class", "input-group-append");
    let button = $("<button>").attr("class", "saveBtn").attr("data-index", i);
    let lockIcon = $("<i>").attr("class", "fas fa-lock");

    // Put a time block in the container
    $(".container").append(timeBlockEl);

    button.append(lockIcon);
    // Put the button in the button div.
    buttonEl.append(button);

    hourContainer.append(hourEl);

    // Put the time block elements in a row.
    timeBlockEl.append(hourContainer).append(inputEl).append(buttonEl);
  }
}

function init() {
  // Get stored tasks from localStorage
  // Parse the JSON string to an object
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));

  // If tasks were retrieved from localStorage, update the tasks array to it
  if (storedTasks !== null) {
    tasks = storedTasks;
  }

  // Render timeBlocks to the DOM
  renderTimeBlocks();
}

function storeTasks() {
  // Stringify and set "tasks" key in localStorage to tasks array
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


$(document).ready(function() {

  init();
  // Put today's date in the header.
  $("#currentDay").append(currentDay);

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log('test');
    //Get the data index number from the button.
    let dataIndex = $(this).attr("data-index");
    let textInput = $(`#input${dataIndex}`).val();

    // Add task to array
    tasks.splice(dataIndex, 1, textInput);
    storeTasks();
  });

  // Automatically update time blocks every five minutes
  setInterval(function(){
    presentHour = parseInt(moment().format("HH"));
    renderTimeBlocks();
  }, 300000);
})