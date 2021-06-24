// from data.js
var tableData = data;

// Viewing the available data fromt he data.js
// console.log(tableData);

// Creating References to tbody, input and button
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Inputing the data into the HTML
var addData = (dataInput) => {
  dataInput.forEach(ufoSightings => {
      var row = $tbody.append("tr");
      columns.forEach(column => row.append("td").text(ufoSightings[column])
      )
  });
}

addData(tableData);

// Create a function to run the event/filter  
function runFilter() {
  d3.event.preventDefault();
  var inputFieldDate = d3.select("#datetime");
  var inputValueDate = inputFieldDate.property("value");
  var inputFieldCity = d3.select("#city");
  var inputValueCity = inputFieldCity.property("value");
  var inputFieldState = d3.select("#state");
  var inputValueState = inputFieldState.property("value");
  var inputFieldCountry = d3.select("#country");
  var inputValueCountry = inputFieldCountry.property("value");
  var inputFieldShape = d3.select("#shape");
  var inputValueShape = inputFieldShape.property("value");

  // Filter data based on the input
  var filterData = tableData.filter(rowData => (rowData.datetime === inputValueDate) ||
                                               (rowData.city ===  inputValueCity) ||
                                               (rowData.state ===  inputValueState) ||
                                               (rowData.country ===  inputValueCountry) ||
                                               (rowData.shape ===  inputValueShape));

  console.log(filterData);
  
  runReset(filterData);

};

button.on("click", runFilter);