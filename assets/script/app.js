function openForm() {
    document.querySelector(".order").style.display = "block";
}

function closeForm() {
    document.querySelector(".order").style.display = "none";
}

function scrollView() {
    const mainRoot = document.getElementById("ozon");
    mainRoot.scrollIntoView({ behavior: "smooth" });
}