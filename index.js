const canvas = document.querySelector('.canvas')

const goButtonEl = document.querySelector('.goButton')

const resetButtonEl = document.querySelector('.resetButton')

const canvasWidth = canvas.clientWidth;

const canvasHeight = canvas.clientHeight;

const rectArrayWidth = []

const rectArrayHeight = []

const colorArray = ['red', 'blue', 'yellow', 'white', 'white', 'white', 'white', 'white', 'white']

let counter = -1;

const reload = () => {
    location.reload()
}

const makeRectangle = () => {

    console.log(`counter: ${counter}`)

    if (counter == 0) {

    newWidth = Math.floor(Math.random()*canvasWidth)

    newHeight = Math.floor(Math.random()*canvasHeight)

    let rect = document.createElement('div');
    rect.style.width = `${newWidth}px`
    console.log(rect.style.width)
    rect.style.height = `${newHeight}px`
    console.log(rect.style.height)
    rect.style.border = "2px solid black";
    rect.style.backgroundColor = `${colorArray[Math.floor(Math.random()*colorArray.length)]}`

        rectArrayWidth.push(newWidth)
        rectArrayHeight.push(newHeight)
        console.log(rectArrayWidth[0])
        console.log(rectArrayHeight[0])
        return rect;
    
    } else {

        newWidth = Math.floor(Math.random()*canvasWidth)

        newHeight = Math.floor(Math.random()*canvasHeight)
        
        let rect = document.createElement('div');
        rect.style.width = `${newWidth-rectArrayWidth[counter-1]}px`
        console.log(rect.style.width)
        rect.style.height = `${newHeight-rectArrayHeight[counter-1]}px`
        console.log(rect.style.height)
        rect.style.border = "2px solid black";
        rect.style.backgroundColor = `${colorArray[Math.floor(Math.random()*colorArray.length)]}`
        
        rectArrayWidth.push(newWidth)
        rectArrayHeight.push(newHeight)
        console.log(rectArrayWidth[counter])
        console.log(rectArrayHeight[counter])
        return rect;
        
    }


    

}




const insertRectangle = () => {

    counter ++

    console.log(`canvas width:${canvasWidth}px canvas height:${canvasHeight}px`)

    canvas.appendChild(makeRectangle())

    return counter

}


goButtonEl.addEventListener("click", insertRectangle)

resetButtonEl.addEventListener("click", reload)
