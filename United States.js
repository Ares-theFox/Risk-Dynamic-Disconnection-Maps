
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
