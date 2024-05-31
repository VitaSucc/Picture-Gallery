const totalImages = 6

function changeImage(offset) {
    console.log("moving to previous image")

    let currentImage = getIndexOfCurrentImage()

    setImage(currentImage + offset)
}

function setImage(imageNumber) {
    const images = document.getElementsByClassName("image")
    const imageList = Array.from(images)

    for (let index = 0; index < imageList.length; index++) {
        const image = imageList[index]

        const isCurrent = image.dataset.current === "true"

        if (isCurrent) {
            image.dataset.current = false
        }

        if (index === imageNumber) {
            image.dataset.current = true
        }
    }
}

function getIndexOfCurrentImage() {
    let currentImage

    const images = document.getElementsByClassName("image")
    const imageList = Array.from(images)

    for (let index = 0; index < imageList.length; index++) {
        const image = imageList[index];

        const isCurrent = image.dataset.current === "true"

        if (isCurrent) {
            console.log("Found display image")
            console.log(image)

            currentImage = index
            break
        }
    }

    return currentImage
}

const firstButton = document.getElementById("first-button")
const previousButton = document.getElementById("previous-button")
const nextButton = document.getElementById("next-button")
const lastButton = document.getElementById("last-button")

function funcName(parmeter1, parmeter2) {}
(parmeter1, parmeter2) => {}

firstButton.addEventListener("click", () => { setImage(0) })
previousButton.addEventListener("click", () => { changeImage(-1) })
nextButton.addEventListener("click", () => { changeImage(1) })
lastButton.addEventListener("click", () => { setImage(totalImages - 1) })