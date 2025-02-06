document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a.navlink");

    const updateActiveLink = () => {
      const currentHash = window.location.hash || "#home";

      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === currentHash);
      });
    };

    updateActiveLink();

    links.forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(updateActiveLink, 50);
      });
    });

    window.addEventListener("hashchange", updateActiveLink);
  });

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function hideSidebar(){
     const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'

}