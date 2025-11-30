document.addEventListener("DOMContentLoaded", () => {

    const sort = document.getElementById("sortSelect");

    sort.addEventListener("change", () => {
        alert("Sorting: " + sort.value);
    });

});
document.querySelectorAll(".filter-box.collapsible").forEach(box => {
    
    let header = box.querySelector(".filter-header");

    header.addEventListener("click", () => {
        box.classList.toggle("collapsed");
    });

});
