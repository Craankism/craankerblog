//home
document.getElementById("home").onclick = function () {
    window.location.href = "/craankersite";
}
//aboutMe
document.getElementById("aboutMe").onclick = function () {
    window.location.href = "/craankersite/about-me";
};
//projects subMenu
<<<<<<< HEAD
//myPage
document.getElementById("myPage").onclick = function () {
    window.location.href = "/projects/myPage/index.html"
}
//sorter
document.getElementById("sorter").onclick = function () {
    window.location.href = "/projects/sorter/index.html"
}
=======
//staticWebsite
document.getElementById("staticWebsite").onclick = function () {
    window.location.href = "/craankersite/projects/static-website"
};
>>>>>>> 63b8800424a173b41420d61fac6f788b26aaaffc

//dropdownMenu
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
//submenuDropdown
function toggleSubmenu(event) {
    event.stopPropagation();
    document.getElementById("submenuDropdown").classList.toggle("show")
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}