function showMenu() {
    let menuTarget = document.getElementById("menuIcon");
    let menuContainer = document.getElementById("navMenu");
    let exitMenu = document.getElementById("exitIcon");

    menuTarget.addEventListener("click", () => {
        menuContainer.style.display = "block";
    });

    exitMenu.addEventListener("click", () => {
        menuContainer.style.display = "none";
    });
}
showMenu();
