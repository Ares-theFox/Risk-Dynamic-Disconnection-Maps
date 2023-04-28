
// Get the canvas and context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Load the image
const img = new Image();
img.src = 'https://ares-thefox.github.io/Risk-Dynamic-Disconnection-Maps/United%20States.png';
img.onload = () => {
  // Draw the image on the canvas
  ctx.drawImage(img, 0, 0);

  // Get all the area elements
  const areas = document.querySelectorAll('area');

  // Add an event listener to each area element
  areas.forEach(area => {
    area.addEventListener('click', event => {
      // Prevent the default action
      event.preventDefault();

      // Get the alt attribute of the clicked area
      const alt = area.getAttribute('alt');

      // Find the corresponding path element and set its fill to white
      const path = document.querySelector(`path[title="${alt}"]`);
      if (path) {
        path.setAttribute('fill', 'white');
      }
    });
  });
};
