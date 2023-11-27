const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')

radio1.onclick = function(){
    radio2.checked = false
}
radio2.onclick = function(){
    radio1.checked = false
}

let data = localStorage.getItem('msgList')
let msgList = []

if (data !== "" && data !== null) {
    msgList = JSON.parse(data)
}

for (const msg of msgList) {
    createNewMsg(msg)
}

function createNewMsg(obj) {
    let container = document.querySelector('.swiper-slide')

    let item = document.createElement('div')
    item.classList.add('item')
    item.classList.add(obj.colour)
    let itemText = document.createElement('div')
    itemText.classList.add('item-text')
    let p = document.createElement('p')
    p.innerHTML = obj.name
    let p2 = document.createElement('p')
    p2.innerHTML = parseInt(obj.sum).toLocaleString('en-US')
    let menu = document.createElement('div')
    menu.classList.add('menu')
    menu.classList.add('hidden')
    let menuText = document.createElement('div')
    menuText.classList.add('menu-text')
    let p3 = document.createElement('p')
    p3.innerHTML = obj.date
    let p4 = document.createElement('p')
    p4.innerHTML = obj.category
    if (p4.innerHTML == ''){
        p4.innerHTML = 'Категория'
    }
    let svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.setAttribute('viewBox', '0 0 33 26')
    svg.classList.add('blackSvg')
    let path = document.createElementNS('http://www.w3.org/2000/svg','path')
    path.style.pointerEvents = 'none'
    path.setAttribute('d', 'M0.0856018 25.5V21.3333H32.6514V25.5H0.0856018ZM0.0856018 15.0833V10.9167H32.6514V15.0833H0.0856018ZM0.0856018 4.66667V0.5H32.6514V4.66667H0.0856018Z')

    let svg2 = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg2.setAttribute('viewBox', '0 0 33 26')
    svg2.classList.add('whiteSvg')
    let path2 = document.createElementNS('http://www.w3.org/2000/svg','path')
    path2.style.pointerEvents = 'none'
    path2.setAttribute('d', 'M0.0856018 25.5V21.3333H32.6514V25.5H0.0856018ZM0.0856018 15.0833V10.9167H32.6514V15.0833H0.0856018ZM0.0856018 4.66667V0.5H32.6514V4.66667H0.0856018Z')
    
    container.appendChild(item)
    item.appendChild(itemText)
    itemText.appendChild(p)
    itemText.appendChild(p2)
    item.appendChild(menu)
    menu.appendChild(menuText)
    menuText.appendChild(p3)
    menuText.appendChild(p4)
    menu.appendChild(svg)
    svg.appendChild(path)
    item.appendChild(svg2)
    svg2.appendChild(path2)
}

document.getElementById('add-msg-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let consumptionName = document.getElementById('consumptionName').value
    let consumptionSum = document.getElementById('consumptionSum').value
    let category = document.getElementById('category').value
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var formattedDate = day + "." + month + "." + year;
    let colour
    if(radio1.checked){
        colour = 'itemRed'
    }else if(radio2.checked){
        colour = 'itemGreen'
    }
    
    let msgObj = {
        name: consumptionName,
        sum: consumptionSum,
        category: category,
        colour: colour,
        date: formattedDate
    }
    createNewMsg(msgObj)
    msgList.push(msgObj)
    localStorage.setItem('msgList', JSON.stringify(msgList))
    window.location.reload()
})

let allWhiteSvgs = document.querySelectorAll('.whiteSvg')
allWhiteSvgs.forEach(svg => {
    svg.addEventListener('click', function (event) {
        let svg = event.target
        let container = svg.parentNode
        let menu = container.children[1]
        
        menu.classList.remove('hidden')
        svg.classList.add('hidden')        
    })
})

let allBlackSvgs = document.querySelectorAll('.blackSvg')
allBlackSvgs.forEach(svg => {
    svg.addEventListener('click', function (event) {
        let svg = event.target
        let menu = svg.parentNode
        let container = menu.parentNode
        let svg2 = container.children[2]
        
        menu.classList.add('hidden')      
        svg2.classList.remove('hidden')
    })
})

let clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', (event) => {
    event.preventDefault
    localStorage.clear()
    window.location.reload()
})

if (localStorage.length > 0){
    clearBtn.innerText = 'Очистить'
}