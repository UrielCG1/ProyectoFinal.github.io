/*const menuIcon = document.querySelector('.menu-icon');
const enlaces = document.querySelector('.enlaces');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.enlaces.style.display = (navbar.enlaces.style.display === 'flex') ? 'none ' : 'none';
});
*/
/*const menuIcon = document.getElementById('menu-icon');
const enlaces = document.getElementById('enlaces');

menuIcon.addEventListener('click', () => {
    enlaces.style.display = (enlaces.style.display === 'flex') ? 'none' : 'column';
});*/


function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'flex';
  setTimeout(() => {
      sidebar.style.transform = 'translateX(0)'; 
  }, 10);
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform = 'translateX(100%)'; 
  setTimeout(() => {
      sidebar.style.display = 'none';
  }, 300);
}