//home
document.getElementById("home").onclick = function () {
    window.location.href = "/index.html";
};
//cover letter
document.getElementById("cover_letter").onclick = function () {
    window.location.href = "/cover_letter/index.html";
};
//cv (Lebenslauf)
document.getElementById("cv").onclick = function () {
    window.location.href = "/cv/index.html";
};
//qualifications
document.getElementById("qualifications").onclick = function () {
    window.location.href = "/qualifications/index.html";
};

//dropdown menu
function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}