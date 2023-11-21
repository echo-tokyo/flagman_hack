new Swiper('.swiper-container', {
    spaceBetween: 500,
    slidesPerPage: 1,
})

let data = localStorage.getItem('msgList')
let msgList = []

if (data !== "" && data !== null) {
    msgList = JSON.parse(data)
}

for (const msg of msgList) {
    createNewMsg(msg)
    createNewElement(msg)
}

let existingData = localStorage.getItem('newInfo')
let existingObject = []

if (existingData !== "" && existingData !== null) {
    existingObject = JSON.parse(existingData)
}

function createNewMsg(obj) {
    let container = document.querySelector('.swiper-slide')

    let div = document.createElement('div')
    div.classList.add('item')
    let div2 = document.createElement('div')
    div2.classList.add('item-text')
    let p = document.createElement('p')
    p.innerHTML = obj.name
    let p2 = document.createElement('p')
    p2.innerHTML = obj.sum
    let img = document.createElement('img')
    img.setAttribute('src', 'images/burger-menu-svgrepo-com 1.svg')
    img.classList.add('img')

    container.append(div)
    div.append(div2)
    div2.append(p)
    div2.append(p2)
    div.append(img)
}

function createNewElement(obj) {
    let lastSlide = document.querySelector('.swiper-wrapper').lastElementChild

    let div = document.createElement('div')
    div.classList.add('item')
    let div2 = document.createElement('div')
    div2.classList.add('item-text')
    let p = document.createElement('p')
    p.innerHTML = obj.name
    let p2 = document.createElement('p')
    p2.innerHTML = obj.sum
    let img = document.createElement('img')
    img.setAttribute('src', 'images/burger-menu-svgrepo-com 1.svg')
    img.classList.add('img')


    lastSlide.appendChild(div)
    div.appendChild(div2)
    div2.appendChild(p)
    div2.appendChild(p2)
    div.appendChild(img)
}

function createNewElementAndSlide(obj) {
    let container = document.querySelector('.swiper-wrapper')

    let newSlide = document.createElement('div')
    newSlide.classList.add('swiper-slide')
    let div = document.createElement('div')
    div.classList.add('item')
    let div2 = document.createElement('div')
    div2.classList.add('item-text')
    let p = document.createElement('p')
    p.innerHTML = obj.name
    let p2 = document.createElement('p')
    p2.innerHTML = obj.sum
    let img = document.createElement('img')
    img.setAttribute('src', 'images/burger-menu-svgrepo-com 1.svg')
    img.classList.add('img')

    container.appendChild(newSlide)
    newSlide.appendChild(div)
    div.appendChild(div2)
    div2.appendChild(p)
    div2.appendChild(p2)
    div.appendChild(img)
}

document.getElementById('add-msg-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let consumptionName = document.getElementById('consumptionName').value
    let consumptionSum = document.getElementById('consumptionSum').value

    let msgObj = {
        name: consumptionName,
        sum: consumptionSum
    }

    let lastSlide = document.querySelector('.swiper-wrapper').lastElementChild
    let numLastElems = lastSlide.childElementCount

    let slide = document.querySelector('.swiper-slide')
    let numElem = slide.childElementCount

    if (numElem < 4) {
        msgList.push(msgObj)
        createNewMsg(msgObj)
        localStorage.setItem('msgList', JSON.stringify(msgList))
    } else {
        if (numLastElems < 4) {
            existingObject.push(msgObj)
            createNewElement(msgObj)
            localStorage.setItem('newInfo', JSON.stringify(existingObject))
        } else {
            existingObject.push(msgObj)
            createNewElementAndSlide(msgObj)
            localStorage.setItem('newInfo', JSON.stringify(existingObject))
        }
    }
})

function test2() {
    const whiteImgs = document.querySelectorAll('.img')
    
    whiteImgs.forEach(img => {
        img.addEventListener('click', function (event) {
            let container = event.target.parentNode
    
            let div = document.createElement('div')
            div.classList.add('menu')
            let div2 = document.createElement('div')
            div2.classList.add('menu-text')
            let p = document.createElement('p')
            p.innerHTML = '20.20.2002'
            let p2 = document.createElement('p')
            p2.innerHTML = 'Категория'
            let img = document.createElement('img')
            img.classList.add('blackImg')
            img.setAttribute('src', 'images/burger-menu-svgrepo-com.svg')
    
            container.appendChild(div)
            div.appendChild(div2)
            div2.appendChild(p)
            div2.appendChild(p2)
            div.appendChild(img)
    
            event.target.parentNode.removeChild(event.target)
            test()
        })
    })
}

test2()

function test(){
    const blackImgs = document.querySelectorAll('.blackImg')
    
    blackImgs.forEach(img => {
        img.addEventListener('click', function (event) {
            
            let container = event.target.parentNode
            let item = container.parentNode
            item.removeChild(document.querySelector('.menu'))
    
            let img = document.createElement('img')
            img.classList.add('img')
            img.setAttribute('src', 'images/burger-menu-svgrepo-com 1.svg')
    
            item.appendChild(img)  
    
            event.target.parentNode.removeChild(event.target)

            test2()
        })
    })
}