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
  