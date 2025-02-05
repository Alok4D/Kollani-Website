function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function hideSidebar(){
     const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'

    const navLinks = document.querySelectorAll('header nav ul a');
    if(navLinks){
        console.log(navLinks);
        navLinks.forEach(links => {
            links.classList.remove('active');
             document.querySelector('header nav ul li > a').classList.add('active');
        })
    }
}




// 4th time header design
// function hideSidebar(){
//     const navbar = document.querySelector('.navbar');
//     navbar.style.display = 'none'
// }