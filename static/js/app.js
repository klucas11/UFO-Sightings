// from data.js
var tableData = data;

// Appends table to webpage
var tbody = d3.select("tbody");
console.log(tableData);

data.forEach(function (sightingsData) {
    var row = tbody.append("tr");
    Object.entries(sightingsData).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Creates Filters
var filterUFOSightins = function (sightings, targetColumn, filterValue) {
    /*
        Purpose: Return a filtered list of sightings using targetColum and filterValue.
        sightings: Array of objects
        targetColumn: String, key of sighting object to filter by
        filterValue: Mixed, value used to find matches on targetColumns
    */
    let filteredList = [];
    // // loop each sighting object in sightings
    // for (let sightingIndex = 0; sightingIndex < sightings.length; sightingIndex++) {
    //     // let sightingObject = sightings[sightingIndex];
    //     // let valueGiven = sightingObject[targetColumn];
    //     // let valueToMatch = filterValue;
    //     if (valueGiven === valueToMatch) {
    //         // // // append sighting object to filteredList
    //     }
    // }
    sightings.forEach(function (sightingObject) {
        if (sightingObject[targetColumn] === filterValue) {
            filteredList.push(sightingObject);
        }
    });

    // return filteredList;

    // return sightings.filter(sightingObject => sightingObject[targetColumn] === filterValue)
}
filterUFOSightins(data, 'city', 'benton')