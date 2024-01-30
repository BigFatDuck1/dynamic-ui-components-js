
document.querySelector(".dropdown_button").addEventListener("click", () => {
    let all_classes = document.querySelector(".dropdown_ul").classList;

    if (all_classes.contains("dropdown_ul_show")) {
        document.querySelector(".dropdown_ul").classList.remove("dropdown_ul_show");
    }
    else {
        document.querySelector(".dropdown_ul").classList.add("dropdown_ul_show");
    }
})