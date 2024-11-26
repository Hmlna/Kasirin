/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav layout-menu").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav layout-menu").style.width = "0";
  }

  // Add toggle functionality for menu items with submenus
document.querySelectorAll('.menu-item > .menu-link.menu-toggle').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      const parentItem = this.parentElement; // Get parent <li> element
      parentItem.classList.toggle('open'); // Toggle the 'open' class
    });
  });
  
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('mySidenav layout-menu'); // The sidebar element
    const menuToggle = document.querySelector('.menu-toggle'); // The button used to open the sidebar
    const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
  
    if (!isClickInside) {
      closeNav(); // Close the sidebar if the click is outside the sidebar or menu toggle
    }
  });

  // Initialize the counter
let counter = 1;

// Select the elements
const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

// Event listeners for buttons
increaseBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  if (counter>=2){

    counter--;
    updateCounter();
  }
});

// Update the counter display
function updateCounter() {
  counterElement.textContent = counter;
}