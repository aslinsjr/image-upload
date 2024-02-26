const inputFiles = document.querySelector("#input-file");

inputFiles.addEventListener("change", (e) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(e.target.files[0]);

    fileReader.addEventListener("load", () => {
        const url = fileReader.result

        localStorage.setItem("image", url)
    })
})

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const url = localStorage.getItem("image")

    const showInage = document.querySelector("#show-image");

    showInage.src = url

    localStorage.clear()
})