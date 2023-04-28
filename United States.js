
// Get the canvas and context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Load the image
const img = new Image();
img.src = 'https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/United%20States.png';
img.onload = () => {
  // Draw the image on the canvas
  ctx.drawImage(img, 0, 0);

  // Get all the area elements
  const areas = document.querySelectorAll('area');

  // Add an event listener to each area element
  areas.forEach(area => {
    area.addEventListener('mouseenter', event => {
      // Prevent the default action
      event.preventDefault();

      // Get the alt attribute of the hovered area
      const alt = area.getAttribute('alt');

      // Find the corresponding path element and set its fill to #f5e1c8
      const path = document.querySelector(`path[title="${alt}"]`);
      if (path && path.getAttribute('fill') !== 'white') {
        path.setAttribute('fill', '#f5e1c8');
      }
    });

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
