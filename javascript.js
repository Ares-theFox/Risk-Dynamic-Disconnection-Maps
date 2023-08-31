const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let mapselected = "test";
if (urlParams.has('map')) {
	mapselected = urlParams.get('map');
	console.log(urlParams.get('map'));
}

const mapUrls = {
	"castle": {
		"prettyname": "Castle",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Castle.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Castle%20blizzard%20pattern.png",
		"totalBlizzards": 4,
		"totalPortals": 2
	},
}

let imgElement = document.getElementById("map");
imgElement.src = mapUrls[mapselected].baseurl;

let title = document.getElementById("mapnametitle");
title.text = mapUrls[mapselected].prettyname;

document.title = mapUrls[mapselected].prettyname;

  let zoom = 1;
  document.getElementById("zoomInButton").addEventListener("click", function () {
    zoom += 0.1;
    document.body.style.zoom = zoom;
  });
  document.getElementById("zoomOutButton").addEventListener("click", function () {
    zoom -= 0.1;
    document.body.style.zoom = zoom;
  });
	
  document.getElementById("resetButton").addEventListener("click", function () {
    location.reload();
  });

// Get the button element
var mapDirectoryButton = document.getElementById("mapDirectoryButton");

// Add an event listener to the button that listens for the "click" event
mapDirectoryButton.addEventListener("click", function() {
  // Open the URL in a new tab when the button is clicked
  window.open("https://ares-thefox.github.io/Risk-Dynamic-Disconnection-Maps/", "_blank");
});

var images = [
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox1.PNG",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox2.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox3.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox4.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox5.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox6.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox7.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox8.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox9.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox10.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox11.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox12.png"
];

// Preload the blizzard pattern
var blizzardPatternImage = new Image();
blizzardPatternImage.src = mapUrls[mapselected].blizzardPatternImage;

window.onload = function() {
  var img = document.querySelector("header img");
  var randomIndex = Math.floor(Math.random() * images.length);
  img.src = images[randomIndex];
};

// Define global variables
	// Define map-specific items
	var colorLegend = mapUrls[mapselected].prettyname;
	var DirectConnections = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/" + colorLegend + "%20CSV.csv";
	var IndirectConnections = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/" + colorLegend + "%20Indirect%20Connection%20Locations%20CSV.csv";
	var SVG = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/" + colorLegend + "%20Paths.svg";
	var BlizzardPattern = blizzardPatternImage.src;

	var totalBlizzards = mapUrls[mapselected].totalBlizzards;
	var totalPortals = mapUrls[mapselected].totalPortals;

	// Get the select menu container element
	var selectMenuContainer = document.getElementById("selectMenuContainer");

	// Hide the select menu container by default
	selectMenuContainer.style.display = "none";

	// Define a sequence of button presses
	var sequence = [
	  { button: "blizzardButton", count: totalBlizzards },
	  { button: "portalButton", count: totalPortals }
	];

	// Keep track of the current position in the sequence
	var sequenceIndex = 0;
	var sequenceCount = 0;

	// Add a flag to keep track of whether the sequence has been completed or not
	var sequenceCompleted = false;

	// Add event listeners to the buttons
	sequence.forEach(function (item) {
	  var button = document.getElementById(item.button);
	  var clickHandler = function () {
	    // Check if the sequence has been completed
	    if (sequenceCompleted) {
	      // If it has, remove the event listener for this button
	      button.removeEventListener("click", clickHandler);
	    } else {
	      if (item.button === sequence[sequenceIndex].button) {
		sequenceCount++;
		if (sequenceCount === item.count) {
		  sequenceIndex++;
		  sequenceCount = 0;
		}
	      } else {
		sequenceIndex = 0;
		sequenceCount = 0;
	      }

	      if (sequenceIndex === sequence.length) {
		selectMenuContainer.style.display = "";
		// Set the flag to true once the sequence is completed
		sequenceCompleted = true;
	      }
	    }
	  };

	  // Add the click event listener with the clickHandler function
	  button.addEventListener("click", clickHandler);
	});

	let blizzardArray = []
	let portalArray = []
	let clickedPathsBlizzardsPortals = []
	
	// Define connections tableData
	let tableData;
	let tableDataClone;
	Papa.parse(
	  DirectConnections,
	  {
	    download: true,
	    header: true,
	    complete: function (results) {
	      // Assign parsed data to tableData
	      tableData = results.data;
	      // Remove zero-width space character from tableData
	      for (let i = 0; i < tableData.length; i++) {
		for (let key in tableData[i]) {
		  if (tableData[i].hasOwnProperty(key)) {
		    tableData[i][key] = tableData[i][key].replace(/\u200B/g, "");
		  }
		}
	      }
	      // Create a deep copy of tableData
	      tableDataClone = JSON.parse(JSON.stringify(tableData));
	    },
	  }
	);
	
	// Define color dictionaries 
	const colorDictionary = {
	  1: "#eb3337",
	  2: "#fd8238",
	  3: "#fdf12c",
	  4: "#2ed14f",
	  5: "#2ca9f1",
	  6: "#4a51cc",
	  7: "#b948ba",
	  8: "#8b2c32",
	  9: "#5f5f5f",
	 10: "#377a46",
	 11: "#460055",
	 12: "#161616"
	};
	const colorDarktionary = {
	 1: "#761a1c",
	 2: "#7f411c",
	 3: "#7f7916",
	 4: "#176928",
	 5: "#165579",
	 6: "#252966",
	 7: "#5d245d",
	 8: "#461619",
	 9: "#303030",
	10: "#1c3d23",
	11: "#23002b",
	12: "#000000"
	};
	
	// Define csvData as a global variable
	var csvData;
	
	// Define a counter variable to keep track of the number of requests that have completed
	var requestsCompleted = 0;
	
	// Define a function to call when a request has completed
	function onRequestComplete() {
	  requestsCompleted++;
	  if (requestsCompleted === 2) {
	    // Both requests have completed, so call the generateMap function
	    generateMap();
	  }
	}

	// Load the CSV data
	Papa.parse(
	  IndirectConnections,
	  {
	    download: true,
	    header: true,
	    complete: function (results) {
	      // Assign the parsed data to the global csvData variable
	      csvData = results.data;
	      // Call the onRequestComplete function to indicate that this request has completed
	      onRequestComplete();
	    }
	  }
	);

	// Define global variables
	centralityMenu = document.getElementById("centralityType");

	// Add an event listener to the menu element
	centralityMenu.addEventListener("change", function() {
	  generateMap();
	});
	
// End of global variables

	// Load the SVG
	let paths;
	let svgElement;
	var xhr = new XMLHttpRequest();
	xhr.open(
	  "GET",
	  SVG
	);
	xhr.onload = function () {
	  if (xhr.status === 200) {
	    var svg = xhr.responseText;
	    var rangeElement = document.getElementById("range");
	    rangeElement.innerHTML = svg;
	    svgElement = rangeElement.querySelector("svg");
	    paths = svgElement.querySelectorAll("path");
	    paths.forEach(function (path) {
	      path.setAttribute("fill", "transparent");
	      path.setAttribute("stroke-opacity", "0");
	    });
	    // Call the onRequestComplete function to indicate that this request has completed
	    onRequestComplete();
	  }
	};
	xhr.send();

// Stop editing
function stopEditing() {
	document.getElementById("stopButton").innerHTML = "Stop Editing";
	// Set the regular background color to white
	document.getElementById("stopButton").style.backgroundColor = "white";
	// Set the hover background color to white
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
	document.head.appendChild(styleElement);
	return;
}

// Centrality
function calculateCentrality(tableData) {
    // Filter the input data
    let filteredData = [];
    for (let i = 0; i < tableData.length; i++) {
        let row = tableData[i];
        if (typeof row === 'object' && row.hasOwnProperty('A') && row.hasOwnProperty('B')) {
            if (typeof row['A'] === 'string' && typeof row['B'] === 'string') {
                filteredData.push(row);
            }
        }
    }

    // Create a list of unique territories
    let territories = [];
    for (let i = 0; i < filteredData.length; i++) {
        if (filteredData[i]['B'] !== '' && !territories.includes(filteredData[i]['A'])) {
            territories.push(filteredData[i]['A']);
        }
    }
    // Create an empty adjacency matrix
    let adjacencyMatrix = [];
    for (let i = 0; i < territories.length; i++) {
        adjacencyMatrix.push(new Array(territories.length).fill(0));
    }
    // Populate the adjacency matrix
    for (let i = 0; i < filteredData.length; i++) {
        if (filteredData[i]['B'] !== undefined && filteredData[i]['B'] !== '') {
            let territory = filteredData[i]['A'];
            let connections = filteredData[i]['B'].split(',');
            for (let j = 0; j < connections.length; j++) {
                let connection = connections[j];
                if (connection !== '') {
                    let index1 = territories.indexOf(territory);
                    let index2 = territories.indexOf(connection);
                    adjacencyMatrix[index1][index2] = 1;
                }
            }
        }
    }

    // Calculate the shortest paths between all pairs of nodes using the Floyd-Warshall algorithm
    let dist = [];
    for (let i = 0; i < adjacencyMatrix.length; i++) {
        dist[i] = [];
        for (let j = 0; j < adjacencyMatrix.length; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (adjacencyMatrix[i][j]) {
                dist[i][j] = adjacencyMatrix[i][j];
            } else {
                dist[i][j] = Infinity;
            }
        }
    }
    for (let k = 0; k < adjacencyMatrix.length; k++) {
        for (let i = 0; i < adjacencyMatrix.length; i++) {
            for (let j = 0; j < adjacencyMatrix.length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Calculate the closeness centrality of each node
	let closenessCentralityValues= {};
	let closenessRank= {};
	
	for(let i=0;i<territories.length;i++){
		let sumOfDistances=0;
		for(let j=0;j<territories.length;j++){
			sumOfDistances+=dist[i][j];
		}
		closenessCentralityValues[territories[i]]=(1/sumOfDistances);
	}
	
	let uniqueClosenessValues=[...new Set(Object.values(closenessCentralityValues))].sort((a,b) => a-b);
	
	for(let key in closenessCentralityValues){
		closenessRank[key]=uniqueClosenessValues.indexOf(closenessCentralityValues[key])+1;
	}
	
	for(let key in closenessCentralityValues){
		closenessCentralityValues[key]=Math.round(closenessCentralityValues[key]*10000)/10;
	}

    // Create a graph from the adjacency matrix
    let G = new jsnx.Graph();
    for (let i = 0; i < adjacencyMatrix.length; i++) {
        for (let j = i + 1; j < adjacencyMatrix.length; j++) {
            if (adjacencyMatrix[i][j] === 1) {
                G.addEdge(i, j);
            }
        }
    }

    // Calculate betweenness centrality and eigenvector centrality
	let betweennessCentrality=jsnx.betweennessCentrality(G);
	let eigenvectorCentrality=jsnx.eigenvectorCentrality(G,{maxIter:500});
	
	let betweennessCentralityValues={};
	let betweennessRank={};
	let eigenvectorCentralityValues={};	
	let eigenvectorRank={};
		
	for(let key in betweennessCentrality._numberValues){
		betweennessCentralityValues[territories[key]]=betweennessCentrality._numberValues[key];
	}
	
	for(let key in eigenvectorCentrality._numberValues){
		eigenvectorCentralityValues[territories[key]]=eigenvectorCentrality._numberValues[key];
	}
	
	let uniqueBetweennessValues=[...new Set(Object.values(betweennessCentralityValues))].sort((a,b) => a-b);
	let uniqueEigenvectorValues=[...new Set(Object.values(eigenvectorCentralityValues))].sort((a,b) => a-b);
	
	for(let key in betweennessCentralityValues){
		betweennessRank[key]=uniqueBetweennessValues.indexOf(betweennessCentralityValues[key])+1;
	}
	
	for(let key in eigenvectorCentralityValues){
		eigenvectorRank[key]=uniqueEigenvectorValues.indexOf(eigenvectorCentralityValues[key])+1;
	}
	
	for(let key in betweennessCentralityValues){
		betweennessCentralityValues[key]=Math.round(betweennessCentralityValues[key]*1000)/10;
	}
	
	for(let key in eigenvectorCentralityValues){
		eigenvectorCentralityValues[key]=Math.round(eigenvectorCentralityValues[key]*1000)/10;
	}

    // Calculate the scaled values for each metric
    let betweennessScaled = {};
    let closenessScaled = {};
    let minBetweenness = Math.min(...Object.values(betweennessCentralityValues));
    let maxBetweenness = Math.max(...Object.values(betweennessCentralityValues));
    let minCloseness = Math.min(...Object.values(closenessCentralityValues));
    let maxCloseness = Math.max(...Object.values(closenessCentralityValues));
    for (let territory of territories) {
        betweennessScaled[territory] = 100 * (betweennessCentralityValues[territory] - minBetweenness) / (maxBetweenness - minBetweenness);
        closenessScaled[territory] = 100 * (closenessCentralityValues[territory] - minCloseness) / (maxCloseness - minCloseness);
    }

    // Calculate the disconnection potential values and rank
    let disconnectionPotentialValues = {};
    let disconnectionPotentialRank = {};
    for (let territory of territories) {
        disconnectionPotentialValues[territory] = (betweennessScaled[territory] + closenessScaled[territory]) / 3;
    }
    let uniqueDisconnectionPotentialValues = [...new Set(Object.values(disconnectionPotentialValues))].sort((a, b) => a - b);
    for (let territory of territories) {
        disconnectionPotentialRank[territory] = uniqueDisconnectionPotentialValues.indexOf(disconnectionPotentialValues[territory]) + 1;
    }

	for(let key in disconnectionPotentialValues){
	    disconnectionPotentialValues[key]=Math.round(disconnectionPotentialValues[key]*10)/10;
	}
    return [betweennessCentralityValues, eigenvectorCentralityValues, closenessCentralityValues, betweennessRank, eigenvectorRank, closenessRank, disconnectionPotentialValues, disconnectionPotentialRank];
}

function disconnectionPotentialColor(disconnectionPotentialRank) {
    // Count the number of unique values in disconnectionPotentialRank
    let uniqueValues = new Set(Object.values(disconnectionPotentialRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let disconnectionPotential_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(255 - (255 - 204) * (i / (uniqueValues - 1)));
        let g = Math.round(255 - (255 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        disconnectionPotential_colorDictionary[i + 1] = color;
    }

    return disconnectionPotential_colorDictionary;
}

function disconnectionPotential_borderColor(disconnectionPotentialRank) {
    // Count the number of unique values in disconnectionPotentialRank
    let uniqueValues = new Set(Object.values(disconnectionPotentialRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let disconnectionPotential_border_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(128 - (128 - 102) * (i / (uniqueValues - 1)));
        let g = Math.round(128 - (128 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        disconnectionPotential_border_colorDictionary[i + 1] = color;
    }

    return disconnectionPotential_border_colorDictionary;
}

function closenessColor(closenessRank) {
    // Count the number of unique values in closenessRank
    let uniqueValues = new Set(Object.values(closenessRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let closeness_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(255 - (255 - 204) * (i / (uniqueValues - 1)));
        let g = Math.round(255 - (255 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        closeness_colorDictionary[i + 1] = color;
    }

    return closeness_colorDictionary;
}

function closeness_borderColor(closenessRank) {
    // Count the number of unique values in closenessRank
    let uniqueValues = new Set(Object.values(closenessRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let closeness_border_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(128 - (128 - 102) * (i / (uniqueValues - 1)));
        let g = Math.round(128 - (128 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        closeness_border_colorDictionary[i + 1] = color;
    }

    return closeness_border_colorDictionary;
}

function betweennessColor(betweennessRank) {
    // Count the number of unique values in betweennessRank
    let uniqueValues = new Set(Object.values(betweennessRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let betweenness_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(255 - (255 - 204) * (i / (uniqueValues - 1)));
        let g = Math.round(255 - (255 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        betweenness_colorDictionary[i + 1] = color;
    }

    return betweenness_colorDictionary;
}

function betweenness_borderColor(betweennessRank) {
    // Count the number of unique values in betweennessRank
    let uniqueValues = new Set(Object.values(betweennessRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let betweenness_border_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(128 - (128 - 102) * (i / (uniqueValues - 1)));
        let g = Math.round(128 - (128 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        betweenness_border_colorDictionary[i + 1] = color;
    }

    return betweenness_border_colorDictionary;
}

function eigenvectorColor(eigenvectorRank) {
    // Count the number of unique values in eigenvectorRank
    let uniqueValues = new Set(Object.values(eigenvectorRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let eigenvector_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(255 - (255 - 204) * (i / (uniqueValues - 1)));
        let g = Math.round(255 - (255 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        eigenvector_colorDictionary[i + 1] = color;
    }

    return eigenvector_colorDictionary;
}

function eigenvector_borderColor(eigenvectorRank) {
    // Count the number of unique values in eigenvectorRank
    let uniqueValues = new Set(Object.values(eigenvectorRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let eigenvector_border_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(128 - (128 - 102) * (i / (uniqueValues - 1)));
        let g = Math.round(128 - (128 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        eigenvector_border_colorDictionary[i + 1] = color;
    }

    return eigenvector_border_colorDictionary;
}

// zzzzzzzzzzzz
function experimentalCentralityFunction(tableData, betweennessCentralityValues, closenessCentralityValues) {
    // Filter the input data
    let filteredData = [];
    for (let i = 0; i < tableData.length; i++) {
        let row = tableData[i];
        if (typeof row === 'object' && row.hasOwnProperty('A') && row.hasOwnProperty('B') && row.hasOwnProperty('C')) {
            if (typeof row['A'] === 'string' && typeof row['B'] === 'string' && typeof row['C'] === 'string') {
                filteredData.push(row);
            }
        }
    }

    // Create a list of unique territories
    let territories = [];
    for (let i = 0; i < filteredData.length; i++) {
        if (filteredData[i]['B'] !== '' && !territories.includes(filteredData[i]['A'])) {
            territories.push(filteredData[i]['A']);
        }
    }

    // Create a graph object
    let graph = {};
    for (let i = 0; i < filteredData.length; i++) {
        let territory = filteredData[i]['A'];
        let connections = filteredData[i]['B'].split(',');
        graph[territory] = {};
        for (let j = 0; j < connections.length; j++) {
            graph[territory][connections[j]] = 1;
        }
    }

    // Calculate the number of direct connections for each node
    let directConnections = {};
    for (let i = 0; i < filteredData.length; i++) {
        let territory = filteredData[i]['A'];
        let connections = filteredData[i]['B'].split(',');
        directConnections[territory] = Math.max(connections.length, 1);
    }

	// Calculate the experimental centrality scores by multiplying the maximum of each centrality value and 1, and by the number of direct connections
	let experimentalCentrality = {};
	for (let key in betweennessCentralityValues) {
	    experimentalCentrality[key] = Math.max(betweennessCentralityValues[key], 1) * Math.max(closenessCentralityValues[key], 1) * Math.max(directConnections[key], 1);
	}
	
	// Normalize the experimental centrality scores by themselves
	let maxExperimentalCentralityScore = Math.max(...Object.values(experimentalCentrality));
	for (let key in experimentalCentrality) {
	    experimentalCentrality[key] /= maxExperimentalCentralityScore;
	}
	
	// Multiply the experimental centrality scores by 100 and round them to the nearest integer
	for (let key in experimentalCentrality) {
	    experimentalCentrality[key] = Math.round(experimentalCentrality[key] * 1000) / 10;
	}

    // Rank the nodes based on their experimental centrality scores
    let experimentalCentralityRank = {};
    let uniqueExperimentalCentralityValues = [...new Set(Object.values(experimentalCentrality))];
    uniqueExperimentalCentralityValues.sort((a, b) => a - b);
    for (let key in experimentalCentrality) {
        experimentalCentralityRank[key] = uniqueExperimentalCentralityValues.indexOf(experimentalCentrality[key]) + 1;
    }

    return [experimentalCentrality,experimentalCentralityRank];
}
	
	
function experimentalCentralityColor(experimentalCentralityRank) {
    // Count the number of unique values in experimentalCentralityRank
    let uniqueValues = new Set(Object.values(experimentalCentralityRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let experimentalCentrality_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(255 - (255 - 204) * (i / (uniqueValues - 1)));
        let g = Math.round(255 - (255 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        experimentalCentrality_colorDictionary[i + 1] = color;
    }

    return experimentalCentrality_colorDictionary;
}

function experimentalCentrality_borderColor(experimentalCentralityRank) {
    // Count the number of unique values in experimentalCentralityRank
    let uniqueValues = new Set(Object.values(experimentalCentralityRank)).size;

    // Generate a color dictionary with uniqueValues number of colors
    let experimentalCentrality_border_colorDictionary = {};
    for (let i = 0; i < uniqueValues; i++) {
        let r = Math.round(128 - (128 - 102) * (i / (uniqueValues - 1)));
        let g = Math.round(128 - (128 - 0) * (i / (uniqueValues - 1)));
        let b = 0;
        let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        experimentalCentrality_border_colorDictionary[i + 1] = color;
    }

    return experimentalCentrality_border_colorDictionary;
}

	
// Generate the map
function generateMap() {
  // Update buttons
  updateButtonText();
  // Reset tableData to its original values
  tableData = JSON.parse(JSON.stringify(tableDataClone));
  // Remove existing text elements
  svgElement.querySelectorAll("text").forEach((text) => text.remove());
  // Remove everything contained in the blizzard array
	// Find rows in table data where column A matches values in blizzardArray
	const rows = tableData.filter((row) => blizzardArray.includes(row["A"]));

	// Remove everything in column B for those rows
	rows.forEach((row) => {
	  row["B"] = "";
	});

	// Remove all instances of values in blizzardArray from column B
	tableData.forEach((row) => {
	  if (row["B"]) {
	    // Split the value in column B into an array of values
	    let values = row["B"].split(",");
	    // Filter out any values that are included in the blizzardArray
	    values = values.filter((value) => !blizzardArray.includes(value));
	    // Join the remaining values back into a string and update the value in column B
	    row["B"] = values.join(",");
	  }
	});
  // Add everything contained in the portal array
	// Iterate over tableData
	tableData.forEach((row) => {
	  // Check if value in column A matches a value in portalArray
	  if (portalArray.includes(row["A"])) {
	    // Add contents of portalArray to column B
	    row["B"] = [
	      ...new Set([
		...(row["B"] ? row["B"].split(",") : []),
		...portalArray,
	      ]),
	    ]
	      .filter((value) => value !== row["A"])
	      .join(",");
	  }
	});
  // Calculate new columns
  tableData.forEach((row) => {
    // Column D: vlookup col B values and add them + current value A and B
    row["D"] = ""; // initialize column D to blank
    if (row["B"] && row["B"].trim() !== "") {
      // check if column B is not empty or undefined
      const searchValues = row["B"].split(",");
      let searchResults = [];
      for (const searchValue of searchValues) {
        const trimmedSearchValue = searchValue.trim().replace(/\u200B/g, "");
        for (let i = 0; i < tableData.length; i++) {
          if (tableData[i]["A"] === trimmedSearchValue) {
            searchResults.push(tableData[i]["B"]);
            break;
          }
        }
      }
      row["D"] = [row["A"], row["B"], ...searchResults].join(",");
    }

    // Column E: Remove duplicate values from column D
    row["E"] = [...new Set(row["D"].split(","))]
      .filter((value) => value !== row["A"])
      .join(",");
	  
    // Column F: Count how many comma-separated values are in column B
    if (row["B"] && row["B"].trim() !== "") {
      // check if column B is not empty or undefined
      const values = row["B"].split(",");
      row["F"] = values.length;
    } else {
      row["F"] = 0;
    }

    // Column G: Count how many comma-separated values are in column E (unless it's empty, then set it to 0)
    if (row["E"] && row["E"].trim() !== "") {
      // check if column E is not empty or undefined
      const values = row["E"].split(",");
      row["G"] = values.length;
    } else {
      row["G"] = 0;
    }
  });

	// Calculate rescaled betweenness centrality and closeness centrality
	let [betweennessCentralityValues, eigenvectorCentralityValues, closenessCentralityValues, betweennessRank, eigenvectorRank, closenessRank, disconnectionPotentialValues, disconnectionPotentialRank] = calculateCentrality(tableData);
	let betweenness_ColorDictionary = betweennessColor(betweennessRank);
	let eigenvector_ColorDictionary = eigenvectorColor(eigenvectorRank);
	let closeness_ColorDictionary = closenessColor(eigenvectorRank);
	let disconnectionPotential_ColorDictionary = disconnectionPotentialColor(disconnectionPotentialRank);
	let betweenness_border_ColorDictionary = betweenness_borderColor(betweennessRank);
	let eigenvector_border_ColorDictionary = eigenvector_borderColor(eigenvectorRank);
	let closeness_border_ColorDictionary = closeness_borderColor(eigenvectorRank);
	let disconnectionPotential_border_ColorDictionary = disconnectionPotential_borderColor(disconnectionPotentialRank);

	let [experimentalCentrality,experimentalCentralityRank] = experimentalCentralityFunction(tableData, betweennessCentralityValues, closenessCentralityValues)
	let experimentalCentrality_ColorDictionary = experimentalCentralityColor(experimentalCentralityRank)
	let experimentalCentrality_border_ColorDictionary = experimentalCentrality_borderColor(experimentalCentralityRank)
	
	// Populate columns with the centrality values
	for (let i = 0; i < tableData.length; i++) {
	    let territory = tableData[i]['A'];
	    tableData[i]['H'] = betweennessCentralityValues[territory];
	    tableData[i]['I'] = betweennessRank[territory];
	    tableData[i]['J'] = eigenvectorCentralityValues[territory];
	    tableData[i]['K'] = eigenvectorRank[territory];
	    tableData[i]['L'] = closenessCentralityValues[territory];
	    tableData[i]['M'] = closenessRank[territory];
	    tableData[i]['N'] = disconnectionPotentialValues[territory];
	    tableData[i]['O'] = disconnectionPotentialRank[territory];
	    tableData[i]['P'] = experimentalCentrality[territory];
	    tableData[i]['Q'] = experimentalCentralityRank[territory];
	}
	
  // Set font size of indirect connections
  var fontSizeInput = document.getElementById("fontSizeInput");
  fontSizeInput.addEventListener("input", function () {
    if (this.value > 100) {
      this.value = 100;
    } else if (this.value < 1) {
      this.value = 1;
    }
  });
  fontSizeInput.addEventListener("input", function() {
    debouncedGenerateMap();
  });

  // Color in the map and add indirect connections
  paths.forEach(function (path) {
    var pathId = path.getAttribute("id");
    for (var i = 0; i < tableData.length; i++) {
      if (tableData[i]["A"] === pathId) {
        // Color in the map
        var value = tableData[i]["F"];
	    var betweennessValue = tableData[i]["H"];
	    var betweennessPosition = tableData[i]["I"];
	    var eigenvectorValue = tableData[i]["J"];
	    var eigenvectorPosition = tableData[i]["K"];
	    var closenessValue = tableData[i]["L"];
	    var closenessPosition = tableData[i]["M"];
	    var disconnectionPotentialValue = tableData[i]["N"];
	    var disconnectionPotentialPosition = tableData[i]["O"];
	    var experimentalCentralityValue = tableData[i]["P"];
	    var experimentalCentralityPosition = tableData[i]["Q"];
        if (value >= 12) {
          value = 12;
        }
        if (value !== 0) {
	  if (centralityMenu.value === "standard") {
	    var color = colorDictionary[value];
	    var border_color = colorDarktionary[value];
	  } else if (centralityMenu.value === "betweenness") {
	    var color = betweenness_ColorDictionary[betweennessPosition];
	    var border_color = betweenness_border_ColorDictionary[betweennessPosition];
	  } else if (centralityMenu.value === "eigenvector") {
	    var color = eigenvector_ColorDictionary[eigenvectorPosition];
	    var border_color = eigenvector_border_ColorDictionary[eigenvectorPosition];
	  } else if (centralityMenu.value === "closeness") {
	    var color = closeness_ColorDictionary[closenessPosition];
	    var border_color = closeness_border_ColorDictionary[closenessPosition];
	  } else if (centralityMenu.value === "disconnectionPotential") {
	    var color = disconnectionPotential_ColorDictionary[disconnectionPotentialPosition];
	    var border_color = disconnectionPotential_border_ColorDictionary[disconnectionPotentialPosition];
	  } else if (centralityMenu.value === "experimentalCentrality") {
	    var color = experimentalCentrality_ColorDictionary[experimentalCentralityPosition];
	    var border_color = experimentalCentrality_border_ColorDictionary[experimentalCentralityPosition];
	  }
          path.style.setProperty("fill", color, "important");
          path.setAttribute("stroke-opacity", "100");
          path.style.setProperty("stroke", border_color, "important");
          path.style.setProperty("stroke-width", "2", "important");
        }

        // Add text to the specified location from CSV data
        value = tableData[i]["G"];
        if (value !== 0) {
          // Find matching row in CSV data
          var csvRow = csvData.find(function (row) {
            return row["Range"] === pathId;
          });

          // Get coordinates from CSV data
          var x = csvRow["Pixel Pair 1"];
          var y = csvRow["Pixel Pair 2"];

          var text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );
          text.setAttribute("x", x);
          text.setAttribute("y", y);
	  text.setAttribute("pointer-events", "none");
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("alignment-baseline", "middle");
          text.setAttribute("font-size", fontSizeInput.value);
          text.setAttribute("font-weight", "bold");
	  if (tableData[i]["F"] >= 11) {
	    text.setAttribute("fill", "white");
	  } else {
	    text.setAttribute("fill", "black");
	  }
	  if (centralityMenu.value === "standard") {
	    text.textContent = value;
	  } else if (centralityMenu.value === "betweenness") {
	    text.textContent = betweennessValue;
	  } else if (centralityMenu.value === "eigenvector") {
	    text.textContent = eigenvectorValue;
	  } else if (centralityMenu.value === "closeness") {
	    text.textContent = closenessValue;
	  } else if (centralityMenu.value === "disconnectionPotential") {
	    text.textContent = disconnectionPotentialValue;
	  } else if (centralityMenu.value === "experimentalCentrality") {
	    text.textContent = experimentalCentralityValue;
	  }
          // Adjust x and y coordinates to position midpoint of text at specified coordinates
          var bbox = text.getBBox();
          text.setAttribute("x", x - bbox.width / 2);
          text.setAttribute("y", y - bbox.height / 2);

          svgElement.appendChild(text);
        }
        break;
      }
    }
  });
	// Find the maximum value in column F
	var maxF = Math.max(...tableData.map((row) => row["F"]));

	// Ensure that maxF is never greater than 12
	if (maxF > 12) {
	  maxF = 12;
	}
	// Get the base image element & define base URL
	var baseImage = document.getElementById("map");
	var baseURL = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/";

	// Decide which image to display based on the maximum value in column F
	if (centralityMenu.value !== "standard") {
	    baseImage.src = baseURL + colorLegend + "%20Heatmap.png"
	} else if (maxF < 3) {
	    baseImage.src = baseURL + colorLegend + ".png";
	} else {
	    baseImage.src = baseURL + colorLegend + "%20" + maxF + ".png";
	}
	
// Create a mapping of node names to indices
let nodeToIndex = {};
let index = 0;
tableData.forEach(row => {
  if (row['A'] && !nodeToIndex.hasOwnProperty(row['A'])) {
    nodeToIndex[row['A']] = index++;
  }
  let neighbors = row['B'] ? row['B'].split(',') : [];
  neighbors.forEach(neighbor => {
    if (!nodeToIndex.hasOwnProperty(neighbor)) {
      nodeToIndex[neighbor] = index++;
    }
  });
});

// Create a distance matrix with dimensions equal to the number of nodes
let dist = new Array(index);
for (let i = 0; i < index; i++) {
  dist[i] = new Array(index);
  for (let j = 0; j < index; j++) {
    if (i === j) {
      dist[i][j] = 0;
    } else {
      dist[i][j] = Infinity;
    }
  }
}

// Populate the distance matrix with the distances between directly connected nodes
tableData.forEach(row => {
  let x = nodeToIndex[row['A']];
  let neighbors = row['B'] ? row['B'].split(',') : [];
  neighbors.forEach(neighbor => {
    let y = nodeToIndex[neighbor];
    dist[x][y] = 1;
    dist[y][x] = 1;
  });
});

// Run the Floyd-Warshall algorithm
for (let k = 0; k < index; k++) {
  for (let i = 0; i < index; i++) {
    for (let j = 0; j < index; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

// Check if there are any pairs of nodes that are not connected
let allNodesConnected = true;
for (let i = 0; i < index; i++) {
  for (let j = i + 1; j < index; j++) {
    // Get the node names corresponding to indices i and j
    let node1 = Object.keys(nodeToIndex).find(key => nodeToIndex[key] === i);
    let node2 = Object.keys(nodeToIndex).find(key => nodeToIndex[key] === j);
    // Check if either node is in the blizzardArray
    if (!blizzardArray.includes(node1) && !blizzardArray.includes(node2)) {
      // Check if the distance between the nodes is Infinity
      if (dist[i][j] === Infinity) {
        allNodesConnected = false;
        break;
      }
    }
  }
}

// Create a mapping of node names to indices for tableDataClone
let nodeToIndexClone = {};
let indexClone = 0;
tableDataClone.forEach(row => {
  if (row['A'] && !nodeToIndexClone.hasOwnProperty(row['A'])) {
    nodeToIndexClone[row['A']] = indexClone++;
  }
  let neighbors = row['B'] ? row['B'].split(',') : [];
  neighbors.forEach(neighbor => {
    if (!nodeToIndexClone.hasOwnProperty(neighbor)) {
      nodeToIndexClone[neighbor] = indexClone++;
    }
  });
});

// Create a distance matrix with dimensions equal to the number of nodes for tableDataClone
let distClone = new Array(indexClone);
for (let i = 0; i < indexClone; i++) {
  distClone[i] = new Array(indexClone);
  for (let j = 0; j < indexClone; j++) {
    if (i === j) {
      distClone[i][j] = 0;
    } else {
      distClone[i][j] = Infinity;
    }
  }
}

// Populate the distance matrix with the distances between directly connected nodes for tableDataCloneCopy
tableDataClone.forEach(row => {
  let x = nodeToIndexClone[row['A']];
  let neighbors = row['B'] ? row['B'].split(',') : [];
  neighbors.forEach(neighbor => {
    let y = nodeToIndexClone[neighbor];
    distClone[x][y] = 1;
    distClone[y][x] = 1;
  });
});

// Run the Floyd-Warshall algorithm for tableDataCloneCopy
for (let k = 0; k < indexClone; k++) {
  for (let i = 0; i < indexClone; i++) {
    for (let j = 0; j < indexClone; j++) {
      if (distClone[i][k] + distClone[k][j] < distClone[i][j]) {
        distClone[i][j] = distClone[i][k] + distClone[k][j];
      }
    }
  }
}

// Check if any pair of portal nodes are within 2 travel distance of each other
let portalsTooClose = false;
for (let i = 0; i < portalArray.length; i++) {
  for (let j = i + 1; j < portalArray.length; j++) {
    // Get the node names corresponding to indices i and j
    let node1 = portalArray[i];
    let node2 = portalArray[j];
    // Get the indices corresponding to the node names
    let x = nodeToIndexClone[node1];
    let y = nodeToIndexClone[node2];
    // Check if the distance between the nodes is less than or equal to 2
    if (distClone[x][y] <= 2) {
      portalsTooClose = true;
      break;
    }
  }
}

  // Check for too-small continents
  let continentCounts = {};
  tableData.forEach(row => {
    if (row['A'] && row['C']) {
      if (!continentCounts.hasOwnProperty(row['C'])) {
        continentCounts[row['C']] = 0;
      }
      continentCounts[row['C']]++;
    }
  });
  let blizzardContinentCounts = {};
  blizzardArray.forEach(path => {
    let row = tableData.find(row => row['A'] === path);
    if (row && row['C']) {
      if (!blizzardContinentCounts.hasOwnProperty(row['C'])) {
        blizzardContinentCounts[row['C']] = 0;
      }
      blizzardContinentCounts[row['C']]++;
    }
  });
  let continentTooSmall = false;
  for (let continent in continentCounts) {
    if (blizzardContinentCounts.hasOwnProperty(continent) && blizzardContinentCounts[continent] >= continentCounts[continent] - 1) {
      continentTooSmall = true;
      break;
    }
  }
  // Update invalid text
  var invalidText = document.getElementById("invalidText");
  if (!allNodesConnected && portalsTooClose && continentTooSmall) {
    invalidText.textContent = "Invalid Generation: Map disconnected; Portals too close; Continent too small";
  } else if (!allNodesConnected && portalsTooClose) {
    invalidText.textContent = "Invalid Generation: Map disconnected; Portals too close";
  } else if (!allNodesConnected && continentTooSmall) {
    invalidText.textContent = "Invalid Generation: Map disconnected; Continent too small";
  } else if (portalsTooClose && continentTooSmall) {
    invalidText.textContent = "Invalid Generation: Portals too close; Continent too small";
  } else if (!allNodesConnected) {
    invalidText.textContent = "Invalid Generation: Map is disconnected";
  } else if (portalsTooClose) {
    invalidText.textContent = "Invalid Generation: Portals are too close";
  } else if (continentTooSmall) {
    invalidText.textContent = "Invalid Generation: Continent too small";
  } else {
    invalidText.textContent = "";
  }
}
	
function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}

const debouncedGenerateMap = debounce(generateMap, 500);

function addBlizzards() {
  let shouldReturn = false;
  document.getElementById("stopButton").innerHTML = "Stop Adding Blizzards";
	// Set the regular background color to green
	document.getElementById("stopButton").style.backgroundColor = "#4caf50";
	// Set the hover background color to dark green
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: #3e8e41 !important; }";
	document.head.appendChild(styleElement);

  const blizzardButtonClick = function () {
    shouldReturn = true;
  };
  const portalButtonClick = function () {
    shouldReturn = true;
  };
  const eraserButtonClick = function () {
    shouldReturn = true;
  };
  const stopButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);

  // Check if size of blizzardArray is greater than or equal to totalBlizzards
  if (blizzardArray.length >= totalBlizzards) {
    // Return early from the function
    return;
  }

	// Call border color dictionaries
	let [betweennessCentralityValues, eigenvectorCentralityValues, closenessCentralityValues, betweennessRank, eigenvectorRank, closenessRank, disconnectionPotentialValues, disconnectionPotentialRank] = calculateCentrality(tableData);
	let betweenness_border_ColorDictionary = betweenness_borderColor(betweennessRank);
	let eigenvector_border_ColorDictionary = eigenvector_borderColor(eigenvectorRank);
	let closeness_border_ColorDictionary = closeness_borderColor(eigenvectorRank);
	let disconnectionPotential_border_ColorDictionary = disconnectionPotential_borderColor(disconnectionPotentialRank);
	
	let [experimentalCentrality,experimentalCentralityRank] = experimentalCentralityFunction(tableData, betweennessCentralityValues, closenessCentralityValues)
	let experimentalCentrality_border_ColorDictionary = experimentalCentrality_borderColor(experimentalCentralityRank)
	
	// Define mouseover, mouseout, and click event handlers
	const mouseoverHandler = function () {
	  if (shouldReturn) {
	    return;
	  }
	  if (!clickedPathsBlizzardsPortals.includes(this.id)) {
	    // Change stroke color to white and stroke width to 3
	    this.style.setProperty("stroke", "white", "important");
	    this.style.setProperty("stroke-width", "3", "important");
	  }
	};
const mouseoutHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!clickedPathsBlizzardsPortals.includes(this.id)) {
    // Reset stroke color and width according to the selected centrality measure
    let value = tableData.find(row => row['A'] === this.id)['F'];
    let border_color;
    if (centralityMenu.value === "standard") {
      if (value >= 12) {
        value = 12;
      }
      border_color = colorDarktionary[value];
    } else if (centralityMenu.value === "betweenness") {
      let betweennessPosition = tableData.find(row => row['A'] === this.id)['I'];
      border_color = betweenness_border_ColorDictionary[betweennessPosition];
    } else if (centralityMenu.value === "eigenvector") {
      let eigenvectorPosition = tableData.find(row => row['A'] === this.id)['K'];
      border_color = eigenvector_border_ColorDictionary[eigenvectorPosition];
    } else if (centralityMenu.value === "closeness") {
      let closenessPosition = tableData.find(row => row['A'] === this.id)['M'];
      border_color = closeness_border_ColorDictionary[closenessPosition];
    } else if (centralityMenu.value === "disconnectionPotential") {
      let disconnectionPotentialPosition = tableData.find(row => row['A'] === this.id)['O'];
      border_color = disconnectionPotential_border_ColorDictionary[disconnectionPotentialPosition];
    } else if (centralityMenu.value === "experimentalCentrality") {
      let experimentalCentralityPosition = tableData.find(row => row['A'] === this.id)['Q'];
      border_color = experimentalCentrality_border_ColorDictionary[experimentalCentralityPosition];
    }
	this.style.setProperty("stroke", border_color, "important");
	this.style.setProperty("stroke-width", "2", "important");
  }
}
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
    // Check if path is NOT in clickedPathsBlizzardsPortals array
    if (!clickedPathsBlizzardsPortals.includes(this.id)) {
	// Create a clipPath element and set its id
	var clipPath = document.createElementNS(
	  "http://www.w3.org/2000/svg",
	  "clipPath"
	);
	clipPath.setAttribute("id", "clip-" + this.id);

	// Clone the clicked path and append it to the clipPath
	var clonedPath = this.cloneNode(true);
	clipPath.appendChild(clonedPath);

	// Append the clipPath to the defs element
	var defs =
	  svgElement.querySelector("defs") ||
	  svgElement.insertBefore(
	    document.createElementNS("http://www.w3.org/2000/svg", "defs"),
	    svgElement.firstChild
	  );
	defs.appendChild(clipPath);

	// Create an image element and set its attributes
	var image = document.createElementNS(
	  "http://www.w3.org/2000/svg",
	  "image"
	);
	image.setAttributeNS(
	  "http://www.w3.org/1999/xlink",
	  "href",
	  BlizzardPattern
	);
	image.setAttribute("width", "100%");
	image.setAttribute("height", "100%");
	image.setAttribute("clip-path", "url(#clip-" + this.id + ")");
	image.setAttribute("pointer-events", "none");

	// Append the image to the SVG
	svgElement.appendChild(image);

	// Move the image behind the path element
	svgElement.insertBefore(image, svgElement.firstChild);
	    
    // Add clicked path to arrays; push to history
    blizzardArray.push(this.id);
    clickedPathsBlizzardsPortals.push(this.id);
    history.push({ type: 'addBlizzard', pathId: this.id });
	    
    // Change the fill of the clicked path to transparent
    this.style.setProperty("fill", "transparent", "important");

    // Change stroke color and stroke width
    this.style.setProperty("stroke", "white", "important");
    this.style.setProperty("stroke-width", "1", "important");
	    
    // Check if size of blizzardArray is greater than or equal to totalBlizzards
    if (blizzardArray.length >= totalBlizzards) {
      // Remove existing event listeners from elements in paths array
      paths.forEach(function (path) {
        path.removeEventListener("mouseover", mouseoverHandler);
        path.removeEventListener("mouseout", mouseoutHandler);
        path.removeEventListener("click", clickHandler);
      });
      document.getElementById("stopButton").innerHTML = "Stop Editing";
	// Set the regular background color to white
	document.getElementById("stopButton").style.backgroundColor = "white";
	// Set the hover background color to white
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
	document.head.appendChild(styleElement);

      generateMap();
      return;
    }

    // Execute generateMap function
    generateMap();
    }
    };

  // Add event listeners to elements in paths array
  paths.forEach(function (path) {
    path.addEventListener("mouseover", mouseoverHandler);
    path.addEventListener("mouseout", mouseoutHandler);
    path.addEventListener("click", clickHandler);
  });
}
	
function addBlizzards_pathID(pathID) {
  // Find the path element with the specified pathID
  let path = Array.from(paths).find((path) => path.getAttribute("id") === pathID);

  // Create a clipPath element and set its id
  var clipPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "clipPath"
  );
  clipPath.setAttribute("id", "clip-" + pathID);

  // Clone the clicked path and append it to the clipPath
  var clonedPath = path.cloneNode(true);
  clipPath.appendChild(clonedPath);

  // Append the clipPath to the defs element
  var defs =
    svgElement.querySelector("defs") ||
    svgElement.insertBefore(
      document.createElementNS("http://www.w3.org/2000/svg", "defs"),
      svgElement.firstChild
    );
  defs.appendChild(clipPath);

  // Create an image element and set its attributes
  var image = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image"
  );
  image.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    BlizzardPattern
  );
  image.setAttribute("width", "100%");
  image.setAttribute("height", "100%");
  image.setAttribute("clip-path", "url(#clip-" + pathID + ")");
  image.setAttribute("pointer-events", "none");

  // Append the image to the SVG
  svgElement.appendChild(image);

  // Move the image behind the path element
  svgElement.insertBefore(image, svgElement.firstChild);

  // Add clicked path to arrays; push to history
  blizzardArray.push(pathID);
  clickedPathsBlizzardsPortals.push(pathID);
  
  // Change the fill of the clicked path to transparent
  path.style.setProperty("fill", "transparent", "important");

  // Change stroke color and stroke width
  path.style.setProperty("stroke", "white", "important");
  path.style.setProperty("stroke-width", "1", "important");

   // Execute generateMap function
   generateMap();
   return;
}

function addPortals() {
  let shouldReturn = false;
  document.getElementById("stopButton").innerHTML = "Stop Adding Portals";
	// Set the regular background color to green
	document.getElementById("stopButton").style.backgroundColor = "#4caf50";
	// Set the hover background color to dark green
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: #3e8e41 !important; }";
	document.head.appendChild(styleElement);

  const blizzardButtonClick = function () {
    shouldReturn = true;
  };
  const portalButtonClick = function () {
    shouldReturn = true;
  };
  const eraserButtonClick = function () {
    shouldReturn = true;
  };
  const stopButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);

  // Check if size of portalArray is greater than or equal to totalPortals
  if (portalArray.length >= totalPortals) {
    // Return early from the function
    return;
  }

	// Call border color dictionaries
	let [betweennessCentralityValues, eigenvectorCentralityValues, closenessCentralityValues, betweennessRank, eigenvectorRank, closenessRank, disconnectionPotentialValues, disconnectionPotentialRank] = calculateCentrality(tableData);
	let betweenness_border_ColorDictionary = betweenness_borderColor(betweennessRank);
	let eigenvector_border_ColorDictionary = eigenvector_borderColor(eigenvectorRank);
	let closeness_border_ColorDictionary = closeness_borderColor(eigenvectorRank);
	let disconnectionPotential_border_ColorDictionary = disconnectionPotential_borderColor(disconnectionPotentialRank);

	let [experimentalCentrality,experimentalCentralityRank] = experimentalCentralityFunction(tableData, betweennessCentralityValues, closenessCentralityValues)
	let experimentalCentrality_border_ColorDictionary = experimentalCentrality_borderColor(experimentalCentralityRank)
	
	// Define mouseover, mouseout, and click event handlers
	const mouseoverHandler = function () {
	  if (shouldReturn) {
	    return;
	  }
	  if (!clickedPathsBlizzardsPortals.includes(this.id)) {
	    // Change stroke color to white and stroke width to 3
	    this.style.setProperty("stroke", "white", "important");
	    this.style.setProperty("stroke-width", "3", "important");
	  }
	};
	const mouseoutHandler = function () {
	  if (shouldReturn) {
	    return;
	  }
	  if (!clickedPathsBlizzardsPortals.includes(this.id)) {
	    // Reset stroke color and width according to the selected centrality measure
	    let value = tableData.find(row => row['A'] === this.id)['F'];
	    let border_color;
	    if (centralityMenu.value === "standard") {
	      if (value >= 12) {
	        value = 12;
	      }
	      border_color = colorDarktionary[value];
	    } else if (centralityMenu.value === "betweenness") {
	      let betweennessPosition = tableData.find(row => row['A'] === this.id)['I'];
	      border_color = betweenness_border_ColorDictionary[betweennessPosition];
	    } else if (centralityMenu.value === "eigenvector") {
	      let eigenvectorPosition = tableData.find(row => row['A'] === this.id)['K'];
	      border_color = eigenvector_border_ColorDictionary[eigenvectorPosition];
	    } else if (centralityMenu.value === "closeness") {
	      let closenessPosition = tableData.find(row => row['A'] === this.id)['M'];
	      border_color = closeness_border_ColorDictionary[closenessPosition];
	    } else if (centralityMenu.value === "disconnectionPotential") {
	      let disconnectionPotentialPosition = tableData.find(row => row['A'] === this.id)['O'];
	      border_color = disconnectionPotential_border_ColorDictionary[disconnectionPotentialPosition];
	    } else if (centralityMenu.value === "experimentalCentrality") {
	      let experimentalCentralityPosition = tableData.find(row => row['A'] === this.id)['Q'];
	      border_color = experimentalCentrality_border_ColorDictionary[experimentalCentralityPosition];
	    }
		this.style.setProperty("stroke", border_color, "important");
		this.style.setProperty("stroke-width", "2", "important");
	  }
	}
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
    // Check if path is NOT in clickedPathsBlizzardsPortals array
    if (!clickedPathsBlizzardsPortals.includes(this.id)) {
	// Create an image element and set its attributes
	var image = document.createElementNS(
	  "http://www.w3.org/2000/svg",
	  "image"
	);
	image.setAttributeNS(
	  "http://www.w3.org/1999/xlink",
	  "href",
	  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/portal.png"
	);

	// Set a custom attribute to store the id of the clicked path
	image.setAttribute("data-path-id", this.id);

	// Store the value of this.id in a variable
	var pathId = this.id;

	// Find matching row in CSV data
	var csvRow = csvData.find(function (row) {
	  return row["Range"] === pathId;
	});

      // Get coordinates from CSV data
      var x = csvRow["Pixel Pair 1"];
      var y = csvRow["Pixel Pair 2"];

      // Set pointer-events attribute of the image element to none
      image.setAttribute("pointer-events", "none");

      // Append the image to the SVG
      svgElement.appendChild(image);

      // Add an event listener to the image element to update its x and y attributes after it has been loaded
      image.addEventListener("load", function() {
        // Get the bounding box of the image element
        var bbox = image.getBBox();

        // Update the x and y attributes of the image element to center it over the clicked area
        image.setAttribute("x", x - bbox.width / 2);
        image.setAttribute("y", y - bbox.height / 2);

        // Rotate the image a random number of degrees between 0 and 359 around its center point
        var angle = Math.floor(Math.random() * 360);
        var cx = x;
        var cy = y;
        image.setAttribute(
          "transform",
          "rotate(" + angle + " " + cx + " " + cy + ")"
        );
      });

      // Add clicked path to arrays; push to history
      portalArray.push(this.id);
      clickedPathsBlizzardsPortals.push(this.id);
      history.push({ type: 'addPortal', pathId: this.id });

       // Check if size of blizzardArray is greater than or equal to totalBlizzards
       if (portalArray.length >= totalPortals) {
         // Remove existing event listeners from elements in paths array
         paths.forEach(function (path) {
           path.removeEventListener("mouseover", mouseoverHandler);
           path.removeEventListener("mouseout", mouseoutHandler);
           path.removeEventListener("click", clickHandler);
         });
     	       document.getElementById("stopButton").innerHTML = "Stop Editing";
		// Set the regular background color to white
		document.getElementById("stopButton").style.backgroundColor = "white";
		// Set the hover background color to white
		var styleElement = document.createElement("style");
		styleElement.id = "stopButtonHoverStyle";
		styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
		document.head.appendChild(styleElement);

	       generateMap();
	       return;
       }

       // Execute generateMap function
       generateMap();
    }
  };

  // Add event listeners to elements in paths array
  paths.forEach(function (path) {
    path.addEventListener("mouseover", mouseoverHandler);
    path.addEventListener("mouseout", mouseoutHandler);
    path.addEventListener("click", clickHandler);
  });
}

function button_StopEditing() {
  stopEditing();
}

function button_Undo() {
  undo();
}
	
function button_AddBlizzards() {
  addBlizzards();
}

function button_AddPortals() {
  addPortals();
}
	
function eraser() {
  // Immediately return if the size of the clickedPathsBlizzardsPortals array is empty
  if (clickedPathsBlizzardsPortals.length === 0) {
    return;
  }
  let shouldReturn = false;
  document.getElementById("stopButton").innerHTML = "Stop Erasing";
	// Set the regular background color to green
	document.getElementById("stopButton").style.backgroundColor = "#4caf50";
	// Set the hover background color to dark green
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: #3e8e41 !important; }";
	document.head.appendChild(styleElement);

  const blizzardButtonClick = function () {
    shouldReturn = true;
  };
  const portalButtonClick = function () {
    shouldReturn = true;
  };
  const eraserButtonClick = function () {
    shouldReturn = true;
  };
  const stopButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);

	// Call border color dictionaries
	let [betweennessCentralityValues, eigenvectorCentralityValues, closenessCentralityValues, betweennessRank, eigenvectorRank, closenessRank, disconnectionPotentialValues, disconnectionPotentialRank] = calculateCentrality(tableData);
	let betweenness_border_ColorDictionary = betweenness_borderColor(betweennessRank);
	let eigenvector_border_ColorDictionary = eigenvector_borderColor(eigenvectorRank);
	let closeness_border_ColorDictionary = closeness_borderColor(eigenvectorRank);
	let disconnectionPotential_border_ColorDictionary = disconnectionPotential_borderColor(disconnectionPotentialRank);

	let [experimentalCentrality,experimentalCentralityRank] = experimentalCentralityFunction(tableData, betweennessCentralityValues, closenessCentralityValues)
	let experimentalCentrality_border_ColorDictionary = experimentalCentrality_borderColor(experimentalCentralityRank)
	
	// Define mouseover, mouseout, and click event handlers
	const mouseoverHandler = function () {
	  if (shouldReturn) {
	    return;
	  }
	  if (clickedPathsBlizzardsPortals.includes(this.id)) {
	    // Change stroke color to #ff1111 and stroke width to 4
	    this.style.setProperty("stroke", "#ff1111", "important");
	    this.style.setProperty("stroke-width", "4", "important");
	  }
	};
	const mouseoutHandler = function () {
	  if (shouldReturn) {
	    return;
	  }
	  if (clickedPathsBlizzardsPortals.includes(this.id)) {
	    if (blizzardArray.includes(this.id)) {
	      // Change stroke color to white and stroke width to 1
	      this.style.setProperty("stroke", "white", "important");
	      this.style.setProperty("stroke-width", "1", "important");
	    } else if (portalArray.includes(this.id)) {
	      // Reset stroke color and width according to the selected centrality measure
	      let border_color;
	      if (centralityMenu.value === "standard") {
	        let value = tableData.find(row => row['A'] === this.id)['F'];
	        if (value >= 12) {
	          value = 12;
	        }
	        border_color = colorDarktionary[value];
	      } else if (centralityMenu.value === "betweenness") {
	        let betweennessPosition = tableData.find(row => row['A'] === this.id)['I'];
	        border_color = betweenness_border_ColorDictionary[betweennessPosition];
	      } else if (centralityMenu.value === "eigenvector") {
	        let eigenvectorPosition = tableData.find(row => row['A'] === this.id)['K'];
	        border_color = eigenvector_border_ColorDictionary[eigenvectorPosition];
	      } else if (centralityMenu.value === "closeness") {
	        let closenessPosition = tableData.find(row => row['A'] === this.id)['M'];
	        border_color = closeness_border_ColorDictionary[closenessPosition];
	      } else if (centralityMenu.value === "disconnectionPotential") {
	        let disconnectionPotentialPosition = tableData.find(row => row['A'] === this.id)['O'];
	        border_color = disconnectionPotential_border_ColorDictionary[disconnectionPotentialPosition];
	      } else if (centralityMenu.value === "experimentalCentrality") {
		let experimentalCentralityPosition = tableData.find(row => row['A'] === this.id)['Q'];
		border_color = experimentalCentrality_border_ColorDictionary[experimentalCentralityPosition];
	      }
	      this.style.setProperty("stroke", border_color, "important");
	      this.style.setProperty("stroke-width", "2", "important");
	    }
	  }
	};
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
    // Check if path is in clickedPathsBlizzardsPortals array
    if (clickedPathsBlizzardsPortals.includes(this.id)) {
      // Remove clicked path from clickedPathsBlizzardsPortals array
      clickedPathsBlizzardsPortals = clickedPathsBlizzardsPortals.filter(
        (path) => path !== this.id
      );

      // Check if path is in blizzardArray
      if (blizzardArray.includes(this.id)) {
        // Remove clicked path from blizzardArray; push to history
        blizzardArray = blizzardArray.filter((path) => path !== this.id);
	history.push({ type: 'eraseBlizzard', pathId: this.id });

        // Remove blizzard fill from clicked path
        var clipPathId = "blizzard-clip-" + this.id;
        var clipPath = document.getElementById(clipPathId);
        if (clipPath) {
          clipPath.remove();
        }
      }

      // Check if path is in portalArray
      if (portalArray.includes(this.id)) {
        // Remove clicked path from portalArray; push to history
        portalArray = portalArray.filter((path) => path !== this.id);
	history.push({ type: 'erasePortal', pathId: this.id });

        // Store the value of this.id in a variable
        var clickedPathId = this.id;

        // Remove portal image overlay from clicked path
        var images = svgElement.querySelectorAll("image");
        images.forEach(function (image) {
          // Check if the data-path-id attribute of the image matches the id of the clicked path
          if (image.getAttribute("data-path-id") === clickedPathId) {
            // Remove the image
            image.remove();
          }
        });
      }

      // Call generateMap function
      generateMap();

      // Check if clickedPathsBlizzardsPortals array is empty
      if (clickedPathsBlizzardsPortals.length === 0) {
	document.getElementById("stopButton").innerHTML = "Stop Editing";
	// Set the regular background color to white
	document.getElementById("stopButton").style.backgroundColor = "white";
	// Set the hover background color to white
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
	document.head.appendChild(styleElement);
        return;
      }
    }
  };

  // Add event listeners to elements in paths array
  paths.forEach(function (path) {
    path.addEventListener("mouseover", mouseoverHandler);
    path.addEventListener("mouseout", mouseoutHandler);
    path.addEventListener("click", clickHandler);
  });
}

function addPortals_pathID(pathID) {
  // Find the path element with the specified pathID
  let path = Array.from(paths).find((path) => path.getAttribute("id") === pathID);

  // Create an image element and set its attributes
  var image = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image"
  );
  image.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/portal.png"
  );

  // Set a custom attribute to store the id of the clicked path
  image.setAttribute("data-path-id", pathID);

  // Store the value of pathID in a variable
  var clickedPathId = pathID;

  // Find matching row in CSV data
  var csvRow = csvData.find(function (row) {
    return row["Range"] === clickedPathId;
  });

  // Get coordinates from CSV data
  var x = csvRow["Pixel Pair 1"];
  var y = csvRow["Pixel Pair 2"];

  // Set pointer-events attribute of the image element to none
  image.setAttribute("pointer-events", "none");

  // Append the image to the SVG
  svgElement.appendChild(image);

  // Add an event listener to the image element to update its x and y attributes after it has been loaded
  image.addEventListener("load", function () {
    // Get the bounding box of the image element
    var bbox = image.getBBox();

    // Update the x and y attributes of the image element to center it over the clicked area
    image.setAttribute("x", x - bbox.width / 2);
    image.setAttribute("y", y - bbox.height / 2);

    // Rotate the image a random number of degrees between 0 and 359 around its center point
    var angle = Math.floor(Math.random() * 360);
    var cx = x;
    var cy = y;
    image.setAttribute(
      "transform",
      "rotate(" + angle + " " + cx + " " + cy + ")"
    );
  });

   // Add clicked path to arrays; push to history
   portalArray.push(pathID);
   clickedPathsBlizzardsPortals.push(pathID);

   // Execute generateMap function
   generateMap();
   return;
}
	
// Update button text on page load
updateButtonText();

function updateButtonText() {
    // Update "Add Blizzards" button text
    if (totalBlizzards - blizzardArray.length <= 0) {
        document.getElementById("blizzardButton").innerHTML = "Added all Blizzards";
    } else {
        document.getElementById("blizzardButton").innerHTML = "Add Blizzards (" + (totalBlizzards - blizzardArray.length) + " left)";
    }

    // Update "Add Portals" button text
    if (totalPortals - portalArray.length <= 0) {
        document.getElementById("portalButton").innerHTML = "Added all Portals";
    } else {
        document.getElementById("portalButton").innerHTML = "Add Portals (" + (totalPortals - portalArray.length) + " left)";
    }
}

// Create an array to store the history of actions
let history = [];

// Add an event listener for the keydown event to the document object
document.addEventListener('keydown', function(event) {
  // Check if the ctrlKey property is true and if the key property is equal to 'z'
  if (event.ctrlKey && event.key === 'z') {
    // Call the undo function
    undo();
  }
});

function undo() {
  // Check if the history array is not empty
  if (history.length > 0) {
    // Get the last action from the history array
    let lastAction = history.pop();

    // Check the type of the last action
    if (lastAction.type === 'addBlizzard') {
      // Remove the last blizzard from the blizzardArray
      blizzardArray.pop();

      // Remove the last blizzard fill from the map
      let clipPathId = 'blizzard-clip-' + lastAction.pathId;
      let clipPath = document.getElementById(clipPathId);
      if (clipPath) {
        clipPath.remove();
      }

      // Remove the id of the undone path from the clickedPathsBlizzardsPortals array
      let index = clickedPathsBlizzardsPortals.indexOf(lastAction.pathId);
      if (index !== -1) {
        clickedPathsBlizzardsPortals.splice(index, 1);
      }
	  generateMap();
    } else if (lastAction.type === 'addPortal') {
      // Remove the last portal from the portalArray
      portalArray.pop();

      // Remove the last portal image from the map
      let images = svgElement.querySelectorAll('image');
      images.forEach(function(image) {
        // Check if the data-path-id attribute of the image matches the id of the last portal
        if (image.getAttribute('data-path-id') === lastAction.pathId) {
          // Remove the image
          image.remove();
        }
      });

      // Remove the id of the undone path from the clickedPathsBlizzardsPortals array
      let index = clickedPathsBlizzardsPortals.indexOf(lastAction.pathId);
      if (index !== -1) {
        clickedPathsBlizzardsPortals.splice(index, 1);
      }
	  generateMap();
    } else if (lastAction.type === 'eraseBlizzard') {
	  addBlizzards_pathID(lastAction.pathId);
    } else if (lastAction.type === 'erasePortal') {
	  addPortals_pathID(lastAction.pathId);
    }
  }
}
