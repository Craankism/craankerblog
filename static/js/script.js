//home
document.getElementById("home").onclick = function () {
    window.location.href = "craankersite/index.html";
}
//aboutMe
document.getElementById("aboutMe").onclick = function () {
    window.location.href = "craankersite/aboutMe/index.html";
};
//projects subMenu
//myPage
document.getElementById("myPage").onclick = function () {
    window.location.href = "craankersite/projects/myPage/index.html"
}

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