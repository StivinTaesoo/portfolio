function showMenu() {
    let menuTarget = document.getElementById("menuIcon");
    let menuContainer = document.getElementById("navMenu");
    let exitMenu = document.getElementById("exitIcon");

    menuTarget.addEventListener("click", () => {
        menuContainer.style.right = "0";
    });

    exitMenu.addEventListener("click", () => {
        menuContainer.style.right = "-300px";
    });
}
showMenu();
