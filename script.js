const tabsBox = document.querySelector(".tabs-box"),
allTabs = document.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".angelicons i");

let isDragging = false;

const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

arrowIcons.forEach(angelicons => {
    angelicons.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        tabsBox.scrollLeft += angelicons.id === "left" ? -1000 : 1000;
        setTimeout(() => handleIcons(), 50); // calling handleIcons after 50 millseconds
    });
});
allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // removing active class from the previous tab & adding to current clicked tab
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging")
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging")
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);















































