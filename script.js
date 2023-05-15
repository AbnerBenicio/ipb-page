const bars = document.querySelector(".bars")
const sidebar = document.querySelector(".sidebar")

bars.addEventListener ("click", () => {
    sidebar.classList.add("ativo")
})