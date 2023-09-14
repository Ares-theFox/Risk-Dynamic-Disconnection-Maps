const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let mapselected = "test";
if (urlParams.has('map')) {
	mapselected = urlParams.get('map');
	console.log(urlParams.get('map'));
}

console.log("Testing 70% pathing 49 pass")

const mapUrls = {
	"boston": {
		"prettyname": "Boston",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Boston.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Boston%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"brazil": {
		"prettyname": "Brazil",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Brazil.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Brazil%20blizzard%20pattern.png",
		"totalBlizzards": 2,
		"totalPortals": 4
	},
	"castle": {
		"prettyname": "Castle",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Castle.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Castle%20blizzard%20pattern.png",
		"totalBlizzards": 2,
		"totalPortals": 4
	},
	"classic": {
		"prettyname": "Classic",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Classic.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Classic%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"dino_canyon": {
		"prettyname": "Dino Canyon",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Dino%20Canyon.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Dino%20Canyon%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"dicey_trajectories": {
		"prettyname": "Dicey Trajectories",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Dicey%20Trajectories.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Dicey%20Trajectories%20blizzard%20pattern.png",
		"totalBlizzards": 2,
		"totalPortals": 4
	},
	"dino_world": {
		"prettyname": "Dino World",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Dino%20World.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Dino%20World%20blizzard%20pattern.png",
		"totalBlizzards": 2,
		"totalPortals": 4
	},
	"france": {
		"prettyname": "France",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/France.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/France%20blizzard%20pattern.png",
		"totalBlizzards": 2,
		"totalPortals": 4
	},
	"jules_verne": {
		"prettyname": "Jules Verne",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Jules%20Verne.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Jules%20Verne%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"mother_of_all_boards": {
		"prettyname": "Mother of all Boards",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Mother%20of%20all%20Boards.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Mother%20of%20all%20Boards%20blizzard%20pattern.png",
		"totalBlizzards": 2,
		"totalPortals": 4
	},
	"nan_madol": {
		"prettyname": "Nan Madol",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Nan%20Madol.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Nan%20Madol%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"roman_empire": {
		"prettyname": "Roman Empire",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Roman%20Empire.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Roman%20Empire%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"simple_world": {
		"prettyname": "Simple World",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Simple%20World.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Simple%20World%20blizzard%20pattern.png",
		"totalBlizzards": 2,
		"totalPortals": 4
	},
	"supermax_prison": {
		"prettyname": "Supermax Prison",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Supermax%20Prison.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/Supermax%20Prison%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"united_states": {
		"prettyname": "United States",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/United%20States.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/United%20States%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
	"world_conquest": {
		"prettyname": "World Conquest",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/World%20Conquest.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/World%20Conquest%20blizzard%20pattern.png",
		"totalBlizzards": 3,
		"totalPortals": 5
	},
}

let imgElement = document.getElementById("map");
imgElement.src = mapUrls[mapselected].baseurl;

let title = document.getElementById("mapnametitle");
title.textContent = mapUrls[mapselected].prettyname;

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

// Set initial variables
var colorLegend = mapUrls[mapselected].prettyname;
var csvData = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/" + colorLegend + "%20Master%20File.csv";
var SVG = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/" + colorLegend + "%20Paths.svg";
var BlizzardPattern = blizzardPatternImage.src;
var totalBlizzards = mapUrls[mapselected].totalBlizzards;
var totalPortals = mapUrls[mapselected].totalPortals;

let blizzardArray = []
let portalArray = []
let clickedPathsBlizzardsPortals = []

let runOrigin = []
let pathArray = []
let forcePath = []

let whiteNodes = []
let blackNodes = []
let redNodes = []
let pinkNodes = []
let purpleNodes = []
let blueNodes = []
let greenNodes = []
let yellowNodes = []
let orangeNodes = [];

const colorDictionary = {
  0: "#ffffff",
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
 0: "#808080",
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

var custom_white = "#ffffff"
var custom_black = "#000000"
var custom_red = "#c73a3a"
var custom_pink = "#c944a2"
var custom_purple = "#7a3bd6"
var custom_blue = "#3b91d6"
var custom_green = "#8dbd57"
var custom_yellow = "#FDDA0D"
var custom_orange = "#d56e32"

var customBorder_white = "#808080"
var customBorder_black = "#000000"
var customBorder_red = "#641D1D"
var customBorder_pink = "#652251"
var customBorder_purple = "#3D1E6B"
var customBorder_blue = "#1E496B"
var customBorder_green = "#475F2C"
var customBorder_yellow = "#7F6D07"
var customBorder_orange = "#6B3719"


// Centrality Menu
var seventyMenuContainer = document.getElementById("seventyMenuContainer");
seventyMenuContainer.style.display = "none";
ownershipMenu = document.getElementById("assignOwnershipSelect");

var selectMenuContainer = document.getElementById("selectMenuContainer");
selectMenuContainer.style.display = "none";
centralityMenu = document.getElementById("centralityType");
centralityMenu.addEventListener("change", function() {
  generateMap();
  if (centralityMenu.value === "seventy") {
    seventyMenuContainer.style.display = "";
  } else {
    seventyMenuContainer.style.display = "none";
  }
});

// Hidden menu shenanigans
var sequence = [
  { button: "blizzardButton", count: totalBlizzards },
  { button: "portalButton", count: totalPortals }
];
var sequenceIndex = 0;
var sequenceCount = 0;
var sequenceCompleted = false;
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
  button.addEventListener("click", clickHandler);
});

// Load the CSVs and push to tableData
let tableData;
let tableDataClone;
Papa.parse(
  csvData,
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
      // Filter the input data
      let filteredTableData = [];
      for (let i = 0; i < tableData.length; i++) {
          let row = tableData[i];
          if (typeof row === 'object' && row.hasOwnProperty('Territory') && row.hasOwnProperty('Connections')) {
              if (typeof row['Territory'] === 'string' && typeof row['Connections'] === 'string') {
                  filteredTableData.push(row);
              }
          }
      }
      // Assign filtered data to tableData and create a clone
      tableData = filteredTableData;
      tableDataClone = JSON.parse(JSON.stringify(tableData));
      onRequestComplete();
    },
  }
);

// Preload CSVs before generating the map
var requestsCompleted = 0;
function onRequestComplete() {
  requestsCompleted++;
  if (requestsCompleted === 2) {
    // Both requests have completed, so call the generateMap function
    generateMap();
  }
}

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

// FUNCTION: stop editing
function stopEditing() {
	// Set the regular background color to white
	document.getElementById("stopButton").style.backgroundColor = "white";
	// Set the hover background color to white
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
	document.head.appendChild(styleElement);
	return;
}




// FUNCTION: assign run origin nodes
function clearRunOrigin() {
   runOrigin.length = 0;
	pathArray.length = 0;
	generateMap();
}




// FUNCTION: assign run origin nodes
function runOriginFunction() {
  let shouldReturn = false;
  document.getElementById("stopButton").innerHTML = "Stop Assigning Run Origin";
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
  const assignOwnershipClick = function () {
    shouldReturn = true;
  };
  const assignTroopsClick = function () {
    shouldReturn = true;
  };
  const runOriginButtonClick = function () {
    shouldReturn = true;
  };
  const forcePathButtonClick = function () {
    shouldReturn = true;
  };
  const clearForcePathButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);
  document.getElementById("assignOwnership").addEventListener("click", assignOwnershipClick);
  document.getElementById("assignTroops").addEventListener("click", assignTroopsClick);
  document.getElementById("runOriginButton").addEventListener("click", runOriginButtonClick);
  document.getElementById("clearForcePathButton").addEventListener("click", clearForcePathButtonClick);
	
// Define mouseover, mouseout, and click event handlers
const mouseoverHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id) && !runOrigin.includes(this.id)) {
    // Change stroke color to white and stroke width to 3
    this.style.setProperty("stroke", "white", "important");
    this.style.setProperty("stroke-width", "3", "important");
  }
};
	
const mouseoutHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id) && !runOrigin.includes(this.id)) {
    // Reset stroke color and width according to the selected centrality measure
    let border_color = tableData.find(row => row['Territory'] === this.id)['Ownership Border Color']
	this.style.setProperty("stroke", border_color, "important");
	this.style.setProperty("stroke-width", "2", "important");
  }
}
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
	  
	// Check if path is NOT in array
	if (!blizzardArray.includes(this.id) && !runOrigin.includes(this.id)) {
	runOrigin.push(this.id);

    // Check if size of blizzardArray is greater than or equal to totalBlizzards
    if (blizzardArray.length >= 999) {
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

// FUNCTION: clear force path
function clearForcePathFunction() {
  forcePath.length = 0;
	generateMap();
}

// FUNCTION: force path
function forcePathFunction() {
  let shouldReturn = false;
  document.getElementById("stopButton").innerHTML = "Stop Forcing Path";
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
  const assignOwnershipClick = function () {
    shouldReturn = true;
  };
  const assignTroopsClick = function () {
    shouldReturn = true;
  };
  const runOriginButtonClick = function () {
    shouldReturn = true;
  };
  const forcePathButtonClick = function () {
    shouldReturn = true;
  };
  const clearForcePathButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);
  document.getElementById("assignOwnership").addEventListener("click", assignOwnershipClick);
  document.getElementById("assignTroops").addEventListener("click", assignTroopsClick);
  document.getElementById("runOriginButton").addEventListener("click", runOriginButtonClick);
  document.getElementById("clearForcePathButton").addEventListener("click", clearForcePathButtonClick);
	
// Define mouseover, mouseout, and click event handlers
const mouseoverHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id) && !runOrigin.includes(this.id)) {
    // Change stroke color to white and stroke width to 3
    this.style.setProperty("stroke", "white", "important");
    this.style.setProperty("stroke-width", "3", "important");
  }
};
	
const mouseoutHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id) && !runOrigin.includes(this.id)) {
    // Reset stroke color and width according to the selected centrality measure
    let border_color = tableData.find(row => row['Territory'] === this.id)['Ownership Border Color']
	this.style.setProperty("stroke", border_color, "important");
	this.style.setProperty("stroke-width", "2", "important");
  }
}
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
	  
	// Check if path is NOT in array
	if (!blizzardArray.includes(this.id) && !runOrigin.includes(this.id)) {
	forcePath.push(this.id);
		console.log("Forced Paths: " + forcePath)

    // Check if size of blizzardArray is greater than or equal to totalBlizzards
    if (blizzardArray.length >= 999) {
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









// FUNCTION: assign ownership
function assignOwnershipFunction() {
  let shouldReturn = false;
  document.getElementById("stopButton").innerHTML = "Stop Assigning Ownership";
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
  const assignOwnershipClick = function () {
    shouldReturn = true;
  };
  const assignTroopsClick = function () {
    shouldReturn = true;
  };
  const runOriginButtonClick = function () {
    shouldReturn = true;
  };
  const forcePathButtonClick = function () {
    shouldReturn = true;
  };
  const clearForcePathButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);
  document.getElementById("assignOwnership").addEventListener("click", assignOwnershipClick);
  document.getElementById("assignTroops").addEventListener("click", assignTroopsClick);
  document.getElementById("runOriginButton").addEventListener("click", runOriginButtonClick);
  document.getElementById("clearForcePathButton").addEventListener("click", clearForcePathButtonClick);
	
// Define mouseover, mouseout, and click event handlers
const mouseoverHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id)) {
    // Change stroke color to white and stroke width to 3
    this.style.setProperty("stroke", "white", "important");
    this.style.setProperty("stroke-width", "3", "important");
  }
};
	
const mouseoutHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id)) {
    // Reset stroke color and width according to the selected centrality measure
    let border_color = tableData.find(row => row['Territory'] === this.id)['Ownership Border Color']
	this.style.setProperty("stroke", border_color, "important");
	this.style.setProperty("stroke-width", "2", "important");
  }
}
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
	  
	// Check if path is NOT in clickedPathsBlizzardsPortals array
	if (!blizzardArray.includes(this.id)) {
	
		function removeFromArray(array, item) {
		  var index = array.indexOf(item);
		  if (index !== -1) {
		    array.splice(index, 1);
		  }
		}
	
	  // Clear this.id from all arrays
	  removeFromArray(whiteNodes, this.id);
	  removeFromArray(blackNodes, this.id);
	  removeFromArray(redNodes, this.id);
	  removeFromArray(pinkNodes, this.id);
	  removeFromArray(purpleNodes, this.id);
	  removeFromArray(blueNodes, this.id);
	  removeFromArray(greenNodes, this.id);
	  removeFromArray(yellowNodes, this.id);
	  removeFromArray(orangeNodes, this.id);
	
	  // Add this.id to the appropriate array
	  if (ownershipMenu.value === "white") {
	    whiteNodes.push(this.id);
	  } else if (ownershipMenu.value === "black") {
	    blackNodes.push(this.id);
	  } else if (ownershipMenu.value === "red") {
	    redNodes.push(this.id);
	  } else if (ownershipMenu.value === "pink") {
	    pinkNodes.push(this.id);
	  } else if (ownershipMenu.value === "purple") {
	    purpleNodes.push(this.id);
	  } else if (ownershipMenu.value === "blue") {
	    blueNodes.push(this.id);
	  } else if (ownershipMenu.value === "green") {
	    greenNodes.push(this.id);
	  } else if (ownershipMenu.value === "yellow") {
	    yellowNodes.push(this.id);
	  } else if (ownershipMenu.value === "orange") {
	    orangeNodes.push(this.id);
	  }

    // Check if size of blizzardArray is greater than or equal to totalBlizzards
    if (blizzardArray.length >= 999) {
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
	






// FUNCTION: assign ownership
function assignTroopsFunction() {
  let shouldReturn = false;
  document.getElementById("stopButton").innerHTML = "Stop Assigning Troops";
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
  const assignOwnershipClick = function () {
    shouldReturn = true;
  };
  const assignTroopsClick = function () {
    shouldReturn = true;
  };
  const runOriginButtonClick = function () {
    shouldReturn = true;
  };
  const forcePathButtonClick = function () {
    shouldReturn = true;
  };
  const clearForcePathButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);
  document.getElementById("assignOwnership").addEventListener("click", assignOwnershipClick);
  document.getElementById("assignTroops").addEventListener("click", assignTroopsClick);
  document.getElementById("runOriginButton").addEventListener("click", runOriginButtonClick);
  document.getElementById("clearForcePathButton").addEventListener("click", clearForcePathButtonClick);
	
// Define mouseover, mouseout, and click event handlers
const mouseoverHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id)) {
    // Change stroke color to white and stroke width to 3
    this.style.setProperty("stroke", "white", "important");
    this.style.setProperty("stroke-width", "3", "important");
  }
};
	
const mouseoutHandler = function () {
  if (shouldReturn) {
    return;
  }
  if (!blizzardArray.includes(this.id)) {
    // Reset stroke color and width according to the selected centrality measure
    let border_color = tableData.find(row => row['Territory'] === this.id)['Ownership Border Color']
	this.style.setProperty("stroke", border_color, "important");
	this.style.setProperty("stroke-width", "2", "important");
  }
}
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
	  
	// Check if path is NOT in array
	if (!blizzardArray.includes(this.id)) {
	  // Get the current value of troopCountInput
	  var troopCount = document.getElementById("troopCountInput").value;
	
	  // Iterate over tableData
	  for (var i = 0; i < tableData.length; i++) {
	    // Check if Territory matches this.id
	    if (tableData[i]["Territory"] === this.id) {
	      // Update TroopCount
	      tableDataClone[i]["TroopCount"] = troopCount;
	      break;  // Exit loop since we found the matching Territory
	    }
	  }
		
    // Check if size of blizzardArray is greater than or equal to totalBlizzards
    if (blizzardArray.length >= 999) {
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

// Define the border colors for each selfColor
var pathBorderColors = {
    "white": custom_white,
    "black": custom_black,
    "red": custom_red,
    "pink": custom_pink,
    "purple": custom_purple,
    "blue": custom_blue,
    "green": custom_green,
    "yellow": custom_yellow,
    "orange": custom_orange
};

// Get the select element
let selfColorElement = document.getElementById('selfColor');
var pathBorderColor;
let selfColor;

// Add an event listener for the change event
selfColorElement.addEventListener('change', function() {
    // Get the value of the selected option
    selfColor = this.value;

    // Get the border color for the selected selfColor
    pathBorderColor = pathBorderColors[selfColor];

    // Now you can use borderColor in your function
    clearRunOrigin();
	generateMap();
});


function findOptimalPath(tableData, selfColor, runOrigin, pathArray, forcePath) {
    // Clear the pathArray
    pathArray.length = 0;
	var maxOperations = document.getElementById("maxOperations").value;
	maxOperations = Number(maxOperations); // Convert the value to a number

    // Calculate the number of nodes required to win the game
    let totalNodes = tableData.filter(row => row.Blizzard !== 1).length;
    let seventy = Math.ceil(totalNodes * 0.7);
    let ownedNodes = tableData.reduce((sum, row) => sum + row[selfColor + 'Owned'], 0);
    let nodesToCapture = seventy - ownedNodes;

    // Get all non-selfColor-owned nodes and not in runOrigin
    let candidateNodes = tableData.filter(row => row[selfColor + 'Owned'] !== 1 && row.Blizzard !== 1 && !runOrigin.includes(row.Territory));

    // Sort candidateNodes by TroopCount in ascending order
    candidateNodes.sort((a, b) => a.TroopCount - b.TroopCount);

	// Helper function to generate a random combination of a certain size
	function getRandomCombination(nodes, size) {
	    // Start with the forcePath nodes and the nodes from the lower third
	    var result = forcePath.map(name => nodes.find(node => node.Territory === name));
	    var lowerThird = Math.floor(nodes.length / 3);
	    for (let i = 0; i < lowerThird; i++) {
	        if (!result.includes(nodes[i])) {
	            result.push(nodes[i]);
	        }
	    }
	
	    // Fill the rest of the combination with random nodes from the middle and upper third
	    while (result.length < size) {
	        let randomIndex = lowerThird + Math.floor(Math.random() * (nodes.length - lowerThird));
	        let node = nodes[randomIndex];
	        if (!result.includes(node)) {
	            result.push(node);
	        }
	    }
	
	    return result;
	}

    // Placeholder for the optimal combination and its total troop count
    let optimalCombination = [];
    let minTroopCount = Infinity;

    // Helper function to check if a node connects to runOrigin nodes or any node in the current optimal combination
    function isConnected(combination) {
        let connectedNodes = [...runOrigin];
        for (let i = 0; i < combination.length; i++) {
            let node = combination[i];
            let connections = node.Connections.split(',');
            if (connections.some(connection => connectedNodes.includes(connection))) {
                connectedNodes.push(node.Territory);
            } else {
                return false;
            }
        }
        return true;
    }

    // Check combinations up to the limit of operations
    for (let i = 0; i < maxOperations; i++) {
	    if (i % 10000 === 0) {
	        console.log('Considering set', i + 1);
	    }
	    
        // Generate a random combination of nodesToCapture nodes
        let combination = getRandomCombination(candidateNodes, nodesToCapture);

        if (isConnected(combination)) {
            let troopCount = combination.reduce((sum, node) => sum + node.TroopCount, 0);
            if (troopCount < minTroopCount) {
                optimalCombination = combination;
                minTroopCount = troopCount;
            }
        }
        
        // If we've reached the limit of combinations, break out of the loop
        if (i >= (maxOperations-1)) break;
    }

    // Push the territories in the optimal combination into pathArray
    optimalCombination.forEach(row => pathArray.push(row.Territory));
	generateMap();
    
	console.log("Path Array: " + pathArray)
	console.log("Total Number of Nodes: " + totalNodes)
	console.log("70%: " + seventy)
	console.log("Number of Owned nodes: " + ownedNodes)
	console.log("Number of Nodes to Capture: " + nodesToCapture)
	
	return pathArray;
}














// FUNCTION: calculate centrality
function stats(values) {
    let sum = 0;
    let count = 0;
    for (let value of values) {
        if (value !== undefined) {
            sum += value;
            count += 1;
        }
    }
    let mean = sum / count;
    let squaredDifferences = values.map(value => {
        if (value !== undefined) {
            let difference = value - mean;
            return difference * difference;
        }
    });
    let squaredDifferencesSum = 0;
    for (let squaredDifference of squaredDifferences) {
        if (squaredDifference !== undefined) {
            squaredDifferencesSum += squaredDifference;
        }
    }
    let stdDev = Math.sqrt(squaredDifferencesSum / count);
    return {mean: mean, stdDev: stdDev};
}

function rgbToHex(rgb) {
    return "#" + rgb.map(x => x.toString(16).padStart(2, "0")).join("");
}

function calculateColor(tableData, columnName, stats) {
    let min = stats.mean - stats.stdDev;
    let max = stats.mean + stats.stdDev;
    let minColor = [0xFF, 0xED, 0x01];
    let maxColor = [0xCC, 0x00, 0x00];
    let aboveColor = [0x00, 0x00, 0x00];
    let belowColor = [0xFF, 0xFF, 0xFF];

    tableData.forEach(row => {
        let value = row[columnName];
        if (value >= min && value <= max) {
            // Calculate the rank of the value within the stdev range
            let withinValues = tableData.filter(row => row[columnName] >= min && row[columnName] <= max).map(row => row[columnName]);
            withinValues.sort((a, b) => a - b);
            let rank = withinValues.indexOf(value);
            // Calculate the position of the value based on its rank
            let position = rank / (withinValues.length - 1);
            // Calculate the color as a linear interpolation between minColor and maxColor
            let color = minColor.map((c, i) => Math.round(c + position * (maxColor[i] - c)));
            row[columnName + " Color"] = rgbToHex(color);
            // Calculate the border color as the midpoint between the color and black
            let borderColor = color.map(c => Math.round(c / 2));
            row[columnName + " Border Color"] = rgbToHex(borderColor);
        } else if (value > max) {
            // Calculate the rank of the value above the stdev range
            let aboveValues = tableData.filter(row => row[columnName] > max).map(row => row[columnName]);
            aboveValues.sort((a, b) => a - b);
            let rank = aboveValues.indexOf(value);
            // Calculate the position of the value based on its rank
            let position = rank / (aboveValues.length - 1);
            // Calculate the color as a linear interpolation between maxColor and aboveColor
            let color = maxColor.map((c, i) => Math.round(c + position * (aboveColor[i] - c)));
            row[columnName + " Color"] = rgbToHex(color);
            // Calculate the border color as the midpoint between the color and black
            let borderColor = color.map(c => Math.round(c / 2));
            row[columnName + " Border Color"] = rgbToHex(borderColor);

            // Push a 1 to the new column for this row
            row[columnName + " Above STDEV"] = 1;
        } else if (value < min) {
            // Calculate the rank of the value below the stdev range
            let belowValues = tableData.filter(row => row[columnName] < min).map(row => row[columnName]);
            belowValues.sort((a, b) => a - b);
            let rank = belowValues.indexOf(value);
            // Calculate the position of the value based on its rank
            let position = rank / (belowValues.length - 1);
            // Calculate the color as a linear interpolation between belowColor and minColor
            let color = belowColor.map((c, i) => Math.round(c + position * (minColor[i] - c)));
            row[columnName + " Color"] = rgbToHex(color);
            // Calculate the border color as the midpoint between the color and black
            let borderColor = color.map(c => Math.round(c / 2));
            row[columnName + " Border Color"] = rgbToHex(borderColor);

        }

        // Push a 0 to the new column for this row if it is not already set to 1
        if (!row.hasOwnProperty(columnName + " Above STDEV")) {
          row[columnName + " Above STDEV"] = 0;
        }
    });
}

function calculateEigenvector(tableData) {
    let G = new jsnx.Graph();
    tableData.forEach((row, i) => {
        G.addNode(row["Territory"]);
        let connections = row["Connections"].split(",");
        connections.forEach(connection => {
            G.addEdge(row["Territory"], connection);
        });
    });
    let ec = jsnx.eigenvectorCentrality(G,{maxIter:500});
    let eigenvectorValues = [];
    tableData.forEach((row, i) => {
        let eigenvector = ec.get(row["Territory"]);
        row["Eigenvector"] = eigenvector;
	    row["Eigenvector Rounded"] = Math.round(eigenvector * 1000) / 10;
        eigenvectorValues.push(eigenvector);
    });

    // Calculate the average and standard deviation of the "Eigenvector" values
    let eigenvectorStats = stats(eigenvectorValues);

    // Calculate the hex color for each row based on the "Eigenvector" value
    calculateColor(tableData, "Eigenvector", eigenvectorStats);
}

function calculateBetweenness(tableData) {
    let G = new jsnx.Graph();
    tableData.forEach((row, i) => {
        G.addNode(row["Territory"]);
        let connections = row["Connections"].split(",");
        connections.forEach(connection => {
            G.addEdge(row["Territory"], connection);
        });
    });
    let bc = jsnx.betweennessCentrality(G);
    let betweennessValues = [];
    tableData.forEach((row, i) => {
        let betweenness = bc.get(row["Territory"]);
        row["Betweenness"] = betweenness;
	    row["Betweenness Rounded"] = Math.round(betweenness * 1000) / 10;
        betweennessValues.push(betweenness);
    });
    // Calculate the hex color for each row based on the "Betweenness" value
    let betweennessStats = stats(betweennessValues);
    calculateColor(tableData, "Betweenness", betweennessStats);
}

function calculateCloseness(tableData) {
    // Create a list of unique territories
    let territories = [];
    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i]['Connections'] !== '' && !territories.includes(tableData[i]['Territory'])) {
            territories.push(tableData[i]['Territory']);
        }
    }
    // Create an empty adjacency matrix
    let adjacencyMatrix = [];
    for (let i = 0; i < territories.length; i++) {
        adjacencyMatrix.push(new Array(territories.length).fill(0));
    }
    // Populate the adjacency matrix
    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i]['Connections'] !== undefined && tableData[i]['Connections'] !== '') {
            let territory = tableData[i]['Territory'];
            let connections = tableData[i]['Connections'].split(',');
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
	let closenessValues= {};
	for(let i=0;i<territories.length;i++){
		let sumOfDistances=0;
		for(let j=0;j<territories.length;j++){
			sumOfDistances+=dist[i][j];
		}
		closenessValues[territories[i]]=(1/sumOfDistances);
	}
	for(let key in closenessValues){
		closenessValues[key]=Math.round(closenessValues[key]*10000)/10;
	}
	tableData.forEach((row, i) => {
	    row["Closeness"] = closenessValues[row["Territory"]];
	    row["Closeness Rounded"] = Math.round(row["Closeness"] * 10) / 10;
	});
    // Calculate the hex color for each row based on the "Closeness" value
    let closenessStats = stats(Object.values(closenessValues));
    calculateColor(tableData, "Closeness", closenessStats);
}

function calculateCentrality(tableData) {
    calculateEigenvector(tableData);
    calculateBetweenness(tableData);
    calculateCloseness(tableData);
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
	tableData.forEach((row) => {
	  if (blizzardArray.includes(row["Territory"])) {
	    row["Blizzard"] = 1;
	    row["Connections"] = "";
	  } else {
	    row["Blizzard"] = 0;
	    if (row["Connections"]) {
	      let values = row["Connections"].split(",");
	      values = values.filter((value) => !blizzardArray.includes(value));
	      row["Connections"] = values.join(",");
	    }
	  }
	});
	
  	// Add everything contained in the portal array
	tableData.forEach((row) => {
	  if (portalArray.includes(row["Territory"])) {
	    row["Connections"] = [
	      ...new Set([
		...(row["Connections"] ? row["Connections"].split(",") : []),
		...portalArray,
	      ]),
	    ]
	      .filter((value) => value !== row["Territory"])
	      .join(",");
	  }
	});

	// Add everything contained in the color arrays
	tableData.forEach((row) => {
	  if (whiteNodes.includes(row["Territory"])) {
	    row["whiteOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_white;
		  row["Ownership Color"] = custom_white;
	  } else {
	    row["whiteOwned"] = 0;
	  }
	
	  if (blackNodes.includes(row["Territory"])) {
	    row["blackOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_black;
		  row["Ownership Color"] = custom_black;
	  } else {
	    row["blackOwned"] = 0;
	  }

	  if (redNodes.includes(row["Territory"])) {
	    row["redOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_red;
		  row["Ownership Color"] = custom_red;
	  } else {
	    row["redOwned"] = 0;
	  }

	  if (pinkNodes.includes(row["Territory"])) {
	    row["pinkOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_pink;
		  row["Ownership Color"] = custom_pink;
	  } else {
	    row["pinkOwned"] = 0;
	  }

	  if (purpleNodes.includes(row["Territory"])) {
	    row["purpleOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_purple;
		  row["Ownership Color"] = custom_purple;
	  } else {
	    row["purpleOwned"] = 0;
	  }

	  if (blueNodes.includes(row["Territory"])) {
	    row["blueOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_blue;
		  row["Ownership Color"] = custom_blue;
	  } else {
	    row["blueOwned"] = 0;
	  }

	  if (greenNodes.includes(row["Territory"])) {
	    row["greenOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_green;
		  row["Ownership Color"] = custom_green;
	  } else {
	    row["greenOwned"] = 0;
	  }

	  if (yellowNodes.includes(row["Territory"])) {
	    row["yellowOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_yellow;
		  row["Ownership Color"] = custom_yellow;
	  } else {
	    row["yellowOwned"] = 0;
	  }

	  if (orangeNodes.includes(row["Territory"])) {
	    row["orangeOwned"] = 1;
		  row["Ownership Border Color"] = customBorder_orange;
		  row["Ownership Color"] = custom_orange;
	  } else {
	    row["orangeOwned"] = 0;
	  }
	});


    // Calculate new columns
    tableData.forEach((row) => {
      // Non-Unique Indirect Connections: vlookup Connections values and add them + current Territory & Connections
      if (row["Blizzard"] === 0 && row["Connections"] !== "") {
        const searchValues = row["Connections"].split(",");
        let searchResults = [];
        for (const searchValue of searchValues) {
          for (let i = 0; i < tableData.length; i++) {
            if (tableData[i]["Territory"] === searchValue) {
              searchResults.push(tableData[i]["Connections"]);
              break;
            }
          }
        }
        row["Non-Unique Indirect Connections"] = [row["Territory"], row["Connections"], ...searchResults].join(",");
      } else {
        row["Non-Unique Indirect Connections"] = 0
      }

    // Unique Indirect Connections: Remove duplicate values and Territory from Non-Unique Indirect Connections
    if (row["Non-Unique Indirect Connections"] === "" || row["Non-Unique Indirect Connections"] === 0) {
        row["Unique Indirect Connections"] = 0;
    } else {
    row["Unique Indirect Connections"] = [...new Set(row["Non-Unique Indirect Connections"].split(","))]
        .filter((value) => value !== row["Territory"])
        .join(",");
    }
	  
    // Number of Direct Connections: Count how many comma-separated values are in column Connections
    if (row["Blizzard"] === 0 && row["Connections"] !== "") {
      const direct = row["Connections"].split(",");
      const indirect = row["Unique Indirect Connections"].split(",");
      row["Number of Direct Connections"] = Math.min(direct.length, 12);
      row["Number of Indirect Connections"] = indirect.length;
      row["Number of Cap Connections"] = row["Number of Indirect Connections"] - row["Number of Direct Connections"];
    } else {
      row["Number of Direct Connections"] = 0;
      row["Number of Indirect Connections"] = 0;
      row["Number of Cap Connections"] = 0;
    }
  });

  // Call centrality function
  calculateCentrality(tableData);

	// Columns at this point:
	// Territory = nodes
	// Connections = list of direct connections for each node
	// Blizzard = 1 if blizzard, 0 if not
	// Pixel Pair 1, Pixel Pair 2 = pixel coordinates
	// Continent = supernodes
	// Value = continent bonus troops
	// Non-Unique Indirect Connections = non-unique list of indirect connections + the node + the direct connections
	// Unique Indirect Connections = list of unique indirect connections + the direct connections (node value is removed)
	// Number of Direct Connections = integer
	// Number of Indirect Connections = integer
	// Number of Cap Connections = integer number of indirect - number of direct
	// Betweenness = centrality value
	// Betweenness Color = the color for that node
	// Betweenness Border Color = the border color for that node
	// Closeness = centrality value
	// Closeness Color = the color for that node
	// Closeness Border Color = the border color for that node
	// Eigenvector = centrality value
	// Eigenvector Color = the color for that node
	// Eigenvector Border Color = the border color for that node
	
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
    if (tableData[i]["Territory"] === pathId) {
      // Color in the map
      if (tableData[i]["Blizzard"] === 0) {
        // Initial color and border color
        var color = "white";
        var border_color = "#808080";
	var stroke_width = "2"

        // Set color and border color according to tableData
        if (centralityMenu.value === "standard") {
          color = colorDictionary[tableData[i]["Number of Direct Connections"]];
          border_color = colorDarktionary[tableData[i]["Number of Direct Connections"]];
        } else if (centralityMenu.value === "eigenvector") {
          color = tableData[i]["Eigenvector Color"];
          border_color = tableData[i]["Eigenvector Border Color"];
        } else if (centralityMenu.value === "betweenness") {
          color = tableData[i]["Betweenness Color"];
          border_color = tableData[i]["Betweenness Border Color"];
        } else if (centralityMenu.value === "closeness") {
          color = tableData[i]["Closeness Color"];
          border_color = tableData[i]["Closeness Border Color"];
        } else if (centralityMenu.value === "capConnections") {
          color = colorDictionary[Math.min(tableData[i]["Number of Cap Connections"], 12)];
          border_color = colorDarktionary[Math.min(tableData[i]["Number of Cap Connections"], 12)];
        } else if (centralityMenu.value === "seventy") {
          if (whiteNodes.length === 0 && blackNodes.length === 0 && redNodes.length === 0 && pinkNodes.length === 0 && purpleNodes.length === 0 && blueNodes.length === 0 && greenNodes.length === 0 && yellowNodes.length === 0 && orangeNodes.length === 0) {
            color = "transparent";
            border_color = "transparent";
          } else {
            color = tableData[i]["Ownership Color"];
            border_color = pathArray.includes(pathId) ? pathBorderColor : tableData[i]["Ownership Border Color"];
	    stroke_width = pathArray.includes(pathId) ? "5" : "2";
          }
        }
        path.style.setProperty("fill", color, "important");
        path.setAttribute("stroke-opacity", "100");
        path.style.setProperty("stroke", border_color, "important");
        path.style.setProperty("stroke-width", stroke_width, "important");
      }

        // Add text to the specified location from tableData
        if (tableData[i]["Blizzard"] === 0) {
          // Find matching row in CSV data
          var coordinates = tableData.find(function (row) {
            return row["Territory"] === pathId;
          });

          // Get coordinates from CSV data
          var x = coordinates["Pixel Pair 1"];
          var y = coordinates["Pixel Pair 2"];

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

	let condition1 = centralityMenu.value === "standard" && tableData[i]["Number of Direct Connections"] >= 11;
	let condition2 = centralityMenu.value === "eigenvector" && tableData[i]["Eigenvector Above STDEV"] === 1;
	let condition3 = centralityMenu.value === "betweenness" && tableData[i]["Betweenness Above STDEV"] === 1;
	let condition4 = centralityMenu.value === "closeness" && tableData[i]["Closeness Above STDEV"] === 1;
	let condition5 = centralityMenu.value === "capConnections" && tableData[i]["Number of Cap Connections"] >= 11;
	let condition6 = centralityMenu.value === "seventy" && tableData[i]["blackOwned"] === 1;
	let condition7 = centralityMenu.value === "seventy" && tableData[i]["purpleOwned"] === 1;

	  if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7) {
	    text.setAttribute("fill", "white");
	  } else {
	    text.setAttribute("fill", "black");
	  }
		
	  if (centralityMenu.value === "standard") {
	    text.textContent = tableData[i]["Number of Indirect Connections"];
	  } else if (centralityMenu.value === "eigenvector") {
	    text.textContent = tableData[i]["Eigenvector Rounded"];
	  } else if (centralityMenu.value === "betweenness") {
	    text.textContent = tableData[i]["Betweenness Rounded"];
	  } else if (centralityMenu.value === "closeness") {
	    text.textContent = tableData[i]["Closeness Rounded"];
	  } else if (centralityMenu.value === "capConnections") {
	    text.textContent = tableData[i]["Number of Cap Connections"];
	  } else if (centralityMenu.value === "seventy") {
	    text.textContent = tableData[i]["TroopCount"];
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
	// Find the maximum number of direct connections
	var maxConnections = Math.max(...tableData.map((row) => row["Number of Direct Connections"]));
	var maxCapConnections = Math.min(12, Math.max(...tableData.map((row) => row["Number of Cap Connections"])));

	// Get the base image element & define base URL
	var baseImage = document.getElementById("map");
	var baseURL = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/";

	// Decide which image to display
	if (centralityMenu.value !== "standard" && centralityMenu.value !== "capConnections" && centralityMenu.value !== "seventy" ) {
	    baseImage.src = baseURL + colorLegend + "%20Heatmap.png"
	} else if (centralityMenu.value === "standard" && maxConnections < 3) {
	    baseImage.src = baseURL + colorLegend + ".png";
	} else if (centralityMenu.value === "capConnections" && maxCapConnections < 3) {
	    baseImage.src = baseURL + colorLegend + ".png";
	} else if (centralityMenu.value === "standard" && maxConnections >= 3) {
	    baseImage.src = baseURL + colorLegend + "%20" + maxConnections + ".png";
	} else if (centralityMenu.value === "capConnections" && maxCapConnections >= 3) {
	    baseImage.src = baseURL + colorLegend + "%20" + maxCapConnections + ".png";
	} else {
	    baseImage.src = baseURL + colorLegend + ".png";
	}
	
// Create a mapping of node names to indices
let nodeToIndex = {};
let index = 0;
tableData.forEach(row => {
  if (row['Territory'] && !nodeToIndex.hasOwnProperty(row['Territory'])) {
    nodeToIndex[row['Territory']] = index++;
  }
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
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
  let x = nodeToIndex[row['Territory']];
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
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
  if (row['Territory'] && !nodeToIndexClone.hasOwnProperty(row['Territory'])) {
    nodeToIndexClone[row['Territory']] = indexClone++;
  }
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
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
  let x = nodeToIndexClone[row['Territory']];
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
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
    if (row['Territory'] && row['Continent']) {
      if (!continentCounts.hasOwnProperty(row['Continent'])) {
        continentCounts[row['Continent']] = 0;
      }
      continentCounts[row['Continent']]++;
    }
  });
  let blizzardContinentCounts = {};
  blizzardArray.forEach(path => {
    let row = tableData.find(row => row['Territory'] === path);
    if (row && row['Continent']) {
      if (!blizzardContinentCounts.hasOwnProperty(row['Continent'])) {
        blizzardContinentCounts[row['Continent']] = 0;
      }
      blizzardContinentCounts[row['Continent']]++;
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
  const assignOwnershipClick = function () {
    shouldReturn = true;
  };
  const assignTroopsClick = function () {
    shouldReturn = true;
  };
  const runOriginButtonClick = function () {
    shouldReturn = true;
  };
  const forcePathButtonClick = function () {
    shouldReturn = true;
  };
  const clearForcePathButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);
  document.getElementById("assignOwnership").addEventListener("click", assignOwnershipClick);
  document.getElementById("assignTroops").addEventListener("click", assignTroopsClick);
  document.getElementById("runOriginButton").addEventListener("click", runOriginButtonClick);
  document.getElementById("clearForcePathButton").addEventListener("click", clearForcePathButtonClick);

  // Check if size of blizzardArray is greater than or equal to totalBlizzards
  if (blizzardArray.length >= totalBlizzards) {
    // Return early from the function
    return;
  }

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
    let border_color;
    if (centralityMenu.value === "standard") {
      let value = tableData.find(row => row['Territory'] === this.id)['Number of Direct Connections'];
      border_color = colorDarktionary[value];
    } else if (centralityMenu.value === "eigenvector") {
      border_color = tableData.find(row => row['Territory'] === this.id)['Eigenvector Border Color'];
    } else if (centralityMenu.value === "betweenness") {
      border_color = tableData.find(row => row['Territory'] === this.id)['Betweenness Border Color'];
    } else if (centralityMenu.value === "closeness") {
      border_color = tableData.find(row => row['Territory'] === this.id)['Closeness Border Color'];
    } else if (centralityMenu.value === "capConnections") {
      let value = tableData.find(row => row['Territory'] === this.id)['Number of Cap Connections'];
      border_color = colorDarktionary[Math.min(value, 12)];
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
  const assignOwnershipClick = function () {
    shouldReturn = true;
  };
  const assignTroopsClick = function () {
    shouldReturn = true;
  };
  const runOriginButtonClick = function () {
    shouldReturn = true;
  };
  const forcePathButtonClick = function () {
    shouldReturn = true;
  };
  const clearForcePathButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);
  document.getElementById("assignOwnership").addEventListener("click", assignOwnershipClick);
  document.getElementById("assignTroops").addEventListener("click", assignTroopsClick);
  document.getElementById("runOriginButton").addEventListener("click", runOriginButtonClick);
  document.getElementById("clearForcePathButton").addEventListener("click", clearForcePathButtonClick);

  // Check if size of portalArray is greater than or equal to totalPortals
  if (portalArray.length >= totalPortals) {
    // Return early from the function
    return;
  }

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
	    let border_color;
	    if (centralityMenu.value === "standard") {
	      let value = tableData.find(row => row['Territory'] === this.id)['Number of Direct Connections'];
	      border_color = colorDarktionary[value];
	    } else if (centralityMenu.value === "eigenvector") {
	      border_color = tableData.find(row => row['Territory'] === this.id)['Eigenvector Border Color'];
	    } else if (centralityMenu.value === "betweenness") {
	      border_color = tableData.find(row => row['Territory'] === this.id)['Betweenness Border Color'];
	    } else if (centralityMenu.value === "closeness") {
	      border_color = tableData.find(row => row['Territory'] === this.id)['Closeness Border Color'];
	    } else if (centralityMenu.value === "capConnections") {
	      let value = tableData.find(row => row['Territory'] === this.id)['Number of Cap Connections'];
	      border_color = colorDarktionary[Math.min(value, 12)];
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
	var coordinates = tableData.find(function (row) {
	  return row["Territory"] === pathId;
	});

      // Get coordinates from CSV data
      var x = coordinates["Pixel Pair 1"];
      var y = coordinates["Pixel Pair 2"];

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



function runSeventyFunction() {
    findOptimalPath(tableData, selfColor, runOrigin, pathArray, forcePath);
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

function button_AssignOwnership() {
  assignOwnershipFunction();
}

function button_AssignTroops() {
  assignTroopsFunction();
}

function button_runOrigin() {
  runOriginFunction();
}

function button_clearRunOrigin() {
  clearRunOrigin();
}

function button_runSeventy() {
  runSeventyFunction();
}

function button_forcePath() {
  forcePathFunction();
}

function button_clearForcePath() {
  clearForcePathFunction();
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
  const assignOwnershipClick = function () {
    shouldReturn = true;
  };
  const assignTroopsClick = function () {
    shouldReturn = true;
  };
  const runOriginButtonClick = function () {
    shouldReturn = true;
  };
  const forcePathButtonClick = function () {
    shouldReturn = true;
  };
  const clearForcePathButtonClick = function () {
    shouldReturn = true;
  };
	
  document.getElementById("blizzardButton").addEventListener("click", blizzardButtonClick);
  document.getElementById("portalButton").addEventListener("click", portalButtonClick);
  document.getElementById("eraserButton").addEventListener("click", eraserButtonClick);
  document.getElementById("stopButton").addEventListener("click", stopButtonClick);
  document.getElementById("assignOwnership").addEventListener("click", assignOwnershipClick);
  document.getElementById("assignTroops").addEventListener("click", assignTroopsClick);
  document.getElementById("runOriginButton").addEventListener("click", runOriginButtonClick);
  document.getElementById("clearForcePathButton").addEventListener("click", clearForcePathButtonClick);

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
	        let value = tableData.find(row => row['Territory'] === this.id)['Number of Direct Connections'];
	        border_color = colorDarktionary[value];
	      } else if (centralityMenu.value === "eigenvector") {
	        border_color = tableData.find(row => row['Territory'] === this.id)['Eigenvector Border Color'];
	      } else if (centralityMenu.value === "betweenness") {
	        border_color = tableData.find(row => row['Territory'] === this.id)['Betweenness Border Color'];
	      } else if (centralityMenu.value === "closeness") {
	        border_color = tableData.find(row => row['Territory'] === this.id)['Closeness Border Color'];
	      } else if (centralityMenu.value === "capConnections") {
	        let value = tableData.find(row => row['Territory'] === this.id)['Number of Cap Connections'];
	        border_color = colorDarktionary[Math.min(value, 12)];
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
  var coordinates = tableData.find(function (row) {
    return row["Territory"] === clickedPathId;
  });

  // Get coordinates from CSV data
  var x = coordinates["Pixel Pair 1"];
  var y = coordinates["Pixel Pair 2"];

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
