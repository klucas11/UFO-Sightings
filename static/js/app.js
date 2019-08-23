// from data.js
var tableData = data;


// selecting input 
var submit = d3.select("#filter-btn");

submit.on("click", function () {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue)

    // Filters Data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    // Appends table to webpage
    var tbody = d3.select("tbody");
    tbody.html("");
    filteredData.forEach(function (sightingsData) {
        var row = tbody.append("tr");
        Object.entries(sightingsData).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    inputElement.on("change", clickSelect)
});