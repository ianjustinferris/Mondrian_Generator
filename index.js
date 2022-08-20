const canvas = document.querySelector('.canvas')

const goButtonEl = document.querySelector('.goButton')

const canvasWidth = canvas.clientWidth;

const canvasHeight = canvas.clientHeight;

const rectArray = []

let counter = 0;

const makeRectangle = () => {




    let rect = document.createElement('div');
    rect.style.width = `${Math.floor(Math.random()*canvasWidth)}px`
    console.log(rect.style.width)
    rect.style.height = `${Math.floor(Math.random()*canvasHeight)}px`
    console.log(rect.style.height)
    rect.style.border = "2px solid black";

        return rect;
        



}




const insertRectangle = () => {

    // console.log(canvasWidth, canvasHeight)

    canvas.appendChild(makeRectangle())

}


goButtonEl.addEventListener("click", insertRectangle)
